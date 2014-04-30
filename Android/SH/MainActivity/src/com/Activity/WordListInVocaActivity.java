package com.Activity;

import java.util.ArrayList;

import com.astuetz.viewpager.extensions.sample.R;
import com.data.Word;
import com.dbhelper.DBHelperVoca;
import com.dbhelper.dbHelper;

import View.WordListAdapter;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.TextureView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

public class WordListInVocaActivity extends Activity {
	ListView listview ;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.wordlistinvoca);
		listview = (ListView) findViewById(R.id.wordlistview);
		Intent intent = getIntent();
		String vocaID = intent.getStringExtra("vocaID");
		dbHelper dbHelper = new dbHelper(this);
		ArrayList<Word> words = dbHelper.getWords(vocaID);
		WordListAdapter adapter = new WordListAdapter(this, android.R.layout.simple_list_item_1, words);
		listview.setAdapter(adapter);
		Toast.makeText(this, vocaID, Toast.LENGTH_SHORT).show();
	}
}
