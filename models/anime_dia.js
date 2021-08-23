const pool = require("./../utils/bd");

const getDia = async() => {
    const query = "SELECT * FROM ??"
    const params = ["anime_dia"];
    return await pool.query(query, params);
}

module.exports = {getDia}