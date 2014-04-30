package com.data;

public class Voca {
	int linkCnt;
	int wordCnt;
	int exampleCnt;
	String category;
	String id;
	public String getCategory() {
		return category;
	}
	public Voca(String category) {
		// TODO Auto-generated constructor stub
		this.category = category;
	}
	public void setWordCnt(int cnt) {
		// TODO Auto-generated method stub
		wordCnt = cnt;
	}
	public int getWordCnt() {
		return wordCnt;
	};
	public void setId(String id) {
		this.id = id;
	}
	public String getId() {
		return id;
	}
}
