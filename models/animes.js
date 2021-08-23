const pool = require("./../utils/bd");

const create = (obj) => 
    pool.query("INSERT INTO ?? SET ?", ["animes", obj]).then(response => response).catch(err => console.log(err));

const createImg = (obj) => 
    pool.query("INSERT INTO ?? SET ?", ["anime_imagenes", obj]).then(response => response).catch(err => console.log(err));

const createGenero = (obj) =>{
    pool.query("INSERT INTO ?? SET ?", ["anime_genero", obj]).then(response => response).catch(err => console.log(err));
}
const getSingle = async(id) => {
    try{
        const query = ("SELECT a.id, a.nombre, a.descripcion, ad.nombre AS nombreDia, ag.nombre AS nombreGenero, ae.nombre AS nombreEmision, ai.uid FROM ?? AS a JOIN ?? AS ad ON a.id_dia = ad.id JOIN ?? AS ag ON a.id_genero = ag.id JOIN ?? AS ai ON a.id = ai.id_anime JOIN ?? AS ae ON a.id_emision = ae.id WHERE a.eliminado = 0 AND a.id = ?")
        const params = ["animes", "anime_dia", "anime_genero", "anime_imagenes", "anime_emision", id];
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const getAll = async() => {
    try{
        const query = ("SELECT a.id, a.nombre, a.descripcion, ad.nombre AS nombreDia, ag.nombre AS nombreGenero, ae.nombre AS nombreEmision, ai.uid FROM ?? AS a JOIN ?? AS ad ON a.id_dia = ad.id JOIN ?? AS ag ON a.id_genero = ag.id JOIN ?? AS ai ON a.id = ai.id_anime JOIN ?? AS ae ON a.id_emision = ae.id WHERE a.eliminado = 0")
        const params = ["animes", "anime_dia", "anime_genero", "anime_imagenes", "anime_emision"];
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const getLunes = async() => {
    try{
        const query = ("SELECT a.id, a.nombre, a.descripcion, ad.nombre AS nombreDia, ag.nombre AS nombreGenero, ae.nombre AS nombreEmision, ai.uid FROM ?? AS a JOIN ?? AS ad ON a.id_dia = ad.id JOIN ?? AS ag ON a.id_genero = ag.id JOIN ?? AS ai ON a.id = ai.id_anime JOIN ?? AS ae ON a.id_emision = ae.id WHERE a.eliminado = 0 AND ad.nombre = 'Lunes'")
        const params = ["animes", "anime_dia", "anime_genero", "anime_imagenes", "anime_emision"];    
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const getMartes = async() => {
    try{
        const query = ("SELECT a.id, a.nombre, a.descripcion, ad.nombre AS nombreDia, ag.nombre AS nombreGenero, ae.nombre AS nombreEmision, ai.uid FROM ?? AS a JOIN ?? AS ad ON a.id_dia = ad.id JOIN ?? AS ag ON a.id_genero = ag.id JOIN ?? AS ai ON a.id = ai.id_anime JOIN ?? AS ae ON a.id_emision = ae.id WHERE a.eliminado = 0 AND ad.nombre = 'Martes'")
        const params = ["animes", "anime_dia", "anime_genero", "anime_imagenes", "anime_emision"];    
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const getMiercoles = async() => {
    try{
        const query = ("SELECT a.id, a.nombre, a.descripcion, ad.nombre AS nombreDia, ag.nombre AS nombreGenero, ae.nombre AS nombreEmision, ai.uid FROM ?? AS a JOIN ?? AS ad ON a.id_dia = ad.id JOIN ?? AS ag ON a.id_genero = ag.id JOIN ?? AS ai ON a.id = ai.id_anime JOIN ?? AS ae ON a.id_emision = ae.id WHERE a.eliminado = 0 AND ad.nombre = 'Miércoles'")
        const params = ["animes", "anime_dia", "anime_genero", "anime_imagenes", "anime_emision"];    
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const getJueves = async() => {
    try{
        const query = ("SELECT a.id, a.nombre, a.descripcion, ad.nombre AS nombreDia, ag.nombre AS nombreGenero, ae.nombre AS nombreEmision, ai.uid FROM ?? AS a JOIN ?? AS ad ON a.id_dia = ad.id JOIN ?? AS ag ON a.id_genero = ag.id JOIN ?? AS ai ON a.id = ai.id_anime JOIN ?? AS ae ON a.id_emision = ae.id WHERE a.eliminado = 0 AND ad.nombre = 'Jueves'")
        const params = ["animes", "anime_dia", "anime_genero", "anime_imagenes", "anime_emision"];    
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const getViernes = async() => {
    try{
        const query = ("SELECT a.id, a.nombre, a.descripcion, ad.nombre AS nombreDia, ag.nombre AS nombreGenero, ae.nombre AS nombreEmision, ai.uid FROM ?? AS a JOIN ?? AS ad ON a.id_dia = ad.id JOIN ?? AS ag ON a.id_genero = ag.id JOIN ?? AS ai ON a.id = ai.id_anime JOIN ?? AS ae ON a.id_emision = ae.id WHERE a.eliminado = 0 AND ad.nombre = 'Viernes'")
        const params = ["animes", "anime_dia", "anime_genero", "anime_imagenes", "anime_emision"];    
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const getSabado = async() => {
    try{
        const query = ("SELECT a.id, a.nombre, a.descripcion, ad.nombre AS nombreDia, ag.nombre AS nombreGenero, ae.nombre AS nombreEmision, ai.uid FROM ?? AS a JOIN ?? AS ad ON a.id_dia = ad.id JOIN ?? AS ag ON a.id_genero = ag.id JOIN ?? AS ai ON a.id = ai.id_anime JOIN ?? AS ae ON a.id_emision = ae.id WHERE a.eliminado = 0 AND ad.nombre = 'Sábado'")
        const params = ["animes", "anime_dia", "anime_genero", "anime_imagenes", "anime_emision"];    
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const getDomingo = async() => {
    try{
        const query = ("SELECT a.id, a.nombre, a.descripcion, ad.nombre AS nombreDia, ag.nombre AS nombreGenero, ae.nombre AS nombreEmision, ai.uid FROM ?? AS a JOIN ?? AS ad ON a.id_dia = ad.id JOIN ?? AS ag ON a.id_genero = ag.id JOIN ?? AS ai ON a.id = ai.id_anime JOIN ?? AS ae ON a.id_emision = ae.id WHERE a.eliminado = 0 AND ad.nombre = 'Domingo'")
        const params = ["animes", "anime_dia", "anime_genero", "anime_imagenes", "anime_emision"];    
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const delEmp = async(id) => {
    try{
        const query = ("UPDATE ?? SET eliminado = 1 WHERE id = ?")
        const params = ["animes", id];
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const delImg = async(id) => {
    try{
        const query = ("UPDATE ?? SET eliminado = 1 WHERE id_anime = ?")
        const params = ["anime_imagenes", id];
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const update = async(id, obj) => {
    try{
        const query = ("UPDATE ?? SET ? WHERE id = ?")
        const params = ["animes", obj, id];
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}
const updateImg = async(id, obj) => {
    try{
        const query = ("UPDATE ?? SET ? WHERE id_anime = ?")
        const params = ["anime_imagenes", obj, id];
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}

module.exports = {create, createImg, createGenero, getSingle, getAll, delEmp, delImg, update, updateImg, getLunes, getMartes, getMiercoles, getJueves, getViernes, getSabado, getDomingo};