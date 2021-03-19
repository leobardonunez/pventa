import{ Request, Response} from 'express' ;

import pool from '../database';


class DashboardController{
    
    //GetCountProducts
    public async count(req: Request, res: Response){
        const countproducts= await pool.query('SELECT * FROM productos');
        res.json(countproducts);
        //SELECT COUNT(*) FROM productos
    }
}

export const dashboardController= new DashboardController();