import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
 
const connectDB = async () =>{
   try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`mongodb connection !! DB HOST: ${connectionInstance.connection.host}`);

   //  app.on("error", () =>{
   //    console.log("ERRR", error)
   //    throw error 
   //   })

   } catch (error) {
       console.log("mogodm connection error", error);
       process.exit(1)
   }
}
export default connectDB