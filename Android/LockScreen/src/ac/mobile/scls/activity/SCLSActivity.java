package ac.mobile.scls.activity;

import ac.mobile.scls.R;
import ac.mobile.scls.screenviews.SCLSViewModel1;
import ac.mobile.scls.service.AlwaysOnTopService;
import ac.mobile.scls.support.DisplayInfo;
import ac.mobile.scls.support.LockType;
import android.app.Activity;
import android.app.KeyguardManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.os.Bundle;
import android.view.View;

public class SCLSActivity extends Activity {
	private final String PREF_NAME = "kksTest_exitCnt";
	private final String EDIT_EXITCNT_NAME = "exitCnt";
	private static final int EXIT_CNT_LIMIT = 1;
	private static int exitCnt;

	private SharedPreferences pref;
	private Editor edit;
	private KeyguardManager km;
	private int lockType;
	private DisplayInfo displayInfo;
	private AlwaysOnTopService topViewService;
	private static View lockScreenView;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.test);

		initRef();
		if (exitCnt < EXIT_CNT_LIMIT) {
			displayInfo.setKeyGuardEnable(false, km);
			stopService(new Intent(this, topViewService.getClass()));
			exitCnt++;
		} else {
			if (lockType == LockType.NONE_OR_SLIDER) {
				displayInfo.setKeyGuardEnable(true, km);
			} else {
				displayInfo.setKeyGuardEnable(false, km);
			}
			topViewService.setLockScreenView(lockScreenView);
			startService(new Intent(this, topViewService.getClass()));
			exitCnt = 0;
		}
		edit.putInt(EDIT_EXITCNT_NAME, exitCnt);
		edit.commit();

		finish();
	}

	private void initRef() {
		km = (KeyguardManager) getSystemService(Context.KEYGUARD_SERVICE);
		pref = getSharedPreferences(PREF_NAME, 0);
		edit = pref.edit();
		exitCnt = pref.getInt(EDIT_EXITCNT_NAME, EXIT_CNT_LIMIT);
		lockType = LockType.getCurrent(getContentResolver());

		displayInfo = new DisplayInfo();
		topViewService = new AlwaysOnTopService();

		if (lockScreenView == null) {
			// default Lock Screen
			lockScreenView = new SCLSViewModel1(SCLSActivity.this);
		}
		topViewService.setLockScreenView(lockScreenView);
	}

	public static void setLockScreenViewModel(View lockScreenViewModel) {
		SCLSActivity.lockScreenView = lockScreenViewModel;
	}

	@Override
	public void onBackPressed() {
		// back key block.
	}

}
