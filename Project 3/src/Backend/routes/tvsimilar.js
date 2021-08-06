const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/:id',function(req,res){
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/"+id+"/similar?api_key=3e6617a08bfe9d385972f79ca39f3f39&languag e=en-US&page=1";
    axios.get(url).then(curmovie =>{
      
       if(curmovie.data["results"].length === 0 && Array.isArray(curmovie.data["results"])){
          res.json(null);
       }else{
         var data = [];
         for(var i = 0; i<20;i++){
        var cut = {};
        var id = curmovie.data["results"][i].id;
        var title = curmovie.data["results"][i].name;
        if(curmovie.data["results"][i].poster_path == null){
         var poster_path = "https://cinemaone.net/images/movie_placeholder.png";
         }else{
         var poster_path = "https://image.tmdb.org/t/p/w500"+curmovie.data["results"][i].poster_path;
         }
        cut = {id: id, title: title, poster_path: poster_path};
        data.push(cut);
        }
        res.json(data);
       }
   }).catch(err =>{
        res.send(err);
   }) 
 });
 module.exports = router;