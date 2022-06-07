import mongoose from 'mongoose'

const connection=()=>{
    try{
   
   const url="mongodb+srv://hanan:hanan@cluster0.krmkk.mongodb.net/dashboard?retryWrites=true&w=majority"
         mongoose.connect(url);
         console.log("database is running");
    }
    catch(error){
            console.log(error,"error in connecting database")
    }
}
export default connection;