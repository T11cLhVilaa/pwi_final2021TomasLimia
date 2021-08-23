const pool = require("./../utils/bd");

const getEmision = async() => {
    const query = "SELECT * FROM ??"
    const params = ["anime_emision"];
    return await pool.query(query, params);
}

module.exports = {getEmision}