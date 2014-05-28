package ac.seahorse.seahorselockscreen.lockscreen.view;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.view.MotionEvent;
import android.view.View;

public class TestView extends LockScreenView {

	public TestView(Context context) {
		super(context);
	}

	@Override
	protected void onTouchDown(View v, MotionEvent event) {
	}

	@Override
	protected void onTouchMove(View v, MotionEvent event) {
	}

	@Override
	protected void onTouchUp(View v, MotionEvent event) {
		removeThis();
	}
	
	@Override
	protected void onDraw(Canvas canvas) {
		super.onDraw(canvas);
		Paint paint = new Paint();
		paint.setTextSize(55);
		paint.setColor(Color.MAGENTA);
		canvas.drawText("으아아아아아아아", 50, 100, paint);
	}

}
