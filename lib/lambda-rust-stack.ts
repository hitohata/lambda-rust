import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from "aws-cdk-lib/aws-apigateway"
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs"

export class LambdaRustStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new NodejsFunction(this, "node-lambda", {
      entry: "lambda/ts/src/index.ts",
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_18_X,
    });

    fn.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    new apigw.LambdaRestApi(this, "api", {
      handler: fn,
    })
  }
}
