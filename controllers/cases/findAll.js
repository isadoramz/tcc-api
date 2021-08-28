const infra = require('../../infra');

const findAll = async (req, res) => {
    const cases = await infra.casesRepository.findAll();
    res.status(200).send(cases);
}

module.exports = findAll;