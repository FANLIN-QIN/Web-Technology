package com.example.hw91;

import android.content.Context;
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

public class CastmAdapter extends RecyclerView.Adapter<CastmAdapter.MyViewHolder> {
    ArrayList personNames;
    private final ArrayList<CastmData> personImages;
    Context context;

    public CastmAdapter(Context context,ArrayList<CastmData> personImage,ArrayList personNames){
        this.context = context;
        this.personNames= personNames;
        this.personImages = personImage;
    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.castimage, parent, false);
        // set the view's size, margins, paddings and layout parameters
        MyViewHolder vh = new MyViewHolder(v); // pass the view to View Holder
        return vh;
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, final int position) {
        // set the data in items

        final CastmData tpItem = personImages.get(position);
        holder.name.setText(personNames.get(position).toString());

        // Glide is use to load image
        // from url in your imageview.
        Glide.with(holder.itemView)
                .load(tpItem.getImgUrl())
                .fitCenter()
                .into(holder.image);
    }

    @Override
    public int getItemCount() {
        return personNames.size();
    }
    public class MyViewHolder extends RecyclerView.ViewHolder {
        // init the item view's
        TextView name;
        ImageView image;
        public MyViewHolder(View itemView) {
            super(itemView);
            // get the reference of item view's
            name = (TextView) itemView.findViewById(R.id.castname);
            image = (ImageView) itemView.findViewById(R.id.castimage);
        }
    }

}
