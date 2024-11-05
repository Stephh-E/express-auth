# express-auth
express js auth with mongo js


## Models
- User model
    - username
    - password
    - roles by ID
- Role model
    - name

## Routes
- localhost:/3000/signup
    - POST
    - username, password
    - create a new user
    - returns a JWT
- localhost:/3000/login
    - POST
    - username, password
    - checks provided data against database
    - returns a JWT
- localhost:3000/users/:userID
    - rewuires a valid JWT
    - gets one user and returns it
- localhost:3000/users/refresh
    - POST
    - require a valid JWT header
    - checks a JWT and provides a new one if its;s valid
    - returns a JWT
