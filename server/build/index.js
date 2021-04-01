"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//routes
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const clientesRoutes_1 = __importDefault(require("./routes/clientesRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const entradasRoutes_1 = __importDefault(require("./routes/entradasRoutes"));
const sucursalesRoutes_1 = __importDefault(require("./routes/sucursalesRoutes"));
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const ventasRoutes_1 = __importDefault(require("./routes/ventasRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const rolesRoutes_1 = __importDefault(require("./routes/rolesRoutes"));
const facturasRoutes_1 = __importDefault(require("./routes/facturasRoutes"));
//Inicia el servidor
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //configura propiedad app
    config() {
        this.app.set('port', process.env.PORT || 3000);
        //responde lo que el cliente esta solicitando en el servidor
        this.app.use(morgan_1.default('dev'));
        //
        this.app.use(cors_1.default());
        //Para entender formatos json
        this.app.use(express_1.default.json());
        //
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Define de app las rutas del servidor
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/clientes', clientesRoutes_1.default);
        this.app.use('/products', productosRoutes_1.default);
        this.app.use('/entradas', entradasRoutes_1.default);
        this.app.use('/sucursales', sucursalesRoutes_1.default);
        this.app.use('/dashboard', dashboardRoutes_1.default);
        this.app.use('/ventas', ventasRoutes_1.default);
        this.app.use('/usuarios', usuariosRoutes_1.default);
        this.app.use('/roles', rolesRoutes_1.default);
        this.app.use('/facturas', facturasRoutes_1.default);
    }
    //Inicializar el servidor para escuchar
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
