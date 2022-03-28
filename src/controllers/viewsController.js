import {productService} from '../services/Services.js';

const gestorView = (req, res) => {
  res.render("gestor");
};
const perfilView = (req, res) => {
  res.render("perfil");
};
const registerView = (req, res) => {
  res.render("register");
};
const loginView = (req, res) => {
  res.render("login");
};
const artView = (req, res) => {
  productService.getAll().then((data) => {
    let result = data.product;
    res.render("art", result);
  });
};
const logoutView = (req, res) => {
    req.logout();
    res.redirect('/api/views/login');  
  };
export default {
  gestorView,
  perfilView,
  registerView,
  loginView,
  artView,
  logoutView
};
