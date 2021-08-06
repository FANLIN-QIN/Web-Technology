const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req,res){
    let  url= "https://api.themoviedb.org/3/movie/now_playing?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&page=1";
    axios.get(url).then(curmovie =>{
        var data = [];
        for(var i = 0; i<5;i++){
            var cut = {};
            var id = curmovie.data["results"][i].id;
            var title = curmovie.data["results"][i].title;
            var backdrop_path = curmovie.data["results"][i].backdrop_path; 
            cut = {id: id, title: title, backdrop_path: backdrop_path};
            data.push(cut);
        }
        res.json(data);
    }).catch(err =>{
        res.send(err);
    }) 
});

module.exports = router;
