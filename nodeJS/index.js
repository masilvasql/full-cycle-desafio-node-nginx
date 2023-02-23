
import express from "express"
const app = express()

const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",
}

import mysql from "mysql"

const connection = mysql.createConnection(config)

app.use(express.json())

const sqlCreate = `CREATE TABLE IF NOT EXISTS people (name varchar(255), ID int not null AUTO_INCREMENT, PRIMARY KEY (ID))`
connection.query(sqlCreate)

const sql = `INSERT INTO people(name) values('Marcelo')`
connection.query(sql)


app.get("/", async (req, res) => {
    let resultado = await findAllPeople()

    let html = "<h1>Hello Full Cycle</h1>"
    html += "<table>"
    resultado.forEach(element => {
        html += `<tr><td>${element.ID} - ${element.name}</td></tr>`
    });
    html += "</table>"
    return res.status(200).send(html)
})


function findAllPeople() {
    return new Promise(resolve => {
        const sql = "SELECT * FROM people"
        connection.query(sql, (err, results, fields) => {
            if (err) {
                throw err
            }
            resolve(results)
        })
    })
}

app.listen(3000, () => {
    console.log("Rodando!!!")
})