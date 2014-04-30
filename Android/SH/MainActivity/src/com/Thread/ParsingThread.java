package com.Thread;

import java.io.IOException;
import java.util.ArrayList;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import com.data.Word;

import View.AddwordView;
import android.os.Handler;
import android.os.Message;
import android.util.Log;

public class ParsingThread extends Thread {
	String searchWord;
	String html;
	Handler mHandler;
	AddwordView addwordView;

	public ParsingThread(String searhWord, Handler mHandler,
			AddwordView addwordView) {
		// TODO Auto-generated constructor stub
		this.searchWord = searhWord;
		this.mHandler = mHandler;
		this.addwordView = addwordView;
		html = "http://m.endic.naver.com/search.nhn?searchOption=all&query="
				+ searhWord;
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		super.run();
		Document doc;
		try {
			doc = Jsoup.connect(html).get();
			Elements explain = doc.getElementsByClass("li3");
			if (explain.size() == 0)
				return;
			Elements li = explain.get(0).select("li");
			Elements li2 = li.select("ul");
			if (li2 == null || li2.size() == 0)
				return;
			Elements li3 = li2.get(0).select("li");
			ArrayList<Word> words = new ArrayList<Word>();
			for (int i = 0; i < li3.size(); i++) {
				if(li3.size()>1){
					words.add(new Word(searchWord, li3.get(i).text().substring(3)));
				}
				else{
				words.add(new Word(searchWord, li3.get(i).text()));
				}
			}
			addwordView.setwordsMean(words);
			mHandler.sendEmptyMessage(0);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// toeicData = new ToeicData(this.searchWord);
		// mainActivity.updateWord(toeicData);
		mHandler.sendMessage(new Message());
	}
}
