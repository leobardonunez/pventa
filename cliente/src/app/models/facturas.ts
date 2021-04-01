export interface Facturas {
    id?: number;    
    num_fact?: number;
    emisor?: number;
    receptor?: number;
    producto?: number;              
    cantidad?: number; 
    subt?: number;    
    tot?: number;
    metodo_pago?: string;
    created_at?: Date;        
}