const shoppingCart = document.querySelector(".fa-shopping-cart");
const Cartbtn = document.querySelector("a.btn.heading");
const btnAddToCart = document.querySelector("button#addCart");


const changeAddToAdded = (movie) => {

  try {
      const found = document.querySelector(`[data-id="${movie}"]`);
      if (found) {
        found.id = "";
        found.id = "removeFromCart";

        found.children[0].className = "far fa-check-circle";
        found.children[0].style.color = "orange";
      }
  } catch (error) {
      
  }
};

const showLoginAndRegister = (movie) => {
  const found = document.querySelector(`[data-id="${movie}"]`);

  if(found && found.nextElementSibling)
  {
    console.log("found in show login and register", found);
    found.nextElementSibling.classList.add('show');
    setTimeout(() => {
      found.nextElementSibling.classList.remove("show");
    }, 3000);
  }
}

const changeCartNumber = (number) => {
    let styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = `.fa-shopping-cart:after {content: "${number}" !important;}`;

    if(number === 0 && Cartbtn)
    {
      Cartbtn.innerHTML = "Shop";
      Cartbtn.href = "/list";
    }
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

    let movieId = findValueFromAttribute(e);
 
    
    if(movieId && e.target.id === "addCart" || e.target.parentElement.id === "addCart"){
       await fetchFromCart(movieId);
    }
}

const fetchFromCart = (movieId) => {
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

    console.log("content from response", content);
    if(content.CartMovies)
    {
      changeIcon(content);
      changeCartNumber(content.CartMovies.length);
    }else{
      showLoginAndRegister(movieId);
    }

    try {
      console.log("location.href", window.location.pathname);
      console.log("btn link", "/list/", btnAddToCart.getAttribute("data-id"));
       if (
         window.location.pathname ===
         "/list/" + btnAddToCart.getAttribute("data-id")
       ) {
         
         const isItemInCart = content.CartMovies.find(
           (el) => el === btnAddToCart.getAttribute("data-id")
         );
            console.log("is itemt there", isItemInCart);
         if (isItemInCart) {
           btnAddToCart.innerHTML = "Added In Cart";
         } else {
           btnAddToCart.innerHTML = "Add To Cart";
         }
       }
    } catch (error) {
      console.log("error", error);
    }
   

  })();
};
fetchFromCart();

const checkForAddItem = () => {
const addToCartItems = document.querySelectorAll("#addCart");

addToCartItems.forEach((e) => {
  console.log("addCart", e);
  e.addEventListener('click', addItemToCart);
})
}
checkForAddItem();


const changeAddedToRemove = (movie) => {
 
 try {
     const found = document.querySelector(`[data-id="${movie}"]`);
     if (found) {
       found.id = "";
       found.id = "addCart";
       found.children[0].className = "fas fa-plus-circle";
       found.children[0].style.color = "white";
     }
 } catch (error) {
   
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
}

const checkIfOnCartPage = () => {
  let isCartPage = false;
  if(window.location.pathname === "/cart")
  {
    isCartPage = true;
  }
  return isCartPage;
}

const removeItemFromCartById = async(e) => {
   let movieId = findValueFromAttribute(e);

if(e.target.id === "removeFromCart" || e.target.parentElement.id === "removeFromCart")
{
   await fetchRemoveFromCart(movieId);
   await fetchFromCart();

  if(checkIfOnCartPage())
  {
  console.log("e",e);

if(e.target.classList.contains('fa-plus-circle'))
{
  console.log("e is cirlce", e.target);

  const parElement = e.target.parentElement.parentElement.parentElement.parentElement;

  parElement.classList.add("hidden");

  setTimeout(() => {
    parElement.remove();
  }, 600);
}else if(e.target.id === "addCart")
{
  console.log("e is addCart", e.target);
  const parElmt = e.target.parentElement.parentElement.parentElement;

  parElmt.classList.add("hidden");
  setTimeout(() => {
      parElmt.remove();
  }, 600);
}}

  }
}



const checkForRemoveItem = () => {
        const removeItem = document.querySelectorAll("#removeFromCart");

        console.log("removeitems", removeItem);
    if(removeItem)
    {
        removeItem.forEach((e) => {
            e.addEventListener('click', removeItemFromCartById);
        })
    }
}

// const changeInnerText = async(e) => {
//   const findId = findValueFromAttribute(e);
//   console.log("id", findId);

//   const content = await fetchFromCart();
//   console.log("content", content);
//   const isIdInCart = content.CartMovies.forEach(el => el === findId);
  
//   if(isIdInCart)
//   {
//     btnAddToCart.innerHTML = "Added In Cart";
//   }else{
//     btnAddToCart.innerHTML = "Add To Cart";
//   }
// }

// btnAddToCart.addEventListener("click", changeInnerText);