const express = require('express')
const request = require('request')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

//  DAPR config

const daprPort = process.env.DAPR_HTTP_PORT || 3500;
const daprUrl = `http://localhost:${daprPort}/v1.0`;
const pubsubName = 'orders-pubsub';


app.get('/', (req, res) => {
  res.send('Hello World from App1!')
})

app.post('/orders-pubsub', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

app.post('/publish', (req, res) => {
    console.log("Publishing: ", req.body);
    const publishUrl = `${daprUrl}/bindings/${pubsubName}`;
    request( { uri: publishUrl, method: 'POST', json: req.body } );
    res.sendStatus(200);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})