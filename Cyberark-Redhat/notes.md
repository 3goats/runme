This is the Access to the OpenShift EMEA Cluster:
Username: carl
Password: Cyberark1

URL: https://console-openshift-console.apps.emeacluster.emea-devops-lab.cybr/

Need to whitelist your access, with your public key and public IP Address.

Bastion Host: 18.133.218.76
Username: ubuntu 

```sh
# make sure the following is in local ~/.ssh/config file

vi ~/.ssh/config

Host bastion-host
  HostName 18.133.218.76 
  User ubuntu
```

```sh
# This needs to be added to local /etc/hosts
127.0.0.1 oauth-openshift.apps.emeacluster.emea-devops-lab.cybr console-openshift-console.apps.emeacluster.emea-devops-lab.cybr api.emeacluster.emea-devops-lab.cybr downloads-openshift-console.apps.emeacluster.emea-devops-lab.cybr default-route-openshift-image-registry.apps.emeacluster.emea-devops-lab.cybr
```

```sh
# Create SSH tunnel - Must be root on local machine 
ssh -L 443:console-openshift-console.apps.emeacluster.emea-devops-lab.cybr:443 -L 6443:api.emeacluster.emea-devops-lab.cybr:6443 bastion-host
```

```sh
#use this to login to cluster
oc login --token=sha256~9M1jLEzJI4GyUNgJwqRN2JBLm76nqRpu2Ev_GBsUq_s --server=https://api.emeacluster.emea-devops-lab.cybr:6443
```