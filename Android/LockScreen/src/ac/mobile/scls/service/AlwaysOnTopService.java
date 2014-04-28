package ac.mobile.scls.service;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.view.View;
import android.view.WindowManager;

/**
 * Purpose : 특정 뷰를 모든 화면들의 가장 위에 놔두기 위한 서비스. (http://blog.daum.net/mailss/18)
 * 
 * @author KKS
 */
public class AlwaysOnTopService extends Service {
	// 왜 static을 해야만 하는지 아직 알아내지 못함.
	private static View lockScreenView;

	@Override
	public IBinder onBind(Intent arg0) {
		return null;
	}

	@Override
	public void onCreate() {
		super.onCreate();
		createLockView();
	}

	@Override
	public void onDestroy() {
		removeLockView();
		super.onDestroy();
	}

	private void removeLockView() {
		if (lockScreenView != null) {
			((WindowManager) getSystemService(WINDOW_SERVICE))
					.removeView(lockScreenView);
			lockScreenView = null;
		}
	}

	private void createLockView() {
		WindowManager.LayoutParams params = new WindowManager.LayoutParams(
				WindowManager.LayoutParams.TYPE_PHONE);
		WindowManager wm = (WindowManager) getSystemService(WINDOW_SERVICE);
		wm.addView(lockScreenView, params);
	}

	public void setLockScreenView(View lockScreenView) {
		AlwaysOnTopService.lockScreenView = lockScreenView;
	}

	public View getLockScreenView() {
		return lockScreenView;
	}

}