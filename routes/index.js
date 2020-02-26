const router = require('express').Router();
const RestaurantController = require('../controller/restaurantController');
const UserController = require('../controller/userController');
const AuthController = require('../controller/authController');

router.get("/restaurant", AuthController.isLogin, RestaurantController.findAll); // munculin tabel restaurant yang kolomnya nama resto dan action view
router.post("/restaurant/book/:restaurantId", AuthController.isLogin, RestaurantController.book);
router.get("/restaurant/:restaurantId", AuthController.isLogin, RestaurantController.search);
router.get("/user/book", AuthController.isLogin, UserController.findBook);

router.get("/login", AuthController.getLogin);
router.post("/login", AuthController.login);

router.get("/logout", AuthController.logout);
router.get("/register", AuthController.getRegister);
router.post("/register", AuthController.register);

module.exports = router;