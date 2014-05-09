package View;

import java.util.ArrayList;
import java.util.List;

import com.astuetz.viewpager.extensions.sample.R;
import com.data.Voca;
import com.data.Word;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

public class ShareVocaListAdapter extends ArrayAdapter<Voca> {
	ArrayList<Voca> items;
	public ShareVocaListAdapter(Context context, int resource,ArrayList<Voca> objects) {
		super(context, resource, objects);
		items  = objects;
		// TODO Auto-generated constructor stub
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		// TODO Auto-generated method stub
		LayoutInflater vi = (LayoutInflater) getContext().getSystemService(
				Context.LAYOUT_INFLATER_SERVICE);
		convertView = vi.inflate(R.layout.sharevocaitem, null);
		Voca voca = items.get(position);
		TextView vocaNmTv = (TextView) convertView.findViewById(R.id.shareVocaNameTV);
		TextView vocaUserTv = (TextView) convertView.findViewById(R.id.shareVocaUserTV);
		vocaNmTv.setText(voca.getName());
		vocaUserTv.setText(voca.getUsername());
		return convertView;
	}
}
