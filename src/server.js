const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message: "Hello, world 12!"
    });

});

module.exports = {
    app
}