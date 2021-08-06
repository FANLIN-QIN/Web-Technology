from flask import Flask,request
app = Flask(__name__,static_url_path='',static_folder='static')
import requests,json

@app.route("/")
def root():
    return app.send_static_file('index.html')

@app.route("/trending")
def get_movie():
    request_date = requests.get('https://api.themoviedb.org/3/trending/movie/week?api_key=3e6617a08bfe9d385972f79ca39f3f39')
    d = json.loads(request_date.content)
    movie = []
    count = 0
    for x in d["results"]:
        count += 1
        current = {}
        current["title"] = x["title"]
        current["backdrop_path"] = x["backdrop_path"]
        current["release_date"] = x["release_date"]
        movie.append(current)
        if count == 5:
            break
    return json.dumps(movie)

@app.route("/air")
def get_tv():
    request_date = requests.get('https://api.themoviedb.org/3/tv/airing_today?api_key=3e6617a08bfe9d385972f79ca39f3f39')
    d = json.loads(request_date.content)
    tv = []
    sum = 0
    for x in d["results"]:
        sum += 1
        current = {}
        current["name"] = x["name"]
        current["backdrop_path"] = x["backdrop_path"]
        current["first_air_date"] = x["first_air_date"]
        tv.append(current)
        if sum == 5:
            break
    return json.dumps(tv)



@app.route("/search_movies")
def search_movie():
    search_query =request.args.get("query")
    link_o = 'https://api.themoviedb.org/3/search/movie?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&query='+search_query+'&page=1&include_adult=false'
    request_date = requests.get(link_o)
    d = json.loads(request_date.content)
    s_movie = []
    sum = 0

    request_date2 = requests.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US')
    d2 = json.loads(request_date2.content)
    genreName =[]
    for y in d2["genres"]:
        current2 = {}
        current2["g_id"] = y["id"]
        current2["g_name"] = y["name"]
        genreName.append(current2)

    for x in d["results"]:
        sum += 1
        current = {}
        current["id"] = x["id"]
        current["title"] = x["title"]
        current["overview"] = x["overview"]
        current["poster_path"] = x["poster_path"]
        current["release_date"] = x["release_date"]
        current["vote_average"] = x["vote_average"]
        current["vote_count"] = x["vote_count"]
        current["genre_ids"] = x["genre_ids"]
        a = []
        for i in range(len(current["genre_ids"])):
            get_id = current["genre_ids"][i]
            for j in range(len(genreName)):
                if get_id == genreName[j]["g_id"]:
                    a.append(genreName[j]["g_name"])
        current["genre_name"] = a
        s_movie.append(current)
        if sum == 10:
            break
    return json.dumps(s_movie)

@app.route("/search_tv")
def search_tv():
    search_query =request.args.get("query")
    link_o = 'https://api.themoviedb.org/3/search/tv?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&query='+search_query+'&page=1&include_adult=false'
    request_date = requests.get(link_o)
    d = json.loads(request_date.content)
    s_tv = []
    sum = 0

    request_date2 = requests.get('https://api.themoviedb.org/3/genre/tv/list?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US')
    d2 = json.loads(request_date2.content)

    genreName = []
    for y in d2["genres"]:
        current2 = {}
        current2["g_id"] = y["id"]
        current2["g_name"] = y["name"]
        genreName.append(current2)

    for x in d["results"]:
        sum += 1
        current = {}
        current["id"] = x["id"]
        current["name"] = x["name"]
        current["overview"] = x["overview"]
        current["poster_path"] = x["poster_path"]
        current["first_air_date"] = x["first_air_date"]
        current["vote_average"] = x["vote_average"]
        current["vote_count"] = x["vote_count"]
        current["genre_ids"] = x["genre_ids"]
        a = []
        for i in range(len(current["genre_ids"])):
            get_id = current["genre_ids"][i]
            for j in range(len(genreName)):
                if get_id == genreName[j]["g_id"]:
                    a.append(genreName[j]["g_name"])
        current["genre_name"] = a
        s_tv.append(current)
        if sum == 10:
            break
    return json.dumps(s_tv)

@app.route("/search_tm")
def search_tm():
    search_query =request.args.get("query")
    link_o = 'https://api.themoviedb.org/3/search/multi?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US&query='+search_query+'&page=1&include_adult=false'
    request_date = requests.get(link_o)
    d = json.loads(request_date.content)
    s_tm = []
    sum = 0

    request_date2 = requests.get('https://api.themoviedb.org/3/genre/tv/list?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US')
    d2 = json.loads(request_date2.content)
    genreName = []
    for y in d2["genres"]:
        current2 = {}
        current2["g_id"] = y["id"]
        current2["g_name"] = y["name"]
        genreName.append(current2)

    request_date3 = requests.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en-US')
    d3 = json.loads(request_date3.content)
    genreName_m = []
    for z in d3["genres"]:
        current3 = {}
        current3["g_id"] = z["id"]
        current3["g_name"] = z["name"]
        genreName_m.append(current3)

    for x in d["results"]:
        sum += 1
        if 'name' in x.keys():
            current = {}
            current["id"] = x["id"]
            current["name_tm"] = x["name"]
            current["overview"] = x["overview"]
            current["poster_path"] = x["poster_path"]
            current["date_tm"] = x["first_air_date"]
            current["vote_average"] = x["vote_average"]
            current["vote_count"] = x["vote_count"]
            current["genre_ids"] = x["genre_ids"]
            current["type"] = "tv"
            a = []
            for i in range(len(current["genre_ids"])):
                get_id = current["genre_ids"][i]
                for j in range(len(genreName)):
                    if get_id == genreName[j]["g_id"]:
                        a.append(genreName[j]["g_name"])
            current["genre_name"] = a
            s_tm.append(current)
        if 'title' in x.keys():
            current_m = {}
            current_m["id"] = x["id"]
            current_m["name_tm"] = x["title"]
            current_m["overview"] = x["overview"]
            current_m["poster_path"] = x["poster_path"]
            current_m["date_tm"] = x["release_date"]
            current_m["vote_average"] = x["vote_average"]
            current_m["vote_count"] = x["vote_count"]
            current_m["genre_ids"] = x["genre_ids"]
            current_m["type"] = "movie"
            a2 = []
            for i2 in range(len(current_m["genre_ids"])):
                get_id = current_m["genre_ids"][i2]
                for k in range(len(genreName_m)):
                    if get_id == genreName_m[k]["g_id"]:
                        a2.append(genreName_m[k]["g_name"])
            current_m["genre_name"] = a2
            s_tm.append(current_m)
        if sum == 10:
            break
    return json.dumps(s_tm)

@app.route("/pop_movies")
def pop_movie():
    search_query =request.args.get("query")
    link = 'https://api.themoviedb.org/3/movie/'+search_query+'?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en_US'
    request_date = requests.get(link)
    d = json.loads(request_date.content)
    s_movie = []
    current = {}
    current["id"] = d["id"]
    current["title"] = d["title"]
    current["runtime"] = d["runtime"]
    current["poster_path"] = d["poster_path"]
    current["release_date"] = d["release_date"]
    current["vote_average"] = d["vote_average"]
    current["vote_count"] = d["vote_count"]
    current["genres"] = d["genres"]
    current["spoken_languages"] = d["spoken_languages"]
    current["backdrop_path"] = d["backdrop_path"]
    current["overview"] =d["overview"]
    s_movie.append(current)
    return json.dumps(s_movie)

@app.route("/pop_m_credits")
def pop_credits():
    search_query = request.args.get("query")
    link = 'https://api.themoviedb.org/3/movie/'+search_query+'/credits?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en_US'
    request_date = requests.get(link)
    d = json.loads(request_date.content)
    s_credits = []
    count = 0
    for x in d["cast"]:
        count += 1
        current = {}
        current["profile_path"] = x["profile_path"]
        current["name"] = x["name"]
        current["character"] = x["character"]
        s_credits.append(current)
        if count == 8:
            break
    return json.dumps(s_credits)

@app.route("/pop_m_reviews")
def pop_reviews():
    search_query = request.args.get("query")
    link = 'https://api.themoviedb.org/3/movie/'+search_query+'/reviews?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en_US&page=1'
    request_date = requests.get(link)
    d = json.loads(request_date.content)
    s_reviews = []
    count = 0
    for x in d["results"]:
        count +=1
        current = {}
        current["username"]=x["author_details"]["username"]
        current["rating"] = x["author_details"]["rating"]
        current["content"] = x["content"]
        current["created_at"] = x["created_at"]
        s_reviews.append(current)
        if count == 5:
            break
    return json.dumps(s_reviews)

@app.route("/pop_tvs")
def pop_tv():
    search_query =request.args.get("query")
    link = 'https://api.themoviedb.org/3/tv/'+search_query+'?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en_US'
    request_date = requests.get(link)
    d = json.loads(request_date.content)
    s_tv = []
    current = {}
    current["id"] = d["id"]
    current["name"] = d["name"]
    current["episode_run_time"] = d["episode_run_time"]
    current["poster_path"] = d["poster_path"]
    current["first_air_date"] = d["first_air_date"]
    current["vote_average"] = d["vote_average"]
    current["vote_count"] = d["vote_count"]
    current["genres"] = d["genres"]
    current["spoken_languages"] = d["spoken_languages"]
    current["backdrop_path"] = d["backdrop_path"]
    current["overview"] = d["overview"]
    current["number_of_seasons"] = d["number_of_seasons"]
    s_tv.append(current)
    return json.dumps(s_tv)

@app.route("/pop_tv_credits")
def pop_tv_credits():
    search_query = request.args.get("query")
    link = 'https://api.themoviedb.org/3/tv/'+search_query+'/credits?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en_US'
    request_date = requests.get(link)
    d = json.loads(request_date.content)
    s_credits = []
    count = 0
    for x in d["cast"]:
        count += 1
        current = {}
        current["profile_path"] = x["profile_path"]
        current["name"] = x["name"]
        current["character"] = x["character"]
        s_credits.append(current)
        if count == 8:
            break
    return json.dumps(s_credits)

@app.route("/pop_tv_reviews")
def pop_tv_reviews():
    search_query = request.args.get("query")
    link = 'https://api.themoviedb.org/3/tv/'+search_query+'/reviews?api_key=3e6617a08bfe9d385972f79ca39f3f39&language=en_US&page=1'
    request_date = requests.get(link)
    d = json.loads(request_date.content)
    s_reviews = []
    count = 0
    for x in d["results"]:
        count +=1
        current = {}
        current["username"]=x["author_details"]["username"]
        current["rating"] = x["author_details"]["rating"]
        current["content"] = x["content"]
        current["created_at"] = x["created_at"]
        s_reviews.append(current)
        if count == 5:
            break
    return json.dumps(s_reviews)


















