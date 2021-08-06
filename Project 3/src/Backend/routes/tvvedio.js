const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id',function(req,res){
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/"+id+"/videos?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&page=1";
    axios.get(url).then(curmovie =>{
     var data = [];
     if(curmovie.data["results"].length === 0 && Array.isArray(curmovie.data["results"])){
       var cut ={};
       var key = "tzkWB85ULJY";
       cut ={key: key};
       data.push(cut);
     }else{
       for(var i = 0; i < curmovie.data["results"].length;i++){
         var cut = {};
         if (curmovie.data["results"][i].type == "Trailer"){
           var site = curmovie.data["results"][i].site;
           var type = curmovie.data["results"][i].type;
           var name = curmovie.data["results"][i].name;
           var key = curmovie.data["results"][i].key; 
           cut = {site: site, type: type, name: name,key: key};
           data.push(cut);
           break
          }
          if(curmovie.data["results"][i].type == "Teaser"){
            var site = curmovie.data["results"][i].site;
            var type = curmovie.data["results"][i].type;
            var name = curmovie.data["results"][i].name;
            var key = curmovie.data["results"][i].key; 
            cut = {site: site, type: type, name: name,key: key};
            data.push(cut);
            break
          } 
        }
        if(data.length == 0){
          var key = "tzkWB85ULJY"; 
          cut = {key: key};
          data.push(cut);
        }
     }
     res.json(data);
   }).catch(err =>{
        res.send(err);
   }) 
 });

 module.exports = router;