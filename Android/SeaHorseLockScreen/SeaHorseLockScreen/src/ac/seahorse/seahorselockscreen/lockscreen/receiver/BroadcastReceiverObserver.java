package ac.seahorse.seahorselockscreen.lockscreen.receiver;

import ac.seahorse.seahorselockscreen.lockscreen.view.LockScreenView;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;

/***
 * 잠금 화면에서 사용되는 리시버로 잠금 화면 리시버를 등록하고자 한다면 이 추상 클래스를 상속받아서 구현해야 한다.
 * 
 * @author KKS
 * @category BroadcastReceiver
 */
public abstract class BroadcastReceiverObserver extends BroadcastReceiver {
	/***
	 * 서비스에서 onCreate(), onStartCommand() 수행 시에 update를 호출한다.
	 */
	abstract public void update(Context context, Intent intent,
			LockScreenView view);

	/***
	 * 서비스에서 이 리시버를 등록할 때 호출한다.
	 * 
	 * @return -리시버에서 사용할 인텐트 필터 반환.
	 */
	abstract public IntentFilter getIntentFilter();

	/***
	 * 리시버에 IntentFilter를 담는다. 서비스에서 리시버를 등록할 때 이를 참조한다.
	 */
	abstract public void setIntentFilter(IntentFilter filter);
}
