package com.data;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Word {
	String word;
	String mean;
	String level;
	String autoPushDay;
	String vocaID;
	public String getAutoPushDay() {
		return autoPushDay;
	}
	public String getLevel() {
		return level;
	};
	public void setLevel(String level) {
		this.level = level;
	}
	public void setAutoPushDay(String autoPushDay) {
		this.autoPushDay = autoPushDay;
	}
	public Word(String word, String mean) {
		// TODO Auto-generated constructor stub
		level = "0";
		this.word = word;
		this.mean = mean;
	}

	public String getWord() {
		return word;
	}

	public String getMean() {
		return mean;
	}

	public String getNextAutoPushDay() {
		// TODO Auto-generated method stub
		String autoPushDay = null;
		if (level.equals("0")) { // 3day in random
			Calendar cal = new GregorianCalendar();
			cal.add(Calendar.DATE, 3);
			autoPushDay = "" + cal.get(Calendar.YEAR) + cal.get(Calendar.MONTH)
					+ cal.get(Calendar.DATE);
		} else if (level.equals("1")) { // 10 day in random
			Calendar cal = new GregorianCalendar();
			cal.add(Calendar.DATE, 10);
			autoPushDay = "" + cal.get(Calendar.YEAR) + cal.get(Calendar.MONTH)
					+ cal.get(Calendar.DATE);
		} else if (level.equals("2")) {
			Calendar cal = new GregorianCalendar();
			cal.add(Calendar.DATE, 60);
			autoPushDay = "" + cal.get(Calendar.YEAR) + cal.get(Calendar.MONTH)
					+ cal.get(Calendar.DATE);
		} else {
			autoPushDay = "999999";
		}
		return autoPushDay;
	}
}
