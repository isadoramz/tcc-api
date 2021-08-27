const uuid = require('uuid');

const initialValues = [
    {
        local: "",
        adress: "",
        weekDays: [
            "",
            "",
        ],
        hourAvailability: 1,
        description: "",
    },
    {
        local: "",
        adress: "",
        weekDays: [
            "",
            "",
        ],
        hourAvailability: 1,
        description: "",
    },
    {
        local: "",
        adress: "",
        weekDays: [
            "",
            "",
        ],
        hourAvailability: 1,
        description: "",
    },
];

// {
//     1: {
//         local: "",
//         adress: "",
//         weekDays: [
//             "",
//             "",
//         ],
//         hourAvailability: 1,
//         description: "",
//     },
//     2: {
//         ...
//     },
//     3: {
//         ...
//     },
// }

const casesMemoryRepository = {
    _cases: initialValues.reduce((acc, caseValue) => {
        const id = uuid.v4();
        return {...acc, [id]: { ...caseValue, id }}
    }, {}),
    
    findById(id) {
        return this._cases[id];
    },

    findAll() {
        return Object.values(this._cases);
    },

    create(caseAttributes) {
        const id = uuid.v4();
        const vCase = {
            id,
            local: caseAttributes.local,
            adress: caseAttributes.adress,
            weekDays: caseAttributes.weekDays,
            hourAvailability: caseAttributes.hourAvailability,
            description: caseAttributes.description,
        }
        this._cases[id] = vCase;
        return vCase;
    }
}

module.exports = casesMemoryRepository;


