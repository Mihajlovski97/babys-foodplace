const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        birthday: Date,
        active: Boolean,
        avatar: String,
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

const getOneByEmail = async (email) => {
    let data = await User.findOne({ email });
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

const updateUser = async(uid, userData) => {
    let data = await User.updateOne({_id: uid}, userData);
    return data.nModified !== 0;
}

module.exports = {
    create,
    getOne,
    getOneByEmail,
    getForLogin,
    update,
    updateUser
};