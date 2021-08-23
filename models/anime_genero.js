const pool = require("./../utils/bd");

const getGenero = async() => {
    const query = "SELECT * FROM ??"
    const params = ["anime_genero"];
    return await pool.query(query, params);
}

module.exports = {getGenero};