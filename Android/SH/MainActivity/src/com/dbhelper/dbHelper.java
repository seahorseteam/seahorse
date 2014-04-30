package com.dbhelper;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;

import com.data.Word;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;
import android.widget.Toast;

public class dbHelper extends SQLiteOpenHelper {
	private static String DATABASE_NAME = "word.db";
	private static int DATABASE_VERSION = 1;
	Context context;

	public dbHelper(Context context) {
		super(context, DATABASE_NAME, null, DATABASE_VERSION);
		this.context = context;
	}

	public void onCreate(SQLiteDatabase db) {

		db.execSQL("CREATE TABLE word (_id INTEGER PRIMARY KEY AUTOINCREMENT, "
				+ "words TEXT, means TEXT, autopushday TEXT, evingLevel TEXT,vocaTableID TEXT);");

	}

	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		db.execSQL("DROP TABLE IF EXISTS contact");
		onCreate(db);
	}

	public Word getAutoPushWord() {
		Cursor cursor;
		String autoPushDay = new String();
		Calendar cal = new GregorianCalendar();

		autoPushDay = autoPushDay + cal.get(Calendar.YEAR)
				+ cal.get(Calendar.MONTH) + cal.get(Calendar.DATE);

		cursor = this.getReadableDatabase().rawQuery(
				"SELECT words, means,autopushday,_id,evingLevel From word WHERE autopushday='"
						+ autoPushDay + "';", null);
		cursor.moveToNext();
		if (cursor.getCount() == 0)
			return null;
		Word word = new Word(cursor.getString(0), cursor.getString(1));
		cal.add(Calendar.DATE, 1);
		String nextAutoPushDay = "" + cal.get(Calendar.YEAR)
				+ cal.get(Calendar.MONTH) + cal.get(Calendar.DATE);
		String sql = "update " + "word" + " set autopushday = '"
				+ nextAutoPushDay + "' where _id = " + cursor.getString(3)
				+ ";";
		this.getWritableDatabase().execSQL(sql);
		return word;
	}

	public boolean isExistWord(String word) {
		Cursor cursor;
		cursor = this.getReadableDatabase().rawQuery(
				"SELECT words, means,autopushday,_id From word WHERE words='"
						+ word + "';", null);
		if (cursor.getCount() == 0)
			return false;
		else
			return true;
	}

	public void insertWord(String word, String means,String vocaID) {
		// TODO Auto-generated method stub
		// this.getWritableDatabase().execSQL();
		String autoPushDay = new String();
		Calendar cal = new GregorianCalendar();
		cal.add(Calendar.DATE, 1);
		autoPushDay = autoPushDay + cal.get(Calendar.YEAR)
				+ cal.get(Calendar.MONTH) + cal.get(Calendar.DATE);
		if (isExistWord(word)) {
			Cursor cursor;
			cursor = this.getReadableDatabase().rawQuery(
					"SELECT _id,means From word WHERE words='" + word + "';",
					null);
			cursor.moveToNext();
			String str = means + ", " + cursor.getString(1);
			String sql = "update " + "word" + " set means = '" + str
					+ "' where _id = " + cursor.getString(0) + ";";
			this.getWritableDatabase().execSQL(sql);
			sql = "update " + "word" + " set autopushday = '" + autoPushDay
					+ "' where _id = " + cursor.getString(0) + ";";
			this.getWritableDatabase().execSQL(sql);
		} else {
			this.getWritableDatabase().execSQL(
					"INSERT INTO word VALUES (null, '" + word + "','" + means
							+ "', '" + autoPushDay + "','0',"+vocaID+" );");
		}
	}

	public String getWordMeans(String word) {
		// TODO Auto-generated method stub
		Cursor cursor;
		cursor = this.getReadableDatabase().rawQuery(
				"SELECT means From word WHERE words='" + word + "';", null);
		if (!isExistWord(word))
			return null;
		cursor.moveToNext();
		return cursor.getString(0);
	}

	public ArrayList<Word> getWords(String vocaID) {
		// TODO Auto-generated method stub
		ArrayList<Word> words = new ArrayList<Word>();
		Cursor cursor;
		cursor = this.getReadableDatabase().rawQuery(
				"SELECT words, means From word WHERE vocaTableID='" + vocaID
						+ "';", null);
		while (cursor.moveToNext()) {
			words.add(new Word(cursor.getString(0), cursor.getString(1)));
		}
		return words;
	}
}