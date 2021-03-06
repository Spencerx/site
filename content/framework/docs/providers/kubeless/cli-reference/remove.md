---
title: 'Serverless Framework Commands - Kubeless - Remove'
menuText: remove
menuOrder: 6
description: 'Remove a deployed Service and all of its Kubeless Functions and Kubernetes Deployments and Services.'
layout: Doc
gitLink: /docs/providers/kubeless/cli-reference/remove.md
---

# Kubeless - Remove

The `sls remove` command will remove the deployed service, defined in your current working directory, from the provider.

```bash
serverless remove
```

It will remove the Kubeless Function objects from your Kubernetes cluster, the Kubernetes Deployments and the Kubernetes Services associated with the Serverless service.

## Options
- `--verbose` or `-v` Shows additional information during the removal.

## Provided lifecycle events
- `remove:remove`
