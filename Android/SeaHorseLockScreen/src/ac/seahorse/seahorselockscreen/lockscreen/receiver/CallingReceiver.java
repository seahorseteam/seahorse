package ac.seahorse.seahorselockscreen.lockscreen.receiver;

import ac.seahorse.seahorselockscreen.lockscreen.view.LockScreenView;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.telephony.PhoneStateListener;
import android.telephony.TelephonyManager;

/***
 * 전화가 왔을 때 작동하는 리시버.
 * 
 * @author KKS
 * @category BroadcastReceiver
 */
public class CallingReceiver extends BroadcastReceiverObserver {
	private LockScreenView view;
	private IntentFilter filter;

	public CallingReceiver() {
		filter = new IntentFilter();
	}

	@Override
	public void update(Context context, Intent intent, LockScreenView view) {
		this.view = view;

		/* Catch calling event. */
		MyPhoneStateListener phoneListener = new MyPhoneStateListener();
		TelephonyManager telephony = (TelephonyManager) context
				.getSystemService(Context.TELEPHONY_SERVICE);
		telephony
				.listen(phoneListener, PhoneStateListener.LISTEN_SERVICE_STATE);
		telephony.listen(phoneListener, PhoneStateListener.LISTEN_CALL_STATE);
	}

	@Override
	public void onReceive(Context context, Intent intent) {
	}

	@Override
	public IntentFilter getIntentFilter() {
		return filter;
	}

	@Override
	public void setIntentFilter(IntentFilter filter) {
		this.filter = filter;
	}

	public class MyPhoneStateListener extends PhoneStateListener {
		@Override
		public void onCallStateChanged(int state, String incomingNumber) {
			if (state == TelephonyManager.CALL_STATE_RINGING) {
				if (view.isAlive()) {
					view.removeThisWithLockKeyguard();
				}
			} else if (state == TelephonyManager.CALL_STATE_OFFHOOK) {
			} else {
				// Doesn't restart lock screen.
			}
		}
	}

}
