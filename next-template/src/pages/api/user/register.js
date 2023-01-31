import bcrypt from 'bcryptjs';
import { pool } from '../../../config/db';
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

    const [checkEmail] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (checkEmail[0] !== undefined) {
        return res.status(400).json({
            message: 'No puede usar ese correo'
        })
    }

    try {
        await pool.query("INSERT INTO users (name, email, password) VALUES(?, ?, ?)", [
            name,
            email,
            bcrypt.hashSync(password),
        ]);


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Revisar logs del servidor'
        });
    }

    return res.status(200).json({ message: 'Usuario creado correctamente' });

}

