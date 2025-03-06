const db = require('../config/dbConfig')

class Character{

    getCharacters(callback){
        const sql = "select id, nombre, apellido, casa from hp_characters";
        db.query(sql, callback);
    }

    getCharactersById(id, callback){
        const sql = "select id, nombre, apellido, casa from hp_characters where id= ?";
        db.query(sql, [id], callback);
    }
}

module.exports = new Character();