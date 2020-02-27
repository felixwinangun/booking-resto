const { User } = require('../models/');
const isPasswordMatch = require('../helpers/isPasswordMatch');
const session = require('../helpers/session');
const isAdmin = require('../helpers/isAdmin');

class Controller {
    static getLogin(req, res) {
        res.render("login");
    }

    static login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        User.findOne({
            where: {
                username: username
            }
        })
            .then(result => {
                if (isPasswordMatch(result, password)) {
                    let admin = isAdmin(result);
                    session.login(req, result.dataValues.id, admin);
                    res.redirect("/restaurant");
                }
                else res.redirect("/login");
            })
            .catch(e => res.send(e));
    }

    static logout(req, res) {
        session.logout(req);
        res.redirect("/")
    }

    static isLogin(req, res, next) {
        if (session.isLogin(req)) {
            next();
        } else {
            res.redirect("/login");
        }
    }

    static isLoginHome(req, res, next) {
        // if (session.isLogin(req)) {
        //     if (session.isAdmin(req)) {
        //         res.render("home-admin");
        //     } else {
        //         next();
        //     }
        // } else {
        //     res.render("partials/header-home")
        // }
        if (session.isLogin(req)) {
            res.redirect("/restaurant")
        } else {
            res.render("home")
        }
    }

    static getRegister(req, res) {
        res.render("register", { data: null, message: null, success: null });
    }

    static register(req, res) {
        let data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phone_number: req.body.phone_number
        }
        User.create(data)
            .then(result => {
                session.login(req, result.dataValues.id)
                res.redirect("/restaurant");
            })
            .catch(e => {
                res.render("register", { data: data, message: e.errors[0].message, success: false })
            });
    }

    static home(req, res) {
        res.redirect("/restaurant")
    }

    static homeNotLogin(req, res) {
        res.render("home")
    }

    static isAdmin(req, res, next) {
        if (session.isAdmin(req)) {
            res.redirect("/admin/confirm")
        } else {
            next();
        }
    }
}

module.exports = Controller;
