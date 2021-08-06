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

public class MrecomAdapter  extends RecyclerView.Adapter<MrecomAdapter.MyViewHolder>{
    ArrayList<MreData> personImages;
    ArrayList personIDs;
    Context context;

    public MrecomAdapter(Context context,ArrayList<MreData> personImage,ArrayList personID){
        this.context = context;
        this.personIDs = personID;
        this.personImages = personImage;
    }

    @Override
    public MrecomAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.mrecom, parent, false);
        // set the view's size, margins, paddings and layout parameters
        MrecomAdapter.MyViewHolder vh = new MrecomAdapter.MyViewHolder(v); // pass the view to View Holder
        context = parent.getContext();
        return vh;
    }

    @Override
    public void onBindViewHolder(MrecomAdapter.MyViewHolder holder, final int position) {
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

        ImageView ima = (ImageView) holder.itemView.findViewById(R.id.mremimage);
        ima.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent3 = new Intent(v.getContext(),moviedetailActivity.class);
                String ID = personIDs.get(position).toString();
                String EXTRA_MESSAGE = "MOVIE_ID";
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
            image = itemView.findViewById(R.id.mremimage);
            this.itemView = itemView;

        }
    }

}
