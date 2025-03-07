const express = require('express');

const router = express.Router();

const characters_controller = require('../controllers/characters_controller');

router.get('/', characters_controller.getCharacters);
router.get('/:id', characters_controller.getCharactersById);

router.post('/', characters_controller.postCharacter);
router.put('/:id', characters_controller.putCharacter);
router.delete('/:id', characters_controller.deleteCharacter);

module.exports = router;