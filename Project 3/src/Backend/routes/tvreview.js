const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id',function(req,res){
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/tv/"+id+"/reviews?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&page=1";
    axios.get(url).then(curmovie =>{
        var data = [];
        if(curmovie.data["results"].length>10){
            for(var i = 0; i< 10;i++){
                var cut = {};
                var created_at = curmovie.data["results"][i].created_at;
                var link =  curmovie.data["results"][i].url; 
                var author = curmovie.data["results"][i].author;
                var content = curmovie.data["results"][i].content;
                if( curmovie.data["results"][i].author_details["rating"] != null){
                    var rating = curmovie.data["results"][i].author_details["rating"];
                }else{
                    var rating = 0;
                }
                if(curmovie.data["results"][i].author_details["avatar_path"]== null){
                    var avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
                }else if(curmovie.data["results"][i].author_details["avatar_path"].indexOf("https") != -1){
                  var avatar_path = curmovie.data["results"][i].author_details["avatar_path"].substr(1);  
                } else{
                    var avatar_path = "https://image.tmdb.org/t/p/original" + curmovie.data["results"][i].author_details["avatar_path"];
                }
                cut = {authoe: author, content: content, link: link, rating: rating, avatar_path: avatar_path,created_at:created_at};
                data.push(cut);
            }
        }else{
            for(var i = 0; i< curmovie.data["results"].length;i++){
                var cut = {};
                var created_at = curmovie.data["results"][i].created_at;
                var link =  curmovie.data["results"][i].url; 
                var author = curmovie.data["results"][i].author;
                var content = curmovie.data["results"][i].content;
                if( curmovie.data["results"][i].author_details["rating"] != null){
                    var rating = curmovie.data["results"][i].author_details["rating"];
                }else{
                    var rating = 0;
                }
                if(curmovie.data["results"][i].author_details["avatar_path"]== null){
                    var avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
                }else if(curmovie.data["results"][i].author_details["avatar_path"].indexOf("https") != -1){
                  var avatar_path = curmovie.data["results"][i].author_details["avatar_path"].substr(1);  
                } else{
                    var avatar_path = "https://image.tmdb.org/t/p/original" + curmovie.data["results"][i].author_details["avatar_path"];
                }
                cut = {authoe: author, content: content, link: link, rating: rating, avatar_path: avatar_path,created_at:created_at};
                data.push(cut); 
            }
        }
        res.json(data);
    }).catch(err =>{
        res.send(err);
    }) 
 });

module.exports = router;