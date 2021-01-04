const express = require('express')
const router = express.Router()
const employeeController = require('../controller/employee.controller');
// Retrieve all employees
router.get('/', employeeController.findAll);
// Create a new employee
router.post('/', employeeController.create);
// Retrieve a single employee with id
router.get('/:id', employeeController.findById);

module.exports = router