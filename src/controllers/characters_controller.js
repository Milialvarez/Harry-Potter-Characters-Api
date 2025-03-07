const characters_model = require('../models/characters_model');

module.exports={

    getCharacters: (req, res)=>{
        characters_model.getCharacters((err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    getCharactersById: (req, res)=>{
        const {id} = req.params;
        characters_model.getCharactersById(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }

            if(result.length === 0){
                res.status(404).json({message: "character not found"});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    postCharacter: (req, res) =>{
        const {nombre, apellido, casa} = req.body;
        characters_model.postCharacters(nombre, apellido, casa, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message})
                return;
            }
            res.status(201).json({message: "character created succesfully", data: {idInsertado : result}});
        })
    },

    putCharacter: (req, res)=>{
        const {id} = req.params;
        const {nombre, apellido, casa} = req.body;

        characters_model.putCharacter(id, nombre, apellido, casa, (err, result) =>{
            if(err){
                res.status(500).json({error: err.message})
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: "character not found"});
                return;
            }
            res.status(200).json({message: "character modifyed succesfully"});
        })
    },

    deleteCharacter: (req, res)=>{
        const {id} = req.params;
        characters_model.deleteCharacter(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message})
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: "character not found"});
                return;
            }
            res.status(200).json({message: "character deleted succesfully"});
        })
    }

}