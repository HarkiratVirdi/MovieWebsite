const adminUser = (req, res, next) => {
    res.locals.user.isAdmin ? next() : res.redirect("/user/login");
}

module.exports = adminUser;