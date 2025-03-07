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

    postCharacters(nombre, apellido, casa, callback){
        const sql = "insert into hp_characters(nombre, apellido, casa) values (?, ?, ?)";
        db.query(sql, [nombre, apellido, casa], (err, result)=>{
            if(err){
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putCharacter(id, nombre, apellido, casa, callback){
        const sql = "update hp_characters set nombre = ?, apellido = ?, casa = ? where id = ?";
        db.query(sql, [nombre, apellido, casa, id], callback);
    }

    deleteCharacter(id, callback){
        const sql = "delete from hp_characters where id = ?"
        db.query(sql, [id], callback);
    }
}

module.exports = new Character();