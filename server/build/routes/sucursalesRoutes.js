"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sucursalesController_1 = require("../controllers/sucursalesController");
class SucursalesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sucursalesController_1.sucursalesController.list);
        this.router.get('/:id', sucursalesController_1.sucursalesController.getOne);
        this.router.post('/', sucursalesController_1.sucursalesController.create);
        this.router.put('/:id', sucursalesController_1.sucursalesController.update);
        this.router.delete('/:id', sucursalesController_1.sucursalesController.delete);
    }
}
const sucursalesRoutes = new SucursalesRoutes();
exports.default = sucursalesRoutes.router;
