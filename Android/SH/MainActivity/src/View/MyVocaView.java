package View;

import java.util.ArrayList;
import java.util.Observable;
import java.util.Observer;

import android.app.AlertDialog;
import android.content.Context;
import android.content.Intent;
import android.sax.StartElementListener;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.Toast;

import com.data.ObserverableData;
import com.data.Voca;
import com.dbhelper.*;
import com.Activity.WordListInVocaActivity;
import com.astuetz.viewpager.extensions.sample.R;
import com.astuetz.viewpager.extensions.sample.SuperAwesomeCardFragment;
public class MyVocaView extends CreateView implements Observer{
	// -------------------
	private ArrayList<Voca> vocas;
	private VocaListData data;
	private VocaBookListAdapter adapter;
	private DBHelperVoca dbHelperVoca;
	private ListView custom_list;
	Context context;
	ObserverableData od;
	public ArrayList<Voca> getVocas() {
		return vocas;
	}
	public MyVocaView(final Context context,ObserverableData od) {
		// TODO Auto-generated constructor stub
		this.context = context;
		this.od = od;
		this.dbHelperVoca = new DBHelperVoca(context);
		LayoutInflater inflater = (LayoutInflater) context
				.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		view = inflater.inflate(R.layout.myvoca, null);
		vocas = dbHelperVoca.getVocaList();
		adapter = new VocaBookListAdapter(context,
				android.R.layout.simple_list_item_1, vocas);
		custom_list = (ListView) view.findViewById(R.id.vocaListView);
		custom_list.setAdapter(adapter);
		custom_list.setOnItemClickListener(new AdapterView.OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view,
					int position, long id) {
				//WordListInVocaActivity wordListInVocaActivity = new WordListInVocaActivity(2);
				  Intent intent = new Intent(context, WordListInVocaActivity.class);
				  intent.putExtra("vocaID", vocas.get(position).getId());
		            context.startActivity(intent);
		            refreshAdapter();
			}
		});
		CreateCategory();
	}
	public void refreshAdapter() {
		vocas = dbHelperVoca.getVocaList();

		adapter = new VocaBookListAdapter(view.getContext(),
				android.R.layout.simple_list_item_1, vocas);
		adapter.notifyDataSetChanged();
		custom_list.setAdapter(adapter);
		adapter.notifyDataSetChanged();
		addwordView.updateVocaList();
		
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
								dbHelperVoca.insertVoca(vocaTitle);
								refreshAdapter();
								newRecDialog.dismiss();
							}
						});
						cancleBtn.setOnClickListener(new OnClickListener() {
							@Override
							public void onClick(View v) {
								refreshAdapter();
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
	public void updateVocaList(){
		refreshAdapter();
	}

	@Override
	public void update(Observable observable, Object data) {
		// TODO Auto-generated method stub
		refreshAdapter();
	}
}
