

const shoppingCart = document.querySelector(".fa-shopping-cart");


const changeAddToAdded = (movie) => {
  const found = document.querySelector(`[data-id="${movie}"]`);
  if (found) {
    found.id = "";
    found.id = "removeFromCart";
    found.children[0].className = "far fa-check-circle";
    found.children[0].style.color = "orange";
  }
 
};



const changeCartNumber = (number) => {
    let styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = `.fa-shopping-cart:after {content: "${number}" !important;}`;
}

const changeIcon = (content) => {
    content.CartMovies.forEach((el) => {
      changeAddToAdded(el);
    });
     checkForRemoveItem();
     checkForAddItem();
}

const findValueFromAttribute = (e) => {
   let movieId = '';
    if (e.target.attributes["data-id"]) {
     movieId = e.target.getAttribute("data-id");
   } else {
     movieId = e.target.parentElement.getAttribute("data-id");
   }

   return movieId;
}

const addItemToCart = async(e) => {
    console.log("e",e);

    let movieId = findValueFromAttribute(e);
 
    console.log("movie id found", movieId);
    
    if(movieId && e.target.id === "addCart" || e.target.parentElement.id === "addCart"){
       await fetchFromCart(movieId);
    }
}

const fetchFromCart = (movieId) => {
  console.log("fetching from cart to Add*****", movieId);
  (async () => {
    const response = await fetch("/purchaseMovie", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId }),
    });
    const content = await response.json();

    changeIcon(content);
    changeCartNumber(content.CartMovies.length);
    // checkForRemoveItem();
  })();
};
fetchFromCart();

const checkForAddItem = () => {
const addToCartItems = document.querySelectorAll("#addCart");
console.log("addToCartItems", addToCartItems);
addToCartItems.forEach((e) => {
    e.addEventListener('click', addItemToCart);
})
}
checkForAddItem();


const changeAddedToRemove = (movie) => {
  const found = document.querySelector(`[data-id="${movie}"]`);
  if (found) {
    found.id = "";
    found.id = "addCart";
    found.children[0].className = "fas fa-plus-circle";
    found.children[0].style.color = "white";
  }
};

const fetchRemoveFromCart = async(movieId) => {
    const response = await fetch("/removeItemFromCart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId }),
    });
    const content = await response.json();

    changeAddedToRemove(content.movieId);
    console.log("content", content);
}

const removeItemFromCartById = async(e) => {
    console.log("removeItem from Cart by Id", e);
   let movieId = findValueFromAttribute(e);

if(e.target.id === "removeFromCart" || e.target.parentElement.id === "removeFromCart")
{
   await fetchRemoveFromCart(movieId);
   await fetchFromCart();
}
}



const checkForRemoveItem = () => {
        const removeItem = document.querySelectorAll("#removeFromCart");
      // checkForAddItem();
    if(removeItem)
    {
        removeItem.forEach((e, i) => {
            console.log("index for removing",i, e);
            e.addEventListener('click', removeItemFromCartById);
        })
    }
}

