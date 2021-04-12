const userSession = (req, res, next) => {
  if (req.session.userInfo) {
    res.locals.user = req.session.userInfo;
    if(req.session.userInfo.cart){
      res.locals.user.cart = req.session.userInfo.cart;
    }else{
      req.session.userInfo.cart = [];
    }
    }
  next();
};

const determineMethod = (req, res, next) => {
  if(req.query.method === "DELETE")
  {
    req.method = "DELETE";
  }else if(req.query.method === "PUT")
  {
    req.method = "PUT";
  }else if(req.query.method === "POST")
  {
    req.method = "POST";
  }
  next();
}

module.exports = {userSession, determineMethod};
