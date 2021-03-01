const validator = require("validator");

module.exports.validateEmail = (email) => {
  return validator.isEmail(email);
};

module.exports.validateName = (name) => {
  return validator.isAlpha(name);
};

module.exports.validatePassword = (password) => {
  return validator.isStrongPassword(password);
};
