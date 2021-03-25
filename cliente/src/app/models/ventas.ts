export interface Ventas {
    id?: number;
    producto_venta?: number;
    cantidad?: number;
    cliente?: string;
    subtotal?: number;
    iva?: number;
    descuento?: number;
    total?: number;
    created_at?: Date;

}