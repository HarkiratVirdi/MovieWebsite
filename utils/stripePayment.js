const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripePayment = async(userData, orderDetails) => {
  stripe.customers
    .create({
      email: userData.email,
      source: "tok_visa",
      name: userData.name,
      address: {
        line1: "2183 Lake Shore Blvd W, Etobicoke",
        postal_code: "M8V 0B1",
        city: "Toronto",
        state: "Ontario",
        country: "Canada",
      },
    })
    .then((customer) => {
      return stripe.charges.create({
        amount: orderDetails.total * 100, // Charing Rs 25
        description: "Buy Movies",
        currency: "CAD",
        customer: customer.id,
      });
    })
    .then((charge) => {
        console.log("charge", charge);
        return true;
    })
    .catch((err) => {
        console.log("error", err);
        return false;
    }); 

};

module.exports = stripePayment;