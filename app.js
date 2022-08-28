const express = require('express');

const customer = require("./routes/customer");
const item = require("./routes/item");
const user = require("./routes/user");
const order = require("./routes/order");
const orderDetails = require("./routes/orderDetails");

const app =express();
const PORT = 4000;

app.use(express.json())
