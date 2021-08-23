const express = require("express");
const router = express.Router();
const models = require("../models/usuarios");
const sha1 = require("sha1");

const getUser = async(req, res) => {
    const [usuario] = await models.getSingle(req.session.user);
    res.render("usuario", {usuario})
}
const getUpdate = async(req, res) => {
    const {confirmacionCorreo} = req.params;
    const [usuario] = await models.getSingleCC(confirmacionCorreo);
    console.log(usuario);
    res.render("usuarioUpdate", {usuario})
}
const update = async(req, res) => {
    const {confirmacionCorreo} = req.params;
    console.log(confirmacionCorreo);
    let {username, contra, mail} = req.body;
    contra = sha1(contra);
    const usuario = {username, contra, mail};
    console.log(usuario);
    const {messageId} = await models.update(confirmacionCorreo, usuario);
    console.log(messageId);
    res.redirect("/usuarios");
}

router.get("/", getUser);
router.get("/update/:confirmacionCorreo", getUpdate);
router.post("/update/:confirmacionCorreo", update);
module.exports = router;