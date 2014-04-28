package in.wptrafficanalyzer.servicealarmdemo;

import java.util.Calendar;
import java.util.GregorianCalendar;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.AlertDialog;
import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;
import android.os.SystemClock;
import android.support.v4.app.FragmentActivity;
import android.view.WindowManager.LayoutParams;
import android.widget.Toast;

public class DemoActivity extends FragmentActivity {
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		/** Creating an Alert Dialog Window */
		//AlertDemo alert = new AlertDemo(getApplicationContext());
		// AutoPushDialog alert = new AutoPushDialog(this);
		/** Opening the Alert Dialog Window */
		// alert.
		//alert.show();
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
	protected void onDestroy() {
		// TODO Auto-generated method stub
		super.onDestroy();
		reservationPush();
		Toast.makeText(this, "Destroy", Toast.LENGTH_SHORT).show();
		finish();

	}

	private void reservationPush() {
		// TODO Auto-generated method stub
		AlertDialog.Builder builder = new AlertDialog.Builder(this);
		Intent i = new Intent(
				"in.wptrafficanalyzer.servicealarmdemo.demoactivity");
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
	}
}
