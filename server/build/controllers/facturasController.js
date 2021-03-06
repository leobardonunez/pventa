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
exports.facturasController = void 0;
const database_1 = __importDefault(require("../database"));
class FacturasController {
    //Listar facturas
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const facturas = yield database_1.default.query('SELECT * FROM facturas f , factura_emisor fe,clientes c,productos p  WHERE f.emisor= fe.id and f.receptor=c.id and f.producto= p.id');
            res.json(facturas);
        });
    }
    //SELECT f.num_fact, f.emisor,f.receptor,f.producto,f.cantidad,f.subt,f.tot,f.metodo_pago,f.created_at FROM facturas f INNER JOIN factura_emisor fe WHERE f.emisor=fe.id
    //Obtener
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const facturas = yield database_1.default.query('SELECT * FROM facturas WHERE id=?', [id]);
            if (facturas.length > 0) {
                return res.json(facturas[0]);
            }
            res.status(404).json({ text: 'La factura no existe' });
        });
    }
    //Crear
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO facturas set ? ', [req.body]);
            console.log(req.body);
            res.json({ text: 'Creating factura' });
        });
    }
    //Eliminar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM facturas WHERE id = ?', [id]);
            res.json({ text: 'Delete a factura' });
        });
    }
    //Actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE facturas set ? WHERE id=?', [req.body, id]);
            res.json({ text: 'Update factura with id= ' + req.params.id });
        });
    }
}
exports.facturasController = new FacturasController();
