package View;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

class dbHelper extends SQLiteOpenHelper {
	private static final String DATABASE_NAME = "voca.db";
	private static final int DATABASE_VERSION = 1;

	public dbHelper(Context context) {
		super(context, DATABASE_NAME, null, DATABASE_VERSION);
	}

	public void onCreate(SQLiteDatabase db) {
		db.execSQL("CREATE TABLE voca (_id INTEGER PRIMARY KEY AUTOINCREMENT, "
				+ "words TEXT, means TEXT);");
	}

	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		db.execSQL("DROP TABLE IF EXISTS contact");
		onCreate(db);
	}

}