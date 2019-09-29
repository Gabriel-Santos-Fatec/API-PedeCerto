import MySQL from 'mysql';

const connection = MySQL.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'mydb',
    connectionLimit: 10,
});

export default connection;
