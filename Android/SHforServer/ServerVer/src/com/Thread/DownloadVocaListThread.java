package com.Thread;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.ParseException;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import com.data.ArrayVoca;
import com.google.gson.Gson;

import View.ShareVocaVew;
import android.os.Handler;
import android.util.Log;

public class DownloadVocaListThread extends Thread {

	ShareVocaVew shareVocaVew;
	Handler handler;

	public DownloadVocaListThread(ShareVocaVew shareVocaVew, Handler handler) {
		// TODO Auto-generated constructor stub
		this.shareVocaVew = shareVocaVew;
		this.handler = handler;
	}

	@Override
	public void run() {

		try {

			HttpClient client = new DefaultHttpClient();
			String getURL = "http://www.dontforgetword.appspot.com/insertvoca";
			HttpGet get = new HttpGet(getURL);
			HttpResponse responseGet = client.execute(get);
			HttpEntity resEntityGet = responseGet.getEntity();

			if (resEntityGet != null) {
				String jsonStr = EntityUtils.toString(resEntityGet);
				Gson gson = new Gson();
				ArrayVoca vocas = gson.fromJson(jsonStr, ArrayVoca.class);
				shareVocaVew.setVocas(vocas);
				handler.sendEmptyMessage(1);
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
