const { Schema } = require('mongoose');
const { Validator } = require('node-input-validator');

const registrationSchema = {
    firstName: 'required|minLength:3',
    lastName: 'required|minLength:4',
    email: 'required|email',
    password: 'required',
    birthday: 'required'
};

const loginSchema = {
    email: 'required|email',
    password: 'required'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if(!e) {
        throw v.errors;
    }
};

module.exports = {
    registrationSchema,
    loginSchema,
    validate
};