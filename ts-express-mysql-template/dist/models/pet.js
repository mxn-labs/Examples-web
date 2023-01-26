"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Pet = connection_1.default.define('Pet', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    gender: {
        type: sequelize_1.DataTypes.STRING
    },
    species: {
        type: sequelize_1.DataTypes.STRING
    },
    race: {
        type: sequelize_1.DataTypes.STRING
    },
    stage: {
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        type: sequelize_1.DataTypes.STRING
    },
    sterilization: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    id_tracker: {
        type: sequelize_1.DataTypes.STRING
    },
    chara: {
        type: sequelize_1.DataTypes.STRING
    },
    observations: {
        type: sequelize_1.DataTypes.STRING
    },
    diseases: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    },
    id_user: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, { timestamps: false, tableName: 'pets' });
exports.default = Pet;
//# sourceMappingURL=pet.js.map