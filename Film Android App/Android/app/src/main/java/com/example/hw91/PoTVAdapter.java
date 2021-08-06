package com.example.hw91;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.TextView;
import android.widget.Toast;

import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.bumptech.glide.request.RequestOptions;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class PoTVAdapter extends RecyclerView.Adapter<PoTVAdapter.MyViewHolder>{
    private final ArrayList<PomData> personImages;
    ArrayList personIDs;
    ArrayList personNames;
    Context context;

    public PoTVAdapter(Context context,ArrayList<PomData> personImage,ArrayList personID,ArrayList personNames){
        this.context = context;
        this.personIDs = personID;
        this.personImages = personImage;
        this.personNames = personNames;
    }

    @Override
    public PoTVAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.potv, parent, false);
        // set the view's size, margins, paddings and layout parameters
        PoTVAdapter.MyViewHolder vh = new PoTVAdapter.MyViewHolder(v); // pass the view to View Holder
        context = parent.getContext();
        return vh;
    }

    @Override
    public void onBindViewHolder(PoTVAdapter.MyViewHolder holder, final int position) {
        // set the data in items

        final PomData poItem = personImages.get(position);


        RequestOptions options = new RequestOptions().bitmapTransform(new RoundedCorners(30));

        // Glide is use to load image
        // from url in your imageview.
        Glide.with(holder.itemView)
                .load(poItem.getImgUrl())
                .fitCenter()
                .apply(options)
                .into(holder.image);

        SharedPreferences pref = context.getSharedPreferences("myPref",0);
        SharedPreferences.Editor editor = pref.edit();

        String wlist = "{\"id\":"+ personIDs.get(position).toString() +",\"path\":\"" + poItem.getImgUrl() +"\",\"type\":\"tv\""+ ",\"title\":\"" + personNames.get(position).toString()+"\"}";

        TextView pop = (TextView) holder.itemView.findViewById(R.id.potvclick);
        pop.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                PopupMenu popupMenu = new PopupMenu(context,pop);
                popupMenu.getMenuInflater().inflate(R.menu.popup_menu,popupMenu.getMenu());

                Menu check = popupMenu.getMenu();

                String a1 = pref.getString("watchlist",null);
                if (a1 != null){
                    try {
                        JSONArray watchlistJSONArray = new JSONArray(a1);
                        for (int i = 0; i < watchlistJSONArray.length(); i++) {
                            JSONObject itemJSON = watchlistJSONArray.getJSONObject(i);
                            if (itemJSON.getString("id").equals(personIDs.get(position))) {
                                check.findItem(R.id.addwl).setVisible(false);
                                check.findItem(R.id.removewl).setVisible(true);
                            }
                        }
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }

                }


                popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
                    @Override
                    public boolean onMenuItemClick(MenuItem item) {
                        switch (item.getItemId()){
                            case R.id.opendb:
                                Uri uri = Uri.parse("https://www.themoviedb.org/tv/"+personIDs.get(position)+"-the-bumblebee-flies-anyway?language=en-US");
                                Intent intent = new Intent(Intent.ACTION_VIEW,uri);
                                context.startActivity(intent);
                                break;
                            case R.id.sharefb:
                                Uri uri1 = Uri.parse("https://www.facebook.com/sharer/sharer.php?u=https://www.themoviedb.org/tv/"+personIDs.get(position)+"?language=en-US");
                                Intent intent1 = new Intent(Intent.ACTION_VIEW,uri1);
                                context.startActivity(intent1);
                                break;
                            case R.id.sharetw:
                                Uri uri2 = Uri.parse("https://twitter.com/intent/tweet?url=https://www.themoviedb.org/tv/"+personIDs.get(position)+"?language=en-US");
                                Intent intent2 = new Intent(Intent.ACTION_VIEW,uri2);
                                context.startActivity(intent2);
                                break;

                            case R.id.addwl:
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
                                Toast.makeText(context, personNames.get(position) + "was added to Watchlist", Toast.LENGTH_SHORT).show();
                                break;
                            case R.id.removewl:
                                String a = pref.getString("watchlist",null);
                                JSONArray watchlistJSONArray = null;
                                try {
                                    watchlistJSONArray = new JSONArray(a);
                                    for (int i = 0; i < watchlistJSONArray.length(); i++) {
                                        JSONObject itemJSON = watchlistJSONArray.getJSONObject(i);
                                        if (itemJSON.getString("id").equals(personIDs.get(position))) {
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

                                Toast.makeText(context, personNames.get(position) + "was removed from Watchlist", Toast.LENGTH_SHORT).show();

                                break;
                        }
                        return true;
                    }
                });
                popupMenu.show();
            }
        });

        ImageView ima = (ImageView) holder.itemView.findViewById(R.id.potvimage);
        ima.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent3 = new Intent(v.getContext(),tvdetailActivity.class);
                String ID = personIDs.get(position).toString();
                String path = poItem.getImgUrl();
                String name = personNames.get(position).toString();
                String EXTRA_MESSAGE = "TV_ID";
                String EXTRA_MESSAGE1 = "TV_path";
                String EXTRA_MESSAGE2 = "TV_name";
                intent3.putExtra(EXTRA_MESSAGE,ID);
                intent3.putExtra(EXTRA_MESSAGE1,path);
                intent3.putExtra(EXTRA_MESSAGE2,name);

                v.getContext().startActivity(intent3);
            }
        });
    }

    @Override
    public int getItemCount() {
        return personImages.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        // init the item view's
        ImageView image;
        View itemView;
        public MyViewHolder(View itemView) {
            super(itemView);
            // get the reference of item view's
            image = itemView.findViewById(R.id.potvimage);
            this.itemView = itemView;
        }
    }
}
