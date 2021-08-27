const infra = require('../../infra');

const findAll = async (req, res) => {
    const pets = await infra.petsRepository.findAll();
    res.status(200).send(pets);
}

module.exports = findAll;