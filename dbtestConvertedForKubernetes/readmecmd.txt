minikube start --vm-driver hyperv --hyperv-virtual-switch ExternalSwitch --mount --mount-string=
"C:\data:/mnt/data"

kubectl apply -f .\database-persistentVolume.yaml
kubectl apply -f dbtest-deploymentAndSvc.yaml
kubectl apply -f spring-test-DeploymentAndService