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

public class ReviewTVAdapter extends RecyclerView.Adapter<ReviewTVAdapter.MyViewHolder>{

    ArrayList personNames;
    ArrayList rating;
    ArrayList content;
    Context context;
    public ReviewTVAdapter(Context context, ArrayList personNames,ArrayList rating,ArrayList content) {
        this.context = context;
        this.personNames = personNames;
        this.rating = rating;
        this.content = content;

    }

    @Override
    public ReviewTVAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.tvreview, parent, false);
        // set the view's size, margins, paddings and layout parameters
        ReviewTVAdapter.MyViewHolder vh = new ReviewTVAdapter.MyViewHolder(v); // pass the view to View Holder
        return vh;
    }

    public void onBindViewHolder(ReviewTVAdapter.MyViewHolder holder, final int position) {
        // set the data in items
        holder.name.setText(personNames.get(position).toString());
        holder.rating.setText(rating.get(position).toString());
        holder.content.setText(content.get(position).toString());

        CardView cdview = (CardView) holder.itemView.findViewById(R.id.tvreviewcard);
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
            name = (TextView) itemView.findViewById(R.id.tvreviewname);
            rating = (TextView) itemView.findViewById(R.id.tvreviewrating);
            content = (TextView) itemView.findViewById(R.id.tvreviewcontent);
            this.itemView = itemView;
        }
    }


}

