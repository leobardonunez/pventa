import{ Request, Response} from 'express' ;
import pool from '../database';


class FacturasController{
        //Listar
        public async list(req: Request, res: Response){
            const facturas= await pool.query('SELECT * FROM facturas');
            res.json(facturas);
        }   
        //Obtener
        public async getOne(req: Request, res: Response): Promise<any>{
            const {id}= req.params;
            const facturas = await pool.query('SELECT * FROM facturas WHERE id=?',[id]);
            if(facturas.length>0){
                return res.json(facturas[0]);
            }
            res.status(404).json({text:'La factura no existe'});
        }
        //Crear
        public async create(req: Request, res: Response): Promise<any>{
            await pool.query('INSERT INTO facturas set ? ',[req.body]);
            console.log(req.body);
            res.json({text: 'Creating factura'});
        }
    
        //Eliminar
        public async delete(req: Request, res: Response): Promise<void>{
            const {id}= req.params;
            await pool.query('DELETE FROM facturas WHERE id = ?',[id]);
            res.json({text:'Delete a factura'});
        }
    
        //Actualizar
        public async update(req: Request, res: Response): Promise<void>{
            const {id}= req.params;
            await pool.query('UPDATE facturas set ? WHERE id=?',[req.body,id])
            res.json({text:'Update factura with id= ' + req.params.id});
        }
}

export const facturasController= new FacturasController();