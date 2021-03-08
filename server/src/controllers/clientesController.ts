import { Request, Response} from 'express';

import pool from'../database';


class ClientesController{
    //Listar
    public async list (req: Request, res: Response){    
        const clientes = await pool.query('SELECT * FROM clientes');
        res.json(clientes);
    }
    //Obtener 
    public async getOne (req: Request, res: Response): Promise<any>{        
        const { id }= req.params;
        const clientes = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
        if(clientes.length >0 ){
            return res.json(clientes[0]);
        }
        res.status(404).json({text: 'El cliente no existe'});
    }
    //Crear
    public async create(req:Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO clientes set ? ', [req.body]);
        console.log(req.body);
        res.json({text: 'creating cliente'});
    }
    //Eliminar
    public async delete(req: Request, res: Response): Promise<void>{
        const {id } = req.params;
        await pool.query('DELETE FROM clientes WHERE id = ? ', [id]);
        res.json({text: 'delete a cliente'});
    }
    //Actualizar
    public async update(req: Request, res: Response): Promise<void>{
        const {id }= req.params;
        await pool.query('UPDATE clientes set ? WHERE id= ?', [req.body, id])
        res.json({text: 'Cliente actualizado ' + req.params.id});
    }
}

export const clientesController = new ClientesController();