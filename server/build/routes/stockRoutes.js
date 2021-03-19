"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stockController_1 = require("../controllers/stockController");
class StockRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', stockController_1.stockController.list);
        this.router.get('/:id', stockController_1.stockController.getOne);
        this.router.post('/', stockController_1.stockController.create);
        this.router.put('/:id', stockController_1.stockController.update);
        this.router.delete('/:id', stockController_1.stockController.delete);
    }
}
const stockRoutes = new StockRoutes();
exports.default = stockRoutes.router;
