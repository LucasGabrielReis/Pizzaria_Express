let Pizza = [
    {
        nome: 'Pepperoni',
        ingredientes: ['Pepperoni','Queijo','Orégano'],
        valor: 50,
        tamanho: 'Grande'
    },
    {
        nome: 'Marguerita',
        ingredientes: ['Queijo', 'Tomate', 'Manjericão','Orégano'],
        valor: 45,
        tamanho: 'Grande'
    }

]

const listarPizzas = (req, res) =>{
    return res.send(Pizza)
}

const mostrarPizza = (req, res) =>{
    let {id} = req.params
    return res.send(Pizza[id])
}

module.exports = {listarPizzas, mostrarPizza}