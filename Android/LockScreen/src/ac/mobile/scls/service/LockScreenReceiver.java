package ac.mobile.scls.service;

import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.telephony.PhoneStateListener;
import android.telephony.TelephonyManager;
import android.widget.Toast;

public class LockScreenReceiver extends BroadcastReceiver {
	private Class<?> activity;
	private Context context;

	public LockScreenReceiver(Class<?> activity) {
		this.activity = activity;
	}

	@Override
	public void onReceive(Context context, Intent intent) {
		this.context = context;

		if (intent.getAction().equals(Intent.ACTION_SCREEN_OFF)) {
			try {
				Intent changeIntent = new Intent(context, activity);
				PendingIntent pendingIntent = PendingIntent.getActivity(
						context, 0, changeIntent, 0);
				pendingIntent.send();
			} catch (Exception e) {
				// cancled & Nullpoint;
			}
		} else {
			// unknown case
		}

		// Catch calling event.
		MyPhoneStateListener phoneListener = new MyPhoneStateListener();
		TelephonyManager telephony = (TelephonyManager) context
				.getSystemService(Context.TELEPHONY_SERVICE);
		telephony
				.listen(phoneListener, PhoneStateListener.LISTEN_SERVICE_STATE);
		telephony.listen(phoneListener, PhoneStateListener.LISTEN_CALL_STATE);
	}

	public class MyPhoneStateListener extends PhoneStateListener {
		@Override
		public void onCallStateChanged(int state, String incomingNumber) {
			switch (state) {
			case TelephonyManager.CALL_STATE_IDLE:
				break;
			case TelephonyManager.CALL_STATE_OFFHOOK:
				break;
			case TelephonyManager.CALL_STATE_RINGING:
				Toast.makeText(context, "", Toast.LENGTH_SHORT).show();
				context.stopService(new Intent(context,
						AlwaysOnTopService.class));
				break;
			default:
				break;
			}
		}
	}

}
