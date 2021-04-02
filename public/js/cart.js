const buyOrRent = document.querySelectorAll("#buyOrRent");

const getAttributeValue = (el) => {
    return el.target.getAttribute("data-id");
}



const updateCart = async(id, buyOrRent) => {
     const response = await fetch("/updateBuyOrRentInCart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, buyOrRent})
    });

    const content = await response.json();

    console.log("content from response ", content);
}

const isBuyingOrRenting = async(e) => {
    console.log(e);
     const buyOrRent = e.target.value;
    const id = getAttributeValue(e);
    console.log("id", id);
    await updateCart(id, buyOrRent);
}

buyOrRent.forEach((el) => {
    el.addEventListener("change", isBuyingOrRenting);
})