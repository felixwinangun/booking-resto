const { Restaurant } = require('../models/');
const { UserRestaurant } = require('../models/');
const session = require('../helpers/session');

class Controller {
    static findAll(req, res) {
        Restaurant.findAll()
            .then(result => {
                res.render("restaurant", { data: result || [] });
            })
            .catch(e => res.send(e));
    }

    static search(req, res) {
        let restaurantId = req.params.restaurantId;
        Restaurant.findByPk(restaurantId)
            .then(result => {
                res.render("restaurant-book", { data: result || null });
                // res.send(result); // harusnya view detail + form buat book juga
            })
            .catch(e => res.send(e));
    }

    static book(req, res) {
        let userId = session.getUserId(req);
        let data = {
            UserId: userId,
            RestaurantId: req.params.restaurantId,
            reservation_date: req.body.reservation_date
        }
        UserRestaurant.create(data)
            .then(result => {
                res.redirect("/user/book")
            })
            .catch(e => res.send(e));
    }
}

module.exports = Controller;
