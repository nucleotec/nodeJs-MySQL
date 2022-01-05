const express = require('express');
const bodyParser = require('body-parser');


//criar o express app
const app = express();


//Porta do serviço
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

// define um rota padrao

app.get('/',(req, res) => {
    res.send("Hello!!!")
});

//Require employee routes

const employeeRoutes = require('./src/routes/employee.routes')

//utilizando o middleware

app.use('/api/v1/employees', employeeRoutes)

//Ouvir
app.listen(port, ()=>{
    console.log(`Server online na porta ${port}`);
})