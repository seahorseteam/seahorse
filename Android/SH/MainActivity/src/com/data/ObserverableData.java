package com.data;

import java.util.Observable;
import java.util.Observer;

public class ObserverableData extends Observable {
	public ObserverableData() {
		// TODO Auto-generated constructor stub
		
	}
	public void updateData(){
		setChanged();
		notifyObservers();
	}
}
