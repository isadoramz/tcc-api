const infra = require('../../infra');

const findById = (req, res) => {
    const caseId = req.params.id;
    const vCase = infra.casesRepository.findById(caseId);
    res.status(200).send(vCase);
}

module.exports = findById;