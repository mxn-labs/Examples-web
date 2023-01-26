"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pets_1 = require("../controllers/pets");
const router = (0, express_1.Router)();
router.post('/registerpet', pets_1.registerPet);
router.get('/getpets/:id', pets_1.getPets);
router.get('/getpet/:id', pets_1.getPet);
exports.default = router;
//# sourceMappingURL=pets.js.map