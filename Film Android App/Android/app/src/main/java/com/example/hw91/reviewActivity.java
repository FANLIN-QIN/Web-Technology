package com.example.hw91;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class reviewActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_review);

        Intent intent = getIntent();
        String name = intent.getStringExtra("Review_name");
        String rating = intent.getStringExtra("Review_rating");
        String content = intent.getStringExtra("Review_content");

        TextView textView = findViewById(R.id.newacrating);
        textView.setText((rating));

        TextView textView2 = findViewById(R.id.newacname);
        textView2.setText((name));

        TextView textView3 = findViewById(R.id.newaccontent);
        content = content.replace("\\r",System.getProperty("line.separator"));
        content = content.replace("\\n","");
        textView3.setText((content));

    }
}