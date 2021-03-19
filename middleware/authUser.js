const authUser = (req, res, next) => {
    req.session.userInfo ? next() : res.redirect("/user/login");
}

module.exports = authUser;
