const User = require('../Model/user.modal');
const jwt = require('jsonwebtoken')

async function signup(req, res) {
    const {username , password} = req.body;
    const user = await User.create({
        username , password
    })

    const token = jwt.sign({}, process.env.JWT_KEY)

    res.status(201).json({message : 'User created successfully', user})  
}


async function login(req, res) {
    const {username, password} = req.body;
    const finduser = await User.findOne({username});


    const isPassword = password == finduser.password;
    if(isPassword) {
        console.log("Login Sucessfully")
        res.status(201).json({message : "Login Sucessfully"});
    }else{
        res.status(401).json({message : "Invalid Password"});
        console.log("Invalid Password")
    }

}


module.exports = {signup, login}