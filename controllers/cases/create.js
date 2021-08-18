const infra = require('../../infra');

const create = (req, res) => {
    
    const caseAttributes = req.body;
    const vCase = infra.casesRepository.create(caseAttributes);

    res.status(200).send(vCase);
}

module.exports = create;