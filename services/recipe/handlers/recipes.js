const recipesModel = require('../../../pkg/recipes');
const recipesValidator = require('../../../pkg/recipes/validator');


const save = async (req, res) => {
    // Recipe validataion
    try {
        await recipesValidator.validate(req.body, recipesValidator.recipeSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    // Default settings
    req.body.publish_date = new Date();
    req.body._created = true,
    req.body._deleted = false
    // Save recipe
    try {
        let u = await recipesModel.save(req.body);
        res.status(201).send(u);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
};

const getOne = async (req, res) => {
    try {
        let data = await recipesModel.getOne(req.params.id);
        if (data) {
            return res.status(200).send(data);
        }
        return req.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const getAll = async (req, res) => {
    try {
        let data = await recipesModel.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const getLastest = async (req, res) => {
    try {
        let data = await recipesModel.getLastest();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err) 
            return res.status(500).send('Internal Server Error');        
    };
};

const getByCategory = async (req, res) => {
    try {
        let recipes = await recipesModel.getByCategory(req.query.category);
        if (recipes) {
            return res.status(200).send(recipes);
        } 
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        await recipesValidator.validate(req.body, recipesValidator.recipeSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let updateRecipe = await recipesModel.update(req.params.id, req.body, req.user.uid);
        if (updateRecipe) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const remove = async (req, res) => {
    try {
        let deleteRecipe = await recipesModel.remove(req.params.id, res.user.uid)
        if (deleteRecipe) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    }
};

module.exports = {
    save,
    getOne,
    getAll,
    getLastest,
    getByCategory,
    update,
    remove
};