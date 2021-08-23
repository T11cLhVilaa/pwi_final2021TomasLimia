const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = {dest : `./public/tmp`}
const upload = multer(config);
const service = require("../../services/animes");
const models = require("../../models/animes");
const {getDia} = require("../../models/anime_dia");
const {getGenero} = require("../../models/anime_genero");
const {getEmision} = require("../../models/anime_emision");

const create = async(req, res) => {
    const idImg = await service.createAnime(req.body, req.file);
    console.log(req.file);
    res.redirect("/admin/animes");
}
const createGenero1 = async(req, res) =>{
    const genero = await models.createGenero(req.body)
    console.log(req.body);
    res.redirect("/admin/animes/create")
}
const createGenero2 = async(req, res) =>{
    const genero = await models.createGenero(req.body)
    console.log(req.body);
    res.redirect("/admin/animes/update")
}
const showGeneroDiaEmision = async (req, res) => {
    const genero = await getGenero();
    const dia = await getDia();
    const emision = await getEmision();
    res.render("adminCreateAnime", {genero, dia, emision});
}
const getAll = async(req, res) => {
    const animes = await models.getAll();
    res.render("adminAnimes", {animes});
}
const getSingle = async(req, res) =>{
    const [anime] = await models.getSingle(req.params.id);
    res.render("adminAnime", {anime});
}
const del = async(req, res) => {
    const {id} = req.params;
    const msgEmpleados = await models.delEmp(id);
    const msgImagen = await models.delImg(id);
    res.redirect("/admin/animes");
}
const getUpdate = async(req, res) => {
    const [anime] = await models.getSingle(req.params.id);
    console.log(anime);
    const genero = await getGenero();
    const dia = await getDia();
    const emision = await getEmision();
    res.render("adminUpdateAnime", {anime, genero, dia, emision})
}
const update = async(req, res) => {
    console.log(req.body, req.file);
    const idImg = await service.updateAnime(req.params.id, req.body, req.file);
    res.redirect("/admin/animes");
}

router.get("/create", showGeneroDiaEmision);
router.get("/create", (req, res) => res.render("adminCreateAnime"));
router.post("/create", upload.single("imagen"), create);
router.get("/create/genero/1", (req, res) => res.render("adminCreateGenero1"));
router.post("/create/genero/1", createGenero1);
router.get("/create/genero/2", (req, res) => res.render("adminCreateGenero2"));
router.post("/create/genero/2", createGenero2);
router.get("/", getAll);
router.get("/single/:id", getSingle);
router.get("/delete/:id", del);
router.get("/update/:id", getUpdate);
router.post("/update/:id", upload.single("imagen"), update);
module.exports = router;