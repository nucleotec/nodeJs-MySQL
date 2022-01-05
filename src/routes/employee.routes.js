const express = require('express');

const router = express.Router();

const employeeController =   require('../controllers/employee.controller');

//retorna todos os dados
router.get('/', employeeController.findAll);

//cria os dados

router.post('/', employeeController.create);

//retorna um unico dado por id

router.get('/:id', employeeController.findById);

//faz o update dos dados pelo referido id

router.put('/:id', employeeController.update);

//deleta o dado pelo referido id

router.delete('/:id', employeeController.delete);

module.exports = router;