---
title: Simple HTTP Endpoint
description: This example demonstrates how to setup a simple HTTP GET endpoint.
layout: Doc
platform: Google Cloud
language: Python
framework: "v1"
---
# Simple HTTP example

# Setup

1. Install Serverless with `npm install -g serverless`
2. Install the dependencies `npm install`

# Setting the credentials and project

Update the `credentials` and your `project` property in the `serverless.yml` file.

# Deployment

```
serverless deploy
```

You should see your functions URL endpoint after the deployment

# Invoking

```
curl <the-endpoint-url>
```
