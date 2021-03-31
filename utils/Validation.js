const validator = require("validator");

module.exports.validateEmail = (email) => {
  return validator.isEmail(email);
};

module.exports.validatePassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    password
  );
};

module.exports.validateName = (name) => {
  return /^[a-z ,.'-]+$/i.test(name);
}

module.exports.validateLogin = (email, password) =>
{
 const resEmail =  this.validateEmail(email);
const resPassword = this.validatePassword(password);

  return resEmail && resPassword;
}

module.exports.validFileType = (file) => {
  const filetype = file.mimetype;
  const regexEx = /image/ig;
  const isImage = regexEx.test(filetype);
  return isImage;
}
