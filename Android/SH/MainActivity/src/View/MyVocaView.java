package View;

import java.util.ArrayList;

import android.app.AlertDialog;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.Toast;

import com.astuetz.viewpager.extensions.sample.R;

public class MyVocaView extends CreateView {
	// -------------------
	private ArrayList<VocaListData> ArrayData;
	private VocaListData data;
	private VocaBookListAdapter adapter;
	private ListView custom_list;
	Context context;
	// ------------------
	public ArrayList<String> vocaTitles(){
		ArrayList<String> strs = new ArrayList<String>();
		for(int i=0;i<ArrayData.size();i++){
			strs.add(ArrayData.get(i).getTitle());
		}
		return strs;
	}
	public MyVocaView(Context context) {
		// TODO Auto-generated constructor stub
		this.context = context;
		LayoutInflater inflater = (LayoutInflater) context
				.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		view = inflater.inflate(R.layout.myvoca, null);
		// --------------------------
		ArrayData = new ArrayList<VocaListData>();

		data = new VocaListData("기본 단어장", 0, 0, 0);
		
		ArrayData.add(data);
		
		adapter = new VocaBookListAdapter(context,
				android.R.layout.simple_list_item_1, ArrayData);
		custom_list = (ListView) view.findViewById(R.id.vocaListView);

		custom_list.setAdapter(adapter);
		// --------------------------------
		CreateCategory();
	}

	private void refreshAdapter() {
		ArrayData.add(new VocaListData(vocaTitle, 0, 0, 0));
		adapter = new VocaBookListAdapter(view.getContext(),
				android.R.layout.simple_list_item_1, ArrayData);
		custom_list.setAdapter(adapter);
		addwordView.updateSpiner();
		
	}

	private AlertDialog newRecDialog;
	private EditText titleInputEt;
	private String vocaTitle;
	private Spinner spiner;
	private AddwordView addwordView;

	public void CreateCategory() {
		view.findViewById(R.id.addVocaBook).setOnClickListener(
				new OnClickListener() {

					@Override
					public void onClick(View v) {
						AlertDialog.Builder builder;

						LayoutInflater inflater = (LayoutInflater) view
								.getContext().getSystemService(
										Context.LAYOUT_INFLATER_SERVICE);
						View layout = inflater.inflate(
								R.layout.category_title_input, null);
						titleInputEt = (EditText) layout
								.findViewById(R.id.et_titleInput);

						Button cancleBtn = (Button) layout
								.findViewById(R.id.cancleBtn);
						Button okayBtn = (Button) layout
								.findViewById(R.id.okayBtn);

						okayBtn.setOnClickListener(new OnClickListener() {

							@Override
							public void onClick(View v) {
								vocaTitle = titleInputEt.getText().toString();
								refreshAdapter();
								newRecDialog.dismiss();
							}
						});
						cancleBtn.setOnClickListener(new OnClickListener() {
							@Override
							public void onClick(View v) {
								newRecDialog.dismiss();
							}
						});

						builder = new AlertDialog.Builder(view.getContext());
						builder.setView(layout);

						newRecDialog = builder.create();
						newRecDialog.show();
					}
				});

	}

	public void cancleDialog(View v) {
		// newRecDialog.dismiss();
	}

	public void createCategoryName(View v) {
		// Toast.makeText(v.getContext(), titleInputEt.getText().toString(),
		// Toast.LENGTH_SHORT).show();
		// newRecDialog.dismiss();
	}
	public void resistSpiner(AddwordView addwordView) {
		// TODO Auto-generated method stub
		this.addwordView = addwordView;
	}
}
