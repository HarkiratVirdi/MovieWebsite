const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  orderItems: [
    {
      movieId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Movie",
      },
      name: {
        type: String,
        required: true,
      },
        img_s: {
          type: String,
          required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
      },
  ],
  paid: {
      type: Boolean,
      default: false,
  },
  dateCreated: {
      type: Date,
      default: Date.now(),
  },
  taxPrice: {
      type: Number,
      required: true,
      default: 0,
  },
  totalPrice: {
      type: Number,
      required: true,
  },
  paidOn: {
      type: Date,
  }
});


const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;