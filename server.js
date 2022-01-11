const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

//criar o express app
const app = express();

/* Configure cors */
app.set('secret', 'aplication');

const corsOptions = {
    exposedHeaders: ['x-access-token']
};
app.use(cors(corsOptions));
//Porta do serviço
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

// define um rota padrao

app.get('/',(req, res) => {
    res.send("API OK!!!")
});

//Require employee routes

const employeeRoutes = require('./src/routes/employee.routes')

//utilizando o middleware

app.use('/api/v1/employees', employeeRoutes)

//Ouvir
app.listen(port, ()=>{
    console.log(`Server online na porta ${port}`);
})
