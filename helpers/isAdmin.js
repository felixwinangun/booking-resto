const isAdmin = (obj) => {
    if (obj.dataValues.role == "admin") {
        return true;
    }
    return false;
}

module.exports = isAdmin;
