package View;

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
	private static final String DATABASE_NAME = "voca.db";
	private static final int DATABASE_VERSION = 1;
	Context context;

	public dbHelper(Context context) {
		super(context, DATABASE_NAME, null, DATABASE_VERSION);
		this.context = context;
	}

	public void onCreate(SQLiteDatabase db) {
		db.execSQL("CREATE TABLE voca (_id INTEGER PRIMARY KEY AUTOINCREMENT, "
				+ "words TEXT, means TEXT, autopushday TEXT);");
	}

	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		db.execSQL("DROP TABLE IF EXISTS contact");
		onCreate(db);
	}

	public Word getAutoPushWord() {

		// String words = addWord.getText().toString();
		Cursor cursor;
		String autoPushDay = new String();
		Calendar cal = new GregorianCalendar();
		// this.getWritableDatabase().execSQL("autopush='newValue' WHERE id=6 ");
		autoPushDay = autoPushDay + cal.get(Calendar.YEAR)
				+ cal.get(Calendar.MONTH) + cal.get(Calendar.DATE);
		cursor = this.getReadableDatabase().rawQuery(
				"SELECT words, means From voca WHERE autopushday='"
						+ autoPushDay + "';", null);
		ArrayList<Word> words = new ArrayList<Word>();
		while (cursor.moveToNext()) {
			words.add(new Word(cursor.getString(0), cursor.getString(1)));
		}
		Log.d("motion", "getAutoPushWord" + words.get(0).getWord());
		return words.get(0);
	}
	// public Word getAutoPushWord() {
	//
	// // String words = addWord.getText().toString();
	// Cursor cursor;
	// String autoPushDay = new String();
	// Calendar cal = new GregorianCalendar();
	// //this.getWritableDatabase().execSQL("autopush='newValue' WHERE id=6 ");
	// autoPushDay = autoPushDay + cal.get(Calendar.YEAR)
	// + cal.get(Calendar.MONTH) + cal.get(Calendar.DATE);
	// cursor = this.getReadableDatabase().rawQuery(
	// "SELECT _id, words, means From voca WHERE autopushday='"
	// + autoPushDay + "';", null);
	// if(cursor.getColumnCount()==0) return null;
	// //ArrayList<Word> words = new ArrayList<Word>();
	// //while (cursor.moveToNext()) {
	// // words.add(new Word(cursor.getString(0),cursor.getString(1)));
	// //}
	// String autoPushNextDay = new String();
	// cal.add(Calendar.DATE, 1);
	// //this.getWritableDatabase().execSQL("autopush='newValue' WHERE id=6 ");
	// autoPushNextDay = autoPushDay + cal.get(Calendar.YEAR)
	// + cal.get(Calendar.MONTH) + cal.get(Calendar.DATE);
	// Word word = new Word(cursor.getString(1),cursor.getString(2));
	// ContentValues newValues = new ContentValues();
	// newValues.put("autopushday", autoPushNextDay);
	// //this.getWritableDatabase().update("voca", newValues,
	// "id="+cursor.getString(0), null);
	// //this.getWritableDatabase().execSQL("autopush=+"+autoPushNextDay+" WHERE id="+cursor.getString(0));
	// return word;
	// }
}