package com.example.hw91;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.bumptech.glide.Glide;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

public class tvdetailActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tvdetail);

        Intent intent = getIntent();
        String tvid = intent.getStringExtra("TV_ID");
        String name = intent.getStringExtra("TV_name");
        String path = intent.getStringExtra("TV_path");

        RequestQueue queue = Volley.newRequestQueue(this);
        String url ="https://sample666.wn.r.appspot.com/apis/tvvedio9/"+tvid;

        // Request a string response from the provided URL.
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        // Display the first 500 characters of the response string.
                        String r1 = response.replace("[","");
                        String r2 = r1.replace("]","");
                        r2 = r2.replace("{","");
                        r2 = r2.replace("}","");
                        String r3 = r2;
                        String[] a = r3.split(",");
                        List<HashMap> list = new ArrayList<HashMap>();
                        HashMap<String, String> m = new HashMap<String, String>();
                        for (String y : a) {
                            y = y.replace("\":","\"@");
                            y = y.replace("\"", "");
                            String[] ms = y.split("@");
                            m.put(ms[0], ms[1]);
                        }
                        list.add(m);
                        YouTubePlayerView youTubePlayerView = findViewById(R.id.tvyoutube_player_view);
                        getLifecycle().addObserver(youTubePlayerView);
                        ImageView imageView = findViewById(R.id.tvplayimage);
                        if(list.get(0).get("key").toString().equalsIgnoreCase("tzkWB85ULJY")){
                            youTubePlayerView.setVisibility(View.GONE);
                            imageView.setVisibility(View.VISIBLE);
                        }else{
                            imageView.setVisibility(View.GONE);
                            youTubePlayerView.setVisibility(View.VISIBLE);
                            youTubePlayerView.addYouTubePlayerListener(new AbstractYouTubePlayerListener() {
                                @Override
                                public void onReady(YouTubePlayer youTubePlayer) {
                                    String vedioId = list.get(0).get("key").toString();
                                    youTubePlayer.cueVideo(vedioId,0);
                                }
                            });
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        queue.add(stringRequest);

        String detailurl ="https://sample666.wn.r.appspot.com/apis/tvdetail9/"+tvid;

        // Request a string response from the provided URL.
        StringRequest stringRequest1 = new StringRequest(Request.Method.GET, detailurl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        // Display the first 500 characters of the response string.
                        String r1 = response.replace("[","");
                        String r2 = r1.replace("]","");
                        r2 = r2.replace("{","");
                        r2 = r2.replace("}","");
                        String r3 = r2;
                        String[] a = r3.split(",");
                        List<HashMap> list = new ArrayList<HashMap>();
                        HashMap<String, String> m = new HashMap<String, String>();
                        for (String y : a) {
                            y = y.replace("\":","\"@");
                            y = y.replace("\"", "");
                            String[] ms = y.split("@");
                            m.put(ms[0], ms[1]);
                        }
                        list.add(m);
                        TextView title = (TextView)findViewById(R.id.tvtitle);
                        title.setText(list.get(0).get("title").toString());
                        ImageView imageView = findViewById(R.id.tvplayimage);
                        Glide.with(tvdetailActivity.this)
                                .load(""+list.get(0).get("backdrop_path").toString())
                                .fitCenter()
                                .into(imageView);

                        TextView text = findViewById(R.id.yeartv);
                        text.setText(list.get(0).get("first_air_date").toString());
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        queue.add(stringRequest1);

        String overviewurl ="https://sample666.wn.r.appspot.com/apis/tvdetailo/"+tvid;
        // Request a string response from the provided URL.
        StringRequest stringRequest2 = new StringRequest(Request.Method.GET, overviewurl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        // Display the first 500 characters of the response string.
                        String r1 = response.replace("[","");
                        String r2 = r1.replace("]","");
                        r2 = r2.replace("{","");
                        r2 = r2.replace("}","");
                        r2 = r2.replace("\"","");
                        String r3 =r2;
                        String[] a = r3.split(":");
                        HashMap<String, String> m = new HashMap<String, String>();
                        m.put(a[0], a[1]);
                        List<HashMap> list = new ArrayList<HashMap>();
                        list.add(m);
                        TextView text = findViewById(R.id.tv_overview);
                        text.setText(list.get(0).get("overview").toString());

                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        queue.add(stringRequest2);

        String genresurl ="https://sample666.wn.r.appspot.com/apis/tvdetailg/"+tvid;

        // Request a string response from the provided URL.
        StringRequest stringRequest3 = new StringRequest(Request.Method.GET, genresurl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        // Display the first 500 characters of the response string.
                        String r1 = response.replace("[","");
                        String r2 = r1.replace("]","");
                        r2 = r2.replace("{","");
                        r2 = r2.replace("}","");
                        r2 = r2.replace("\"","");
                        r2 = r2.replace(",",", ");
                        String r3 =r2;
                        String[] a = r3.split(":");
                        HashMap<String, String> m = new HashMap<String, String>();
                        m.put(a[0], a[1]);
                        List<HashMap> list = new ArrayList<HashMap>();
                        list.add(m);
                        TextView text = findViewById(R.id.tvgenres);
                        text.setText(list.get(0).get("genres").toString());
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        queue.add(stringRequest3);

        SharedPreferences pref = getSharedPreferences("myPref",0);
        SharedPreferences.Editor editor = pref.edit();

        TextView add = findViewById(R.id.addtv);
        TextView remove = findViewById(R.id.removetv);

        String a1 = pref.getString("watchlist",null);
        if (a1 != null){
            try {
                JSONArray watchlistJSONArray = new JSONArray(a1);
                for (int i = 0; i < watchlistJSONArray.length(); i++) {
                    JSONObject itemJSON = watchlistJSONArray.getJSONObject(i);
                    if (itemJSON.getString("id").equals(tvid)) {
                        add.setVisibility(View.GONE);
                        remove.setVisibility(View.VISIBLE);
                    }
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }

        String wlist = "{\"id\":"+ tvid +",\"path\":\"" + path +"\",\"type\":\"tv\""+ ",\"title\":\"" + name+"\"}";
        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(pref.getString("watchlist",null) != null){
                    String a = pref.getString("watchlist",null);
                    a = a.replace("]","");
                    a = a.replace("[","");
                    String final1 = "[" + a + "," + wlist + "]";
                    editor.putString("watchlist",final1);
                    editor.commit();
                }

                if(pref.getString("watchlist",null) == null){
                    String final1 = "[" + wlist + "]";
                    editor.putString("watchlist",final1);
                    editor.commit();
                }
                Toast.makeText(tvdetailActivity.this,name + "was added to Watchlist", Toast.LENGTH_SHORT).show();
                remove.setVisibility(View.VISIBLE);
                add.setVisibility(View.GONE);
            }
        });

        remove.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String a = pref.getString("watchlist",null);
                JSONArray watchlistJSONArray = null;
                try {
                    watchlistJSONArray = new JSONArray(a);
                    for (int i = 0; i < watchlistJSONArray.length(); i++) {
                        JSONObject itemJSON = watchlistJSONArray.getJSONObject(i);
                        if (itemJSON.getString("id").equals(tvid)) {
                            watchlistJSONArray.remove(i);
                            break;
                        }
                    }
                    if (watchlistJSONArray.length()>0){
                        editor.putString("watchlist", watchlistJSONArray.toString());
                        editor.apply();
                    }else{
                        editor.putString("watchlist", null);
                        editor.apply();
                    }

                } catch (JSONException e) {
                    e.printStackTrace();
                }
                Toast.makeText(tvdetailActivity.this, name + "was removed from Watchlist", Toast.LENGTH_SHORT).show();
                remove.setVisibility(View.GONE);
                add.setVisibility(View.VISIBLE);

            }
        });



        TextView mfb = findViewById(R.id.tvdetailfb);
        mfb.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Uri uri1 = Uri.parse("https://www.facebook.com/sharer/sharer.php?u=https://www.themoviedb.org/tv/"+tvid+"?language=en-US");
                Intent intent1 = new Intent(Intent.ACTION_VIEW,uri1);
                startActivity(intent1);
            }
        });

        TextView mtw = findViewById(R.id.tvdetailtw);
        mtw.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Uri uri2 = Uri.parse("https://twitter.com/intent/tweet?url=https://www.themoviedb.org/tv/"+tvid+"?language=en-US");
                Intent intent2 = new Intent(Intent.ACTION_VIEW,uri2);
                startActivity(intent2);
            }
        });

        String casturl ="https://sample666.wn.r.appspot.com/apis/tvcast9/"+tvid;

        // Request a string response from the provided URL.
        StringRequest stringRequest4 = new StringRequest(Request.Method.GET, casturl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        // Display the first 500 characters of the response string.
                        if(response.length()>2) {
                            String r1 = response.replace("[", "");
                            String r2 = r1.replace("]", "");
                            String r3 = r2.replace("},", "}@");
                            List<String> myList = new ArrayList<String>(Arrays.asList(r3.split("@")));
                            List<HashMap> list = new ArrayList<HashMap>();
                            ArrayList<CastmData> personImages = new ArrayList<>();
                            ArrayList personNames = new ArrayList();

                            if (myList.size() > 5) {
                                for (int i = 0; i < 6; i++) {
                                    HashMap<String, String> m = new HashMap<String, String>();
                                    String s = myList.get(i);
                                    s = s.replace("{", "");
                                    s = s.replace("}", "");
                                    String[] a = s.split(",");
                                    for (String y : a) {
                                        y = y.replace("\":", "\"@");
                                        y = y.replace("\"", "");
                                        String[] ms = y.split("@");
                                        m.put(ms[0], ms[1]);
                                    }
                                    list.add(m);
                                }
                                Log.d("test",list.toString());
                                for (int i = 0; i < 6; i++) {
                                    personImages.add(new CastmData("" + list.get(i).get("profile_path")));
                                    personNames.add(list.get(i).get("name"));
                                }
                            } else {
                                for (int i = 0; i < myList.size(); i++) {
                                    HashMap<String, String> m = new HashMap<String, String>();
                                    String s = myList.get(i);
                                    s = s.replace("{", "");
                                    s = s.replace("}", "");
                                    String[] a = s.split(",");
                                    for (String y : a) {
                                        y = y.replace("\":", "\"@");
                                        y = y.replace("\"", "");
                                        String[] ms = y.split("@");
                                        m.put(ms[0], ms[1]);
                                    }
                                    list.add(m);
                                }
                                for (int i = 0; i < myList.size(); i++) {
                                    personImages.add(new CastmData("" + list.get(i).get("profile_path")));
                                    personNames.add(list.get(i).get("name"));
                                }
                            }
                            // get the reference of RecyclerView
                            RecyclerView recyclerView = (RecyclerView) findViewById(R.id.tvCastrecycle);
                            // set a GridLayoutManager with 3 number of columns , horizontal gravity and false value for reverseLayout to show the items from start to end
                            GridLayoutManager gridLayoutManager = new GridLayoutManager(getApplicationContext(), 3);
                            recyclerView.setLayoutManager(gridLayoutManager); // set LayoutManager to RecyclerView
                            //  call the constructor of CustomAdapter to send the reference and data to Adapter
                            CasttvAdapter castmAdapter = new CasttvAdapter(tvdetailActivity.this, personImages, personNames);
                            recyclerView.setAdapter(castmAdapter); // set the Adapter to RecyclerView
                        }
                        if (response.length() == 2){
                            TextView retirle = findViewById(R.id.tvcasttitle);
                            retirle.setVisibility(View.GONE);
                            RecyclerView review = findViewById(R.id.tvCastrecycle);
                            review.setVisibility(View.GONE);
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        queue.add(stringRequest4);

        String reviewurl ="https://sample666.wn.r.appspot.com/apis/tvreview9/"+tvid;

        // Request a string response from the provided URL.
        StringRequest stringRequest5 = new StringRequest(Request.Method.GET, reviewurl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        // Display the first 500 characters of the response string.
                        if(response.length() > 10) {
                            Integer size = Integer.parseInt(String.valueOf(response.charAt(6)));
                            if (size > 1) {
                                String r1 = response.replace("[", "");
                                String r2 = r1.replace("]", "");
                                String r3 = r2.replace("},", "}+");
                                List<String> myList = new ArrayList<String>(Arrays.asList(r3.split("\\+")));
                                List<HashMap> list = new ArrayList<HashMap>();
                                for (int i = 0; i < myList.size(); i++) {
                                    HashMap<String, String> m = new HashMap<String, String>();
                                    String s = myList.get(i);
                                    s = s.replace("{", "");
                                    s = s.replace("}", "");
                                    s = s.replace(",\"","+\"");
                                    String[] a = s.split("\\+");
                                    for (String y : a) {
                                        y = y.replace("\":", "\"+");
                                        y = y.replace("\"", "");
                                        String[] ms = y.split("\\+");
                                        m.put(ms[0], ms[1]);
                                    }
                                    list.add(m);

                                }
                                ArrayList personNames = new ArrayList();
                                SimpleDateFormat spf = new SimpleDateFormat("yyyy-MM-dd");
                                SimpleDateFormat formatter = new SimpleDateFormat("E, MMM dd yyyy");
                                ArrayList rating = new ArrayList();
                                ArrayList content = new ArrayList();
                                for (int i = 0; i < myList.size(); i++) {
                                    String date = list.get(i).get("created_at").toString();
                                    ParsePosition pos = new ParsePosition(0);
                                    Date newDate = spf.parse(date, pos);
                                    date = formatter.format(newDate);
                                    personNames.add("by " + list.get(i).get("authoe") + " on " + date);
                                    Integer rat = Integer.parseInt(list.get(i).get("rating").toString());
                                    Integer ratfinal = rat / 2;
                                    rating.add(String.valueOf(ratfinal) + "/5");
                                    content.add(list.get(i).get("content"));
                                }

                                // get the reference of RecyclerView
                                RecyclerView recyclerView = (RecyclerView) findViewById(R.id.tvreviewrecycle);
                                // set a GridLayoutManager with 3 number of columns , horizontal gravity and false value for reverseLayout to show the items from start to end
                                GridLayoutManager gridLayoutManager = new GridLayoutManager(getApplicationContext(), 1);
                                recyclerView.setLayoutManager(gridLayoutManager); // set LayoutManager to RecyclerView
                                //  call the constructor of CustomAdapter to send the reference and data to Adapter
                                ReviewTVAdapter reviewAdapter = new ReviewTVAdapter(tvdetailActivity.this, personNames, rating,content);
                                recyclerView.setAdapter(reviewAdapter); // set the Adapter to RecyclerView

                            } else if (size == 1) {
                                String r1 = response.replace("[", "");
                                String r2 = r1.replace("]", "");
                                r2 = r2.replace("{", "");
                                r2 = r2.replace("}", "");
                                r2 = r2.replace(",\"","+\"");
                                String r3 = r2;
                                String[] a = r3.split("\\+");
                                List<HashMap> list = new ArrayList<HashMap>();
                                HashMap<String, String> m = new HashMap<String, String>();
                                for (String y : a) {
                                    y = y.replace("\":", "\"+");
                                    y = y.replace("\"", "");
                                    String[] ms = y.split("\\+");
                                    m.put(ms[0], ms[1]);
                                }
                                list.add(m);
                                ArrayList personNames = new ArrayList();
                                SimpleDateFormat spf = new SimpleDateFormat("yyyy-MM-dd");
                                SimpleDateFormat formatter = new SimpleDateFormat("E, MMM dd yyyy");
                                ArrayList rating = new ArrayList();
                                ArrayList content = new ArrayList();
                                String date = list.get(0).get("created_at").toString();
                                ParsePosition pos = new ParsePosition(0);
                                Date newDate = spf.parse(date, pos);
                                date = formatter.format(newDate);
                                personNames.add("by " + list.get(0).get("authoe") + " on " + date);
                                Integer rat = Integer.parseInt(list.get(0).get("rating").toString());
                                Integer ratfinal = rat / 2;
                                rating.add(String.valueOf(ratfinal) + "/5" );
                                content.add(list.get(0).get("content"));

                                // get the reference of RecyclerView
                                RecyclerView recyclerView = (RecyclerView) findViewById(R.id.tvreviewrecycle);
                                // set a GridLayoutManager with 3 number of columns , horizontal gravity and false value for reverseLayout to show the items from start to end
                                GridLayoutManager gridLayoutManager = new GridLayoutManager(getApplicationContext(), 1);
                                recyclerView.setLayoutManager(gridLayoutManager); // set LayoutManager to RecyclerView
                                //  call the constructor of CustomAdapter to send the reference and data to Adapter
                                ReviewTVAdapter reviewAdapter = new ReviewTVAdapter(tvdetailActivity.this, personNames, rating,content);
                                recyclerView.setAdapter(reviewAdapter); // set the Adapter to RecyclerView
                            }
                        }
                        if (response.length() == 2){
                            TextView retirle = findViewById(R.id.tvretitle);
                            retirle.setVisibility(View.GONE);
                            RecyclerView review = findViewById(R.id.tvreviewrecycle);
                            review.setVisibility(View.GONE);
                        }

                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        queue.add(stringRequest5);

        String recomurl ="https://sample666.wn.r.appspot.com/apis/tvrecom9/"+tvid;

        // Request a string response from the provided URL.
        StringRequest stringRequest6 = new StringRequest(Request.Method.GET, recomurl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        // Display the first 500 characters of the response string.
                        if(response.length()> 4) {
                            String r1 = response.replace("[", "");
                            String r2 = r1.replace("]", "");
                            String r3 = r2.replace("},", "}@");
                            List<String> myList = new ArrayList<String>(Arrays.asList(r3.split("@")));
                            List<HashMap> list = new ArrayList<HashMap>();
                            for (int i = 0; i < myList.size(); i++) {
                                HashMap<String, String> m = new HashMap<String, String>();
                                String s = myList.get(i);
                                s = s.replace("{", "");
                                s = s.replace("}", "");
                                String[] a = s.split(",");
                                for (String y : a) {
                                    y = y.replace("\":", "\"@");
                                    y = y.replace("\"", "");
                                    String[] ms = y.split("@");
                                    m.put(ms[0], ms[1]);
                                }
                                list.add(m);
                            }
                            ArrayList<MreData> personImages = new ArrayList<>();
                            ArrayList personID = new ArrayList();
                            for (int i = 0; i < myList.size(); i++) {
                                personImages.add(new MreData("" + list.get(i).get("poster_path")));
                                personID.add(list.get(i).get("id"));
                            }
                            // get the reference of RecyclerView
                            RecyclerView recyclerView = (RecyclerView) findViewById(R.id.tvrecommrecycleView);
                            // set a GridLayoutManager with 1 number of columns , horizontal gravity and false value for reverseLayout to show the items from start to end
                            GridLayoutManager gridLayoutManager = new GridLayoutManager(getApplicationContext(), 1, LinearLayoutManager.HORIZONTAL, false);
                            recyclerView.setLayoutManager(gridLayoutManager); // set LayoutManager to RecyclerView
                            //  call the constructor of CustomAdapter to send the reference and data to Adapter
                            TVrecomAdapter mrecomAdapter = new TVrecomAdapter(tvdetailActivity.this, personImages, personID);
                            recyclerView.setAdapter(mrecomAdapter); // set the Adapter to RecyclerView
                        }
                        if (response.length() == 4){
                            TextView retirle = findViewById(R.id.tvrecomtitle);
                            retirle.setVisibility(View.GONE);
                            RecyclerView review = findViewById(R.id.tvrecommrecycleView);
                            review.setVisibility(View.GONE);
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        queue.add(stringRequest6);



    }
}