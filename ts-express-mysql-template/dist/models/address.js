"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Address = connection_1.default.define('Address', {
    street: {
        type: sequelize_1.DataTypes.STRING
    },
    house_number: {
        type: sequelize_1.DataTypes.STRING
    },
    col: {
        type: sequelize_1.DataTypes.STRING
    }
}, { timestamps: false, tableName: 'userAddress' });
exports.default = Address;
//# sourceMappingURL=address.js.map