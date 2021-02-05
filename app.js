//these are the installations 
const express = require('express'); //for routing
const bodyParser = require("body-parser"); //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
const app = express(); //top level function exported by the express module
app.use(bodyParser.json());
const path = require('path'); //created the path module

const db = require("./db"); 
const collection = "Antics"; 