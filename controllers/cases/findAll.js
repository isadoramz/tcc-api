const infra = require('../../infra');

const findAll = (req, res) => {
    const cases = infra.casesRepository.findAll();
    res.status(200).send(cases);
}

module.exports = findAll;