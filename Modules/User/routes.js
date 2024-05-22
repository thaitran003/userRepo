const express = require('express');
const router = express.Router();

const UserService = require("./service")

router.get('/', UserService.all);
router.post('/', UserService.store);
router.get('/:id', UserService.index);


module.exports = router;