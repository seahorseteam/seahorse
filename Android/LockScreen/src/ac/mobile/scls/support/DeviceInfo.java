package ac.mobile.scls.support;

import java.util.List;

import android.app.ActivityManager;
import android.app.ActivityManager.RunningAppProcessInfo;
import android.content.Context;

public class DeviceInfo {
	private static DeviceInfo deviceInfo = null;
	private DisplayInfo displayInfo;

	private DeviceInfo() {
		displayInfo = new DisplayInfo();
	}

	/***
	 * 디바이스 정보에는 여러 정보가 붙을 수 있으므로 싱글턴을 써서 매번 각 정보의 객체를 새로 생성하지 않게 하고 함.
	 * 
	 * @return
	 */
	public static DeviceInfo getInstance() {
		if (deviceInfo == null) {
			deviceInfo = new DeviceInfo();
		}
		return deviceInfo;
	}

	public DisplayInfo getDisplayInfo() {
		return displayInfo;
	}

	/**
	 * Process가 실행중인지 여부 확인.
	 * 
	 * @param context
	 *            - packageName
	 * @return If 'true' then running. if 'false' then is not running.
	 */
	public boolean isRunningProcess(Context context, String packageName) {
		boolean bRunning = false;

		ActivityManager activityMng = (ActivityManager) context
				.getSystemService(Context.ACTIVITY_SERVICE);
		List<RunningAppProcessInfo> procList = activityMng
				.getRunningAppProcesses();
		for (RunningAppProcessInfo procInfo : procList) {
			if (procInfo.processName.equals(packageName)) {
				bRunning = true;
				break;
			}
		}

		return bRunning;
	}
}
