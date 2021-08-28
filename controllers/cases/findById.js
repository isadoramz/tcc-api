const infra = require('../../infra');

const findById = async (req, res) => {
    const caseId = req.params.id;
    const vCase = await infra.casesRepository.findById(caseId);
    res.status(200).send(vCase);
}

module.exports = findById;