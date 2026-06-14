#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { EcsFargateStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
new EcsFargateStack(
  app,
  'EcsFargateStack',
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: 'ap-southeast-1'
    }
  }
);
