const jwt=require("jsonwebtoken")

const data ={
    _id:"45hfg45t87xy968"
}

const token=jwt.sign(data,"thisissecret",{expiresIn:"1h"})

console.log(token)


const  decoded=jwt.verify(token,"thisissecret")
console.log(decoded)