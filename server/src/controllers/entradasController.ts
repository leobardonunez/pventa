import { Request, Response} from 'express';
import pool from'../database';


class EntradasController{
        //Listar
        public async list (req: Request, res: Response){    
            const entradas = await pool.query('SELECT * FROM entradas INNER JOIN productos ON entradas.id= productos.id');
            res.json(entradas);
        }
     
        //Obtener 
        public async getOne (req: Request, res: Response): Promise<any>{        
            const { id }= req.params;
            const entradas = await pool.query('SELECT * FROM entradas WHERE id = ?', [id]);
            if(entradas.length >0 ){
                return res.json(entradas[0]);
            }
            res.status(404).json({text: 'La entrada no existe'});
        }
        //Crear
        public async create(req:Request, res: Response): Promise<void>{
            await pool.query('INSERT INTO entradas set ? ', [req.body]);
            console.log(req.body);
            res.json({text: 'creating Entrada'});
        }
        //Eliminar
        public async delete(req: Request, res: Response): Promise<void>{
            const {id } = req.params;
            await pool.query('DELETE FROM entradas WHERE id = ? ', [id]);
            res.json({text: 'delete a Entrada'});
        }
        //Actualizar
        public async update(req: Request, res: Response): Promise<void>{
            const {id }= req.params;
            await pool.query('UPDATE entradas set ? WHERE id= ?', [req.body, id])
            res.json({text: 'Entrada actualizado ' + req.params.id});
        }
}
export const entradasController = new EntradasController();