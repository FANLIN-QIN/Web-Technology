package com.example.hw91;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.bumptech.glide.request.RequestOptions;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class watchAdapter extends RecyclerView.Adapter<watchAdapter.MyView> implements ItemMoveCallback.ItemTouchHelperContract{

   List<JSONObject> items;
    Context context;
    private TextView noResultText;

    public watchAdapter(Context context,List<JSONObject> items,TextView noResultText){
        this.context = context;
        this.items = items;
        this.noResultText = noResultText;
    }

    @NonNull
    @Override
    public watchAdapter.MyView onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.watchlist, parent, false);
        // set the view's size, margins, paddings and layout parameters
        context = parent.getContext();
        return new watchAdapter.MyView(v);
    }


    @Override
    public void onBindViewHolder(watchAdapter.MyView holder, final int position) {
        // set the data in items

        JSONObject item = items.get(position);

        try {
            String category = item.getString("type");
            if (category.equals("movie")) {
                category = "Movie";
                holder.type.setText(category);
            } else {
                category = "TV";
                holder.type.setText(category);
            }
            Glide.with(holder.itemView)
                    .load(item.getString("path"))
                    .fitCenter()
                    .into(holder.image);

        } catch (JSONException e) {
            e.printStackTrace();
        }





        //RequestOptions options = new RequestOptions().bitmapTransform(new RoundedCorners(30));

        SharedPreferences pref = context.getSharedPreferences("myPref", 0); // 0 - for private mode
        SharedPreferences.Editor editor = pref.edit();





        TextView remove =holder.itemView.findViewById(R.id.watchclick);

       remove.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    String id = item.getString("id");
                    String title = item.getString("title");
                    String category = item.getString("type");
                    removeFromWatchlist(v, id, category,title);
                    deleteItem(position);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
            public void removeFromWatchlist(View v, String id, String category,String title) throws JSONException {
                SharedPreferences pref = context.getSharedPreferences("myPref", 0); // 0 - for private mode
                SharedPreferences.Editor editor = pref.edit();
                String watchlistString = pref.getString("watchlist", null);
                JSONArray watchlistJSONArray = new JSONArray(watchlistString);
                for (int i = 0; i < watchlistJSONArray.length(); i++) {
                    JSONObject itemJSON = watchlistJSONArray.getJSONObject(i);
                    if (itemJSON.getString("id").equals(id) && itemJSON.getString("type").equals(category)) {
                        watchlistJSONArray.remove(i);
                        break;
                    }
                }
                if (watchlistJSONArray.length() == 0) {
                    noResultText.setVisibility(View.VISIBLE);
                }
                if (watchlistJSONArray.length()>0){
                    editor.putString("watchlist", watchlistJSONArray.toString());
                    editor.apply();
                }else{
                    editor.putString("watchlist", null);
                    editor.apply();
                }
                Toast.makeText(v.getContext(), title + " was removed from Watchlist", Toast.LENGTH_SHORT).show();
            }
        });

        ImageView ima = holder.itemView.findViewById(R.id.watchimage);
        ima.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    if(item.getString("type").equalsIgnoreCase("movie")){
                        Intent intent3 = new Intent(v.getContext(),moviedetailActivity.class);
                        String ID = item.getString("id").toString();
                        String path = item.getString("path").toString();
                        String name = item.getString("title");
                        String EXTRA_MESSAGE = "MOVIE_ID";
                        String EXTRA_MESSAGE1 = "MOVIE_path";
                        String EXTRA_MESSAGE2 = "MOVIE_name";
                        intent3.putExtra(EXTRA_MESSAGE,ID);
                        intent3.putExtra(EXTRA_MESSAGE1,path);
                        intent3.putExtra(EXTRA_MESSAGE2,name);
                        intent3.putExtra(EXTRA_MESSAGE,ID);
                        v.getContext().startActivity(intent3);

                    }
                    if(item.getString("type").equalsIgnoreCase("tv")){
                        Intent intent3 = new Intent(v.getContext(),tvdetailActivity.class);
                        String ID = item.getString("id").toString();
                        String path = item.getString("path").toString();
                        String name = item.getString("title");
                        String EXTRA_MESSAGE = "TV_ID";
                        String EXTRA_MESSAGE1 = "TV_path";
                        String EXTRA_MESSAGE2 = "TV_name";
                        intent3.putExtra(EXTRA_MESSAGE,ID);
                        intent3.putExtra(EXTRA_MESSAGE1,path);
                        intent3.putExtra(EXTRA_MESSAGE2,name);
                        intent3.putExtra(EXTRA_MESSAGE,ID);
                        v.getContext().startActivity(intent3);
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });

    }

    @Override
    public void onItemMoved(int fromPosition, int toPosition) {
        if (fromPosition < toPosition) {
            for (int i = fromPosition; i < toPosition; i++) {
                Collections.swap(items, i, i + 1);

            }
        } else {
            for (int i = fromPosition; i > toPosition; i--) {
                Collections.swap(items, i, i -1);

            }
        }
        notifyItemMoved(fromPosition, toPosition);
        SharedPreferences pref = context.getApplicationContext().getSharedPreferences("myPref", 0);
        SharedPreferences.Editor editor = pref.edit();
        editor.putString("watchlist", items.toString());
        editor.apply();
    }

    @Override
    public void onItemSelected(MyView myView) {
        // myView.watchlistLayout.setBackgroundColor(Color.GRAY);
    }

    @Override
    public void onItemClear(MyView myView) {
        // myView.watchlistLayout.setBackgroundColor(Color.WHITE);
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    public void updateData(List<JSONObject> newData) {
        this.items = newData;
        this.notifyDataSetChanged();
    }

    public void deleteItem(int position) {
        this.items.remove(position);
        notifyDataSetChanged();
    }

    public class MyView extends RecyclerView.ViewHolder {
        // init the item view's
        ImageView image;
        View itemView;
        TextView type;
        public MyView(View itemView) {
            super(itemView);
            // get the reference of item view's
            image = itemView.findViewById(R.id.watchimage);
            type = itemView.findViewById(R.id.listtype);
            this.itemView = itemView;

        }
    }
}
