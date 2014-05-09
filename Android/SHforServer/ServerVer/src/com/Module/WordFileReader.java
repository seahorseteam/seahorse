package com.Module;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.StringTokenizer;

import android.content.Context;
import android.content.res.Resources;

public class WordFileReader {

	private Context context;

	// String FILENAME = "a.txt";
	public WordFileReader(Context context) {
		this.context = context;
	}

	public ArrayList<String> fileRead(String s) {

		ArrayList<String> wordList = new ArrayList<String>();

		StringBuffer sb = new StringBuffer();
		
		// 첫글자 빼오는거

		try {
			Resources res = context.getResources();
			int resid = context.getResources().getIdentifier(s.charAt(0) + "",
					"raw", context.getPackageName());
			InputStream is = res.openRawResource(resid);

			int c;
			int i = 0;
			byte[] buffer = new byte[2048];
			String allword = new String();
			while(true){
				int count  =  is.read(buffer);
				if(count==-1) {
					break;
				}
				String str  = new String(buffer,0,buffer.length);
				allword = allword+str;
			}
			StringTokenizer stringTokenizer = new StringTokenizer(allword," /");
			while (stringTokenizer.hasMoreElements()) {
				wordList.add(stringTokenizer.nextToken());
			}
			
//			while ((c = is.read()) != -1) {
//				sb = sb.append((char) c);
//				if ((char) c == '/') {
//					String word = sb.toString();
//					word = word.replace(" /", "");
//					wordList.add(word);
//					sb.delete(0, sb.length());
//				}
//			}
			is.close();
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return wordList;
	}
}
