package com.data;

public class Word {
	String word;
	String mean;
	int level;

	public Word(String word, String mean) {
		// TODO Auto-generated constructor stub
		level = 0;
		this.word = word;
		this.mean = mean;
	}

	

	public String getWord() {
		return word;
	}

	public String getMean() {
		return mean;
	}

	public String getNextAutoPushDay(String level) {
		// TODO Auto-generated method stub
		if (level.equals("0")) { // 7day in random
			
		} else if (level.equals("1")) { // 30 day in random
			
		}
		return new String();
	}
}
