package com.VoiceWord;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class TestActivity extends Activity {

	private SeaHorseTTS tts;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//setContentView(R.layout.activity_test);
		tts = new SeaHorseTTS(this);
	}

	public void speechWord(View v) {
		tts.setPitch(10);
		tts.setSpeechRatio(10);

		String msg = null;
		switch (tts.speech("I don't know.")) {
		case SeaHorseTTS.TTS_INIT_FAIL:
			msg = "TTS_INIT_FAIL";
			break;

		case SeaHorseTTS.TTS_NOT_SUPPORT:
			msg = "TTS_NOT_SUPPORT";
			break;

		case SeaHorseTTS.TTS_EMPTY_WORD:
			msg = "TTS_EMPTY_WORD";
			break;

		case SeaHorseTTS.TTS_SPEECH_SUCCESS:
			msg = "TTS_SPEECH_SUCCESS";
			break;

		case SeaHorseTTS.TTS_SPEECH_ERROR:
			msg = "TTS_SPEECH_ERROR";
			break;

		default:
			break;
		}

		if (msg != null) {
			Toast.makeText(this, msg, Toast.LENGTH_SHORT).show();
		}
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
		tts.close();
	}

}
