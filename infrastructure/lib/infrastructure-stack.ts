import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as ecr from 'aws-cdk-lib/aws-ecr';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class EcsFargateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'Vpc', {
      maxAzs: 2
    })


    // ecs
    const repository = ecr.Repository.fromRepositoryName(
      this,
      'Repository',
      'ecs-fargate-cli-lab'
    );

    const cluster = new ecs.Cluster(this,
      'Cluster', { vpc }
    )

    const service =
      new ecsPatterns.ApplicationLoadBalancedFargateService(
        this,
        'FargateService',
        {
          cluster,

          cpu: 256,

          memoryLimitMiB: 512,

          desiredCount: 1,

          publicLoadBalancer: true,

          taskImageOptions: {
            image: ecs.ContainerImage.fromEcrRepository(
              repository,
              'latest'
            ),

            containerPort: 8080
          },

          circuitBreaker: {
            rollback: true
          },

          minHealthyPercent: 50,
          maxHealthyPercent: 200
        }
      );

    service.targetGroup.configureHealthCheck({
      path: '/',
      healthyHttpCodes: '200'
    });


    new cdk.CfnOutput(this, 'LoadBalancerURL', {
      value:
        'http://' +
        service.loadBalancer.loadBalancerDnsName
    });
  }
}
