package com.example.bootservice;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;
import android.widget.Toast;

public class service extends Service {
	private static final String TAG = "MyService";

	@Override
	public IBinder onBind(Intent intent) {
		return null;
	}

	public void onDestroy() {
		Toast.makeText(this, "My Service Stopped", Toast.LENGTH_LONG).show();
		Log.d(TAG, "onDestroy");
	}

	@Override
	public void onStart(Intent intent, int startid) {
		// Intent intents = new Intent(getBaseContext(),hello.class);
		// intents.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		// startActivity(intents);
		Intent i = new Intent(getBaseContext(),TestActivity.class);
		i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		getApplication().startActivity(i);
		Toast.makeText(this, "My Service SERVICE", Toast.LENGTH_LONG).show();
		Log.d(TAG, "onStart");
	}
}