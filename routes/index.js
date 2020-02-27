const router = require('express').Router();
const RestaurantController = require('../controller/restaurantController');
const UserController = require('../controller/userController');
const AuthController = require('../controller/authController');
const AdminController = require('../controller/adminController');

router.get("/", AuthController.isLoginHome);

router.get("/restaurant", AuthController.isLogin, AuthController.isAdmin, RestaurantController.findAll);
router.post("/restaurant/book/:restaurantId", AuthController.isLogin, RestaurantController.book);
router.get("/restaurant/:restaurantId", AuthController.isLogin, RestaurantController.search);

router.get("/user/book", AuthController.isLogin, UserController.findBook);
router.get("/user/book/cancel/:userRestaurantId", AuthController.isLogin, UserController.cancelBooking);
router.get("/user/book/rate/:urId", AuthController.isLogin, UserController.getRate);
router.post("/user/book/rate/:urId", AuthController.isLogin, UserController.rate);

router.get("/login", AuthController.getLogin);
router.post("/login", AuthController.login);

router.get("/admin/confirm", AdminController.findAll);
router.get("/admin/confirm/approve/:urId", AdminController.approve);
router.get("/admin/confirm/reject/:urId", AdminController.reject);

router.get("/logout", AuthController.logout);
router.get("/register", AuthController.getRegister);
router.post("/register", AuthController.register);

module.exports = router;