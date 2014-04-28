package in.wptrafficanalyzer.servicealarmdemo;

import com.example.bootservice.R;

import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.view.ViewGroup.LayoutParams;
import android.view.KeyEvent;
import android.view.WindowManager;
import android.widget.TextView;
import android.widget.Toast;

@SuppressLint("NewApi")
public class AutoPushDialog extends Dialog{
	Context context;
	public AutoPushDialog(final Context context) {
		super(context);
		this.context = context;
		setContentView(R.layout.autopush);
		this.show();
		//this.addContentView(new TextView(context), new LayoutParams(100, 100));
		// TODO Auto-generated constructor stub
		this.setOnDismissListener(new OnDismissListener() {
			
			@Override
			public void onDismiss(DialogInterface dialog) {
				// TODO Auto-generated method stub
				Toast.makeText(context, "onkeyDownzz", Toast.LENGTH_SHORT).show();;
			}
		});
	}
	
	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		// TODO Auto-generated method stub
		Toast.makeText(context, "onkeyDown", Toast.LENGTH_SHORT).show();;
		return super.onKeyDown(keyCode, event);
	}
}
