const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id', function(req,res){
    let id = req.params.id;
    let  url= "https://api.themoviedb.org/3/search/multi?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&query="+ id;
    axios.get(url).then(curmovie =>{
        var data = [];
        for(var i = 0; i< 7;i++){
            if(curmovie.data["results"][i].media_type == "tv"){
               var cut = {};
               var id = curmovie.data["results"][i].id;
               var title = curmovie.data["results"][i].name;
               if(curmovie.data["results"][i].backdrop_path == null){
                var backdrop_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg";
              }else{
                var backdrop_path = "https://image.tmdb.org/t/p/w500"+curmovie.data["results"][i].backdrop_path;
               }
               var media_type = "tv";
               cut = {id: id, title: title, backdrop_path: backdrop_path, media_type:media_type};
               data.push(cut); 
            }
            if(curmovie.data["results"][i].media_type == "movie"){
                var cut = {};
                var id = curmovie.data["results"][i].id;
                var title = curmovie.data["results"][i].title;
                if(curmovie.data["results"][i].backdrop_path == null){
                    var backdrop_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg";
                }else{
                    var backdrop_path = "https://image.tmdb.org/t/p/w500"+curmovie.data["results"][i].backdrop_path;
                }
                var media_type = "movie";
                cut = {id: id, title: title, backdrop_path: backdrop_path, media_type:media_type};
                data.push(cut); 
             } 
        }
        res.json(data);
    }).catch(err =>{
        res.send(err);
    }) 
});

module.exports = router;