const infra = require('../../infra');

const findById = async (req, res) => {
    const petId = req.params.id;
    const pet = await infra.petsRepository.findById(petId);
    res.status(200).send(pet);
}

module.exports = findById;