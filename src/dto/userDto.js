export default class UserDto{
    constructor(user){
            this.id=user._id,
            this.nombre= user.nombre,
            this.apellido= user.apellido,
            this.fullname = `${user.nombre} ${user.apellido}`,
            this.edad= user.edad,
            this.usuario= user.usuario,
            this.email= user.emal,
            this.password= user.password,
            this.telefono= user.telefono,
            this.direccion= user.direccion,
            this.rol= user.rol,
            this.avatar= user.avatar
           
    }
}