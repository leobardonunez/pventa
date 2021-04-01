"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturasController_1 = require("../controllers/facturasController");
class FacturasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', facturasController_1.facturasController.list);
        this.router.get('/:id', facturasController_1.facturasController.getOne);
        this.router.post('/', facturasController_1.facturasController.create);
        this.router.put('/:id', facturasController_1.facturasController.update);
        this.router.delete('/:id', facturasController_1.facturasController.delete);
    }
}
const facturasRoutes = new FacturasRoutes();
exports.default = facturasRoutes.router;
