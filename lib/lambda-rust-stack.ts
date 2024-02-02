import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as path from "path";


export class LambdaRustStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const fn = new lambda.Function(this, "RustFunction", {
            runtime: lambda.Runtime.PROVIDED_AL2,
            handler: "rust.handler",
            code: lambda.Code.fromAsset(path.join(__dirname, "../lambda/rust/target/lambda/rust/bootstrap.zip")),
        });

        new apigw.LambdaRestApi(this, "api", {
            handler: fn
        })
    }
}