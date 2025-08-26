---
runme:
  id: 01HP7J575TFZ65WYPQQ9E9E0G9
  version: v3
---

# Example Markdown

```sh {"name":"helloWorld"}
echo "Hello World"
```

```sh {"name":"get pods"}
kubectl get pod --all-namespaces
```

```sh {"name":"fail"}
exit 1
```

```sh {"name":"set env","promptEnv":"false"}
set FOO "bar fdsfdsgfdfgfd" && echo $FOO
```

```sh {"name":"get env"}
echo $FOO
```

```sh {"name":"print"}
echo "exported FOO=$FOO"
```

```sh {"name":"delete pods"}
kubectl delete pod $(kubectl get pod -n foo -l app=httpbin -o jsonpath={.items..metadata.name}) -n foo
kubectl delete pod $(kubectl get pod -n bar -l app=httpbin -o jsonpath={.items..metadata.name}) -n bar
```

```sh {"name":"carl2"}
kubectl get secret 3goats.acme.com -n venafi -o json | jq -r '.data."tls.crt" | @base64d' | certigo dump
```

```sh {"name":"dir"}
ls -la 
```

```sh {"name":"212"}
212
```

```sh {"name":"get istio secret"}
istioctl pc secret  $(kubectl get pod -n bar -l app=httpbin -o jsonpath={.items..metadata.name}) \
    -n bar -o json | \
    jq -r '.dynamicActiveSecrets[0].secret.tlsCertificate.certificateChain.inlineBytes' | \
    base64 --decode | \
    certigo dump
```

```sh {"name":"hello rachel"}
echo "Hello Rachel"
```

```sh {"name":"get Venaficlusterissuers"}
kubectl get Venaficlusterissuers -n venafi
```
