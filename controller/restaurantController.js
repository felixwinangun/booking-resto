const { Restaurant } = require('../models/');
const { UserRestaurant } = require('../models/');
const session = require('../helpers/session');
const { Op } = require("sequelize");

class Controller {
    static findAll(req, res) {
        Restaurant.findAll({
            order: [
                ['createdAt', 'ASC']
            ]
        })
            .then(result => {
                res.render("restaurant", { data: result || [] });
            })
            .catch(e => res.send(e));
    }

    static search(req, res) {
        let restaurantId = req.params.restaurantId;
        let avg = 0;
        UserRestaurant.findAll({
            where: {
                // RestaurantId: restaurantId
                [Op.and]: [
                    { RestaurantId: restaurantId },
                    {
                        rating: {
                            [Op.not]: null
                        }                        
                    }
                ]
            }
        })
        .then(result => {
            // console.log(result);
            let totalRating = 0;
            let totalRestaurant = result.length;
            result.forEach(el => {
                totalRating += +el.dataValues.rating;
            });
            if(totalRestaurant) avg = totalRating / totalRestaurant;
            return Restaurant.findByPk(restaurantId)
        })
        .then(result => {
            res.render("restaurant-book", { data: result, rating:avg.toFixed(2) });
        })
        .catch(e => res.send(e.message));
    }

    static book(req, res) {
        let userId = session.getUserId(req);
        let data = {
            UserId: userId,
            RestaurantId: req.params.restaurantId,
            reservation_date: req.body.reservation_date,
            person: req.body.person
        }
        UserRestaurant.create(data)
            .then(result => {
                res.redirect("/user/book")
            })
            .catch(e => res.send(e));
    }
}

module.exports = Controller;
