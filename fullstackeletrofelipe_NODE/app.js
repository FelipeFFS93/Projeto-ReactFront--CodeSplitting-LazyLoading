const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')

//config ejs
app.set('view engine', 'ejs')

//config body-parser
app.use(bodyParser.urlencoded({ extended:true}))

app.get('/', cors(), (req,res,next) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'full_stack_eletrofelipe'
    })

    connection.query("select * from produto", (error,result) => {
        res.json(result)
    })
})

app.listen(1910, () => {
    console.log('Servidor Funcionando');
})