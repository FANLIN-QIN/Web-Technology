package com.example.hw91;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.bumptech.glide.request.RequestOptions;

import java.util.ArrayList;

public class SearchAdapter extends RecyclerView.Adapter<SearchAdapter.MyViewHolder>{

    private final ArrayList<TpmData> personImages;
    ArrayList personIDs;
    ArrayList personNames;
    ArrayList type;
    ArrayList rating;
    ArrayList year;
    private final ArrayList<TpmData> personPoster;
    Context context;

    public SearchAdapter(Context context,ArrayList<TpmData> personImage,ArrayList personID,ArrayList personName,ArrayList rating, ArrayList type,ArrayList year,ArrayList<TpmData> personPath){
        this.context = context;
        this.personIDs = personID;
        this.personImages = personImage;
        this.personNames = personName;
        this.rating = rating;
        this.type =type;
        this.year = year;
        this.personPoster = personPath;
    }

    @Override
    public SearchAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.searchresult, parent, false);
        // set the view's size, margins, paddings and layout parameters
        SearchAdapter.MyViewHolder vh = new SearchAdapter.MyViewHolder(v); // pass the view to View Holder
        context = parent.getContext();
        return vh;
    }

    @Override
    public void onBindViewHolder(SearchAdapter.MyViewHolder holder, final int position) {
        // set the data in items

        final TpmData tpItem = personImages.get(position);
        final TpmData tpItem1 = personPoster.get(position);

        if(!year.get(position).toString().equals("0")){
            holder.type.setText(type.get(position).toString() +"("+ year.get(position).toString() + ")");
        }else{
            holder.type.setText(type.get(position).toString());
        }
        holder.textrating.setText(rating.get(position).toString());
        holder.textname.setText(personNames.get(position).toString());


        RequestOptions options = new RequestOptions().bitmapTransform(new RoundedCorners(30));

        // Glide is use to load image
        // from url in your imageview.
        Glide.with(holder.itemView)
                .load(tpItem.getImgUrl())
                .into(holder.image);

        ImageView ima = (ImageView) holder.itemView.findViewById(R.id.searchimage);
        ima.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(type.get(position).toString().equals("MOVIE")){
                    Intent intent3 = new Intent(v.getContext(),moviedetailActivity.class);
                    String ID = personIDs.get(position).toString();
                    String path = tpItem1.getImgUrl();
                    String name = personNames.get(position).toString();
                    String EXTRA_MESSAGE = "MOVIE_ID";
                    String EXTRA_MESSAGE1 = "MOVIE_path";
                    String EXTRA_MESSAGE2 = "MOVIE_name";
                    intent3.putExtra(EXTRA_MESSAGE,ID);
                    intent3.putExtra(EXTRA_MESSAGE1,path);
                    intent3.putExtra(EXTRA_MESSAGE2,name);
                    v.getContext().startActivity(intent3);
                }
                if(type.get(position).toString().equals("TV")){
                    Intent intent3 = new Intent(v.getContext(),tvdetailActivity.class);
                    String ID = personIDs.get(position).toString();
                    String path = tpItem1.getImgUrl();
                    String name = personNames.get(position).toString();
                    String EXTRA_MESSAGE = "TV_ID";
                    String EXTRA_MESSAGE1 = "TV_path";
                    String EXTRA_MESSAGE2 = "TV_name";
                    intent3.putExtra(EXTRA_MESSAGE,ID);
                    intent3.putExtra(EXTRA_MESSAGE1,path);
                    intent3.putExtra(EXTRA_MESSAGE2,name);
                    v.getContext().startActivity(intent3);
                }
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
        TextView type;
        TextView textrating;
        TextView textname;
        public MyViewHolder(View itemView) {
            super(itemView);
            // get the reference of item view's
            image = itemView.findViewById(R.id.searchimage);
            this.itemView = itemView;
            type =itemView.findViewById(R.id.searchtype);
            textrating = itemView.findViewById(R.id.searchrating);
            textname = itemView.findViewById(R.id.searchname);

        }
    }


}
