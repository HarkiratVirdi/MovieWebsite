const dashboardName = document.querySelector(".dashboard__name");

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("firstname");
const myParam2 = urlParams.get("lastname");

console.log(myParam);

dashboardName.innerHTML = `Hi, ${myParam} ${myParam2}` ;