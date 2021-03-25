import { Request, Response} from 'express';
import pool from'../database';


class VentasController{
     //Listar
     public async list (req: Request, res: Response){    
        const ventas = await pool.query('SELECT * FROM ventas');
        res.json(ventas);
    }
    
    //Obtener 
    public async getOne (req: Request, res: Response): Promise<any>{        
        const { id }= req.params;
        const ventas = await pool.query('SELECT * FROM ventas WHERE id = ?', [id]);
        if(ventas.length >0 ){
            return res.json(ventas[0]);
        }
        res.status(404).json({text: 'Registro no existe'});
    }
    //Crear
    public async create(req:Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO ventas set ? ', [req.body]);
        console.log(req.body);
        res.json({text: 'creating Venta'});
    }
    //Eliminar
    public async delete(req: Request, res: Response): Promise<void>{
        const {id } = req.params;
        await pool.query('DELETE FROM ventas WHERE id = ? ', [id]);
        res.json({text: 'delete a Venta'});
    }
    //Actualizar
    public async update(req: Request, res: Response): Promise<void>{
        const {id }= req.params;
        await pool.query('UPDATE ventas set ? WHERE id= ?', [req.body, id])
        res.json({text: 'Venta actualizada ' + req.params.id});
    }    
}

export const ventasController = new VentasController();