const mongoose = require('mongoose');

  const { Schema } = mongoose;

  const petsSchema = new Schema({
    name:  String,
    breed: String,
    age:   Number,
    speecies: String,
    description: String,
    responsible: {
      email: String,
      phoneNumber:  String,
      whatsapp: String,
    },
    img: String
  });

  const Model = mongoose.model('pets', petsSchema);

  const petMapper = (dbEntity) => ({
    id: dbEntity._id,
    name: dbEntity.name,
    breed: dbEntity.breed,
    age:   dbEntity.age,
    speecies: dbEntity.speecies,
    description: dbEntity.description,
    responsible: dbEntity.responsible,
    img: dbEntity.img
  })
  
  const petsRepository = {
    async findById(id) {
      const pet = await Model.findById(id);
      if(!pet) return undefined;
      return petMapper(pet);
    },

    async findAll() {
     const pets = await Model.find({});
     return pets.map(petMapper);
    },

    async create(petAttributes) {
      const createdPet = await Model.create(petAttributes);
      return petMapper(createdPet);
    }
  }

  module.exports = petsRepository;