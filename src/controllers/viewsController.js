const gestorView = (req,res)=>{
    res.render('gestor')
}
const perfilView = (req,res)=>{
    res.render('perfil')
}
const registerView = (req,res) =>{
    res.render('register')
}
const loginView = (req,res) =>{
    res.render('login')
}
export default{
    gestorView,
    perfilView,
    registerView,
    loginView
}