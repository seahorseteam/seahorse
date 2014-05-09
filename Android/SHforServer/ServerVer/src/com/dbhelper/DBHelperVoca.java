package com.dbhelper;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;

import View.VocaListData;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import com.data.Voca;
import com.data.Word;

public class DBHelperVoca extends SQLiteOpenHelper {
	private static String DATABASE_NAME = "voca.db";
	private static int DATABASE_VERSION = 1;
	Context context;

	public DBHelperVoca(Context context) {
		super(context, DATABASE_NAME, null, DATABASE_VERSION);
		this.context = context;
	}

	public void onCreate(SQLiteDatabase db) {
		db.execSQL("CREATE TABLE voca (_id INTEGER PRIMARY KEY, "
				+ "Category TEXT);");
	}

	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		db.execSQL("DROP TABLE IF EXISTS contact");
		onCreate(db);
	}

	public void insertVoca(Voca voca) {
		this.getWritableDatabase().execSQL(
				"INSERT INTO voca VALUES ('"+voca.getId()+"'"+", '" + voca.getName()
						+ "' );");
	}

	public ArrayList<Voca> getVocaList() {
		// TODO Auto-generated method stub
		ArrayList<Voca> vocas = new ArrayList<Voca>();
		ArrayList<Word> words;
		Cursor cursor;
		cursor = this.getReadableDatabase().rawQuery(
				"SELECT Category, _id From voca ;", null);
		while (cursor.moveToNext()) {
			Voca voca = new Voca(cursor.getString(0));
			dbHelper dbHelper = new dbHelper(context);
			words = (dbHelper.getWords(cursor.getString(1)));
			voca.setWordCnt(words.size());
			voca.setId(cursor.getString(1));
			vocas.add(voca);
		}
		return vocas;
	}

}
