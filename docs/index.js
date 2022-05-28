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