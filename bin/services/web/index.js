"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .get('/', (req, res) => res.send('¯\\_(ツ)_/¯'))
    .get('/config', (req, res) => res.send(process.env))
    .post('/hooks/telegram', (req, res) => res.send('{}'))
    .listen(port, (err) => {
        if (err)
            throw err;
        console.log(`> web up -> http://localhost:${port}`);
    });
