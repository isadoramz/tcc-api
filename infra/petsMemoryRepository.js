const uuid = require('uuid');

const initialValues = [
    {
        nome: "",
        raca: "",
        idade: 1,
        especie: "",
        descricao: "",
    },
    {
        nome: "",
        raca: "",
        idade: 1,
        especie: "",
        descricao: "",
    },
    {
        nome: "",
        raca: "",
        idade: 1,
        especie: "",
        descricao: "",
    },
];

// {
//     1: {
//         id: 1,
//         nome: "",
//         raca: "",
//         idade: 1,
//         especie: "",
//         descricao: "",
//     },
//     2: {
//         ...
//     },
//     3: {
//         ...
//     },
// }

const petsMemoryRepository = {
    _pets: initialValues.reduce((acc, petValue) => {
        const id = uuid.v4();
        return {...acc, [id]: { ...petValue, id }}
    }, {}),
    
    findById(id) {
        return this._pets[id];
    },

    findAll() {
        return Object.values(this._pets);
    },

    create(petAttributes) {
        const id = uuid.v4();
        const pet = {
            id,
            nome: petAttributes.nome,
            raca: petAttributes.raca,
            idade: petAttributes.idade,
            especie: petAttributes.especie,
            descricao: petAttributes.descricao,
        }
        this._pets[id] = pet;
        return pet;
    }
}

module.exports = petsMemoryRepository;

