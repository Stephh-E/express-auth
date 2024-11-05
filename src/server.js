const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message: "Hello, world 12!"
    });

});

app.post("/signup", async (request, response) => {
    let username = request.body.username;
    let password = request.body.password;

    if (!username || !password) {
        response.status(400).json({
            message: "Incorrect or missing sign-up credentials provided."
        });
    }

    let newUser = await User.create({username: username, password: password});

    let newJWT = generateJWT(newUser.id, newUser.username);

    response.json({
        jwt:newJWT,
        user:{
            id: newUser
        }
    });

});

module.exports = {
    app
}