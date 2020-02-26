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
            include: [Restaurant]
        })
        .then(result => {
            res.render("booking", { data: result || result.length || [] });
        })
        .catch(e => res.send(e));
    }
}

module.exports = Controller;
