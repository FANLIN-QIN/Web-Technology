package com.example.hw91;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class ReconAdapter extends RecyclerView.Adapter<ReconAdapter.MyViewHolder> {
    ArrayList personCon;
    Context context;
    public ReconAdapter(Context context, ArrayList personCon) {
        this.context = context;
        this.personCon = personCon;

    }

    @Override
    public ReconAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // infalte the item Layout
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.mreview, parent, false);
        // set the view's size, margins, paddings and layout parameters
        ReconAdapter.MyViewHolder vh = new ReconAdapter.MyViewHolder(v); // pass the view to View Holder
        return vh;
    }

    @Override
    public void onBindViewHolder(ReconAdapter.MyViewHolder holder, final int position) {
        // set the data in items
        holder.name.setText(personCon.get(position).toString());

    }

    @Override
    public int getItemCount() {
        return personCon.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        // init the item view's
        TextView name;

        public MyViewHolder(View itemView) {
            super(itemView);
            // get the reference of item view's
            name = (TextView) itemView.findViewById(R.id.reviewcontent);
        }
    }
}
