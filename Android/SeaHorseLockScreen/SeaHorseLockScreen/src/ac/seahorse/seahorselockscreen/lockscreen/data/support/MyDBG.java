package ac.seahorse.seahorselockscreen.lockscreen.data.support;

import android.util.Log;

public class MyDBG {
	private static String TAG = "kksDbg";
	private static boolean bDbg = true;

	/***
	 * 태그 설정. 기본값은 kksDbg.
	 * 
	 * @param logTag
	 *            -log(TAG, msg) 에서 TAG 부분.
	 */
	public static void setLogTAG(String logTag) {
		TAG = logTag;
	}

	public static String getLogTAG() {
		return TAG;
	}

	public static void log(String logStr) {
		if (MyDBG.bDbg) {
			Log.d(TAG, logStr);
		}
	}

	public static void setDBG(boolean bDbg) {
		MyDBG.bDbg = bDbg;
	}

}
