"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasController = void 0;
const database_1 = __importDefault(require("../database"));
class VentasController {
    //Listar
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ventas = yield database_1.default.query('SELECT * FROM ventas');
            res.json(ventas);
        });
    }
    //Obtener 
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ventas = yield database_1.default.query('SELECT * FROM ventas WHERE id = ?', [id]);
            if (ventas.length > 0) {
                return res.json(ventas[0]);
            }
            res.status(404).json({ text: 'Registro no existe' });
        });
    }
    //Crear
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ventas set ? ', [req.body]);
            console.log(req.body);
            res.json({ text: 'creating Venta' });
        });
    }
    //Eliminar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ventas WHERE id = ? ', [id]);
            res.json({ text: 'delete a Venta' });
        });
    }
    //Actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE ventas set ? WHERE id= ?', [req.body, id]);
            res.json({ text: 'Venta actualizada ' + req.params.id });
        });
    }
}
exports.ventasController = new VentasController();
