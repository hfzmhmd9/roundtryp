const express = require('express')
const userController = require('../controllers/UserController')
const authController = require('../controllers/AuthController')

const router = express.Router()

router.post('/signup', authController.signUp)
router.post('/login', authController.login)

router.post('/forgotPassword', authController.forgotPassword)
router.patch('/resetPassword/:token', authController.resetPassword)

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
)

router.patch('/updateMe', authController.protect, userController.updateMe)
router.delete('/deleteMe', authController.protect, userController.deleteMe)

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser)
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

module.exports = router
