package com.example.hw91;


import android.app.VoiceInteractor;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.PopupMenu;
import android.widget.ProgressBar;
import android.widget.TextView;


import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;


import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.smarteist.autoimageslider.SliderView;


import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;


public class HomeFragment extends Fragment {


    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_home,container,false);
        final List<HashMap> dnow = new ArrayList<HashMap>();

        Button btv= (Button)view.findViewById(R.id.btv);
        btv.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                FragmentTransaction fr = getFragmentManager().beginTransaction();
                fr.replace(R.id.fragment_container, new TVTag());
                fr.commit();
            }
        });


        TextView load = view.findViewById(R.id.loading);
        FrameLayout truedate = view.findViewById(R.id.truedate);
        ProgressBar bar = view.findViewById(R.id.loadicon);

        // Instantiate the RequestQueue.
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url ="https://sample666.wn.r.appspot.com/apis/curmovie";


        // Request a string response from the provided URL.
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        // Display the first 500 characters of the response string.
                        String r1 = response.replace("[","");
                        String r2 = r1.replace("]","");
                        String r3 = r2.replace("},","}-");
                        List<String> myList = new ArrayList<String>(Arrays.asList(r3.split("-")));
                        //List<HashMap> list = new ArrayList<HashMap>();
                        for(int i = 0; i<5;i++){
                            HashMap<String,String> m = new HashMap<String, String>();
                            String s = myList.get(i);
                            s =s.replace("{","");
                            s= s.replace("}","");
                            String[] a= s.split(",");
                            for(String y:a){
                                y = y.replace("\"","");
                                String[] ms = y.split(":");
                                m.put(ms[0], ms[1]);
                            }
                            dnow.add(m);
                            //list.add(m);
                        }
                        // we are creating array list for storing our image urls.
                        ArrayList<SliderData> sliderDataArrayList = new ArrayList<>();

                        // initializing the slider view.
                        SliderView sliderView = view.findViewById(R.id.Slider);

                        // adding the urls inside array list

                        sliderDataArrayList.add(new SliderData("https://image.tmdb.org/t/p/w500"+ dnow.get(0).get("backdrop_path")));
                        sliderDataArrayList.add(new SliderData("https://image.tmdb.org/t/p/w500"+ dnow.get(1).get("backdrop_path")));
                        sliderDataArrayList.add(new SliderData("https://image.tmdb.org/t/p/w500"+ dnow.get(2).get("backdrop_path")));
                        sliderDataArrayList.add(new SliderData("https://image.tmdb.org/t/p/w500"+ dnow.get(3).get("backdrop_path")));
                        sliderDataArrayList.add(new SliderData("https://image.tmdb.org/t/p/w500"+ dnow.get(4).get("backdrop_path")));

                        ArrayList personID = new ArrayList();
                        personID.add(dnow.get(0).get("id"));
                        personID.add(dnow.get(1).get("id"));
                        personID.add(dnow.get(2).get("id"));
                        personID.add(dnow.get(3).get("id"));
                        personID.add(dnow.get(4).get("id"));

                        ArrayList personName = new ArrayList();
                        personName.add(dnow.get(0).get("title"));
                        personName.add(dnow.get(1).get("title"));
                        personName.add(dnow.get(2).get("title"));
                        personName.add(dnow.get(3).get("title"));
                        personName.add(dnow.get(4).get("title"));

                        ArrayList<SliderData> posterpath = new ArrayList<>();
                        posterpath.add(new SliderData("https://image.tmdb.org/t/p/w500" + dnow.get(0).get("poster_path")));
                        posterpath.add(new SliderData("https://image.tmdb.org/t/p/w500" + dnow.get(1).get("poster_path")));
                        posterpath.add(new SliderData("https://image.tmdb.org/t/p/w500" + dnow.get(2).get("poster_path")));
                        posterpath.add(new SliderData("https://image.tmdb.org/t/p/w500" + dnow.get(3).get("poster_path")));
                        posterpath.add(new SliderData("https://image.tmdb.org/t/p/w500" + dnow.get(4).get("poster_path")));




                        // passing this array list inside our adapter class.
                        SliderAdapter adapter = new SliderAdapter(getActivity(), sliderDataArrayList,posterpath,personID,personName);

                        // below method is used to set auto cycle direction in left to
                        // right direction you can change according to requirement.
                        sliderView.setAutoCycleDirection(SliderView.LAYOUT_DIRECTION_LTR);

                        // below method is used to
                        // setadapter to sliderview.
                        sliderView.setSliderAdapter(adapter);

                        // below method is use to set
                        // scroll time in seconds.
                        sliderView.setScrollTimeInSec(6);

                        // to set it scrollable automatically
                        // we use below method.
                        sliderView.setAutoCycle(true);

                        // to start autocycle below method is used.
                        sliderView.startAutoCycle();

                        //sliderDataArrayList.add(new SliderData("https://image.tmdb.org/t/p/w500/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg"));
                        //System.out.println(dnow);

                        truedate.setVisibility(View.VISIBLE);
                        load.setVisibility(View.GONE);
                        bar.setVisibility(View.GONE);

                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        // Add the request to the RequestQueue.
        queue.add(stringRequest);

        String tpurl = "https://sample666.wn.r.appspot.com/apis/tprmovie";

        // Request a string response from the provided URL.
        StringRequest stringRequest2 = new StringRequest(Request.Method.GET, tpurl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        String r1 = response.replace("[","");
                        String r2 = r1.replace("]","");
                        String r3 = r2.replace("},","}-");
                        List<String> myList = new ArrayList<String>(Arrays.asList(r3.split("-")));
                        List<HashMap> list = new ArrayList<HashMap>();
                        for(int i = 0; i<10;i++) {
                            HashMap<String, String> m = new HashMap<String, String>();
                            String s = myList.get(i);
                            s = s.replace("{", "");
                            s = s.replace("}", "");
                            String[] a = s.split(",");
                            for (String y : a) {
                                y = y.replace("\":","\"-");
                                y = y.replace("\"", "");
                                String[] ms = y.split("-");
                                m.put(ms[0], ms[1]);
                            }
                            list.add(m);
                        }
                        ArrayList<TpmData> personImages = new ArrayList<>();
                        personImages.add(new TpmData(""+ list.get(0).get("poster_path")));
                        personImages.add(new TpmData(""+list.get(1).get("poster_path")));
                        personImages.add(new TpmData(""+list.get(2).get("poster_path")));
                        personImages.add(new TpmData(""+list.get(3).get("poster_path")));
                        personImages.add(new TpmData(""+list.get(4).get("poster_path")));
                        personImages.add(new TpmData(""+list.get(5).get("poster_path")));
                        personImages.add(new TpmData(""+list.get(6).get("poster_path")));
                        personImages.add(new TpmData(""+list.get(7).get("poster_path")));
                        personImages.add(new TpmData(""+list.get(8).get("poster_path")));
                        personImages.add(new TpmData(""+list.get(9).get("poster_path")));

                        ArrayList personID = new ArrayList();

                        personID.add(list.get(0).get("id"));
                        personID.add(list.get(1).get("id"));
                        personID.add(list.get(2).get("id"));
                        personID.add(list.get(3).get("id"));
                        personID.add(list.get(4).get("id"));
                        personID.add(list.get(5).get("id"));
                        personID.add(list.get(6).get("id"));
                        personID.add(list.get(7).get("id"));
                        personID.add(list.get(8).get("id"));
                        personID.add(list.get(9).get("id"));

                        ArrayList personNames = new ArrayList();

                        personNames.add(list.get(0).get("title"));
                        personNames.add(list.get(1).get("title"));
                        personNames.add(list.get(2).get("title"));
                        personNames.add(list.get(3).get("title"));
                        personNames.add(list.get(4).get("title"));
                        personNames.add(list.get(5).get("title"));
                        personNames.add(list.get(6).get("title"));
                        personNames.add(list.get(7).get("title"));
                        personNames.add(list.get(8).get("title"));
                        personNames.add(list.get(9).get("title"));




                        // get the reference of RecyclerView
                        RecyclerView recyclerView = (RecyclerView) view.findViewById(R.id.recycleView);
                        // set a GridLayoutManager with 1 number of columns , horizontal gravity and false value for reverseLayout to show the items from start to end
                        GridLayoutManager gridLayoutManager = new GridLayoutManager(getActivity().getApplicationContext(),1, LinearLayoutManager.HORIZONTAL,false);
                        recyclerView.setLayoutManager(gridLayoutManager); // set LayoutManager to RecyclerView
                        //  call the constructor of CustomAdapter to send the reference and data to Adapter
                        CustomAdapter customAdapter = new CustomAdapter(getActivity(), personImages,personID,personNames);
                        recyclerView.setAdapter(customAdapter); // set the Adapter to RecyclerView


                        truedate.setVisibility(View.VISIBLE);
                        load.setVisibility(View.GONE);
                        bar.setVisibility(View.GONE);
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        queue.add(stringRequest2);

        String popurl = "https://sample666.wn.r.appspot.com/apis/popmovie";

        // Request a string response from the provided URL.
        StringRequest stringRequest3 = new StringRequest(Request.Method.GET, popurl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        String r1 = response.replace("[","");
                        String r2 = r1.replace("]","");
                        String r3 = r2.replace("},","}@@");
                        List<String> myList = new ArrayList<String>(Arrays.asList(r3.split("@@")));
                        List<HashMap> list = new ArrayList<HashMap>();
                        for(int i = 0; i<10;i++) {
                            HashMap<String, String> m = new HashMap<String, String>();
                            String s = myList.get(i);
                            s = s.replace("{", "");
                            s = s.replace("}", "");
                            String[] a = s.split(",");
                            for (String y : a) {
                                y = y.replace("\":","\"-");
                                y = y.replace("\"", "");
                                String[] ms = y.split("-");
                                m.put(ms[0], ms[1]);
                            }
                            list.add(m);
                        }
                        ArrayList<PomData> personImages = new ArrayList<>();
                        personImages.add(new PomData(""+ list.get(0).get("poster_path")));
                        personImages.add(new PomData(""+list.get(1).get("poster_path")));
                        personImages.add(new PomData(""+list.get(2).get("poster_path")));
                        personImages.add(new PomData(""+list.get(3).get("poster_path")));
                        personImages.add(new PomData(""+list.get(4).get("poster_path")));
                        personImages.add(new PomData(""+list.get(5).get("poster_path")));
                        personImages.add(new PomData(""+list.get(6).get("poster_path")));
                        personImages.add(new PomData(""+list.get(7).get("poster_path")));
                        personImages.add(new PomData(""+list.get(8).get("poster_path")));
                        personImages.add(new PomData(""+list.get(9).get("poster_path")));

                        ArrayList personID = new ArrayList();

                        personID.add(list.get(0).get("id"));
                        personID.add(list.get(1).get("id"));
                        personID.add(list.get(2).get("id"));
                        personID.add(list.get(3).get("id"));
                        personID.add(list.get(4).get("id"));
                        personID.add(list.get(5).get("id"));
                        personID.add(list.get(6).get("id"));
                        personID.add(list.get(7).get("id"));
                        personID.add(list.get(8).get("id"));
                        personID.add(list.get(9).get("id"));

                        ArrayList personNames = new ArrayList();

                        personNames.add(list.get(0).get("title"));
                        personNames.add(list.get(1).get("title"));
                        personNames.add(list.get(2).get("title"));
                        personNames.add(list.get(3).get("title"));
                        personNames.add(list.get(4).get("title"));
                        personNames.add(list.get(5).get("title"));
                        personNames.add(list.get(6).get("title"));
                        personNames.add(list.get(7).get("title"));
                        personNames.add(list.get(8).get("title"));
                        personNames.add(list.get(9).get("title"));

                        // get the reference of RecyclerView
                        RecyclerView recyclerView = (RecyclerView) view.findViewById(R.id.recycleView2);
                        // set a GridLayoutManager with 1 number of columns , horizontal gravity and false value for reverseLayout to show the items from start to end
                        GridLayoutManager gridLayoutManager = new GridLayoutManager(getActivity().getApplicationContext(),1, LinearLayoutManager.HORIZONTAL,false);
                        recyclerView.setLayoutManager(gridLayoutManager); // set LayoutManager to RecyclerView
                        //  call the constructor of CustomAdapter to send the reference and data to Adapter
                        PopumAdapter popumAdapter = new PopumAdapter(getActivity(), personImages,personID,personNames);
                        recyclerView.setAdapter(popumAdapter); // set the Adapter to RecyclerView

                        truedate.setVisibility(View.VISIBLE);
                        load.setVisibility(View.GONE);
                        bar.setVisibility(View.GONE);
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("It didn't work");
            }
        });

        queue.add(stringRequest3);

        TextView mfoot = (TextView) view.findViewById(R.id.mfoot);
        mfoot.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Uri uri2 = Uri.parse("https://www.themoviedb.org/");
                Intent intent2 = new Intent(Intent.ACTION_VIEW,uri2);
                startActivity(intent2);
            }
        });
        return view;
    }


}
