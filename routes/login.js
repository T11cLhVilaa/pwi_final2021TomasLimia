const express = require("express");
const router = express.Router();
const {auth} = require("../models/usuarios");
const sha1 = require("sha1");
const {validateLogin} = require("../middlewares/usuarios");

const showLogin = (req, res) => res.render("login")

const login = async(req, res) => {
    let {username, contra} = req.body;
    contra = sha1(contra);
    const logged = await auth(username, contra);
    if(logged.length == 0) {
        res.render("login", {message: "Usuario y/o contraseña incorrecta."})
    } else{
        const [{id, admin}] = logged;
        req.session.user = id;
        req.session.admin = admin;
        res.redirect("/admin");
    }
}

router.get("/", showLogin);
router.post("/", validateLogin, login);
module.exports = router;