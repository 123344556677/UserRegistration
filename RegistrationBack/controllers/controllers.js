import manan from '../Schema/register.js';
import bcrypt from 'bcryptjs'

export const regist=(req,res)=>{
    try{
            const {firstname,email,password,confirmpassword}=req.body
            let datas=req.body;
            if(password===confirmpassword){
            manan.findOne({email:email},async(err,data)=>{

                if(data){
                    res.json({message:"Email already in use"})
                }
                else{
                let hashpassword=bcrypt.hashSync(password,12);
             let hashconpassword=bcrypt.hashSync(confirmpassword,12);
            let re=await new manan({firstname,email,hashpassword,hashconpassword});
            re.save();
        //    console.log(req.body);
            res.json({message:"user registered", dat:datas});
                }
                
            })

            
    }
    else{
    res.json({message:"Passwords should be same"})
}
}

    catch(err){
         console.log("error in controlers",err);
    }
}
export const login=async(req,res)=>{
     console.log(req.body);
     try{
          const {email,password}=req.body
             manan.findOne({email:email},(err,data)=>{
        const pass=bcrypt.compareSync(password,data.hashpassword)
            console.log(pass);
              
         if(data){
             
            if(pass){
               
                 res.json({message:"login succesful",dat:data});
                
                //  console.log(token.email)
              }
        else{
                  res.json({message:"incorrect password"})
              }
            }
            else{
                res.json({message:"user not registered"})
            }
          }) ;
          
    }
    catch(err){
        console.log("error in login controller",err)
    }
}


