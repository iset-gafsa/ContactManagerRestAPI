var express = require('express');
var router = express.Router();

const controller = require('../controllers/controllers');

router.route('/contacts')
    .get(controller.getContacts)
    .post(controller.createContact)
    .put(controller.updateContact)
    .delete(controller.deleteContact);

//read specific user
router.route('/contacts/:id')
    .get(controller.readContact);

module.exports = router;