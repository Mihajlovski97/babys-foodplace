const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        dob: Date,
        active: Boolean,
        _created: Date
    },
    'users'
);

const create = async (userData) => {
    let u = new User(userData);
    let data = await u.save();
    return data;
};

const getOne = async (id) => {
    let data = await User.findOne({_id: id});
    return data;
};

const getForLogin = async (email) => {
    let data = await User.findOne({ email: email, active: true});
    return data;
};

const update = async (id, userData) => {
    let data = await User.updateOne({_id: id}, userData);
    return data.nModified !== 0;
};

const updatePartial = async (id, userData) => {
    let data = await User.updateOne({ _id: id }, userData);
    return data.nModified !== 0;
};

module.exports = {
    create,
    getOne,
    getForLogin,
    update,
    updatePartial
};