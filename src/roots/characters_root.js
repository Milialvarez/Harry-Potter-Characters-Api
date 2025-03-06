const express = require('express');

const router = express.Router();

const characters_controller = require('../controllers/characters_controller');

router.get('/', characters_controller.getCharacters);
router.get('/:id', characters_controller.getCharactersById);

module.exports = router;