import {userService} from "../services/Services.js"
import UserDto from "../dto/userDto.js";

const getUsers = async(req,res)=>{
    let users = await userService.getAll();
    let usersDto = users.map(user=>new UserDto(user))
    res.send(usersDto);
}
const getUserById =async(req,res)=>{
    const id = req.params.id
    let user = await userService.getBy({id})
    res.send(user);  
}
const saveUser = async(req,res)=>{
    let user = await userService.save(user);
    res.send(user);
}

const registerUser = async(req,res)=>{
    res.send({message:"Registro correcto"})
}
const loginUser = async(req,res)=>{
    res.send({message:"Login correcto"})
}

export default{
    getUsers,
    getUserById,
    saveUser,
    registerUser,
    loginUser
}