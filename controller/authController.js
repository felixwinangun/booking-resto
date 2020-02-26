const { User } = require('../models/');
const isPasswordMatch = require('../helpers/isPasswordMatch');
const session = require('../helpers/session');

class Controller {
    static getLogin(req, res) {
        res.render("login");
    }

    static login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        console.log(username);
        User.findOne({
            where: {
                username: username
            }
        })
            .then(result => {
                if (isPasswordMatch(result, password)) {
                    session.login(req, result.dataValues.id);
                    res.redirect("/restaurant");
                }
                else res.redirect("/login");
            })
            .catch(e => res.send(e));
    }

    static logout(req, res) {
        session.logout(req);
        res.redirect("/login")
    }

    static isLogin(req, res, next) {
        if(session.isLogin(req)){
            next();
        } else{
            res.redirect("/login");
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
                console.log(result);
                session.login(req, result.dataValues.id)
                res.redirect("/restaurant");
            })
            .catch(e => {
                console.log(e.message);
                res.render("register", { data: data, message: e.errors[0].message, success: false })
            });
    }
}

module.exports = Controller;
