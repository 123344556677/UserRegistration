import mongoose from 'mongoose'
 
const reg=new mongoose.Schema({
   firstname:{
       type:String,
       required:true
   },
   
   email:{
       type:String,
       required:true
   },
   hashpassword:{
       type:String,
       required:true
   },
   hashconpassword:{
       type:String,
       required:true
   }
});

let manan=mongoose.model('user',reg);
export default manan;