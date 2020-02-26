const login = (req, userId) => {
    req.session.isLogin = userId;
}

const logout = (req) => {
    req.session.destroy();
}

const isLogin = (req) => {
    if(req.session.isLogin) return true;
    return false;
}

const getUserId = (req) => {
    if(req.session.isLogin) return req.session.isLogin
    return null;
}

module.exports = {
    login,
    logout,
    isLogin,
    getUserId
};
