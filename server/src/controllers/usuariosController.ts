import { Request, Response} from 'express';
import pool from'../database';


class UsuariosController{
            //Listar
            public async list (req: Request, res: Response){    
                const usuarios = await pool.query('SELECT * FROM usuarios');
                res.json(usuarios);
            }

        //Obtener 
        public async getOne (req: Request, res: Response): Promise<any>{        
            const { id }= req.params;
            const usuarios = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            if(usuarios.length >0 ){
                return res.json(usuarios[0]);
            }
            res.status(404).json({text: 'El usuario no existe'});
        }

                //Crear
                public async create(req:Request, res: Response): Promise<void>{
                    await pool.query('INSERT INTO usuarios set ? ', [req.body]);
                    console.log(req.body);
                    res.json({text: 'creating Usuario'});
                }
                //Eliminar
                public async delete(req: Request, res: Response): Promise<void>{
                    const {id } = req.params;
                    await pool.query('DELETE FROM usuarios WHERE id = ? ', [id]);
                    res.json({text: 'delete a Usuario'});
                }
                //Actualizar
                public async update(req: Request, res: Response): Promise<void>{
                    const {id }= req.params;
                    await pool.query('UPDATE usuarios set ? WHERE id= ?', [req.body, id])
                    res.json({text: 'Usuario actualizado ' + req.params.id});
                }
}
export const usuariosController = new UsuariosController();