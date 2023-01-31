import bcrypt from 'bcryptjs';
import { pool } from "./db";

export const testConnection = async () => {
    // console.log(email, password);
    const [result] = await pool.query("SELECT NOW()");
    // console.log(result[0]);
    console.log(result);
}

export const checkUserEmailPassword = async (email, password) => {
    // console.log(email, password);
    const [result] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    // console.log(result[0]);

    if (result[0] === undefined) {
        return null;
    }

    if (!bcrypt.compareSync(password, result[0].password)) {
        return null;
    }

    return {
        name: result[0].name,
        id: result[0].id
    }

}
