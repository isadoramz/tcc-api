const infra = require('../../infra');

const create = (req, res) => {
    
    const petAttributes = req.body;
    const pet = infra.petsRepository.create(petAttributes);

    res.status(200).send(pet);
}

module.exports = create;