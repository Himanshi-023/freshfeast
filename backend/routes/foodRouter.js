import express from 'express'
import { addFood ,listFood, removeFood } from '../controller/foodController.js'
import multer from 'multer'
 const foodRouter=express.Router(); //for dif methods 

//image storage engine 
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()} ${file.originalname}`)
    }
})


const upload=multer({storage:storage})   //middleware  The upload.single("image") middleware handles file uploads.

foodRouter.post("/add",upload.single("image"), addFood)
 
foodRouter.get("/list"  , listFood)

foodRouter.post("/remove",removeFood )

export default foodRouter;