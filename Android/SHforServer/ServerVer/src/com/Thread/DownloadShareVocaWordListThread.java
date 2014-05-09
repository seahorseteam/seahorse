package com.Thread;

import java.io.IOException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import android.os.Handler;

import com.Activity.ShareVocaWordListActivity;
import com.data.ArrayVoca;
import com.data.ArrayWord;
import com.google.gson.Gson;

public class DownloadShareVocaWordListThread extends Thread{
	ShareVocaWordListActivity shareVocaWordListActivity;
	Handler handler;
	String vocaID;
	public DownloadShareVocaWordListThread(ShareVocaWordListActivity shareVocaWordListActivity , String vocaID,Handler handler) {
		// TODO Auto-generated constructor stub
		this.shareVocaWordListActivity = shareVocaWordListActivity;
		this.handler = handler;
		this.vocaID  = vocaID;
	}
	@Override
	public void run() {

		try {

			HttpClient client = new DefaultHttpClient();
			String getURL = "http://www.dontforgetword.appspot.com/word?vocaid="+vocaID;
			HttpGet get = new HttpGet(getURL);
			HttpResponse responseGet = client.execute(get);
			HttpEntity resEntityGet = responseGet.getEntity();
			if (resEntityGet != null) {
				String jsonStr = EntityUtils.toString(resEntityGet);
				Gson gson = new Gson();
				ArrayWord words = gson.fromJson(jsonStr, ArrayWord.class);
				shareVocaWordListActivity.setWord(words);
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
