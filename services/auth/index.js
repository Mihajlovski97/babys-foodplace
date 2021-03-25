const cfg = require('../../pkg/config');
require('../../pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const cors = require('cors')


const auth = require('./handlers/auth');

const api = express();


api.use(cors());


api.use(bodyParser.json());
api.use(jwt({
    secret: cfg.get('security').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url: '/api/v1/auth', methods: ['POST'] },
        { url: '/api/v1/auth/login', methods: ['POST'] }
    ]
}));

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad JWT');
    }
});

// Creat user acc URL
api.post('/api/v1/auth', auth.create);
// User login URL
api.post('/api/v1/auth/login', auth.login);
// Update user
api.put('/api/v1/auth/:uid', auth.updateUser);

api.listen(cfg.get('services').auth.port, err => {
    if (err) {
        return console.error('Could not start server: ', err);
    }
    console.log('Server successfully started on port: ', cfg.get('services').auth.port);
});