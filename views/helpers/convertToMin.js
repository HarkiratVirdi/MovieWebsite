module.exports = (str) => {
  console.log(str);
  let runtime = str;
  if (str.includes(":")) {
    runtime = str.split(":");
    runtime = parseInt(runtime[0]) * 60 + parseInt(runtime[1]);
    console.log(runtime);
    return runtime;
  } else {
    return str;
  }
};
