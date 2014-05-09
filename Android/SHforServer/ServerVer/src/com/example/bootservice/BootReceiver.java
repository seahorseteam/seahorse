package com.example.bootservice;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.logging.Logger;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.AlertDialog;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.SystemClock;
import android.sax.StartElementListener;
import android.widget.Toast;

public class BootReceiver extends BroadcastReceiver {
	static final String TAG = "ANDROES";
	private final String BOOT_ACTION = "android.intent.action.BOOT_COMPLETED";
	Context context;

	@Override
	public void onReceive(Context context, Intent intent) {

		this.context = context;
		Toast.makeText(context, "reservationPush", Toast.LENGTH_LONG).show();
		reservationPush();

	}

	private void reservationPush() {
		// TODO Auto-generated method stub
		//Toast.makeText(context, "reservationPush", Toast.LENGTH_LONG).show();

		Intent i = new Intent("com.example.bootservice.testactivity");
		final PendingIntent operation = PendingIntent.getActivity(context,
				(int) (SystemClock.elapsedRealtime()), i,
				Intent.FLAG_ACTIVITY_NEW_TASK);
		final AlarmManager alarmManager = (AlarmManager) context
				.getSystemService(Activity.ALARM_SERVICE);
		/** Setting title for the alert dialog */
		Calendar cal = new GregorianCalendar();
 		cal.add(Calendar.MINUTE, 0);
 		alarmManager.set(AlarmManager.RTC_WAKEUP, cal.getTimeInMillis(),
 				operation);
 		//Toast.makeText(context, "reservationPushComplete", Toast.LENGTH_LONG).show();
	}
}