const userSession = (req, res, next) => {
  if (req.session.userInfo) {
    res.locals.user = req.session.userInfo;
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
  }
  next();
}

module.exports = {userSession, determineMethod};
