const infra = require('../../infra');

const findAll = (req, res) => {
    const pets = infra.petsRepository.findAll();
    res.status(200).send(pets);
}

module.exports = findAll;