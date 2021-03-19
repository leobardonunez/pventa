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
exports.stockController = void 0;
const database_1 = __importDefault(require("../database"));
class StockController {
    //Listar
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const stock = yield database_1.default.query('SELECT * FROM stock');
            res.json(stock);
        });
    }
    //Obtener
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const stock = yield database_1.default.query('SELECT * FROM stock WHERE id=?', [id]);
            if (stock.length > 0) {
                return res.json(stock[0]);
            }
            res.status(404).json({ text: 'El stock no existe' });
        });
    }
    //Crear
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO stock set ? ', [req.body]);
            console.log(req.body);
            res.json({ text: 'Creating Stock' });
        });
    }
    //Eliminar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM stock WHERE id = ?', [id]);
            res.json({ text: 'Delete a Stock' });
        });
    }
    //Actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE stock set ? WHERE id=?', [req.body, id]);
            res.json({ text: 'Update stock with id= ' + req.params.id });
        });
    }
}
exports.stockController = new StockController();
