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
            }
            res.status(200).json({data: result});
        });
    }

}