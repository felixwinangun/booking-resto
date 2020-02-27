const login = (req, userId, admin) => {
    req.session.isLogin = userId;
    if (admin) {
        req.session.isAdmin = true;
    }
}

const logout = (req) => {
    req.session.destroy();
}

const isLogin = (req) => {
    if (req.session.isLogin) return true;
    return false;
}

const isAdmin = (req) => {
    if (req.session.isAdmin) return true;
    return false;
}

const getUserId = (req) => {
    if (req.session.isLogin) return req.session.isLogin
    return null;
}

module.exports = {
    login,
    logout,
    isLogin,
    getUserId,
    isAdmin
};
