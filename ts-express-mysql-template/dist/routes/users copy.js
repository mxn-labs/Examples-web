"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
// router.get('/', getUsers);
// router.get('/:id', getUser);
router.get('/validate-token', users_1.checkJWT);
router.post('/register', users_1.registerUser);
router.post('/login', users_1.loginUser);
router.put('/:id', users_1.putUser);
router.delete('/:id', users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users%20copy.js.map