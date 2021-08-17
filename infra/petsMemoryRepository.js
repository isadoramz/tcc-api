const initialValues = [
    {
        id: 1,
        nome: "",
        raca: "",
        idade: 1,
        especie: "",
        descricao: "",
    },
    {
        id: 2,
        nome: "",
        raca: "",
        idade: 1,
        especie: "",
        descricao: "",
    },
    {
        id: 3,
        nome: "",
        raca: "",
        idade: 1,
        especie: "",
        descricao: "",
    },
];

const petMemoryRepository = {
    _pets: initialValues.reduce((acc, petValue) => {
        return {
            ...acc, [petValue.id]: petValue
        }
    }, {}),
    
    findById(id) {
        return this._pets[id];
    },

    findAll() {
        return Object.values(this._pets);
    },

    create(petAttributes) {
        const id = Object.values(this._pets).length + 1;
        const pet = {
            id,
            nome: petAttributes.name,
            raca: petAttributes.raca,
            idade: petAttributes.idade,
            especie: petAttributes.especie,
            descricao: petAttributes.descricao,
        }
        this._pets[id] = pet;
        return pet;
    }
}

