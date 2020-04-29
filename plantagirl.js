const express = require('express')
const bodyParser = require ('body-parser')
const nodeMailer = require('nodemailer')
const dotenv = require('dotenv')
let app =  express();
dotenv.config();

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
   res.sendFile("PlantagirlHome.html", {root: __dirname});
});

app.listen(process.env.PORT, function() {
	console.log("Port opening" + process.env.PORT);
})
