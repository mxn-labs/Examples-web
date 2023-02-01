import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import User from "../models/user";
import { jwt, validations } from "../utils";

export const registerUser = async (req: Request, res: Response) => {

    const { name = '', email = '', password = '' } = req.body

    try {

        const existeEmail = await User.findOne({
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

        if (!validations.isValidEmail(email)) {
            return res.status(400).json({
                message: 'El correo no tiene formato de correo'
            });
        }

        const new_user = User.build({
            name,
            email,
            password: bcrypt.hashSync(password),
        });
        await new_user.save();

        const id = new_user.getDataValue('id');
        const token = jwt.signToken(`${id}`, email)

        res.json({
            token,
            user: {
                id,
                name
            }
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }

}

export const loginUser = async (req: Request, res: Response) => {
    const { email = '', password = '' } = req.body;
    const user = await User.findOne({
        where: {
            email
        }
    });

    if (!user) {
        return res.status(400).json({ message: 'Correo o contraseña no válidos' })
    }

    if (!bcrypt.compareSync(password, user.getDataValue('password'))) {
        return res.status(400).json({ message: 'Correo o contraseña no válidos' })
    }

    const id = user.getDataValue('id');
    const name = user.getDataValue('name');
    const token = jwt.signToken(`${id}`, email);

    res.json({
        token,
        user: {
            id,
            name
        }
    });
}

export const checkJWT = async (req: Request, res: Response) => {
    const token = req.headers.authorization;

    let userId = '';

    try {
        userId = await jwt.isValidToken(token!);

    } catch (error) {
        return res.status(401).json({
            message: 'Token de autorización no es válido'
        })
    }
    const user = await User.findByPk(userId);

    if (!user) {
        return res.status(400).json({ message: 'No existe usuario con ese id' })
    }

    const id = user.getDataValue('id');
    const name = user.getDataValue('name');
    const email = user.getDataValue('email');

    res.json({
        token: jwt.signToken(`${id}`, email),
        user: {
            id,
            name
        }
    });
}