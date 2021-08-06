const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id',function(req,res){
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/person/"+id+"?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&page=1";
    axios.get(url).then(curmovie =>{
        var data = [];
        var cut = {}; 
        cut["birthday"]=curmovie.data["birthday"];
        cut["name"] = curmovie.data["name"];
        
        if(curmovie.data["gender"] == 1){
            cut["gender"] = "Female";
        }
        if(curmovie.data["gender"] == 2){
            cut["gender"] = "Male";
        }
        if(curmovie.data["gender"] == 0){
            cut["gender"] = "Undefined";
        }
        cut["homepage"] = curmovie.data["homepage"];
        if(curmovie.data["also_known_as"].length === 0 && Array.isArray(curmovie.data["also_known_as"])){
            cut["also_know_as"] = null;
        }else{
            cut["also_know_as"] = curmovie.data["also_known_as"];
        }
        cut["known_for_department"] = curmovie.data["known_for_department"];
        cut["biography"] = curmovie.data["biography"];
        cut["birth_palce"]=curmovie.data["place_of_birth"];
        data.push(cut);
        res.json(data);
    }).catch(err =>{
        res.send(err);
    }) 
 });

module.exports = router;