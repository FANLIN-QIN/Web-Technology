const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id',function(req,res){
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/"+id+"/credits?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&page=1";
    axios.get(url).then(curmovie =>{
        var data = [];
        for(var i = 0; i< curmovie.data["cast"].length;i++){
            var cut = {};
            if(curmovie.data["cast"][i].profile_path != null){
                var id = curmovie.data["cast"][i].id;
                var name = curmovie.data["cast"][i].name;
                var character = curmovie.data["cast"][i].character;
                var profile_path = curmovie.data["cast"][i].profile_path;  
                cut = {id: id, name: name, chararcter: character,profile_path: profile_path};
                data.push(cut);
            } 
        }
        for(var i = 0; i< curmovie.data["crew"].length;i++){
            var cut = {};
            if(curmovie.data["crew"][i].profile_path != null){
                var id = curmovie.data["crew"][i].id;
                var name = curmovie.data["crew"][i].name;
                var character = curmovie.data["crew"][i].character;
                var profile_path = curmovie.data["crew"][i].profile_path;  
                cut = {id: id, name: name, chararcter: character,profile_path: profile_path};
                data.push(cut);
            } 
        }
        res.json(data);
    }).catch(err =>{
        res.send(err);
    }) 
 });

module.exports = router;