#!/bin/bash
# Deployment script for Billing Billo On-Call

# Build the project
echo "Building the project..."
npm run build

# Deploy using Wix Serverless CLI
echo "Deploying the application..."
npx @wix/serverless-cli deploy

echo "Deployment completed successfully!"
