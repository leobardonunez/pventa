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
exports.clientesController = void 0;
const database_1 = __importDefault(require("../database"));
class ClientesController {
    //Listar
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield database_1.default.query('SELECT * FROM clientes');
            res.json(clientes);
        });
    }
    //Obtener 
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const clientes = yield database_1.default.query('SELECT * FROM clientes WHERE id = ?', [id]);
            if (clientes.length > 0) {
                return res.json(clientes[0]);
            }
            res.status(404).json({ text: 'El cliente no existe' });
        });
    }
    //Crear
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO clientes set ? ', [req.body]);
            console.log(req.body);
            res.json({ text: 'creating cliente' });
        });
    }
    //Eliminar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM clientes WHERE id = ? ', [id]);
            res.json({ text: 'delete a cliente' });
        });
    }
    //Actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE clientes set ? WHERE id= ?', [req.body, id]);
            res.json({ text: 'Cliente actualizado ' + req.params.id });
        });
    }
}
exports.clientesController = new ClientesController();
