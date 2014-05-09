package View;

import java.util.ArrayList;

import android.content.Context;
import android.content.Intent;
import android.graphics.Picture;
import android.os.Handler;
import android.os.Message;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.webkit.WebView;
import android.webkit.WebView.PictureListener;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.AdapterView.OnItemClickListener;

import com.Activity.ShareVocaWordListActivity;
import com.Activity.WordListInVocaActivity;
import com.Module.WordFileReader;
import com.Thread.DownloadVocaListThread;
import com.Thread.UploadWordThread;
import com.astuetz.viewpager.extensions.sample.R;
import com.astuetz.viewpager.extensions.sample.SuperAwesomeCardFragment;
import com.data.ArrayVoca;
import com.data.ObserverableData;
import com.data.User;
import com.data.Voca;
import com.data.Word;
import com.dbhelper.dbHelper;

public class ShareVocaVew extends CreateView {

	Context context;
	SuperAwesomeCardFragment superAwesomeCardFragment;
	ArrayList<Voca> vocas = new ArrayList<Voca>();
	ListView listView;
	Handler mHandler;

	public ShareVocaVew(SuperAwesomeCardFragment s) {
		// TODO Auto-generated constructor stub
		superAwesomeCardFragment = s;
		context = s.getActivity();
		LayoutInflater inflater = (LayoutInflater) context
				.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		view = inflater.inflate(R.layout.sharevoca, null);
		Button searchBtn = (Button) view.findViewById(R.id.vacasearchBtn);
		EditText searchEdit = (EditText) view.findViewById(R.id.vocasearchET);
		listView = (ListView) view.findViewById(R.id.shareVocaListView);
		searchBtn.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				mHandler = new Handler() { // 핸들러 처리부분
					public void handleMessage(Message msg) { // 메시지를
						// 받는부분
						update();
					};
				};
				DownloadVocaListThread downloadVocaListThread = new DownloadVocaListThread(
						ShareVocaVew.this, mHandler);
				downloadVocaListThread.start();
			}
		});
		listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view,
					int position, long id) {
				// WordListInVocaActivity wordListInVocaActivity = new
				// WordListInVocaActivity(2);
				Intent intent = new Intent(context,
						ShareVocaWordListActivity.class);
				intent.putExtra("vocaID", vocas.get(position).getId());
				context.startActivity(intent);
				//refreshAdapter();
			}
		});
	}

	public void update() {
		ShareVocaListAdapter shareVocaListAdapter = new ShareVocaListAdapter(
				context, android.R.layout.two_line_list_item, vocas);
		listView.setAdapter(shareVocaListAdapter);
	}

	public void setVocas(ArrayVoca vocas) {
		// TODO Auto-generated method stub
		this.vocas.clear();
		for (int i = 0; i < vocas.getVocas().size(); i++) {
			this.vocas.add(vocas.getVocas().get(i));
		}
	}

}
