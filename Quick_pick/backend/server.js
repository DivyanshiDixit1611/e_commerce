import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/Cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import { v2 as cloudinary } from "cloudinary";
import orderRouter from './routes/orderRoute.js';
// App config
const app=express();
const port=process.env.PORT||4000
 
//middlewares
app.use(express.json())
app.use(cors());
connectCloudinary() ;

app.use('/api', async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ success: false, message: 'Database connection failed' });
    }
});

//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter)
 app.get('/',(req,res)=>{
    res.send('Api working')
 })

export default app
