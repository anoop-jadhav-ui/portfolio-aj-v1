//server moved to a different URL

const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
var cors = require('cors')
var bodyParser=require("body-parser");
const serverless = require('serverless-http');


require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  
  app.use(cors({
    corsOptions
  }))
  // Answer API requests.
  app.post('/mail',function (req, res) {
    res.set("Content-Type", "application/json");
    const locals = { userName: req.body.userName };
    const request = mailjet.post("send", { 'version': 'v3.1' }).request({
      "Messages": [
        {
          "From": {
            "Email": req.body.userEmail,
            "Name": req.body.userName
          },
          "To": [
            {
              "Email": "anoopjadhav@gmail.com",
              "Name": "Anoop Jadhav"
            }
          ],
          "Subject": "AJ Portfolio | Feedback",
          "TextPart": "Feedback",
          "HTMLPart": "<h3>FeedBack</h3><p>"+req.body.userMessage+"</p>",
          "CustomID": "portfolio-feedback"
        }
      ]
    })
    request
      .then((result) => {
        console.log('Email Sent')
        res.send({
          msg : 'success'
        });
      })
      .catch((err) => {
        res.send({
          msg : 'fail'
        });
        console.log(err.statusCode)
      })
  });


  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker ' + process.pid}: listening on port ${PORT}`);
  });
}


module.exports.handler = serverless(app);

