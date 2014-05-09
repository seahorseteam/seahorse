package com.data;

import java.util.ArrayList;

public class ArrayWord {
	ArrayList<Word> words = new ArrayList<Word>();
	
	public ArrayList<Word> getWords() {
		return words;
	}
	public void addWord(Word word){
		words.add(word);
	}
	
}
