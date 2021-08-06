package com.example.hw91;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;


import java.util.ArrayList;

public class ReviewAdapter extends RecyclerView.Adapter<ReviewAdapter.MyViewHolder> {
       ArrayList personNames;
       ArrayList rating;
       ArrayList content;
       Context context;
    public ReviewAdapter(Context context, ArrayList personNames,ArrayList rating,ArrayList content) {
        this.context = context;
        this.personNames = personNames;
        this.rating = rating;
        this.content = content;

    }

    @Override
    public ReviewAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.mreview, parent, false);
        // set the view's size, margins, paddings and layout parameters
        ReviewAdapter.MyViewHolder vh = new ReviewAdapter.MyViewHolder(v); // pass the view to View Holder
        return vh;
    }

    @Override
    public void onBindViewHolder(ReviewAdapter.MyViewHolder holder, final int position) {
        // set the data in items
        holder.name.setText(personNames.get(position).toString());
        holder.rating.setText(rating.get(position).toString());
        holder.content.setText(content.get(position).toString());

        CardView cdview = (CardView) holder.itemView.findViewById(R.id.mreviewcard);
        cdview.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent3 = new Intent(v.getContext(),reviewActivity.class);
                String name = personNames.get(position).toString();
                String EXTRA_MESSAGE = "Review_name";
                intent3.putExtra(EXTRA_MESSAGE,name);


                String newrating =rating.get(position).toString();
                String EXTRA_MESSAGE2 = "Review_rating";
                intent3.putExtra(EXTRA_MESSAGE2,newrating);

                String newcontent =content.get(position).toString();
                String EXTRA_MESSAGE3 = "Review_content";
                intent3.putExtra(EXTRA_MESSAGE3,newcontent);

                v.getContext().startActivity(intent3);

            }
        });
    }

    @Override
    public int getItemCount() {
        return personNames.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        // init the item view's
        TextView name;
        TextView rating;
        TextView content;
        View itemView;
        public MyViewHolder(View itemView) {
            super(itemView);
            // get the reference of item view's
            name = (TextView) itemView.findViewById(R.id.reviewname);
            rating = (TextView) itemView.findViewById(R.id.reviewrating);
            content = (TextView) itemView.findViewById(R.id.reviewcontent);
            this.itemView = itemView;
        }
    }

}
