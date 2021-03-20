const adminUser = (req, res, next) => {
    console.log("check admin");
    res.locals.user.isAdmin ? next() : res.redirect("/user/login");
}

module.exports = adminUser;