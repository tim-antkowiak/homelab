# homelab

## Non Automatic Adjustments

```
kubectl create secret generic cloudflare-api-token-secret --from-literal=api-token=YOUR_CLOUDFLARE_API_TOKEN -n cert-manager

kubectl create secret generic renovate-pat --from-literal=RENOVATE_TOKEN=<your-github-token> -n renovate
```

## Usefull commands

### Generate Token for kubernetes-dashboard

```
kubectl -n kubernetes-dashboard create token kubernetes-dashboard-web
```
