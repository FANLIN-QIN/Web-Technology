package com.example.hw91;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class WatchlistFragment extends Fragment {
    watchAdapter adapter;
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_watchlist,container, false);

        SharedPreferences pref = getActivity().getSharedPreferences("myPref", 0); // 0 - for private mode
        SharedPreferences.Editor editor = pref.edit();

        String a = pref.getString("watchlist",null);
        System.out.println(a);

        TextView nore = view.findViewById(R.id.listfirst);
        RecyclerView recyclerView = (RecyclerView) view.findViewById(R.id.watchrecycle);


        if (a != null) {
            nore.setVisibility(View.GONE);
            recyclerView.setVisibility(View.VISIBLE);
            try {
                JSONArray jsonArray = new JSONArray(a);
                ArrayList<JSONObject> itemJSON = new ArrayList<>();
                for (int i = 0; i < jsonArray.length(); i++) {
                    itemJSON.add(jsonArray.getJSONObject(i));
                }
                // set a GridLayoutManager with 1 number of columns , horizontal gravity and false value for reverseLayout to show the items from start to end
                GridLayoutManager gridLayoutManager = new GridLayoutManager(getActivity().getApplicationContext(),3);
                recyclerView.setLayoutManager(gridLayoutManager); // set LayoutManager to RecyclerView
                //  call the constructor of CustomAdapter to send the reference and data to Adapter
                watchAdapter popumAdapter = new watchAdapter(getActivity(), itemJSON,nore);
                recyclerView.setAdapter(popumAdapter); // set the Adapter to RecyclerView
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        if (a == null){
            nore.setVisibility(View.VISIBLE);
            recyclerView.setVisibility(View.GONE);
        }
        renderWatchlist(view);
        return  view;
    }

    private void renderWatchlist(View view) {
        SharedPreferences pref = getActivity().getApplicationContext().getSharedPreferences("myPref", 0);
        String a = pref.getString("watchlist", null);
        // Log.d("success", watchlistString);
        TextView nore = view.findViewById(R.id.listfirst);
        RecyclerView recyclerView = (RecyclerView) view.findViewById(R.id.watchrecycle);
        GridLayoutManager watchlistGridLayoutManager = new GridLayoutManager(view.getContext(), 3);
        recyclerView.setLayoutManager(watchlistGridLayoutManager);
        try {
            if (a != null) {
                JSONArray jsonArray = new JSONArray(a);
                nore.setVisibility(View.GONE);
                ArrayList<JSONObject> itemJSON = new ArrayList<>();
                for (int i = 0; i < jsonArray.length(); i++) {
                    itemJSON.add(jsonArray.getJSONObject(i));
                }
                recyclerView.setVisibility(View.VISIBLE);

                adapter = new watchAdapter(view.getContext(), itemJSON,nore);
                ItemTouchHelper.Callback callback = new ItemMoveCallback(adapter);
                ItemTouchHelper touchHelper = new ItemTouchHelper(callback);
                touchHelper.attachToRecyclerView(recyclerView);
                recyclerView.setAdapter(adapter);
            } else {
                recyclerView.setVisibility(View.GONE);
                nore.setVisibility(View.VISIBLE);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
