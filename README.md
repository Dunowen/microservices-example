# Microservices example

This repository shows how to connect different microservices built with different technologies together. The example uses Docker Compose to start the containers locally and also a configuration to deploy them to a Kubernetes cluster.

# Commands

## Starting Docker Compose with the local development setup
You can run all the containers locally in dev mode. Changes made to any of the services are being watched and will be applied immediately.

>`docker compose -f docker-compose-dev.yml up --build`

The frontend application can be started independently with yarn/npm, outside of the containers. All the API requests will be forwarded into the containers.

## Starting Docker Compose with the production setup
Starting the containers in production mode will not listen to any changes made to the source code, it will build and start the containers with the state they are in at the moment of running the command.

>`docker compose -f docker-compose.yml up --build`


# Using Kubernetes with Docker Desktop
If you have Docker installed on your machine, it already comes with a built-in kubernetes cluster. The repository was made by using this cluster for local testing purposes.

## Setting up the Kubernetes Dashboard and logging in to it
The Kubernetes Dashboard is not enabled by default and needs some configuration to access it. You can find [here][dashboard-config] how to configure your local cluster and access the Dashboard.

Alternatively you can follow these bulletpoints to achieve the same result:
- Deploy the Kubernetes Dashboard by running this command
  - >`kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.1/aio/deploy/recommended.yaml`
- Apply the `service-account.yaml` file in the `k8s` folder with the following command to create a service account called `admin-user` and grant admin rights to it
  - >`kubectl apply -f service-account.yaml`
- Generate a Bearer token for the admin user that can be used to access the Dashboard by running the following command and copying the output:
  - >`kubectl -n kubernetes-dashboard create token admin-user`
- Start the Dashboard by running this command in a separate command prompt
  - >`kubectl proxy`
- Use the generated token to log in to the Dashboard

The dashboard can be accessed here:

http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/

## Troubleshooting
In some cases the Kubernetes cluster cannot be reached, due to a misconfiguration. If you see the following error message

>`Unable to connect to the server: dial tcp: lookup kubernetes.docker.internal: no such host`

then modify your `hosts` file (`C:\Windows\System32\drivers\etc`) to contain this line:

>`127.0.0.1 kubernetes.docker.internal`


[dashboard-config]: https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/#accessing-the-dashboard-ui
