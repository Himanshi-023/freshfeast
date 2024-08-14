import cors from 'cors'   //cors: This is a middleware to handle Cross-Origin Resource Sharing (CORS). It enables cross-origin requests, which is crucial if your backend is being accessed by a frontend running on a different domain or port.
import express from 'express'//express: This is the Express.js library, which simplifies creating a server and handling HTTP requests.
import { connectdb } from './config/dbconnect.js';
import foodRouter from './routes/foodRouter.js';
import userRouter from './routes/userRoutes.js';
import "dotenv/config"
import cartRouter from './routes/cartRouter.js';
import orderRouter from './routes/orderRouter.js';

  
//appconfig 
const app=express();//This creates an instance of an Express application. It's the central object for configuring your server and defining routes
const port=4000;// This sets the port number on which the server will listen for incoming requests. Port 4000 is chosen here, but you can use any available port.

//middleware
app.use(express.json())//This helps your server understand and handle data that comes in a special format called JSON. JSON is commonly used to send data between servers and web apps.
app.use(cors())  //his middleware enables CORS for all routes. It allows your server to accept requests from other origins (domains) which is essential for frontend-backend communication if they're hosted on different domains or ports.



//db connected 
connectdb();

app.get("/",(req,res)=>{  //The "/" is the root path (the home page of your server). When someone visits this path, they’ll get a response.
    res.send("API IS WORKING ")
})


//api endpoints
app.use("/api/food",foodRouter)//The frontend makes a GET request to http://localhost:4000/api/food to fetch food data.The server routes this request to the foodRouter 
app.use("/images" ,express.static("uploads")) 
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)




//Starting the Server
app.listen(port,()=>{///This starts your server and makes it listen for requests at the address you specified (http://localhost:4000).
    console.log(`server  started on  http://localhost:${port}`)
})





