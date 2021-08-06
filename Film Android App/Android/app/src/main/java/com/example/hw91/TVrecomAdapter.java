package com.example.hw91;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.bumptech.glide.request.RequestOptions;

import java.util.ArrayList;

public class TVrecomAdapter extends RecyclerView.Adapter<TVrecomAdapter.MyViewHolder>{
    ArrayList<MreData> personImages;
    ArrayList personIDs;
    Context context;

    public TVrecomAdapter(Context context,ArrayList<MreData> personImage,ArrayList personID){
        this.context = context;
        this.personIDs = personID;
        this.personImages = personImage;
    }

    @Override
    public TVrecomAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.tvrecom, parent, false);
        // set the view's size, margins, paddings and layout parameters
        TVrecomAdapter.MyViewHolder vh = new TVrecomAdapter.MyViewHolder(v); // pass the view to View Holder
        context = parent.getContext();
        return vh;
    }

    @Override
    public void onBindViewHolder(TVrecomAdapter.MyViewHolder holder, final int position) {
        // set the data in items
        final MreData poItem = personImages.get(position);

        RequestOptions options = new RequestOptions().bitmapTransform(new RoundedCorners(30));

        // Glide is use to load image
        // from url in your imageview.
        Glide.with(holder.itemView)
                .load(poItem.getImgUrl())
                .fitCenter()
                .apply(options)
                .into(holder.image);

        ImageView ima = (ImageView) holder.itemView.findViewById(R.id.tvremimage);
        ima.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent3 = new Intent(v.getContext(),tvdetailActivity.class);
                String ID = personIDs.get(position).toString();
                String EXTRA_MESSAGE = "TV_ID";
                intent3.putExtra(EXTRA_MESSAGE,ID);
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
            image = itemView.findViewById(R.id.tvremimage);
            this.itemView = itemView;
        }
    }




}
