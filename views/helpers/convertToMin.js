module.exports = (str) => {
  let runtime = str;
  if (str.includes(":")) {
    runtime = str.split(":");
    runtime = parseInt(runtime[0]) * 60 + parseInt(runtime[1]);
    return runtime;
  } else {
    return str;
  }
};
