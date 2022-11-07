const express = require('express')
const router = express.Router()
const {isAuthenticatedUser} = require('../middleware/auth')

const {
    getUsers,
    register,
    getUser,
    login,
    updateName
} = require('../controllers/userControllers');

router.route('/users').get(getUsers);
router.route('/user/register').post(register);
router.route('/user/login').post(login);

router.route('/user/:id')
    .get(getUser)
    .post(isAuthenticatedUser,updateName)


module.exports = router;