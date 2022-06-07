const sqlite = require('sqlite3');

const database = new sqlite.Database('./database.db')
database.run("CREATE TABLE usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone INTEGER)")
database.run("INSERT INTO usuarios (nome, email) VALUES ('Luca Giberti', 'luca.sarhan02@gmail.com', '11993066858')")

app.get('/usuario',(req, res) => {
    database.get("SELECT * FROM usuarios", (err, rows) => {
        res.json(rows)
        //console.log(rows)
    })
    //res.send("Usuarios")
})

app.listen(3000, ()=> {
    console.log('servidor esta ok.')
})

app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM tbUser ORDER BY title COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
  });
  
  // Insere um registro (é o C do CRUD - Create)
  app.post('/userinsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
  });
  
  // Atualiza um registro (é o U do CRUD - Update)
  app.post('/userupdate', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    sql = "UPDATE tbUser SET title = '" + req.body.title + "' WHERE userId = " + req.body.userId;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
  });
  
  // Exclui um registro (é o D do CRUD - Delete)
  app.post('/userdelete', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    sql = "DELETE FROM tbUser WHERE userId = " + req.body.userId;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
  });
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });