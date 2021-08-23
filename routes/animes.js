const express = require("express");
const router = express.Router();
const models = require("../models/animes");

const getAll = async(req, res) => {
    const animes = await models.getAll();
    res.render("animes", {animes});
}
const getSingle = async(req, res) =>{
    const [anime] = await models.getSingle(req.params.id);
    res.render("anime", {anime});
}
const lunes = async(req, res) => {
    const animes = await models.getLunes();
    res.render("animesLunes", {animes});
}
const martes = async(req, res) => {
    const animes = await models.getMartes();
    res.render("animesMartes", {animes});
}
const miercoles = async(req, res) => {
    const animes = await models.getMiercoles();
    res.render("animesMiercoles", {animes});
}
const jueves = async(req, res) => {
    const animes = await models.getJueves();
    res.render("animesJueves", {animes});
}
const viernes = async(req, res) => {
    const animes = await models.getViernes();
    res.render("animesViernes", {animes});
}
const sabado = async(req, res) => {
    const animes = await models.getSabado();
    res.render("animesSabado", {animes});
}
const domingo = async(req, res) => {
    const animes = await models.getDomingo();
    res.render("animesDomingo", {animes});
}

router.get("/", getAll);
router.get("/single/:id", getSingle);
router.get("/lunes", lunes);
router.get("/martes", martes);
router.get("/miercoles", miercoles);
router.get("/jueves", jueves);
router.get("/viernes", viernes);
router.get("/sabado", sabado);
router.get("/domingo", domingo);
module.exports = router;