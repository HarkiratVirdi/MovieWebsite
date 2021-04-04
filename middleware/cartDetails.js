const movieModel = require("../models/movieModel");
const cartDetails = async(req, res, next) => {
     const {cart} = res.locals.user;

   const movieIds = cart.filter(function (el, ind) {
     return ind % 2 === 0;
   });

  const moviesInCart = await movieModel.find(
    {
      _id:{
        $in: movieIds,
      }
    }
  ).lean();

  
  if(moviesInCart){
    res.locals.moviesInCart = moviesInCart
    const findBuyingOrRentInArray = (movieId) => {
        const index = cart.indexOf(`${movieId}`);
        const isBuying = cart[index + 1];
        return isBuying === "Buy" ? true : false;
      }
    
      let subtotal = 0;

      moviesInCart.forEach((el) => {
        el.isBuying = findBuyingOrRentInArray(el._id);
        if(el.isBuying)
        {
          subtotal += el.buy;
        }else{
          subtotal += el.rent;
        }
      })

      const tax = parseFloat((subtotal * (13/100)).toFixed(2));
      const total = parseFloat(subtotal) + parseFloat(tax);
      
    //   res.locals.subtotal = subtotal;
    //   res.locals.tax = tax;
      res.locals.cartDetails = {
        moviesInCart,
        tax,
        subtotal,
        total,
      };
      next();
    }
}

module.exports = cartDetails;