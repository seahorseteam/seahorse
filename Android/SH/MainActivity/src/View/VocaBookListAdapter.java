package View;

import java.util.ArrayList;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import com.astuetz.viewpager.extensions.sample.R;

public class VocaBookListAdapter extends ArrayAdapter<VocaListData> {

	private ArrayList<VocaListData> items;

	public VocaBookListAdapter(Context context, int textViewResourceId,
			ArrayList<VocaListData> items) {
		super(context, textViewResourceId, items);
		this.items = items;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
//		if (convertView == null) {
			LayoutInflater vi = (LayoutInflater) getContext().getSystemService(
					Context.LAYOUT_INFLATER_SERVICE);
			convertView = vi.inflate(R.layout.voca_list, null);
//		}
		VocaListData vocalistdata = items.get(position);

		if (vocalistdata != null) {
			TextView title = (TextView) convertView.findViewById(R.id.title);
			TextView wordCnt = (TextView) convertView.findViewById(R.id.wordCnt);
			TextView examCnt = (TextView) convertView.findViewById(R.id.examCnt);
			TextView linkCnt = (TextView) convertView.findViewById(R.id.linkCnt);

			title.setText(vocalistdata.getTitle());
			wordCnt.setText("단어 : "+vocalistdata.getWordCnt());
			examCnt.setText("예문 : "+vocalistdata.getExamCnt());
			linkCnt.setText("링크 : "+vocalistdata.getLinkCnt());
		}

		return convertView;
	}
}
