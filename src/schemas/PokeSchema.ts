import mongoose from "../database";

const pokeSchema = new mongoose.Schema({

    pokeName: {
        type: String,
        required: true,
        unique: true,
    },

    pokeTier: {
        type: String,
        required: true,
    },

    pokeTypeOne: {
        type: String,
        required: true,
    },

    pokeEvolution: {
        type: String,
        required: true,
    },

    pokeTypeTwo: {
        type: String,
        required: true,
    },

    pokePower: {
        type: Number,
        required: true,
    },

    pokeDefense: {
        type: Number,
        required: true,
    },

    pokeAgility: {
        type: Number,
        required: true,
    },

    pokeMagicLevel: {
        type: Number,
        required: true,
    },

    pokeMoveOne: {
        type: String,
        required: true,
    },

    pokeMoveTwo: {
        type: String,
        required: true,
    },

    pokeMoveTree: {
        type: String,
        required: true,
    },

    pokeMoveUltimate: {
        type: String,
        required: true,
    },
});

const PokeSchema = mongoose.model("pokes", pokeSchema);

export default PokeSchema;