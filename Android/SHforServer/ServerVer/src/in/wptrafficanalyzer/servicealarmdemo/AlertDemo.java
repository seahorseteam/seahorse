package in.wptrafficanalyzer.servicealarmdemo;

import java.util.Calendar;
import java.util.GregorianCalendar;

import com.VoiceWord.SeaHorseTTS;
import com.astuetz.viewpager.extensions.sample.R;
import com.data.Word;
import com.dbhelper.dbHelper;
import com.example.bootservice.TestActivity;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlarmManager;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.PendingIntent;
import android.content.Context;
import android.content.DialogInterface;
import android.content.DialogInterface.OnKeyListener;
import android.content.Intent;
import android.content.DialogInterface.OnClickListener;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.PowerManager;
import android.os.PowerManager.WakeLock;
import android.os.SystemClock;
import android.support.v4.app.DialogFragment;
import android.util.Log;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import android.view.WindowManager.LayoutParams;
@SuppressLint("NewApi")
public class AlertDemo extends Dialog {
	TextView wordTv;
	TextView meanTv;
	TextView exTv;
	TextView exKoTv;
	Context context;
	TestActivity parentActivity;
	Button speechBtn;
	SeaHorseTTS tts;

	public AlertDemo(Context context, TestActivity activity) {
		super(context);
		// TODO Auto-generated constructor stub
		setContentView(R.layout.autopush);
		parentActivity = activity;
		tts = new SeaHorseTTS(context);
		dbHelper helper = new dbHelper(context);
		Word word = helper.getAutoPushWord();
		if (word == null) {
			parentActivity.finish();
			return;
		}   
		activity.getWindow().addFlags(LayoutParams.FLAG_TURN_SCREEN_ON | LayoutParams.FLAG_DISMISS_KEYGUARD);
		speechBtn = (Button) findViewById(R.id.speechBtn);
		wordTv = (TextView) findViewById(R.id.autoPushWord);
		meanTv = (TextView) findViewById(R.id.autoPushMean);
		exTv = (TextView) findViewById(R.id.autoPushEx);
		exKoTv = (TextView) findViewById(R.id.autoPushExKo);
		wordTv.setText(word.getWord());
		meanTv.setText(word.getMean());
		exTv.setText("There were over 500 applicants for the job");
		exKoTv.setText("어쩌고 저쩌고 예문.");
		getWindow().setBackgroundDrawable(new ColorDrawable(0));
		this.setCancelable(false);
		speechBtn.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				tts.speech(wordTv.getText().toString());
			}
		});
	}

	@Override
	public void onBackPressed() {
		// TODO Auto-generated method stub
		super.onBackPressed();
		parentActivity.finish();
		parentActivity.reservationPush();
	}

}
