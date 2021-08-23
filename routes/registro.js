const express = require('express');
const router = express.Router();
const {send} = require("./../services/mail");
const model = require("../models/usuarios");
const sha1 = require("sha1");
const {v4: uuid} = require("uuid");
const {validateRegistro} = require("../middlewares/usuarios");
const multer = require("multer");
const config = {dest : `./public/tmp`}
const upload = multer(config);

const register = (req, res) => {
    res.render('registro')
}
const create = async(req, res) => {
    const {body : usuario} = req;
    console.log(usuario);
    let duplicado = false;
    const uid = uuid();
    console.log(uid);
    const usuarioFinal = {
        username: usuario.username,
        contra: sha1(usuario.contra),
        mail: usuario.mail,
        confirmacionCorreo: uid,
    }
    const usuariosExistentes = await model.getAll();
    usuariosExistentes.forEach(usuario => {
        if (usuario.username == usuarioFinal.username || usuario.mail == usuarioFinal.mail)
        {
            duplicado = true;
        }
    })
    if (!duplicado){
        const agregado = await model.create(usuarioFinal)
        console.log(agregado);
        send({mail: usuarioFinal.mail, cuerpo:
            `<h1>Bienvenido, ${usuarioFinal.username}</h1><a href="http://localhost:3000/registro/verify/${uid}">Link mágico</a>`}); 
        res.redirect("/")
    }
    else {
        res.render("registro", {message: "El nombre de usuario o mail ingresado ya existe."})
    }
}
const verify = async(req, res) => {
    const {uid} = req.params;
    console.log(uid);
    const messageId = await model.verify(uid);
    res.redirect("/");
}       

router.get('/', register);
router.post('/', validateRegistro, create);
router.get("/verify/:uid", verify)
module.exports = router;