"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get('/validate-token', users_1.checkJWT);
router.post('/register', users_1.registerUser);
router.post('/login', users_1.loginUser);
exports.default = router;
//# sourceMappingURL=users.js.map