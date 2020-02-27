const { User } = require('../models/');
const { UserRestaurant } = require('../models/');
const { Restaurant } = require('../models/');
const session = require('../helpers/session');

class Controller {
    static findBook(req, res) {
        let userId = session.getUserId(req);
        UserRestaurant.findAll({
            where: {
                UserId: userId
            },
            include: [Restaurant],
            order: [
                ['createdAt', 'DESC']
            ]
        })
            .then(result => {
                res.render("booking", { data: result });
            })
            .catch(e => res.send(e));
    }

    static cancelBooking(req, res) {
        let userRestaurantId = req.params.userRestaurantId;
        let data = {
            cancelledAt: new Date,
            status: 4
        }
        UserRestaurant.update(data, {
            where: {
                id: userRestaurantId
            }
        })
            .then(result => {
                res.redirect("/user/book");
            })
            .catch(e => res.send(e));
    }

    static getRate(req, res) {
        let urId = +req.params.urId;

        UserRestaurant.findAll({
            where: {
                id: urId
            },
            include: [Restaurant]
        })
            .then(result => {
                console.log(result[0].dataValues);
                res.render("rating", { data: result[0].dataValues });
            })
            .catch(e => {
                res.send(e)
            });
    }

    static rate(req, res) {
        let urId = req.params.urId;
        let data = {
            rating: req.body.rate
        }
        UserRestaurant.update(data, {
            where: {
                id: urId
            }
        })
            .then(result => {
                res.redirect("/user/book");
            })
            .catch(e => res.send(e));
    }
}

module.exports = Controller;
