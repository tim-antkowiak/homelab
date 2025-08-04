# homelab

## Non Automatic Adjustments

```
kubectl create secret generic cloudflare-api-token-secret --from-literal=api-token=YOUR_CLOUDFLARE_API_TOKEN -n cert-manager
```
