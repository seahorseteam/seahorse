package View;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Observable;
import java.util.Observer;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.graphics.Picture;
import android.os.Handler;
import android.os.SystemClock;
import android.text.Editable;
import android.text.SpannableString;
import android.text.Spanned;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.Window;
import android.view.WindowManager;
import android.view.View.OnFocusChangeListener;
import android.view.inputmethod.InputMethodManager;
import android.webkit.WebView;
import android.webkit.WebView.PictureListener;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.Module.WordFileReader;
import com.Thread.ParsingThread;
import com.astuetz.viewpager.extensions.sample.R;
import com.astuetz.viewpager.extensions.sample.SuperAwesomeCardFragment;
import com.data.ObserverableData;
import com.data.Voca;
import com.data.Word;
import com.dbhelper.dbHelper;

@SuppressLint("NewApi")
public class AddwordView extends CreateView implements Observer {

	ArrayList<String> wordList;
	SuperAwesomeCardFragment superAwesomeCardFragment;
	TextView vocaTv;
	WordFileReader wordFileReader;
	dbHelper helper;
	EditText addWord, addMean;
	Button addBtn, searchBtn;
	WebView webView;
	WebViewController wvc;
	Context context;
	static ArrayList<Voca> vocaList;
	Voca selectVoca;
	ObserverableData od;
	ArrayList<Word> words; // mean에 보여줄
	ListView meansListView;

	public void updateVocaList() {
		vocaList = superAwesomeCardFragment.getMyVocaView().getVocas();

	}

	public void setwordsMean(ArrayList<Word> words) {
		this.words = words;
	}

	public void selectVoca(Voca voca) {
		selectVoca = voca;
		vocaTv.setText(selectVoca.getCategory());
	}

	@SuppressWarnings("deprecation")
	public AddwordView(SuperAwesomeCardFragment s, final ObserverableData od) {
		superAwesomeCardFragment = s;
		context = s.getActivity();
		this.od = od;
		LayoutInflater inflater = (LayoutInflater) context
				.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		view = inflater.inflate(R.layout.add_words, null);

		final AutoCompleteTextView ac = (AutoCompleteTextView) this.view
				.findViewById(R.id.addWord);
		addWord = (EditText) view.findViewById(R.id.addWord);
		addWord.setPrivateImeOptions("defaultInputmode=english;");
		addMean = (EditText) view.findViewById(R.id.addMean);
		vocaTv = (TextView) view.findViewById(R.id.vocaList);
		meansListView = (ListView) view.findViewById(R.id.meanListView);
		wordFileReader = new WordFileReader(context);
		addWord.setPrivateImeOptions("defaultInputmode=english;");
		updateVocaList();
		if (vocaList.size() > 0)
			selectVoca(vocaList.get(0));
		ac.setAdapter(new ArrayAdapter<String>(context,
				android.R.layout.simple_dropdown_item_1line, wordList));
		searchBtn = (Button) view.findViewById(R.id.searchBtn);

		ac.setOnItemClickListener(new OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view,
					int position, long id) {
				searchWordAndUIupdate();
			}
		});
		vocaTv.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				new VocaListDialog(context, AddwordView.this);
			}
		});
		addWord.addTextChangedListener(new TextWatcher() {

			@Override
			public void afterTextChanged(Editable s) {
				// TODO Auto-generated method stub

			}

			@Override
			public void beforeTextChanged(CharSequence s, int start, int count,
					int after) {
				// TODO Auto-generated method stub

			}

			@Override
			public void onTextChanged(CharSequence s, int start, int before,
					int count) {
				// TODO Auto-generated method stub
				if (meansListView.getChildCount() > 0)
					meanListDelete();
				if (addWord.getText().toString().length() == 1) {
					String str = addWord.getText().toString();
					Character ch = str.charAt(0);
					if ((ch >= 'a') && (ch <= 'z')) {
						wordList = wordFileReader.fileRead(str);
						ac.setAdapter(new ArrayAdapter<String>(context,
								android.R.layout.simple_dropdown_item_1line,
								wordList));
					}
					
				}
			}

		});

		helper = new dbHelper(context);
		superAwesomeCardFragment.getMyVocaView().resistSpiner(this);
		view.findViewById(R.id.addBtn).setOnClickListener(
				new View.OnClickListener() {
					@Override
					public void onClick(View v) {

						String words = addWord.getText().toString();
						String means = addMean.getText().toString();
						if (selectVoca == null) {
							Toast.makeText(context, "단어장을 선택하세요",
									Toast.LENGTH_SHORT).show();
							return;
						}
						if (words.equals("") || means.equals("")) {
							Toast.makeText(context, "단어와 뜻을 입력하세요",
									Toast.LENGTH_SHORT).show();
							return;
						}
						helper.insertWord(words, means, selectVoca.getId());
						superAwesomeCardFragment.getMyVocaView()
								.updateVocaList();
						addWord.setText("");
						addMean.setText("");
						observerUpdate();
					}
				});
		view.findViewById(R.id.searchBtn).setOnClickListener(
				new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						searchWordAndUIupdate();

					}
				});

		webView = (WebView) view.findViewById(R.id.webView2);
		webView.setPictureListener(new PictureListener() {
			@Override
			public void onNewPicture(WebView view, Picture picture) {
				// TODO Auto-generated method stub
				webView.scrollTo(0, 200);

			}
		});
		wvc = new WebViewController();
		webView.setWebViewClient(wvc);
	}

	public ArrayList<Voca> getVocaList() {
		return vocaList;
	}

	public void updateWebView() {
		webView.loadUrl("http://m.endic.naver.com/search.nhn?searchOption=all&query="
				+ addWord.getText());
	}

	public void observerUpdate() {

		od.updateData();
	}

	@Override
	// Observer
	public void update(Observable observable, Object data) {
		// TODO Auto-generated method stub
	}

	private void updateMeanList() {
		// TODO Auto-generated method stub
		final ArrayList<String> means = new ArrayList<String>();
		for (int i = 0; i < words.size(); i++) {
			means.add(words.get(i).getMean());
		}
		ArrayAdapter<String> strAdapter = new ArrayAdapter<String>(context,
				android.R.layout.simple_list_item_1, means);
		meansListView.setAdapter(strAdapter);
		meansListView
				.setOnItemClickListener(new AdapterView.OnItemClickListener() {
					@Override
					public void onItemClick(AdapterView<?> parent, View view,
							int position, long id) {
						addMean.setText(means.get(position));
					}
				});

	}
	private void searchWordAndUIupdate(){

		// TODO Auto-generated method stub
		InputMethodManager imm = (InputMethodManager) context
				.getSystemService(Context.INPUT_METHOD_SERVICE);
		imm.hideSoftInputFromWindow(addMean.getWindowToken(), 0);
		Handler mHandler = new Handler() {
			public void handleMessage(android.os.Message msg) {
				updateMeanList();
			}
		};
		ParsingThread parsingThread = new ParsingThread(addWord
				.getText().toString(), mHandler, AddwordView.this);
		parsingThread.start();
		updateWebView();
	
	}
	private void meanListDelete() {
		// TODO Auto-generated method stub
		addMean.setText("");
		ArrayAdapter<String> strAdapter = new ArrayAdapter<String>(context,
				android.R.layout.simple_list_item_1, new ArrayList<String>());
		meansListView.setAdapter(strAdapter);
	}
}
