package com.example.hw91;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import com.bumptech.glide.Glide;
import com.smarteist.autoimageslider.SliderViewAdapter;

import java.util.ArrayList;
import java.util.List;


public class SliderAdapter extends SliderViewAdapter<SliderAdapter.SliderAdapterViewHolder> {

       private final List<SliderData> mSliderItems;
       private final List<SliderData> poster;
       ArrayList personID;
       ArrayList personName;

    // Constructor
    public SliderAdapter(Context context, ArrayList<SliderData> sliderDataArrayList,ArrayList<SliderData> poster,ArrayList personID, ArrayList personName) {
        this.mSliderItems = sliderDataArrayList;
        this.personID = personID;
        this.personName = personName;
        this.poster = poster;
    }

    // We are inflating the slider_layout
    // inside on Create View Holder method.
    @Override
    public SliderAdapterViewHolder onCreateViewHolder(ViewGroup parent) {
        View inflate = LayoutInflater.from(parent.getContext()).inflate(R.layout.slider_layout, null);
        return new SliderAdapterViewHolder(inflate);
    }

    // Inside on bind view holder we will
    // set data to item of Slider View.
    @Override
    public void onBindViewHolder(SliderAdapterViewHolder viewHolder, final int position) {

        final SliderData sliderItem = mSliderItems.get(position);
        final SliderData posterItem = poster.get(position);

        // Glide is use to load image
        // from url in your imageview.
        Glide.with(viewHolder.itemView)
                .load(sliderItem.getImgUrl())
                .override(50, 50)
                .into(viewHolder.imageViewBackground);

        Glide.with(viewHolder.itemView)
                .load(sliderItem.getImgUrl())
                .into(viewHolder.image);


        ImageView ima = (ImageView) viewHolder.itemView.findViewById(R.id.myimage);
        ima.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent3 = new Intent(v.getContext(),moviedetailActivity.class);
                String ID = personID.get(position).toString();
                String EXTRA_MESSAGE = "MOVIE_ID";
                intent3.putExtra(EXTRA_MESSAGE,ID);
                v.getContext().startActivity(intent3);
            }
        });

        ImageView ima2 = (ImageView) viewHolder.itemView.findViewById(R.id.myimage2);
        ima2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent3 = new Intent(v.getContext(),moviedetailActivity.class);
                String ID = personID.get(position).toString();
                String path = posterItem.getImgUrl();
                String name = personName.get(position).toString();
                String EXTRA_MESSAGE = "MOVIE_ID";
                String EXTRA_MESSAGE1 = "MOVIE_path";
                String EXTRA_MESSAGE2 = "MOVIE_name";
                intent3.putExtra(EXTRA_MESSAGE,ID);
                intent3.putExtra(EXTRA_MESSAGE1,path);
                intent3.putExtra(EXTRA_MESSAGE2,name);
                v.getContext().startActivity(intent3);
            }
        });

    }

    // this method will return
    // the count of our list.
    @Override
    public int getCount() {
        return mSliderItems.size();
    }

    static class SliderAdapterViewHolder extends SliderViewAdapter.ViewHolder {
        // Adapter class for initializing
        // the views of our slider view.
        View itemView;
        ImageView imageViewBackground;
        ImageView image;

        public SliderAdapterViewHolder(View itemView) {
            super(itemView);
            imageViewBackground = itemView.findViewById(R.id.myimage);
            image = itemView.findViewById(R.id.myimage2);
            this.itemView = itemView;
        }
    }
}
