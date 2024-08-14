import mongoose from "mongoose";


const foodschema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },

})



const foodModel = mongoose.models.food || mongoose.model("food", foodschema)//This creates a Mongoose model named "food" based on the foodschema. If a model named "food" already exists in Mongoose (e.g., from a previous import), it uses that existing model. Otherwise, it creates a new model using the defined schema.

export default foodModel;