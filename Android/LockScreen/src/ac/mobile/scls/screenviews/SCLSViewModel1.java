package ac.mobile.scls.screenviews;

import java.util.ArrayList;

import ac.mobile.scls.R;
import ac.mobile.scls.screenviews.data.MeaningInfo;
import ac.mobile.scls.screenviews.data.WordInfo;
import ac.mobile.scls.service.AlwaysOnTopService;
import ac.mobile.scls.support.DisplayInfo;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Paint.Style;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;

public class SCLSViewModel1 extends SCLSViewModel implements OnTouchListener {
	private static final int TOUCHED_LEFT_RANGE = 50;
	private static final int TOUCHED_RIGHT_RANGE = 150;
	private static final int TOUCHED_HEIGHT_RANGE = 50;
	private static final int TEXT_SIZE = 30;

	private Paint linePaint;
	private int startX, startY, stopX, stopY;
	private boolean bStartLine;
	private boolean bSelected;
	private WordInfo wInfo;
	private Paint wordMovePaint;
	private MeaningInfo selectedMeaningInfo;
	private Paint meaningSelectedPaint;
	private Bitmap lockScreenBg;
	private Paint bmpPaint;

	private int testCodeNum;

	public SCLSViewModel1(Context context) {
		super(context);
		testCodeNum = (int) (Math.random() * 4);

		wordMovePaint = new Paint();
		wordMovePaint.setColor(Color.MAGENTA);
		wordMovePaint.setTextSize(50);

		meaningSelectedPaint = new Paint();
		meaningSelectedPaint.setColor(Color.argb(255, 140, 32, 255));
		meaningSelectedPaint.setTextSize(25);

		int[] display = DisplayInfo.getDisplaySize(context);
		arrangementWord(display[0], display[1]);

		bmpPaint = new Paint();
		bmpPaint.setAlpha(100);
		Bitmap bmp = BitmapFactory.decodeResource(getResources(),
				R.drawable.lockscreen_bg);
		lockScreenBg = Bitmap.createScaledBitmap(bmp, display[0], display[1],
				true);

		linePaint = new Paint();
		linePaint.setStrokeWidth(20);
		linePaint.setStyle(Style.FILL_AND_STROKE);

		this.setOnTouchListener(this);
	}

	// 추후 DB 추가되면 단어 읽어와서 아래에 세팅
	private void addWord(int wordPosX, int wordPosY) {
		getWordPaint().setTextSize(TEXT_SIZE);

		// test code
		switch (testCodeNum) {
		case 0:
			setWordInfo("Apple", wordPosX, wordPosY);
			break;

		case 1:
			setWordInfo("Applicant", wordPosX, wordPosY);
			break;

		case 2:
			setWordInfo("Applepolish", wordPosX, wordPosY);
			break;

		default:
			setWordInfo("Apple", wordPosX, wordPosY);
			break;
		}
	}

	// DB 추가되면 단어에 대한 정답/오답들 읽어와서 아래에 세팅
	private void addMeaning(int posX, int posY) {
		getMeaningPaint().setTextSize(TEXT_SIZE);
		// 뜻의 길이에 따라 동적인 처리를 하지 못하고 있음. 구조 문제. ㅠㅠ
		int textWordWidth = posX - 30
				- (int) getWordPaint().measureText(getWordInfo().word);

		// test code
		switch (testCodeNum) {
		case 0:
			addMeaning("사과", textWordWidth, 0, true);
			addMeaning("오렌지", textWordWidth, 0, false);
			addMeaning("레몬", textWordWidth, 0, false);
			addMeaning("오렌지", textWordWidth, 0, false);
			break;

		case 1:
			addMeaning("바나나", textWordWidth, 0, false);
			addMeaning("응모자", textWordWidth, 0, true);
			addMeaning("수험생", textWordWidth, 0, false);
			break;

		case 2:
			addMeaning("사과정책", textWordWidth, 0, false);
			addMeaning("경찰청에 가다", textWordWidth, 0, false);
			addMeaning("레몬즙을 먹다", textWordWidth, 0, false);
			// 뜻이 길 때 어떻게 처리할 것인가?
			// addMeaning("비위를 맞추다아아아아아아", textWordWidth, 0, true);
			addMeaning("비위를 맞추다", textWordWidth, 0, true);
			addMeaning("오렌지를 씹다", textWordWidth, 0, false);
			break;

		default:
			addMeaning("사과", textWordWidth, 0, true);
			addMeaning("오렌지", textWordWidth, 0, false);
			addMeaning("레몬", textWordWidth, 0, false);
			addMeaning("오렌지", textWordWidth, 0, false);
			break;
		}
	}

	private boolean checkingAnswer(int stopX, int stopY) {
		for (MeaningInfo info : getMeaningList()) {
			if (isSamePosition(info.x - TOUCHED_LEFT_RANGE, info.y
					- TOUCHED_LEFT_RANGE, info.width + TOUCHED_RIGHT_RANGE,
					info.height + TOUCHED_HEIGHT_RANGE, stopX, stopY)
					&& info.bCorrect) {
				return true;
			}
		}
		return false;
	}

	private boolean isSamePosition(int x1, int y1, int w1, int h1, int x2,
			int y2) {
		if (x2 >= x1 && y2 >= y1 && x2 <= (x1 + w1) && y2 <= (y1 + h1)) {
			return true;
		}
		return false;
	}

	private void arrangementWord(int width, int height) {
		int statusBarHeight = DisplayInfo.getStatusBarHeight(getContext());
		int heightCenter = height / 2;
		addWord(10, heightCenter);
		addMeaning(width, height);

		ArrayList<MeaningInfo> mList = getMeaningList();
		if (mList.size() == 0) {
			return;
		}

		int centerEleNum = mList.size() / 2;
		int gapY, posY;
		if (centerEleNum == 0) {
			gapY = 0;
			posY = heightCenter;
		} else {
			gapY = (heightCenter / centerEleNum)
					- (statusBarHeight / centerEleNum);
			posY = heightCenter;
		}

		gapY -= 150 - (mList.size() * 20);
		if (mList.size() % 2 == 1) {
			for (int i = centerEleNum; i >= 0; i--) {
				mList.get(i).y = posY;
				posY -= gapY;
			}

			posY = heightCenter + gapY;
			for (int i = centerEleNum + 1; i < mList.size(); i++) {
				mList.get(i).y = posY;
				posY += gapY;
			}
		} else {
			gapY = (height / mList.size()) - (statusBarHeight / mList.size());
			posY = gapY / 2;
			for (MeaningInfo info : getMeaningList()) {
				info.y = posY;
				posY += gapY;
			}
		}

	}

	@Override
	public boolean onTouch(View v, MotionEvent event) {
		switch (event.getAction()) {
		case MotionEvent.ACTION_DOWN:
			startX = stopX = (int) event.getX();
			startY = stopY = (int) event.getY();

			wInfo = getWordInfo();
			if (isSamePosition(wInfo.x, wInfo.y - TOUCHED_HEIGHT_RANGE,
					wInfo.width + TOUCHED_RIGHT_RANGE, wInfo.height
							+ TOUCHED_HEIGHT_RANGE, startX, startY)) {
				// 사용자가 드래그를 시작 할 떄 단어 부분을 터치한 경우
				startX = wInfo.x + wInfo.width / 2;
				startY = wInfo.y - wInfo.height / 2;
				bStartLine = true;
			} else {
				bStartLine = false;
			}
			break;

		case MotionEvent.ACTION_MOVE:
			stopX = (int) event.getX();
			stopY = (int) event.getY();

			for (MeaningInfo mInfo : getMeaningList()) {
				if (isSamePosition(mInfo.x - TOUCHED_LEFT_RANGE, mInfo.y
						- TOUCHED_HEIGHT_RANGE, mInfo.width
						+ TOUCHED_RIGHT_RANGE, mInfo.height
						+ TOUCHED_HEIGHT_RANGE, stopX, stopY)) {
					bSelected = true;
					stopX = mInfo.x + mInfo.width / 2;
					stopY = mInfo.y - mInfo.height / 2;
					selectedMeaningInfo = mInfo;
					break;
				} else {
					bSelected = false;
				}
			}

			break;

		case MotionEvent.ACTION_UP:
			if (checkingAnswer(stopX, stopY) && bStartLine) {
				getContext().stopService(
						new Intent(getContext(), AlwaysOnTopService.class));
			}
			stopX = stopY = startX = startY = -100;
			break;

		default:
			break;
		}

		invalidate();
		return true;
	}

	@Override
	protected void onDraw(Canvas canvas) {
		super.onDraw(canvas);

		canvas.drawBitmap(lockScreenBg, 0, 0, bmpPaint);

		if (bStartLine) {
			if (startX > 0 || startY > 0) {
				canvas.drawText(wInfo.word, stopX - (stopX / 2), stopY,
						wordMovePaint);
			}

			if (bSelected) {
				canvas.drawText("= " + selectedMeaningInfo.meaning + "?", stopX
						- (stopX / 2), stopY + 50, meaningSelectedPaint);
			}
		}
	}

}
