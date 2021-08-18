const infra = require('../../infra');

const findById = (req, res) => {
    const petId = req.params.id;
    const pet = infra.petsRepository.findById(petId);
    res.status(200).send(pet);
}

module.exports = findById;