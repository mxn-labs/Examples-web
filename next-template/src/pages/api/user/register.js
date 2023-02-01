import bcrypt from 'bcryptjs';
import User from "../../../models/user";
import { isValidEmail } from '../../../utils/validations';

export default function handler(req, res) {

    switch (req.method) {
        case 'POST':
            return registerUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const registerUser = async (req, res) => {
    const {
        name,
        email,
        password,
    } = req.body;

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

    if (!isValidEmail(email)) {
        return res.status(400).json({
            message: 'El correo no tiene formato de correo'
        });
    }

    try {
        const new_user = User.build({
            name,
            email,
            password: bcrypt.hashSync(password),
        });
        await new_user.save();


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Revisar logs del servidor'
        });
    }

    return res.status(200).json({ message: 'Usuario creado correctamente' });

}

