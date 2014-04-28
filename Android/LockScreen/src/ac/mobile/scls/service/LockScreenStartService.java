package ac.mobile.scls.service;

import android.app.Service;
import android.content.BroadcastReceiver;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.IBinder;

/***
 * 스크린이 꺼질 때 수행되는 서비스이며, 반드시 setBroadcastRecever를 통해 receiver를 세팅해야 한다. 생성자로 이를
 * 수행할 수가 없어서 메서드로 하게 했음. 부모 클래스에서 뭔가 맞지 않는 것인지 수행이 안됨.
 * 
 * @author KKS
 * 
 */
public class LockScreenStartService extends Service {
	private static BroadcastReceiver mReceiver;

	/************************************ Life Cycle ************************************/

	@Override
	public void onCreate() {
		setRegisterReceiver();
	}

	@Override
	public int onStartCommand(Intent intent, int flags, int startId) {
		if (intent == null) {
			setRegisterReceiver();
		}

		return START_REDELIVER_INTENT;
	}

	@Override
	public IBinder onBind(Intent intent) {
		return null;
	}

	@Override
	public void onDestroy() {
		unregisterReceiver(mReceiver);
		super.onDestroy();
	}

	/************************************ User Method ************************************/

	private void setRegisterReceiver() {
		IntentFilter filter = new IntentFilter(Intent.ACTION_SCREEN_ON);
		filter.addAction(Intent.ACTION_SCREEN_OFF);
		registerReceiver(mReceiver, filter);
	}

	public void setBroadcastRecever(BroadcastReceiver receiver) {
		mReceiver = receiver;
	}

}
