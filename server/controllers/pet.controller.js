const {Pet} = require('../models/pet.model');
module.exports.createPet = 
   (request, response) => {
        const { name} = request.body;
        const { type} = request.body;
        const { description} = request.body;
        const { skill1} = request.body;
        const { skill2} = request.body;
        const { skill3} = request.body;
        Pet.create({
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(pet => response.json(pet))
            .catch(err => response.status(400).json(err))
    }

    module.exports.getAllPets = (request, response) => {
        Pet.find({})
            .then(pets => response.json(pets))
            .catch(err => response.json(err))
    }

    module.exports.updatePet = (request, response) => {
        Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
            .then(updatedPet => response.json(updatedPet))
            .catch(err => response.json(err))
    }

    module.exports.deletePet = (request, response) => {
        Pet.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
    
    module.exports.getPet = (request, response) => {
        Pet.findOne({_id:request.params.id})
            .then(pet => response.json(pet))
            .catch(err => response.json(err))
    }

    module.exports.findPetByName = (request, response) => {
        Pet.findOne({name:request.params.name})
            .then(pet => response.json(pet))
            .catch(err => response.json(err))
    }
    
    
