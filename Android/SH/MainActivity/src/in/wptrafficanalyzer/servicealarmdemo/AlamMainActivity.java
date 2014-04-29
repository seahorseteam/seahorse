package in.wptrafficanalyzer.servicealarmdemo;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.concurrent.TimeUnit;

import com.astuetz.viewpager.extensions.sample.R;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;
import android.os.SystemClock;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.TimePicker;
import android.widget.Toast;

@SuppressLint("NewApi")
public class AlamMainActivity extends Activity {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.alrammain);

		OnClickListener setClickListener = new OnClickListener() {

			@Override
			public void onClick(View v) {
				/**
				 * This intent invokes the activity DemoActivity, which in turn
				 * opens the AlertDialog window
				 */
				Intent i = new Intent(
						"in.wptrafficanalyzer.servicealarmdemo.demoactivity");

				/** Creating a Pending Intent */
				// PendingIntent operation =
				// PendingIntent.getActivity(getBaseContext(), 0, i,
				// Intent.FLAG_ACTIVITY_NEW_TASK);
				PendingIntent operation1 = PendingIntent.getActivity(
						getBaseContext(),
						(int) (SystemClock.elapsedRealtime()), i,
						Intent.FLAG_ACTIVITY_NEW_TASK);

				/** Getting a reference to the System Service ALARM_SERVICE */

				/**
				 * Getting a reference to DatePicker object available in the
				 * MainActivity
				 */
				DatePicker dpDate = (DatePicker) findViewById(R.id.dp_date);

				/**
				 * Getting a reference to TimePicker object available in the
				 * MainActivity
				 */
				TimePicker tpTime = (TimePicker) findViewById(R.id.tp_time);

				int year = dpDate.getYear();
				int month = dpDate.getMonth();
				int day = dpDate.getDayOfMonth();
				int hour = tpTime.getCurrentHour();
				int minute = tpTime.getCurrentMinute();

				/**
				 * Creating a calendar object corresponding to the date and time
				 * set by the user
				 */
				GregorianCalendar calendar = new GregorianCalendar(year, month,
						day, hour, minute);
				Calendar cal = new GregorianCalendar();
				cal.add(Calendar.DATE, 1);

			
				Log.d("motion", cal.get(Calendar.YEAR) + "");
				Log.d("motion", cal.get((cal.get(Calendar.MONTH) + 1)) + 1 + "");
				Log.d("motion", cal.get(Calendar.DAY_OF_MONTH) + "");

				/**
				 * Converting the date and time in to milliseconds elapsed since
				 * epoch
				 */
				long alarm_time = calendar.getTimeInMillis();
				long minutes = TimeUnit.MILLISECONDS.toMinutes(1);
				/** Setting an alarm, which invokes the operation at alart_time */
				AlarmManager alarmManager = (AlarmManager) getBaseContext()
						.getSystemService(ALARM_SERVICE);

				// alarmManager.set(AlarmManager.RTC_WAKEUP , alarm_time ,
				// operation);
				// alarmManager.set(AlarmManager.RTC ,
				// System.currentTimeMillis()+3000 , operation1);
				alarmManager.set(AlarmManager.RTC,
						System.currentTimeMillis() + 6000, operation1);

				// 1396516140000
				/** Alert is set successfully */
				Toast.makeText(getBaseContext(), "Alarm is set successfully",
						Toast.LENGTH_SHORT).show();

			}
		};

		OnClickListener quitClickListener = new OnClickListener() {
			@Override
			public void onClick(View v) {
				finish();
			}
		};

		Button btnSetAlarm = (Button) findViewById(R.id.btn_set_alarm);
		btnSetAlarm.setOnClickListener(setClickListener);

		Button btnQuitAlarm = (Button) findViewById(R.id.btn_quit_alarm);
		btnQuitAlarm.setOnClickListener(quitClickListener);

	}

	@Override
	protected void onDestroy() {
		// TODO Auto-generated method stub
		super.onDestroy();
		Toast.makeText(getApplicationContext(), "onDestroy", Toast.LENGTH_LONG)
				.show();
	}

	@Override
	public void onUserLeaveHint() {
		// TODO Auto-generated method stub
		Toast.makeText(getApplicationContext(), "userInter", Toast.LENGTH_LONG)
				.show();
		finish();
		super.onUserInteraction();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
}
