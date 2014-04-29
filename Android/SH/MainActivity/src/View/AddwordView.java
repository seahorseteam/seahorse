package View;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.graphics.Picture;
import android.text.SpannableString;
import android.text.Spanned;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.view.View.OnFocusChangeListener;
import android.view.inputmethod.InputMethodManager;
import android.webkit.WebView;
import android.webkit.WebView.FindListener;
import android.webkit.WebView.PictureListener;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.MultiAutoCompleteTextView;
import android.widget.MultiAutoCompleteTextView.Tokenizer;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.astuetz.viewpager.extensions.sample.R;
import com.astuetz.viewpager.extensions.sample.SuperAwesomeCardFragment;
import com.data.Word;

@SuppressLint("NewApi")
public class AddwordView extends CreateView {

	String[] wordList = { "account", "address", "apple", "applicant",
			"application", "apply", "appreciate", "appropriate", "assume",
			"attribute", "available" };
	SuperAwesomeCardFragment superAwesomeCardFragment;
	Spinner spinner;
	dbHelper helper;
	SQLiteDatabase db;
	EditText addWord, addMean;
	TextView showWord, showMean;
	Button addBtn, searchBtn;
	LinearLayout searchWordLayout;
	WebView webView;
	WebViewController wvc;
	Context context;
	ArrayList<String> vocaList;
	ArrayAdapter<String> adapter;
	
	public void updateSpiner() {
		vocaList = superAwesomeCardFragment.getMyVocaView().vocaTitles();
		spinner = (Spinner) view.findViewById(R.id.vocaList);
		adapter = new ArrayAdapter<String>(context,
				android.R.layout.simple_spinner_item, vocaList);
		spinner.setAdapter(adapter);
	}

	@SuppressWarnings("deprecation")
	public AddwordView(SuperAwesomeCardFragment s) {
		superAwesomeCardFragment = s;
		context = s.getActivity();
		LayoutInflater inflater = (LayoutInflater) context
				.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		view = inflater.inflate(R.layout.add_words, null);
		final AutoCompleteTextView ac = (AutoCompleteTextView) this.view
				.findViewById(R.id.addWord);
		addWord = (EditText) view.findViewById(R.id.addWord);
		addWord.setPrivateImeOptions("defaultInputmode=english;");
		addMean = (EditText) view.findViewById(R.id.addMean);
		showWord = (TextView) view.findViewById(R.id.showWord);
		showMean = (TextView) view.findViewById(R.id.showMean);
		spinner = (Spinner) view.findViewById(R.id.vocaList);
		vocaList = superAwesomeCardFragment.getMyVocaView().vocaTitles();
		adapter = new ArrayAdapter<String>(context,
				android.R.layout.simple_spinner_item, vocaList);
		adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		spinner.setAdapter(adapter);
		ac.setAdapter(new ArrayAdapter<String>(context,
				android.R.layout.simple_dropdown_item_1line, wordList));
		searchBtn = (Button) view.findViewById(R.id.searchBtn);
		searchWordLayout = (LinearLayout) view
				.findViewById(R.id.searchWordLayout);
		ac.setOnItemClickListener(new OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view,
					int position, long id) {
				// TODO Auto-generated method stub
				InputMethodManager imm = (InputMethodManager) context
						.getSystemService(Context.INPUT_METHOD_SERVICE);
				imm.hideSoftInputFromWindow(addMean.getWindowToken(), 0);
				updateWebView();
			}
		});
		helper = new dbHelper(context);
		superAwesomeCardFragment.getMyVocaView().resistSpiner(this);
		try {
			db = helper.getWritableDatabase();
		} catch (SQLiteException ex) {
			db = helper.getReadableDatabase();
		}
		view.findViewById(R.id.addBtn).setOnClickListener(
				new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						String words = addWord.getText().toString();
						String means = addMean.getText().toString();

						String autoPushDay = new String();
						;
						Calendar cal = new GregorianCalendar();
						autoPushDay = autoPushDay + cal.get(Calendar.YEAR)
								+ cal.get(Calendar.MONTH)
								+ cal.get(Calendar.DATE);
						db.execSQL("INSERT INTO voca VALUES (null, '" + words
								+ "', '" + means + "', '" + autoPushDay + "');");
					}
				});

		view.findViewById(R.id.searchBtn).setOnClickListener(
				new View.OnClickListener() {

					@Override
					public void onClick(View v) {
						String words = addWord.getText().toString();
						Cursor cursor;
						cursor = db.rawQuery(
								"SELECT words, means,autopushday From voca WHERE words='"
										+ words + "';", null);

						while (cursor.moveToNext()) {
							String means = cursor.getString(1);
							showWord.setText(words);
							showMean.setText(means);
						}
					}
				});

		webView = (WebView) view.findViewById(R.id.webView2);
		addWord.setOnFocusChangeListener(new OnFocusChangeListener() {
			@Override
			public void onFocusChange(View v, boolean hasFocus) {
				if (!hasFocus) {
					webView.loadUrl("http://m.endic.naver.com/search.nhn?searchOption=all&query="
							+ addWord.getText());
				}
			}
		});
		webView.setPictureListener(new PictureListener() {
			@Override
			public void onNewPicture(WebView view, Picture picture) {
				// TODO Auto-generated method stub
				webView.scrollTo(0, 200);

			}
		});
		wvc = new WebViewController();
		webView.setWebViewClient(wvc);
		searchWordLayout.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {
				String meanStr = showMean.getText().toString();
				addMean.setText(meanStr);

			}
		});

	}

	public void updateWebView() {
		webView.loadUrl("http://m.endic.naver.com/search.nhn?searchOption=all&query="
				+ addWord.getText());
	}

}
//

