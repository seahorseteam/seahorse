package ac.seahorse.seahorselockscreen.lockscreen;

import java.util.ArrayList;

import ac.seahorse.seahorselockscreen.R;
import ac.seahorse.seahorselockscreen.lockscreen.data.LockScreenDataManager;
import ac.seahorse.seahorselockscreen.lockscreen.receiver.BroadcastReceiverObserver;
import ac.seahorse.seahorselockscreen.lockscreen.receiver.CallingReceiver;
import ac.seahorse.seahorselockscreen.lockscreen.receiver.ScreenOffReceiver;
import ac.seahorse.seahorselockscreen.lockscreen.view.LockScreenType1;
import ac.seahorse.seahorselockscreen.lockscreen.view.LockScreenView;
import android.app.AlarmManager;
import android.app.Notification;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.IBinder;
import android.os.SystemClock;
import android.support.v4.app.NotificationCompat;

/**
 * 잠금화면 서비스를 준비하고 시작하는 서비스. 클라이언트 소스이다. 기기를 재부팅 하면 등록이 해제되기 때문에 Boot Service에서
 * 등록을 해주어야 한다.
 * 
 * @author KKS
 * @category LockScreenService
 */
public class LockScreenService extends Service {
	private static LockScreenView view;
	private ArrayList<BroadcastReceiverObserver> receiverList;
	private LockScreenDataManager dataMng;

	@Override
	public void onCreate() {
		super.onCreate();
		registLockScreen();
		initReceiverList();
		observeReceiver(new Intent());
	}

	@Override
	public IBinder onBind(Intent intent) {
		return null;
	}

	/****
	 * 리시버 재등록 : 메모리가 부족해서 서비스가 종료될 때 리시버가 모두 해제된다. OS에 의해 호출되며, 생각보다 호출되는 빈도수가
	 * 잦은데, 서비스가 지속적으로 실행 중인 경우에는 OS가 그 서비스를 죽이지 않지만 그렇지 않은 경우 서비스를 죽이고, 필요할 때,
	 * 여유가 있을 때에 다시 살리기 때문인 듯하다.
	 */
	@Override
	public int onStartCommand(Intent intent, int flags, int startId) {
		super.onStartCommand(intent, flags, startId);
		Notification noti = new NotificationCompat.Builder(
				getApplicationContext())
				.setContentTitle(dataMng.getNotificationWord())
				.setContentText(dataMng.getNotificationMean())
				.setSmallIcon(R.drawable.ic_launcher).build();
		startForeground(1, noti);
		observeReceiver(intent);

		/* START_STICKY : intent = null, service restart = true */
		/* START_NOT_STICKY : intent = null, service restart = false */
		/* REDELIVER_INTENT : intent = previous intent, service restart = true */
		return START_STICKY;
	}

	@Override
	public void onDestroy() {
		super.onDestroy();
		for (BroadcastReceiverObserver observer : receiverList) {
			unregisterReceiver(observer);
		}
		stopForeground(true);
	}

	/***
	 * 프로세스 강제 종료시에 서비스가 중단되는 버그가 있다고 한다. 프로세스가 제거될 때 재등록을 해주도록 한다.
	 * {http://stackoverflow
	 * .com/questions/20592366/the-process-of-the-service-is
	 * -killed-after-the-application-is-removed-from-the-a}
	 */
	@Override
	public void onTaskRemoved(Intent rootIntent) {
		Intent restartServiceIntent = new Intent(getApplicationContext(),
				this.getClass());
		restartServiceIntent.setPackage(getPackageName());
		PendingIntent restartServicePendingIntent = PendingIntent.getService(
				getApplicationContext(), 1, restartServiceIntent,
				PendingIntent.FLAG_ONE_SHOT);
		AlarmManager alarmService = (AlarmManager) getApplicationContext()
				.getSystemService(Context.ALARM_SERVICE);
		alarmService.set(AlarmManager.ELAPSED_REALTIME,
				SystemClock.elapsedRealtime() + 1000,
				restartServicePendingIntent);
		super.onTaskRemoved(rootIntent);
	}

	/*
	 * 서비스는 class 파일로 시작되기 떄문에 로드 할 때 그 내용이 있어야 한다. 한 번 수행할 때는 문제 없지만, os 또는
	 * launcher에 의해 강제 종료될 때가 문제가 된다. 이 부분에 의해 이 서비스는 클라이언트 소스가 된다.
	 */
	private void registLockScreen() {
		/* 잠금 화면 등록 */
		dataMng = LockScreenDataManager.getInstance(getApplicationContext());
		if (view == null) {
			if (dataMng.getLockScreenType().contains("LockScreenType1")) {
				view = new LockScreenType1(getApplicationContext());
			} else {
				// view = new TestView(getApplicationContext());
			}
		}
	}

	private void initReceiverList() {
		/* 리시버 목록 생성 */
		receiverList = new ArrayList<BroadcastReceiverObserver>();
		receiverList.add(new CallingReceiver());
		receiverList.add(new ScreenOffReceiver());
	}

	private void observeReceiver(Intent intent) {
		/* 리시버 등록 */
		for (BroadcastReceiverObserver observer : receiverList) {
			observer.update(getApplicationContext(), intent, view);
			registerReceiver(observer, observer.getIntentFilter());
		}
	}

}