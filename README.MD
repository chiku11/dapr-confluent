## Install Confluent for Docker
https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html

# create a topic with defaults
orders

## Install dapr
https://docs.dapr.io/getting-started/install-dapr-cli/

## Initialize dapr
dapr init --slim


## Run app
```
npm i
dapr run --app-id app1 --dapr-http-port 3500 --app-port 3000 --components-path ./components node app.js
```
