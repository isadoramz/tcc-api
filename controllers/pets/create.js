const infra = require('../../infra');

const create = async (req, res) => {
    const petAttributes = req.body;
    const pet = await infra.petsRepository.create(petAttributes);
    res.status(200).send(pet);
}

module.exports = create;