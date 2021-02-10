const { Schema } = require('mongoose');
const { Validator } = require('node-input-validator');

const recipeSchema = {
    recipe_title: 'required|minLength:4',
    category: 'required',
    preparation_time: 'required',
    people: 'required',
    short_descrption: 'required|maxLength:40',
    recipe: 'required|maxLength:200',
    user: 'required|object',
    'user.first_name': 'required|string',
    'user.last_name': 'required|string'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = v.check();
    if(!e) {
        throw v.errors;
    }
};

module.exports = {
    recipeSchema,
    validate
};