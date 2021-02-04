const usersModel = require('../../../pkg/users');
const usersValidator = require('../../../pkg/users/validator');

const getOne = async (req, res) => {
    try {
        let data = await usersModel.getOne(req.params.id);
        if(data) {
            return status(200).send(data);
        }
        return res.status(404).send('Not Found')
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const getForLogin = async (req, res) => {

};

const update = async (req, res) => {

};

const updatePartial = async (req, res) => {

};

module.exports = {
    getOne,
    getForLogin,
    update,
    updatePartial
};