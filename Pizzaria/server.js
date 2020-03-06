const express = require('express')
const app = express()
const pizzasRoutes = require('./routes/pizzaRoutes')

app.use('/pizzas', pizzasRoutes)
app.use('/', (req, res) =>{
    res.send({message:'Bem Vindo!'})
})

app.listen(3000, () => console.log("Servidor Iniciado"))