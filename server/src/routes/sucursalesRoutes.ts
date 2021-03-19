import { Router } from 'express';
import { sucursalesController } from '../controllers/sucursalesController';


class SucursalesRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', sucursalesController.list);
        this.router.get('/:id', sucursalesController.getOne);
        this.router.post('/', sucursalesController.create);
        this.router.put('/:id', sucursalesController.update);
        this.router.delete('/:id', sucursalesController.delete);
    }
}

const sucursalesRoutes = new SucursalesRoutes();
export default sucursalesRoutes.router;