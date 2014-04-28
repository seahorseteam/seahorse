package in.wptrafficanalyzer.servicealarmdemo;

import java.util.Calendar;
import java.util.GregorianCalendar;

import com.example.bootservice.R;
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
import android.os.SystemClock;
import android.support.v4.app.DialogFragment;
import android.util.Log;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.view.WindowManager.LayoutParams;
import android.widget.TextView;
import android.widget.Toast;

@SuppressLint("NewApi")
public class AlertDemo extends Dialog {
	TextView wordTv;
	TextView meanTv;
	TextView exTv;
	TextView exKoTv;
	Context context;
	TestActivity parentActivity;
	public AlertDemo(Context context,TestActivity activity) {
		super(context);
		// TODO Auto-generated constructor stub
		setContentView(R.layout.autopush);
		parentActivity = activity;
		wordTv = (TextView) findViewById(R.id.autoPushWord);
		meanTv = (TextView) findViewById(R.id.autoPushMean);
		exTv = (TextView) findViewById(R.id.autoPushEx);
		exKoTv = (TextView) findViewById(R.id.autoPushExKo);
		wordTv.setText("Applicant");
		meanTv.setText("지원자");
		exTv.setText("There were over 500 applicants for the job");
		exKoTv.setText("어쩌고 저쩌고 예문.");
		getWindow().setBackgroundDrawable(new ColorDrawable(0));
		this.setCancelable(false);
		// getDialog().getWindow().requestFeature(Window.FEATURE_NO_TITLE);
	}
	@Override
	public void onBackPressed() {
		// TODO Auto-generated method stub
		super.onBackPressed();
//		parentActivity.reservationPush();
		parentActivity.finish();
		
	}
	// @Override
	// public View onCreateView(LayoutInflater inflater, ViewGroup container,
	// Bundle savedInstanceState) {
	// // TODO Auto-generated method stub
	//
	// getActivity().getWindow().addFlags(
	// LayoutParams.FLAG_TURN_SCREEN_ON
	// | LayoutParams.FLAG_DISMISS_KEYGUARD);
	//
	// View view = inflater.inflate(R.layout.autopush, container, false);
	//
	// wordTv = (TextView) view.findViewById(R.id.autoPushWord);
	// meanTv = (TextView) view.findViewById(R.id.autoPushMean);
	// exTv = (TextView) view.findViewById(R.id.autoPushEx);
	// exKoTv = (TextView) view.findViewById(R.id.autoPushExKo);
	// wordTv.setText("Applicant");
	// meanTv.setText("지원자");
	// exTv.setText("There were over 500 applicants for the job");
	// exKoTv.setText("어쩌고 저쩌고 예문.");
	// getDialog().getWindow().setBackgroundDrawable(new ColorDrawable(0));
	// getDialog().getWindow().requestFeature(Window.FEATURE_NO_TITLE);
	// return view;
	// }
	//
	// /** The application should be exit, if the user presses the back button
	// */
	// @Override
	// public void onDestroy() {
	// super.onDestroy();
	// getActivity().finish();
	// }
}
