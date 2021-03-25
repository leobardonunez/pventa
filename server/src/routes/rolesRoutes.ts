import { Router } from 'express';
import { rolesController } from '../controllers/rolesController';


class RolesRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', rolesController.list);
        this.router.get('/:id', rolesController.getOne);        
    }
}

const rolesRoutes = new RolesRoutes();
export default rolesRoutes.router;