package View;

import java.util.ArrayList;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import com.astuetz.viewpager.extensions.sample.R;
import com.data.Voca;

public class VocaBookListAdapter extends ArrayAdapter<Voca> {

	private ArrayList<Voca> items;

	public VocaBookListAdapter(Context context, int textViewResourceId,
			ArrayList<Voca> items) {
		super(context, textViewResourceId, items);
		this.items = items;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		// if (convertView == null) {
		LayoutInflater vi = (LayoutInflater) getContext().getSystemService(
				Context.LAYOUT_INFLATER_SERVICE);
		convertView = vi.inflate(R.layout.voca_list, null);
		// }
		Voca vocalistdata = items.get(position);

		if (vocalistdata != null) {
			TextView title = (TextView) convertView.findViewById(R.id.title);
			TextView wordCnt = (TextView) convertView
					.findViewById(R.id.wordCnt);
			TextView examCnt = (TextView) convertView
					.findViewById(R.id.examCnt);
			TextView linkCnt = (TextView) convertView
					.findViewById(R.id.linkCnt);

			title.setText(vocalistdata.getName());
			wordCnt.setText("단어 : " + vocalistdata.getWordCnt());
		}

		return convertView;
	}
}
