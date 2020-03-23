const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [
            true,
            "Name is required"
        ]
    },
    type:{
        type:String,
        required: [
            true,
            "Type is required"
        ]
    },
    description:{
        type:String,
        required: [
            true,
            "description is required"
        ]
    },
    skill1:{type:String},
    skill2:{type:String},
    skill3:{type:String}
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);
