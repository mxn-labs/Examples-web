import { Router } from "express";

import { registerUser, loginUser, checkJWT } from "../controllers/users";

const router = Router();

router.get('/validate-token', checkJWT);
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;