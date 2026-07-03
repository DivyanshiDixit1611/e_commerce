import mongoose from "mongoose";
let connectionPromise;

const connectDB=async()=>{
    if (mongoose.connection.readyState === 1) {
        return;
    }

    if (connectionPromise) {
        return connectionPromise;
    }

    mongoose.connection.on('connected',()=>{
        console.log("DB Connected");
    })

    connectionPromise = mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
        .catch((error) => {
            connectionPromise = null;
            console.log(error.message);
            throw error;
        });

    return connectionPromise;
}
export default  connectDB;
