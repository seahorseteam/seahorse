package ac.mobile.scls.support;

import android.app.KeyguardManager;
import android.content.Context;
import android.view.Display;
import android.view.WindowManager;

public class DisplayInfo {
	private KeyguardManager km = null;
	private static KeyguardManager.KeyguardLock lock;
	private boolean bflag;

	public void setKeyGuardEnable(boolean bflag, KeyguardManager keyguardManager) {
		this.km = keyguardManager;
		this.bflag = bflag;

		if (bflag == true) {
			if (lock == null) {
				lock = km.newKeyguardLock("seaHorse");
			}
			lock.disableKeyguard();
		} else {
			if (lock != null) {
				lock.reenableKeyguard();
			}
		}
	}

	public boolean getKeyGuardEnable() {
		return bflag;
	}

	public static int getStatusBarHeight(Context context) {
		int result = 0;
		int resourceId = context.getResources().getIdentifier(
				"status_bar_height", "dimen", "android");
		if (resourceId > 0) {
			result = context.getResources().getDimensionPixelSize(resourceId);
		}
		return result;
	}

	public static int[] getDisplaySize(Context context) {
		WindowManager wm = (WindowManager) context
				.getSystemService(Context.WINDOW_SERVICE);
		Display display = wm.getDefaultDisplay();
		return new int[] { display.getWidth(), display.getHeight() };
	}

}
