const express = require('express')
const router = express.Router()

const PizzaController = require('../controllers/PizzaController')

router.get('/', PizzaController.listarPizzas)


router.get('/:id', PizzaController.mostrarPizza)


module.exports = router;