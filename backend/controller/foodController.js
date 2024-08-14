
import foodModel from '../models/foodModel.js';
import fs from 'fs'


const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })
    try {
        await food.save(); //The food.save() method saves the data to the database.  interacts with the MongoDB database to store the new food item.
        res.json({ success: true, message: "Food Addded" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}


///ALL FOOD LIST 
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }

}



//REMOVE FOOD 
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);  //find  
        fs.unlink(`uploads/${food.image} `, () => { })  //for delete from folder 
        await foodModel.findByIdAndDelete(req.body.id);  //for delete from database 
        res.json({ success: true, message: "food removed" });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" });
    }
}


export { addFood, listFood, removeFood };