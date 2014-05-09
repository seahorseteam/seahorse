package com.data;

import java.util.ArrayList;

public class ArrayVoca {
	ArrayList<Voca> vocas = new ArrayList<Voca>();
	public ArrayList<Voca> getVocas() {
		return vocas;
	}
	public void addVocas(Voca voca){
		vocas.add(voca);
	}
}
