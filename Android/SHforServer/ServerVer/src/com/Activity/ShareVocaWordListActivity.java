package com.Activity;

import java.util.ArrayList;

import com.Thread.DownloadShareVocaWordListThread;
import com.astuetz.viewpager.extensions.sample.R;
import com.data.ArrayWord;
import com.data.Word;
import com.dbhelper.dbHelper;

import View.WordListAdapter;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.widget.ListView;
import android.widget.Toast;

public class ShareVocaWordListActivity extends Activity {
	ListView wordList;
	ArrayList<Word> words = new ArrayList<Word>();
	Handler mHandler;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.sharevocawordlist);
		wordList = (ListView) findViewById(R.id.sharevocawordlist);
		Intent intent = getIntent();
		String vocaID = intent.getStringExtra("vocaID");
		mHandler = new Handler() { // 핸들러 처리부분
			public void handleMessage(Message msg) { // 메시지를
				// 받는부분
				wordListUpdate();
			};
		};
		DownloadShareVocaWordListThread downloadShareVocaWordListThread = new DownloadShareVocaWordListThread(
				this, vocaID, mHandler);
		downloadShareVocaWordListThread.start();

	}

	private void wordListUpdate() {

		WordListAdapter adapter = new WordListAdapter(this,
				android.R.layout.two_line_list_item, words);
		wordList.setAdapter(adapter);
	}

	public void setWord(ArrayWord words) {
		this.words.clear();
		// TODO Auto-generated method stub
		for (int i = 0; i < words.getWords().size(); i++) {
			this.words.add(words.getWords().get(i));
		}
	}
}
