const cfg = require('../../pkg/config');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const upload = require('express-fileupload');
const cors = require('cors');

const storage = require('./handlers/storage');

const api = express();

api.use(cors());

api.use(bodyParser.json());
api.use(jwt({
    secret: cfg.get('security').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url: /\/api\/v1\/storage\/.*/, methods: ['GET'] }
    ]
}));
api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad JWT');
    }
});
api.use(upload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

api.post('/api/v1/storage', storage.storeFile);
api.get('/api/v1/storage/:fid', storage.getFile);


api.listen(cfg.get('services').storage.port, err => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server succcessfully started on port ${cfg.get('services').storage.port}`)
});