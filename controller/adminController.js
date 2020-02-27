const { UserRestaurant } = require('../models');
const { Restaurant } = require('../models');
const randomTable = require('../helpers/randomTable');

class Controller {
    static findAll(req, res) {
        UserRestaurant.findAll({
            include: [Restaurant],
            where: {
                status: "0"
            }
        })
            .then((result) => {
                let data;
                if (result.length) {
                    data = result;
                } else {
                    data = [];
                }
                res.render("admin-confirm", { data })
            }).catch((err) => {
                // console.log(err.message);
                // console.log("================================");
                res.send(err);
            });
    }

    static approve(req, res) {
        let urId = req.params.urId;
        let data = {
            table_no: randomTable(),
            status: 1
        }
        UserRestaurant.update(data, {
            where: {
                id: urId
            }
        })
            .then((result) => {
                res.redirect("/admin/confirm");
            }).catch((err) => {
                res.send(err);
            });
    }

    static reject(req, res) {
        let urId = req.params.urId;
        let data = {
            status: 2
        }
        UserRestaurant.update(data, {
            where: {
                id: urId
            }
        })
            .then((result) => {
                res.redirect("/admin/confirm");
            }).catch((err) => {
                res.send(err);
            });
    }
}

module.exports = Controller;
