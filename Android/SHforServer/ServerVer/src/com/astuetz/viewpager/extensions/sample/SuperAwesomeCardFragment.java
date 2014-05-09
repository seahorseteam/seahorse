/*
 * Copyright (C) 2013 Andreas Stuetz <andreas.stuetz@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.astuetz.viewpager.extensions.sample;

import com.data.ObserverableData;

import View.AddwordView;
import View.MyVocaView;
import View.ShareVocaVew;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.TypedValue;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.FrameLayout.LayoutParams;

public class SuperAwesomeCardFragment extends Fragment {

	private static final String ARG_POSITION = "position";

	private int position;
	AddwordView addwordView;
	ShareVocaVew shareVocaVew;
	ObserverableData observerableData = new ObserverableData();
	static SuperAwesomeCardFragment z;
	MyVocaView myVocaView;
	
	public static SuperAwesomeCardFragment newInstance(int position) {
		SuperAwesomeCardFragment f = new SuperAwesomeCardFragment();
		Bundle b = new Bundle();
		b.putInt(ARG_POSITION, position);
		f.setArguments(b);
		return f;
	}

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		position = getArguments().getInt(ARG_POSITION);

	}

	public void setChangeAddWordView() {

	}

	public View getPageView(LayoutInflater inflater) {
		View view = null;
		myVocaView = new MyVocaView(getActivity());
		addwordView = new AddwordView(this);
		shareVocaVew = new ShareVocaVew(this);
		myVocaView.resistSpiner(addwordView);
		
		if (position == 0) {
			view = addwordView.getView();
		} else if (position == 1) {
			view = myVocaView.getView();
		} else if (position == 2) {
			view = shareVocaVew.getView();
		}
		return view;
	}

	public MyVocaView getMyVocaView() {
		// myVocaView.refreshAdapter();
		return myVocaView;
	}

	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {

		LayoutParams params = new LayoutParams(LayoutParams.MATCH_PARENT,
				LayoutParams.MATCH_PARENT);

		FrameLayout fl = new FrameLayout(getActivity());
		View view = getPageView(inflater);
		fl.setLayoutParams(params);

		final int margin = (int) TypedValue.applyDimension(
				TypedValue.COMPLEX_UNIT_DIP, 8, getResources()
						.getDisplayMetrics());

		return view;
	}

}