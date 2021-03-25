import{ Request, Response} from 'express' ;
import pool from '../database';

class RolesController{
        //Listar
        public async list(req: Request, res: Response){
            const roles= await pool.query('SELECT * FROM rol_user');
            res.json(roles);
        }   
        //Obtener
        public async getOne(req: Request, res: Response): Promise<any>{
            const {id}= req.params;
            const roles = await pool.query('SELECT * FROM rol_user WHERE id=?',[id]);
            if(roles.length>0){
                return res.json(roles[0]);
            }
            res.status(404).json({text:'No existe ningun registro con ese id'});
        }
}

export const rolesController= new RolesController();