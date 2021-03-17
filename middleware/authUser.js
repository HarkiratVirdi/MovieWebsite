const authUser = (req, res, next) => {
    if(req.session.userInfo)
    {
     res.locals.user = req.session.userInfo;   
    }
    next();
}


module.exports = authUser;