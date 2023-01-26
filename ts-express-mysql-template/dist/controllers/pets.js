"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPet = exports.getPet = exports.getPets = void 0;
const pet_1 = __importDefault(require("../models/pet"));
const utils_1 = require("../utils");
const getPets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const token = req.headers.authorization;
    if (token === undefined) {
        return res.status(401).json({
            message: 'No hay token'
        });
    }
    try {
        yield utils_1.jwt.isValidToken(token);
    }
    catch (error) {
        return res.status(401).json({
            message: 'Token de autorización no es válido'
        });
    }
    const pets = yield pet_1.default.findAll({ where: { id_user: id } });
    res.json(pets);
});
exports.getPets = getPets;
const getPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const token = req.headers.authorization;
    if (token === undefined) {
        return res.status(401).json({
            message: 'No hay token'
        });
    }
    try {
        yield utils_1.jwt.isValidToken(token);
    }
    catch (error) {
        return res.status(401).json({
            message: 'Token de autorización no es válido'
        });
    }
    const pets = yield pet_1.default.findOne({ where: { id } });
    res.json(pets);
});
exports.getPet = getPet;
const registerPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const token = req.headers.authorization;
    if (token === undefined) {
        return res.status(401).json({
            message: 'No hay token'
        });
    }
    try {
        yield utils_1.jwt.isValidToken(token);
    }
    catch (error) {
        return res.status(401).json({
            message: 'Token de autorización no es válido'
        });
    }
    const pets_number = yield pet_1.default.count();
    if (pets_number >= 10) {
        return res.status(400).json({ message: 'Alcanzaste el número máximo de mascotas registradas *' });
    }
    if (body.image === undefined) {
        return res.status(400).json({ message: 'Es necesario agregar una foto de su mascota *' });
    }
    try {
        const new_pet = pet_1.default.build(body);
        yield new_pet.save();
        res.json({ message: 'mascota registrada' });
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrio un error al momento del registro *' });
    }
});
exports.registerPet = registerPet;
//# sourceMappingURL=pets.js.map