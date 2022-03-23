import {userService} from "../services/Services.js"

const getUsers = async(req,res)=>{
    let users = await userService.get();
    res.send(users);
}
const getUserById =async(req,res)=>{
    const id = req.params.id
    let user = await userService.getById(id)    
}

const saveUser = async(req,res)=>{

}