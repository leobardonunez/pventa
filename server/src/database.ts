import mysql from 'promise-mysql';
import keys from './keys';

//Ejecuta modulo de conexion de base de datos
const pool= mysql.createPool(keys.database);

pool.getConnection()
.then(connection =>{
    pool.releaseConnection(connection);
    console.log('DB is connected');
});


export default pool;