let isPasswordMatch = (obj, pass) => {
    if(obj.dataValues.password == pass) return true;
    return false;
}

module.exports = isPasswordMatch;
