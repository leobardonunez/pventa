import{ Request, Response} from 'express' ;

import pool from '../database';


class ProductosController{
    //Listar
    public async list(req: Request, res: Response){
        const productos= await pool.query('SELECT * FROM productos');
        res.json(productos);
    }   
    //Obtener
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id}= req.params;
        const productos = await pool.query('SELECT * FROM productos WHERE id=?',[id]);
        if(productos.length>0){
            return res.json(productos[0]);
        }
        res.status(404).json({text:'El producto no existe'});
    }
    //Crear
    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO productos set ? ',[req.body]);
        console.log(req.body);
        res.json({text: 'Creating Producto'});
    }

    //Eliminar
    public async delete(req: Request, res: Response): Promise<void>{
        const {id}= req.params;
        await pool.query('DELETE FROM productos WHERE id = ?',[id]);
        res.json({text:'Delete a Producto'});
    }

    //Actualizar
    public async update(req: Request, res: Response): Promise<void>{
        const {id}= req.params;
        await pool.query('UPDATE productos set ? WHERE id=?',[req.body,id])
        res.json({text:'Update producto with id= ' + req.params.id});
    }
}

export const productosController= new ProductosController();