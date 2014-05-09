package com.Thread;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;

import javax.net.ssl.HttpsURLConnection;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;

import com.data.User;
import com.data.Voca;
import com.data.Word;

public class UploadWordThread extends Thread {
	Word word;
	Voca voca;
	User user;

	public UploadWordThread(Word word, Voca voca, User user) {
		// TODO Auto-generated constructor stub
		this.word = word;
		this.voca = voca;
		this.user = user;
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		HttpClient client = new DefaultHttpClient();
		final String URL = "http://www.dontforgetword.appspot.com/word";
		String postData;
		try {
			postData = "?word=" + URLEncoder.encode(word.getWord(), "UTF-8")
					+ "&mean=" + URLEncoder.encode(word.getMean(), "UTF-8")
					+ "&username=" + URLEncoder.encode(user.getName(), "UTF-8")
					+ "&vocaid=" + URLEncoder.encode(voca.getId(), "UTF-8")
					+ "";
			HttpPost post = new HttpPost(URL + postData);
			HttpResponse response = client.execute(post);
			InputStream ips = response.getEntity().getContent();
			BufferedReader buf = new BufferedReader(new InputStreamReader(ips,
					"UTF-8"));
			StringBuilder sb = new StringBuilder();
			String s;
			while (true) {
				s = buf.readLine();
				if (s == null || s.length() == 0)
					break;
				sb.append(s);
			}
			buf.close();
			ips.close();
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
