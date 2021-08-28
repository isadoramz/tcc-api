const infra = require('../../infra');

const create = async (req, res) => {
    const caseAttributes = req.body;
    const vCase = await infra.casesRepository.create(caseAttributes);
    res.status(200).send(vCase);
}

module.exports = create;