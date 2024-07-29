const { Connection, Request } = require('tedious');

const config = {
  server: '201.159.169.163',
  authentication: {
    type: 'default',
    options: {
      userName: 'consulta',
      password: 'consulta'
    }
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
    port: 1433,
    database: 'VP'
  }
};

function connectToDatabase() {
  const connection = new Connection(config);

  connection.on('connect', (err) => {
    if (err) {
      console.error('Error de conexión SQL:', err);
      return;
    }

    console.log('Conexión exitosa');
    executeStatement(connection);
  });

  connection.connect();
}

function executeStatement(connection) {
  const request = new Request("SELECT TOP 1 rut FROM RUT", (err, rowCount) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
    } else {
      console.log(`${rowCount} fila(s) devuelta(s)`);
    }
    connection.close();
  });

  request.on('row', (columns) => {
    columns.forEach(column => {
      console.log(column.value);
    });
  });

  connection.execSql(request);
}

connectToDatabase();