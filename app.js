const express = require('express');

const customer = require("./routes/customer");
const item = require("./routes/item");
const user = require("./routes/user");
const order = require("./routes/order");
const orderDetails = require("./routes/orderDetails");

const app =express();
const PORT = 4000;

app.use(express.json())


app.use('/users', user)
app.use('/customer', customer)
app.use('/items', item)
app.use('/orders', order)
app.use('/orderDetail', orderDetails)

app.listen(PORT, () => {
    console.log(`App is Starting on PORT = ${PORT}`);
})

