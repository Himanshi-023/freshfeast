import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding to cart" });
    }
};



const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }
        let cartData = userData.cartData || {};
        if (cartData[req.body.itemId]) {
            if (cartData[req.body.itemId] > 1) {
                cartData[req.body.itemId] -= 1;
            } else {
                delete cartData[req.body.itemId];
            }
            await userModel.findByIdAndUpdate(req.body.userId, { cartData });
            res.json({ success: true, message: "Removed from Cart" });
        } else {
            res.json({ success: false, message: "Item not found in cart" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing from cart" });
    }
};

const getCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }
        res.json({ success: true, cartData: userData.cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching cart" });
    }
};


export { addToCart, removeFromCart, getCart };



