const userModel = require('../../../pkg/users');
const usersValidator = require('../../../pkg/users/validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cfg = require('../../../pkg/config');
const strings = require('../../../pkg/strings');

const create = async (req, res) => {
    // User validation
    try {
        await usersValidator.validate(req.body, usersValidator.registrationSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    // Check for user in DB
    try {
        let ru = await userModel.getOneByEmail(req.body.email);
        if (ru) {
            return res.status(409).send('Conflict');
        }
    } catch (err) {
        console.log(err);
        return status(500).send('Internal Server Error');
    }
    // Hashing password
    req.body.password = bcrypt.hashSync(req.body.password);
    // Default Settings
    req.body.active = true;
    req.body._created = new Date();
    // Save user
    try {
        let u = await userModel.create(req.body);
        res.status(201).send(u);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
    // User Validation
    try {
        await usersValidator.validate(req.body, usersValidator.loginSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Request')
    }
    // Get User
    try {
        let ru = await userModel.getForLogin(req.body.email);
        if (!ru) {
            return res.status(403).send('Forbidden');
        }
        if (bcrypt.compareSync(req.body.password, ru.password)) {
            let payload = {
                uid: ru._id,
                first_name: ru.first_name,
                last_name: ru.last_name,
                email: ru.email,
                exp: (new Date().getTime() + (365 * 24 * 60 * 60 * 1000)) / 1000
            };
            let key = cfg.get('security').jwt_key;
            let token = jwt.sign(payload, key);
            return res.status(200).send({user:ru, jwt:token});
        }
        return res.status(401).send('Unauthorized');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    create,
    login
};