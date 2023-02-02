import bcrypt from "bcryptjs";

import User from "@/models/user";

export const checkUserEmailPassword = async (email, password) => {
    const user = await User.findOne({
        where: {
            email,
            status: 1
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

    return {
        id,
        name,
        email
    }

}
