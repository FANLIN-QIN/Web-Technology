const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id',function(req,res){
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/person/"+id+"/external_ids?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&page=1";
    axios.get(url).then(curmovie =>{
        var data = [];
        var cut = {}; 
        if(curmovie.data["imdb_id"] != null){
            cut["imdb_id"] = curmovie.data["imdb_id"];
        }
        if(curmovie.data["facebook_id"] != null){
            cut["facebook_id"] = curmovie.data["facebook_id"];
        }
        if(curmovie.data["instagram_id"] != null){
            cut["instagram_id"] = curmovie.data["instagram_id"];
        }
        if(curmovie.data["twitter_id"] != null){
            cut["twitter_id"] = curmovie.data["twitter_id"];
        }
        data.push(cut);
        res.json(data);
    }).catch(err =>{
        res.send(err);
    }) 
 });

module.exports = router;