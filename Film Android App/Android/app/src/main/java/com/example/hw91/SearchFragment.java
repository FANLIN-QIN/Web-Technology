package com.example.hw91;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.ScrollView;
import android.widget.TextView;


import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.SearchView;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class SearchFragment extends Fragment {
    private RecyclerView recyclerView;
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view =  inflater.inflate(R.layout.fragment_search,container, false);
        androidx.appcompat.widget.SearchView searchView = view.findViewById(R.id.search_view);
        searchView.setQueryHint("Search movies and TV");
        searchView.setMaxWidth(Integer.MAX_VALUE);

        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
       searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
           @Override
           public boolean onQueryTextSubmit(String query) {
               return false;
           }

           @Override
           public boolean onQueryTextChange(String newText) {
               if(!newText.equals("")){
                   String url = "https://sample666.wn.r.appspot.com/apis/search/" + newText;
                   // Request a string response from the provided URL.
                   StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                           new Response.Listener<String>() {
                               @Override
                               public void onResponse(String response) {
                                   if (response.length() > 2) {
                                       ScrollView result = (ScrollView) view.findViewById(R.id.searchresult);
                                       result.setVisibility(View.VISIBLE);
                                       // Display the first 500 characters of the response string.
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
                                           s = s.replace(",\"", "@@\"");
                                           String[] a = s.split("@@");
                                           for (String y : a) {
                                               y = y.replace("\":", "\"@@");
                                               y = y.replace("\"", "");
                                               String[] ms = y.split("@@");
                                               m.put(ms[0], ms[1]);
                                           }
                                           list.add(m);
                                       }
                                       Log.d("test", list.toString());
                                       ArrayList<TpmData> personImages = new ArrayList<>();
                                       ArrayList personType = new ArrayList<>();
                                       ArrayList personRating = new ArrayList<>();
                                       ArrayList personName = new ArrayList<>();
                                       ArrayList personID = new ArrayList<>();
                                       ArrayList personYear = new ArrayList<>();
                                       ArrayList<TpmData> personPoster = new ArrayList<>();

                                       for (int i = 0; i < myList.size(); i++) {
                                           personImages.add(new TpmData("" + list.get(i).get("backdrop_path")));
                                           personPoster.add(new TpmData("" + list.get(i).get("poster_path")));
                                           personID.add(list.get(i).get("id"));
                                           personType.add(list.get(i).get("media_type"));
                                           personName.add(list.get(i).get("title"));
                                           Double rat = Double.parseDouble(list.get(i).get("rating").toString());
                                           Double ratfinal = rat / 2;
                                           String ratfff = String.format("%.1f",ratfinal);
                                           personRating.add(String.valueOf(ratfff));
                                           personYear.add(list.get(i).get("year"));

                                       }

                                       // get the reference of RecyclerView
                                       RecyclerView recyclerView = (RecyclerView) view.findViewById(R.id.searchrecycle);
                                       // set a GridLayoutManager with 1 number of columns , horizontal gravity and false value for reverseLayout to show the items from start to end
                                       GridLayoutManager gridLayoutManager = new GridLayoutManager(getActivity().getApplicationContext(), 1);
                                       recyclerView.setLayoutManager(gridLayoutManager); // set LayoutManager to RecyclerView
                                       //  call the constructor of CustomAdapter to send the reference and data to Adapter
                                       SearchAdapter customAdapter = new SearchAdapter(getActivity(), personImages,personID,personName,personRating,personType,personYear,personPoster);
                                       recyclerView.setAdapter(customAdapter); // set the Adapter to RecyclerView

                                       TextView no = (TextView) view.findViewById(R.id.noresult);
                                       no.setVisibility(View.GONE);

                                       TextView first = (TextView) view.findViewById(R.id.first);
                                       first.setVisibility(View.GONE);
                                   }
                                   if (response.length() == 2){
                                       TextView no = (TextView) view.findViewById(R.id.noresult);
                                       no.setVisibility(View.VISIBLE);
                                       ScrollView result = (ScrollView) view.findViewById(R.id.searchresult);
                                       result.setVisibility(View.GONE);
                                       TextView first = (TextView) view.findViewById(R.id.first);
                                       first.setVisibility(View.GONE);
                                   }

                               }
                           }, new Response.ErrorListener() {
                       @Override
                       public void onErrorResponse(VolleyError error) {
                           System.out.println("It didn't work");
                       }
                   });
                   queue.add(stringRequest);
               }

               return true;
           }


       });



        return  view;
    }


}
