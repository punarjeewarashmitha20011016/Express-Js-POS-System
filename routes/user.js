const express = require('express')
const mysql = require('mysql')
const db = require('../configs/db.config')
const router = express.Router()

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the MYSQL server');
        var userTableQuery = "CREATE TABLE IF NOT EXISTS users (id VARCHAR(255) PRIMARY KEY, name VARCHAR(255), username Varchar(255))"
        connection.query(userTableQuery, function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log('User table created in User Route');
            }
        })
    }
})