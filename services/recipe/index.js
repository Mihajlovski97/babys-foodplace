const cfg = require('../../pkg/config');
require('../../pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');

const recipe = require('./handlers/recipes');

const api = express();

api.use(bodyParser.json());
api.use(jwt({
    secret: cfg.get('security').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url: '/api/v1/recipe/new', methods: ['POST'] },
        { url: '/api/v1/recipe/:id', methods: ['GET'] },
        { url: '/api/v1/recipe', methods: ['GET'] },
        { url: '/api/v1/recipe/lastest', methods: ['GET'] },
        { url: '/api/v1/recipe/category/:cat', methods: ['GET'] },
        { url: '/api/v1/recipe/update/:id', methods: ['PUT'] },
        { url: '/api/v1/recipe/delete/:id', methods: ['DELETE'] }
    ]
}));

api.use(function (err, req, res, next){
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad JWT');
    }
});


// Save new recipe
api.post('/api/v1/recipe/new', recipe.save);
// Get one recipe
api.get('/api/v1/recipe/:id', recipe.getOne);
// Get all recipes
api.get('/api/v1/recipe', recipe.getAll);
// Get recipe by publish date (last 3)
api.get('/api/v1/recipe/last-recipes', recipe.getLast3);
// Get recipe by category
api.get('/api/v1/recipe/category/:cat', recipe.getByCategory);
// Update recipe
api.put('/api/v1/recipe/update/:id', recipe.update);
// Delete recipe
api.delete('/api/v1/recipe/delete/:id', recipe.remove)

api.listen(cfg.get('services').recipes.port, err => {
    if (err) {
        return console.error('Could not start server: ', err);
    }
    console.log('Server successfully started on port: ', cfg.get('services').recipes.port);
});