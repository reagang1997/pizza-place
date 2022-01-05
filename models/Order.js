const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [],
    price: Number,
    points: Number,
    status: {type: String, default: "Cooking"}
})


const Order = mongoose.model("Order", orderSchema);
module.exports = Order;