const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id',function(req,res){
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/movie/"+id+"?api_key=3e6617a08bfe9d385972f79ca39f3f39&languag e=en-US&page=1";
    axios.get(url).then(curmovie =>{
     var data = [];
     var cut ={};
     cut["title"] = curmovie.data["title"];
     var tt = [];
     cut["genres"] = tt;
     for(var i = 0;i < curmovie.data["genres"].length;i++){
       var str = curmovie.data["genres"][i].name;
       if(i == curmovie.data["genres"].length - 1){
         tt.push(str);
        }else{
         tt.push( str + ",");
       } 
     };
     var language =[]
     cut["spoken_languages"]=language;
     for(var i = 0;i < curmovie.data["spoken_languages"].length;i++){
      var str1 = curmovie.data["spoken_languages"][i].english_name;
      if(i == curmovie.data["spoken_languages"].length - 1){
        language.push(str1);
       }else{
        language.push(str1 + ",");
       } 
     };
     cut["release_date"]=curmovie.data["release_date"];
     cut["runtime"] = curmovie.data["runtime"];
     cut["overview"] = curmovie.data["overview"];
     cut["vote_average"] = curmovie.data["vote_average"];
     cut["tagline"] = curmovie.data["tagline"];
     if(curmovie.data["poster_path"] == null){
      cut["poster_path"] = "https://cinemaone.net/images/movie_placeholder.png";
     }else{
    cut["poster_path"] = "https://image.tmdb.org/t/p/w500"+curmovie.data["poster_path"];
     }
     data.push(cut);
     res.json(data);
   }).catch(err =>{
        res.send(err);
   }) 
 });

 module.exports = router;