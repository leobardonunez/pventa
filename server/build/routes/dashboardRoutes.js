"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
class DashboardRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', dashboardController_1.dashboardController.count);
    }
}
const dashboardRoutes = new DashboardRoutes();
exports.default = dashboardRoutes.router;
