package com.Thread;

import java.io.IOException;



import android.os.Handler;
import android.os.Message;



public class ParsingThread extends Thread {
	String searchWord ;
	String html ; 
	Handler mHandler;

	public ParsingThread(String searhWord, Handler mHandler) {
		// TODO Auto-generated constructor stub
		this.searchWord  = searhWord;
		this.mHandler = mHandler;
		html = "http://m.endic.naver.com/search.nhn?searchOption=all&query="
				+ searhWord;
	}
	
//	@Override
//	public void run() {
//		// TODO Auto-generated method stub
//		super.run();
//
//		Document doc;
//		try {
//			doc = Jsoup.connect(html).get();
//			Elements explain = doc.getElementsByClass("DictResultToeic");
//
//			for (int i = 0; i < explain.size(); i++) {
//				WordMeanToeic wordMeanToeic = null;
//				for (int j = 0; j < explain.get(i).children().size(); j++) {
//
//					if (explain.get(i).child(j).className().contains("Level")) {
//						System.out.println("자주나오는 형태");
//						wordMeanToeic = new WordMeanToeic(explain.get(i)
//								.child(j).text());
//						wordMeanToeic.setPartTyepe(explain.get(i).child(j)
//								.className());
//						System.out.println(explain.get(i).child(j).text());
//					} else if (explain.get(i).child(j).className()
//							.equals("Explain")) {
//						System.out.println("단어뜻");
//						wordMeanToeic.setMean(explain.get(i).child(j).text()
//								.substring(2));
//						wordMeanToeic.setWordClass(explain.get(i).child(j)
//								.text().charAt(0)
//								+ "");
//						System.out.println(explain.get(i).child(j).text()
//								.substring(2));
//					} else if (explain.get(i).child(j).className()
//							.equals("Example")) {
//						System.out.println("예  문");
//						wordMeanToeic.addExampleSentences(new ExampleSentence(
//								explain.get(i).child(j).text()));
//						System.out.println(explain.get(i).child(j).text());
//					}
//				}
//				this.wordMeans.add(wordMeanToeic);
//			}
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//	
//		//toeicData = new ToeicData(this.searchWord);
//		//mainActivity.updateWord(toeicData);
//		mHandler.sendMessage(new Message());
//	}
}
