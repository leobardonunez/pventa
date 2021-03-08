"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entradasController_1 = require("../controllers/entradasController");
class EntradasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', entradasController_1.entradasController.list);
        this.router.get('/:id', entradasController_1.entradasController.getOne);
        this.router.post('/', entradasController_1.entradasController.create);
        this.router.put('/:id', entradasController_1.entradasController.update);
        this.router.delete('/:id', entradasController_1.entradasController.delete);
    }
}
const entradasRoutes = new EntradasRoutes();
exports.default = entradasRoutes.router;
