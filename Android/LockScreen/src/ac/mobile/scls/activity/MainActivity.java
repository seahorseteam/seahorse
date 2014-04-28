package ac.mobile.scls.activity;

import ac.mobile.scls.R;
import ac.mobile.scls.screenviews.SCLSViewModel1;
import ac.mobile.scls.service.LockScreenReceiver;
import ac.mobile.scls.service.LockScreenStartService;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Window;

/**
 * 이 프로젝트의 시작점. 프로젝트 통합 때 여기가 앱 실행 부분이 된다. 락 스크린 서비스만 켜주면 됨.
 * 
 * @author KKS
 * 
 */
public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		// 어플리케이션에서 아래 문장을 통해 잠금 화면 모양 변경 가능. 미설정시 기본 화면으로 잡힘.
		SCLSActivity.setLockScreenViewModel(new SCLSViewModel1(this));

		// 어플리케이션에서 아래 문장을 한 번만 수행해주면 됨.
		LockScreenStartService lsService = new LockScreenStartService();
		lsService
				.setBroadcastRecever(new LockScreenReceiver(SCLSActivity.class));
		startService(new Intent(this, lsService.getClass()));
	}

}
