import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//routes
import indexRoutes from './routes/indexRoutes';
import clientesRoutes from './routes/clientesRoutes';
import productosRoutes from './routes/productosRoutes';
import entradasRoutes from './routes/entradasRoutes';
import sucursalesRoutes from './routes/sucursalesRoutes';
import dashboardRoutes from './routes/dashboardRoutes'
//Inicia el servidor
class Server{

    public app: Application;
    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }

    //configura propiedad app
    config(): void {
       this.app.set('port', process.env.PORT || 3000);
       //responde lo que el cliente esta solicitando en el servidor
       this.app.use(morgan('dev'));
       //
       this.app.use(cors());
       //Para entender formatos json
       this.app.use(express.json());
       //
       this.app.use(express.urlencoded({extended: false}));
    }

    //Define de app las rutas del servidor
    routes(): void{
        this.app.use(indexRoutes);
        this.app.use('/clientes',clientesRoutes);
        this.app.use('/products', productosRoutes);
        this.app.use('/entradas', entradasRoutes);
        this.app.use('/sucursales', sucursalesRoutes);
        this.app.use('/dashboard', dashboardRoutes);
    }

    //Inicializar el servidor para escuchar
    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port ' , this.app.get('port'));            
        });
    }

}

const server=new Server();
server.start();