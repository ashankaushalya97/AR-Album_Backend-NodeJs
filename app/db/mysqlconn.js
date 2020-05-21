var mysql = require('mysql');

var pool = () => {
    return mysql.createPool({
        connectionLimit : 10,
        host            : 'localhost',
        port            : 3306,
        user            : 'root',
        password        : 'mysql',
        database        : 'finalProject'
    });
};

module.exports.pool = pool;
