#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdaTsStack } from '../lib/lambda-ts-stack';
import { LambdaRustStack } from '../lib/lambda-rust-stack';

const app = new cdk.App();
new LambdaTsStack(app, 'LambdaTsStack');
new LambdaRustStack(app, 'LambdaRustStack');