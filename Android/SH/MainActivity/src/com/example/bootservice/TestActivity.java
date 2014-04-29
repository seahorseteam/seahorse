package com.example.bootservice;

import in.wptrafficanalyzer.servicealarmdemo.AlertDemo;

import java.util.Calendar;
import java.util.GregorianCalendar;

import android.app.Activity;
import android.app.ActionBar;
import android.app.AlarmManager;
import android.app.AlertDialog;
import android.app.Fragment;
import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;
import android.os.SystemClock;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;
import android.os.Build;

public class TestActivity extends FragmentActivity {
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		/** Creating an Alert Dialog Window */

		AlertDemo alert = new AlertDemo(this, this);
		// AutoPushDialog alert = new AutoPushDialog(this);
		/** Opening the Alert Dialog Window */
		// alert.

		alert.show();
	}

	@Override
	public void onUserLeaveHint() {
		// TODO Auto-generated method stub
		Toast.makeText(getApplicationContext(), "userInter", Toast.LENGTH_LONG)
				.show();
		finish();
	}

	@Override
	protected void onDestroy() {
		// TODO Auto-generated method stub
		super.onDestroy();
		reservationPush();
		Toast.makeText(this, "Destroy", Toast.LENGTH_SHORT).show();
		finish();

	}

	public void reservationPush() {
		// TODO Auto-generated method stub
		AlertDialog.Builder builder = new AlertDialog.Builder(this);
		Intent i = new Intent(this, TestActivity.class);
		final PendingIntent operation = PendingIntent.getActivity(
				this.getBaseContext(), (int) (SystemClock.elapsedRealtime()),
				i, Intent.FLAG_ACTIVITY_NEW_TASK);
		final AlarmManager alarmManager = (AlarmManager) this.getBaseContext()
				.getSystemService(Activity.ALARM_SERVICE);
		/** Setting title for the alert dialog */
		builder.setTitle("Alarm");
		Calendar cal = new GregorianCalendar();
		cal.add(Calendar.MINUTE, 1);
		alarmManager.set(AlarmManager.RTC_WAKEUP, cal.getTimeInMillis(),
				operation);
		Toast.makeText(getApplicationContext(), "reservationPush",
				Toast.LENGTH_LONG).show();
	}
}
