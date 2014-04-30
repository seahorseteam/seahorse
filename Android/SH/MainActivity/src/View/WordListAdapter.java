package View;

import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import com.astuetz.viewpager.extensions.sample.R;
import com.data.Voca;
import com.data.Word;

public class WordListAdapter extends ArrayAdapter<Word> {
	ArrayList<Word> items;
	public WordListAdapter(Context context, int resource, ArrayList<Word> items) {
		super(context, resource, items);
		// TODO Auto-generated constructor stub
		this.items = items;
	}
	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		// if (convertView == null) {
		LayoutInflater vi = (LayoutInflater) getContext().getSystemService(
				Context.LAYOUT_INFLATER_SERVICE);
		convertView = vi.inflate(R.layout.wordlistitem, null);
		Word word = items.get(position);
		TextView wordTv = (TextView) convertView.findViewById(R.id.wordTv);
		TextView meanTv = (TextView) convertView.findViewById(R.id.meanTv);
		TextView autoPushTv = (TextView) convertView
				.findViewById(R.id.autopushdayTv);
		wordTv.setText(word.getWord());
		meanTv.setText(word.getMean());
		autoPushTv.setText("DAY");

		return convertView;
	}
}
