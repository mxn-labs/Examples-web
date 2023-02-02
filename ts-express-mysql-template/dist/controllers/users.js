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
exports.checkJWT = exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const utils_1 = require("../utils");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name = '', email = '', password = '' } = req.body;
    try {
        const existeEmail = yield user_1.default.findOne({
            where: {
                email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                message: 'Ya existe un usuario con el email ' + email
            });
        }
        if (password.length < 6) {
            return res.status(400).json({
                message: 'La contraseña debe de ser de 6 caracteres'
            });
        }
        if (name.length < 2) {
            return res.status(400).json({
                message: 'El nombre debe de ser de 2 caracteres'
            });
        }
        if (!utils_1.validations.isValidEmail(email)) {
            return res.status(400).json({
                message: 'El correo no tiene formato de correo'
            });
        }
        const new_user = user_1.default.build({
            name,
            email,
            password: bcryptjs_1.default.hashSync(password),
        });
        yield new_user.save();
        const id = new_user.getDataValue('id');
        const token = utils_1.jwt.signToken(`${id}`, email);
        res.json({
            token,
            user: {
                id,
                name
            }
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email = '', password = '' } = req.body;
    const user = yield user_1.default.findOne({
        where: {
            email,
            status: 1
        }
    });
    if (!user) {
        return res.status(400).json({ message: 'Correo o contraseña no válidos' });
    }
    if (!bcryptjs_1.default.compareSync(password, user.getDataValue('password'))) {
        return res.status(400).json({ message: 'Correo o contraseña no válidos' });
    }
    const id = user.getDataValue('id');
    const name = user.getDataValue('name');
    const token = utils_1.jwt.signToken(`${id}`, email);
    res.json({
        token,
        user: {
            id,
            name
        }
    });
});
exports.loginUser = loginUser;
const checkJWT = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    let userId = '';
    try {
        userId = yield utils_1.jwt.isValidToken(token);
    }
    catch (error) {
        return res.status(401).json({
            message: 'Token de autorización no es válido'
        });
    }
    const user = yield user_1.default.findByPk(userId);
    if (!user) {
        return res.status(400).json({ message: 'No existe usuario con ese id' });
    }
    if (user.getDataValue('status') === false) {
        return res.status(400).json({ message: 'El usuario no es válido' });
    }
    const id = user.getDataValue('id');
    const name = user.getDataValue('name');
    const email = user.getDataValue('email');
    res.json({
        token: utils_1.jwt.signToken(`${id}`, email),
        user: {
            id,
            name
        }
    });
});
exports.checkJWT = checkJWT;
//# sourceMappingURL=users.js.map