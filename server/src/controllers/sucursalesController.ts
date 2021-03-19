import{ Request, Response} from 'express' ;

import pool from '../database';


class SucursalesController{
    //Listar
    public async list(req: Request, res: Response){
        const sucursales= await pool.query('SELECT * FROM sucursales');
        res.json(sucursales);
    }
    //Obtener
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id}= req.params;
        const sucursales = await pool.query('SELECT * FROM sucursales WHERE id=?',[id]);
        if(sucursales.length>0){
            return res.json(sucursales[0]);
        }
        res.status(404).json({text:'La sucursal no existe'});
    }
    //Crear
    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO sucursales set ? ',[req.body]);
        console.log(req.body);
        res.json({text: 'Creating Sucursal'});
    }

    //Eliminar
    public async delete(req: Request, res: Response): Promise<void>{
        const {id}= req.params;
        await pool.query('DELETE FROM sucursales WHERE id = ?',[id]);
        res.json({text:'Delete a Sucursal'});
    }

    //Actualizar
    public async update(req: Request, res: Response): Promise<void>{
        const {id}= req.params;
        await pool.query('UPDATE sucursales set ? WHERE id=?',[req.body,id])
        res.json({text:'Update sucursal with id= ' + req.params.id});
    }
}

export const sucursalesController= new SucursalesController();