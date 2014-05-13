package ac.seahorse.ttsseahorse;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.speech.tts.TextToSpeech.Engine;
import android.view.View;
import android.widget.Toast;

public class TestActivity extends Activity {

	private SeaHorseTTS tts;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_test);
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
			tts.confirmTTSData(this);
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
	protected void onActivityResult(int requestCode, int resultCode, Intent data) {
		if (requestCode == SeaHorseTTS.TTS_DATA_CHECK) {
			if (resultCode != TextToSpeech.Engine.CHECK_VOICE_DATA_PASS) {
				AlertDialog.Builder dialog = new AlertDialog.Builder(this);
				dialog.setMessage("지원되지 않는 TTS 엔진 입니다. Google TTS 엔진을 권장합니다. (설정 후 어플리케이션을 다시 시작해주세요.)");
				dialog.setPositiveButton("확인", new Dialog.OnClickListener() {
					@Override
					public void onClick(DialogInterface dialog, int which) {
						Intent intent = new Intent();
						intent.setAction("com.android.settings.TTS_SETTINGS");
						intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
						TestActivity.this.startActivity(intent);
						dialog.dismiss();
					}
				});
				dialog.show();
			}
		} else {
			Intent installIntent = new Intent(Engine.ACTION_TTS_DATA_INSTALLED);
			startActivity(installIntent);
		}
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
		tts.close();
	}

}
