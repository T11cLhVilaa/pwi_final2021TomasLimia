const {create, createImg, update, updateImg} = require("../models/animes");
const {imgFile} = require("../utils/fileHandler");

const createAnime = async(body, file) => {
    try {
        const {insertId : id_anime} = await create(body);
        const uid = imgFile(file);
        const obj = {id_anime, uid};
        const {insertId : idImg} = await createImg(obj);
        return idImg;
    } catch(e){
        console.log(e);
    }
}
const updateAnime = async(id, body, file) => {
    try {
        const id_anime = await update(id, body);
        if (file) {
            const uid = imgFile(file);
            const obj = {uid};
            const idImg = await updateImg(id, obj);
            return idImg;
        } else {
            return id_anime;
        }
    } catch(e){
        console.log(e);
    }
}

module.exports = {createAnime, updateAnime};