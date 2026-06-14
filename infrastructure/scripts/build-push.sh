#!/usr/bin/env bash

set -e

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
REGION=ap-southeast-1
REPO_NAME=ecs-fargate-cli-lab

ECR_URI=$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME

echo "Checking ECR repository..."

if ! aws ecr describe-repositories \
    --repository-names $REPO_NAME \
    --region $REGION >/dev/null 2>&1; then

    echo "Creating ECR repository..."

    aws ecr create-repository \
        --repository-name $REPO_NAME \
        --region $REGION
fi

echo "Building Docker image..."
docker build -t $REPO_NAME ../../frontend

echo "Logging in to ECR..."
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ECR_URI

echo "Tagging image..."
docker tag $REPO_NAME:latest $ECR_URI:latest

echo "Pushing image..."
docker push $ECR_URI:latest

echo "DONE: $ECR_URI:latest"
