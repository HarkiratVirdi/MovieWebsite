
const addToCart = document.querySelectorAll("#addCart");

console.log(addToCart, "addToCart");

const changeAddToAdded = (movie) => {
    const found = document.querySelector(`[data-id="${movie}"]`);

    if(found)
    {
        found.children[0].className = "far fa-check-circle";
    }
};



const addItemToCart = (e) => {
    console.log("e",e);
    let movieId = "";
    if(e.target.attributes["data-id"])
    {
        movieId = e.target.getAttribute("data-id");
    }else{
       movieId = e.target.parentElement.getAttribute("data-id");
    }

    console.log("movie id found", movieId);
    
    if(movieId){
       (async () => {
         const response = await fetch("/purchaseMovie", {
           method: "POST",
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
           },
           body: JSON.stringify({movieId}),
         });
         const content = await response.json();

         console.log(content);

         content.CartMovies.forEach(el => {
             changeAddToAdded(el);
         })
       })();
    }
}



addToCart.forEach((e) => {
    e.addEventListener('click', addItemToCart);
})