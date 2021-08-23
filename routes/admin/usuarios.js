const express = require("express");
const router = express.Router();
const models = require("../../models/usuarios")

const showUsuarios = async(req, res) =>{
    const usuarios = await models.getAll();
    res.render("adminUsuarios", {usuarios});
}

router.get("/", showUsuarios)
module.exports = router;