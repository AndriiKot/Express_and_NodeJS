require("dotenv").config();
const express = require("express");
const Article = require("./db.js").Article;
const bodyParser = require("body-parser");
const read = require("node-readability");

const app = express();
const port = process.env.PORT || 8000;
