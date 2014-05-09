package com.data;

public class Voca {
	int linkCnt;
	int wordCnt;
	int exampleCnt;
	
	
	String vocaname;
	String username;
	String vocaid;
	public Voca(String vocaname,String username,String vocaid) {
		// TODO Auto-generated constructor stub
		this.vocaname = vocaname;
		this.username = username;
		this.vocaid = vocaid;
	}
	public String getUsername() {
		return username;
	}
	public String getName() {
		return vocaname;
	}

	public Voca(String vocaname) {
		// TODO Auto-generated constructor stub
		this.vocaname = vocaname;
	}

	public void setWordCnt(int cnt) {
		// TODO Auto-generated method stub
		wordCnt = cnt;
	}

	public int getWordCnt() {
		return wordCnt;
	}

	public void setId(String id) {
		this.vocaid = id;
	}

	public String getId() {
		return vocaid;
	}
}
