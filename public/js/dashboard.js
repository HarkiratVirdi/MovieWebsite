const dashboardName = document.querySelector(".dashboard__name");

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("name");

console.log(myParam);

dashboardName.innerHTML = `Hi, ${myParam}`;