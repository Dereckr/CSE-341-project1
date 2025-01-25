const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', validation.saveContact, usersController.createUser);

router.put('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
