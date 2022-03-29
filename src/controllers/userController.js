import {userService} from "../services/Services.js"
import UserDto from "../dtos/userDto.js";

const getUsers = async(req,res)=>{
    let users = await userService.getAll();
    let usersDto = users.map(user=>new UserDto(user))
    res.send(usersDto);
}
const getUserById =async(req,res)=>{
    const id = req.params.id
    let user = await userService.getById({id})
    res.send(user);  
}

const saveUser = async(req,res)=>{

}

export default{
    getUsers,
    getUserById,
    saveUser
}