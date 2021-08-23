const { PayloadTooLarge } = require("http-errors");
const pool = require("./../utils/bd");

const create = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = ["usuarios", obj];
    return await pool.query(query, params);
}

const verify = async(uid) => {
    const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionCorreo = ?"
    const params = ["usuarios", uid];
    return await pool.query(query, params);
}
const auth = async(username, contra) => {
    const query = "SELECT id, admin FROM ?? WHERE username = ? AND contra = ? AND habilitado = 1 AND eliminado = 0";
    const params = ["usuarios", username, contra];
    return await pool.query(query, params);
}
const getSingle = async(id) => {
    const query = "SELECT * FROM ?? WHERE id = ?"
    const params = ["usuarios", id];
    return await pool.query(query, params);
}
const getSingleCC = async(confirmacionCorreo) => {
    const query = "SELECT * FROM ?? WHERE confirmacionCorreo = ?"
    const params = ["usuarios", confirmacionCorreo];
    return await pool.query(query, params);
}
const getAll = async() => {
    const query = "SELECT * FROM ??"
    const params = ["usuarios"];
    return await pool.query(query, params);
}
const update = async(confirmacionCorreo, obj) => {
    const query = "UPDATE ?? SET ? WHERE confirmacionCorreo = ?"
    const params = ["usuarios", obj, confirmacionCorreo];
    return await pool.query(query, params);
}
const updateImg = async(id, obj) => {
    try{
        const query = ("UPDATE ?? SET ? WHERE id_usuario = ?")
        const params = ["usuario_imagenes", obj, id];
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
}

module.exports = {create, verify, auth, getSingle, getSingleCC, getAll, update, updateImg};