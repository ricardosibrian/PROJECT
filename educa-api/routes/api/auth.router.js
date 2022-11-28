const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth.controller');
const runValidations = require('../../validators/index.midleware');
const { registerValidator } = require('../../validators/auth.validators');
const { authentication } = require('../../middlewares/auth.middlewares');

router.post('/signup', 
    registerValidator,
    runValidations,
    authController.register
);

router.post('/signin',
    authController.login
);

router.get("/whoami", 
    authentication, 
    authController.whoami
);


module.exports = router;