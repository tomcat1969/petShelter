const PetController = require('../controllers/pet.controller');
module.exports = function(app){
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pets', PetController.getAllPets);
    app.put('/api/pet/:id', PetController.updatePet);
    app.delete('/api/pet/:id', PetController.deletePet);
    app.get('/api/pet/:id', PetController.getPet);
    app.get('/api/petbyname/:name', PetController.findPetByName);
}
