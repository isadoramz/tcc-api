const mongoose = require('mongoose');

  const { Schema } = mongoose;

  const casesSchema = new Schema({
    local: String,
    adress: String,
    weekDays: [
        String,
    ],
    hourAvailability: String,
    title: String,
    description: String,
    responsible: {
      email: String,
      phoneNumber:  String,
      whatsapp: String
    }
  });

  const Model = mongoose.model('cases', casesSchema);

  const caseMapper = (dbEntity) => ({
    id: dbEntity._id,
    local: dbEntity.local,
    adress: dbEntity.adress,
    weekDays:   dbEntity.weekDays,
    title: dbEntity.title,
    hourAvailability: dbEntity.hourAvailability,
    description: dbEntity.description,
    responsible: dbEntity.responsible
  })
  
  const caseRepository = {
    async findById(id) {
      const vCase = await Model.findById(id);
      if(!vCase) return undefined;
      return caseMapper(vCase);
    },

    async findAll() {
     const cases = await Model.find({});
     return cases.map(caseMapper);
    },

    async create(caseAttributes) {
      const createdVCase = await Model.create(caseAttributes);
      return caseMapper(createdVCase);
    }
  }

  module.exports = caseRepository;