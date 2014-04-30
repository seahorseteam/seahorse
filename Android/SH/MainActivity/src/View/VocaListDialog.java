package View;

import java.util.ArrayList;

import com.astuetz.viewpager.extensions.sample.R;
import com.data.Voca;

import android.app.Dialog;
import android.content.Context;
import android.view.View;
import android.widget.Adapter;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class VocaListDialog extends Dialog {
	private ListView listView;

	public VocaListDialog(final Context context, final AddwordView addwordView) {
		super(context);
		// TODO Auto-generated constructor stub
		this.setContentView(R.layout.vocalistdialog);
		VocaListAdapter vocaListAdapter = new VocaListAdapter(context,
				android.R.layout.simple_list_item_1, addwordView.getVocaList());
		listView = (ListView) findViewById(R.id.vocaListDialog);
		listView.setAdapter(vocaListAdapter);
		this.setTitle("단어장");
		listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view,
					int position, long id) {
				Toast.makeText(context,
						addwordView.getVocaList().get(position).getCategory(),
						Toast.LENGTH_SHORT).show();
				addwordView.selectVoca(addwordView.getVocaList().get(position));
				dismiss();
			}
		});
		show();
	}

}
