


// Save new recipe
api.post('/api/v1/newrecipe', recipe.save);
// Get one recipe
api.get('/api/v1/recipe/:id', recipe.getOne);
// Get all recipes
api.get('/api/v1/recipes', recipe.getAll);
// Get recipe by publish date (last 3)
api.get('/api/v1/recipe/lastest', recipe.getLastest);
// Get recipe by category
api.get('/api/v1/recipe/category/:cat', recipe.getByCategory);
// Update recipe
api.put('/api/v1/recipe/update/:id', recipe.update);
// Delete recipe
api.delete('/api/v1/recipe/delete/:id', recipe.remove)