const mongoose = require('mongoose');

const Recipe = mongoose.model(
    'recipes',
    {
        recipe_title: String,
        category: String,
        preparation_time: String,
        people: String,
        short_descrption: String,
        recipe: String,
        _created: Date
    },
    'users'
);

const save = async (recipeData) => {
    let u = new(recipeData);
    let data = await u.save();
    return data;
};

const getRecipe = async (id) => {
    let data = await Recipe.findOne({_id: id});
    return data;
};

const getAll = async () => {
    let data = await Recipe.find({});
    return data;
};

const getLastest = async () => {
    let data = await Recipe.find({}, {recipe_title: 1}).sort({ _created: - 1}).limit(3);
    return data;
};

const getByCategory = async (category) => {
    let data = await Recipe.find({ category: category});
    return data;
};

const update = async (id, recipeData) => {
    let data = await Recipe.updateOne({_id: id}, recipeData);
    return data.nModified !==0;
};

const remove = async (id) => {
    let data = await Recipe.deleteOne({_id: id, 'user.id': uid });
    return data.deletedCount !== 0;
};

module.exports = {
    save,
    getRecipe,
    getAll,
    getLastest,
    getByCategory,
    update,
    remove
};