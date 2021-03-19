import { Router } from 'express';
import { dashboardController } from '../controllers/dashboardController';


class DashboardRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', dashboardController.count);    
    }
}

const dashboardRoutes = new DashboardRoutes();
export default dashboardRoutes.router;