package com.Thread;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;

import android.os.Handler;

import com.data.User;
import com.data.Voca;

public class UploadVocaThread extends Thread {
	Voca voca;
	User user;
	Handler handler;

	public UploadVocaThread(Voca voca, User user, Handler mHandler) {
		// TODO Auto-generated constructor stub
		this.voca = voca;
		this.user = user;
		handler = mHandler;
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		HttpClient client = new DefaultHttpClient();
		final String URL = "http://www.dontforgetword.appspot.com/insertvoca";
		String postData;
		try {
			// String str = new String(voca.getName()., "UTF-8");
			postData = "?vocaname="
					+ URLEncoder.encode(voca.getName(), "UTF-8") + "&username="
					+ URLEncoder.encode(user.getName(), "UTF-8");
			HttpPost post = new HttpPost(URL + postData);

//			post.addHeader("Accept-Charset", "windows-949,utf-8;q=0.7,*;q=0.3");
//			post.addHeader("Content-Type",
//					"application/x-www-form-urlencoded; charset=UTF-8");
//
//			// HttpPut hp = new HttpPut(sUrl);
//			post.addHeader("Accept-Charset", "windows-949,utf-8;q=0.7,*;q=0.3");
//			post.addHeader("Content-Type",
//					"application/x-www-form-urlencoded; charset=UTF-8");
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
			voca.setId(sb.toString());
			handler.sendEmptyMessage(1);
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
