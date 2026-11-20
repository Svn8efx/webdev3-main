const bcrypt=require("bcrypt");

const password="jack@1234"
const copypassword="jack@1234"

const excryptpassPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10);
    console.log("salt:",salt);
    const hashedpassword=await bcrypt.hash(password,salt);
    console.log("hashed password:",hashedpassword);

    const isMatch=await bcrypt.compare("jack@1234",hashedpassword)
    console.log("password Match:",isMatch);
}

excryptpassPassword(password);
//excryptpassPassword(copypassword);