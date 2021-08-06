const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req,res){
    let  url= "https://api.themoviedb.org/3/movie/top_rated?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&page=1";
    axios.get(url).then(tprmovie =>{
        var data = [];
        for(var i = 0; i<20;i++){
            var cut = {};
            var id = tprmovie.data["results"][i].id;
            var title = tprmovie.data["results"][i].title;
            if(tprmovie.data["results"][i].poster_path == null){
                var poster_path = "https://cinemaone.net/images/movie_placeholder.png";
            }else{
                var poster_path = "https://image.tmdb.org/t/p/w500"+tprmovie.data["results"][i].poster_path;
            }
            cut = {id: id, title: title, poster_path: poster_path};
            data.push(cut);
        }
        res.json(data);
    }).catch(err =>{
        res.send(err);
    }) 
});

module.exports = router;