package View;

import java.util.ArrayList;

import com.astuetz.viewpager.extensions.sample.R;
import com.data.Voca;

import android.content.Context;
import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

public class VocaListAdapter extends ArrayAdapter<Voca> {
	Context context;
	ArrayList<Voca> vocas;

	public VocaListAdapter(Context context, int resource, ArrayList<Voca> items) {
		super(context, resource,items);
		this.context = context;
		this.vocas = items;
		// TODO Auto-generated constructor stub
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		// TODO Auto-generated method stub
		TextView tv = new TextView(context);
		tv.setTextColor(Color.BLACK);
		tv.setText(vocas.get(position).getName());
		return tv;

	}
}
