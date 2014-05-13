package ac.seahorse.seahorselockscreen.lockscreen.view;

import java.util.ArrayList;

import ac.seahorse.seahorselockscreen.R;
import ac.seahorse.seahorselockscreen.lockscreen.data.LockScreenDataManager;
import ac.seahorse.seahorselockscreen.lockscreen.data.PatternCircle;
import ac.seahorse.seahorselockscreen.lockscreen.data.Word;
import ac.seahorse.seahorselockscreen.lockscreen.data.support.DisplayInfo;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

/***
 * Lock Screen Type 1 == Pattern Type
 * 
 * @author KKS
 * @category LockScreenView
 */
public class LockScreenType1 extends LockScreenView {
	private final int MAGNETIC_RANGE = 20;
	private final int PATTERN_CIRCLE_SIZE = 30;
	private final int WORD_TXT_SIZE = 30;
	private final int MEAN_TXT_SIZE = 25;

	private ArrayList<PatternCircle> pattern;
	private QuestionWord questionWord;
	private Bitmap bgBmp;
	private int screenWidth;
	private int screenHeight;
	private boolean bTouchStart;

	private Paint linePaint;
	private int lineMovX;
	private int lineMovY;
	private int red, green, blue;

	public LockScreenType1(Context context) {
		super(context);
		initRef();
	}

	public LockScreenType1(Context context, AttributeSet attrs) {
		super(context, attrs);
		initRef();
	}

	public LockScreenType1(Context context, AttributeSet attrs, int defStyle) {
		super(context, attrs, defStyle);
		initRef();
	}

	/***
	 * Reference initialization.
	 */
	private void initRef() {
		Context context = getContext();
		LockScreenDataManager dataMng = LockScreenDataManager
				.getInstance(context);

		/* 배경 이미지 생성 */
		int[] display = DisplayInfo.getDisplaySize(context);
		screenWidth = display[0];
		screenHeight = display[1];
		Bitmap bmp = BitmapFactory.decodeResource(getResources(),
				R.drawable.lockscreen_bg);
		bgBmp = Bitmap.createScaledBitmap(bmp, screenWidth, screenHeight, true);

		/* 단어 준비 */
		Paint wordPaint = new Paint();
		wordPaint.setColor(Color.BLUE);
		wordPaint.setTextSize(convetPx(context, WORD_TXT_SIZE));
		Word word = new Word(dataMng.getLockScreenWord()[0]);
		word.setPaint(wordPaint);

		/* 단어 뜻 보기 준비 & 문제 목록 준비 */
		Paint meanPaint = new Paint();
		meanPaint.setColor(Color.GREEN);
		meanPaint.setTextSize(convetPx(context, MEAN_TXT_SIZE));
		questionWord = new QuestionWord();
		questionWord.setString(word);
		ArrayList<String> answerTmpList = dataMng.getLockScreenAnswer();
		for (int idx = 0; idx < answerTmpList.size(); idx++) {
			Word mean = new Word(answerTmpList.get(idx));
			mean.setPaint(meanPaint);
			if (answerTmpList.get(idx).equalsIgnoreCase(
					dataMng.getLockScreenWord()[1])) {
				questionWord.addAnswer(mean, true);
			} else {
				questionWord.addAnswer(mean, false);
			}
		}

		/* 단어 위치 선정 */
		word.setX(convetPx(context, 15));
		word.setY(screenHeight / 2);

		/* 단어의 뜻 위치 선정 - 단어의 뜻은 최소 1개 이상이어야 함. */
		ArrayList<Word> answerList = questionWord.getAnswerList();
		Word tmpWord;
		int posX = (screenWidth / 2)
				+ (convetPx(context, PATTERN_CIRCLE_SIZE) * 3);
		int centerY = (screenHeight - DisplayInfo.getStatusBarHeight(context)) / 2;
		int gapY = screenHeight / (answerList.size() * 2);
		int startPosY = centerY - ((gapY * (answerList.size() - 1)) / 2);
		answerList.get(0).setX(posX);
		answerList.get(0).setY(startPosY);
		for (int idx = 1; idx < answerList.size(); idx++) {
			tmpWord = answerList.get(idx);
			tmpWord.setX(posX);
			tmpWord.setY(answerList.get(idx - 1).getY() + gapY);
		}

		/* 패턴 모양 형성 */
		pattern = new ArrayList<PatternCircle>();
		Paint circlePaint = new Paint();
		circlePaint.setColor(Color.BLUE);

		// 패턴 - 단어
		PatternCircle circle = new PatternCircle();
		circle.setCx(word.getX() + word.getWidth()
				+ convetPx(context, PATTERN_CIRCLE_SIZE));
		circle.setCy(word.getY() - (word.getHeight() / 2));
		circle.setRadious(convetPx(context, PATTERN_CIRCLE_SIZE));
		circle.setPaint(circlePaint);
		circle.setWord(word);
		pattern.add(circle);

		// 패턴 - 뜻
		for (int idx = 0; idx < answerList.size(); idx++) {
			Word ans = answerList.get(idx);
			circle = new PatternCircle();
			circle.setCx(ans.getX() - convetPx(context, PATTERN_CIRCLE_SIZE));
			circle.setCy(ans.getY() - (ans.getHeight() / 2));
			circle.setRadious(convetPx(context, PATTERN_CIRCLE_SIZE));
			circle.setPaint(circlePaint);
			circle.setWord(ans);
			pattern.add(circle);
		}

		// 패턴 - 라인 페인트
		linePaint = new Paint();
		linePaint.setStrokeWidth(convetPx(context, PATTERN_CIRCLE_SIZE));
		linePaint.setAlpha(0);
	}

	@Override
	protected void onDraw(Canvas canvas) {
		super.onDraw(canvas);
		canvas.drawBitmap(bgBmp, 0, 0, null);

		PatternCircle startCircle = pattern.get(0);
		canvas.drawLine(startCircle.getCx(), startCircle.getCy(), lineMovX,
				lineMovY, linePaint);

		Word word = questionWord.getString();
		canvas.drawText(word.getString(), word.getX(), word.getY(),
				word.getPaint());
		for (Word mean : questionWord.getAnswerList()) {
			canvas.drawText(mean.getString(), mean.getX(), mean.getY(),
					mean.getPaint());
		}

		for (PatternCircle circle : pattern) {
			canvas.drawCircle(circle.getCx(), circle.getCy(),
					circle.getRadious(), circle.getPaint());
		}
	}

	@Override
	public void onTouchDown(View v, MotionEvent event) {
		int x = (int) event.getX();
		int y = (int) event.getY();
		PatternCircle circle = pattern.get(0);
		Context context = getContext();
		int cx1 = circle.getCx() - convetPx(context, PATTERN_CIRCLE_SIZE);
		int cy1 = circle.getCy() - convetPx(context, PATTERN_CIRCLE_SIZE);
		int cx2 = circle.getCx() + convetPx(context, PATTERN_CIRCLE_SIZE);
		int cy2 = circle.getCy() + convetPx(context, PATTERN_CIRCLE_SIZE);
		if (isSamePosition(cx1, cy1, cx2, cy2, x, y)) {
			bTouchStart = true;
			linePaint.setAlpha(100);
		}
	}

	@Override
	public void onTouchMove(View v, MotionEvent event) {
		if (bTouchStart) {
			red += 22;
			green += 12;
			blue += 32;

			if (red > 255) {
				red = 122;
			}

			if (green > 255) {
				green = 95;
			}

			if (blue > 255) {
				blue = 100;
			}

			linePaint.setColor(Color.rgb(red, green, blue));
			lineMovX = (int) event.getX();
			lineMovY = (int) event.getY();

			for (PatternCircle circle : pattern) {
				int x = circle.getCx() - (int) circle.getRadious()
						- MAGNETIC_RANGE;
				int y = circle.getCy() - (int) circle.getRadious()
						- MAGNETIC_RANGE;
				int w = circle.getCx() + (int) circle.getRadious()
						+ MAGNETIC_RANGE;
				int h = circle.getCy() + (int) circle.getRadious()
						+ MAGNETIC_RANGE;
				if (isSamePosition(x, y, w, h, lineMovX, lineMovY)) {
					lineMovX = circle.getCx();
					lineMovY = circle.getCy();
					break;
				}
			}
			invalidate();
		}
	}

	@Override
	public void onTouchUp(View v, MotionEvent event) {
		if (bTouchStart) {
			bTouchStart = false;
			int x = (int) event.getX();
			int y = (int) event.getY();

			for (PatternCircle circle : pattern) {
				int cx1 = circle.getCx() - (int) circle.getRadious()
						- MAGNETIC_RANGE;
				int cy1 = circle.getCy() - (int) circle.getRadious()
						- MAGNETIC_RANGE;
				int cx2 = circle.getCx() + (int) circle.getRadious()
						+ MAGNETIC_RANGE;
				int cy2 = circle.getCy() + (int) circle.getRadious()
						+ MAGNETIC_RANGE;
				if (isSamePosition(cx1, cy1, cx2, cy2, x, y)
						&& questionWord.isCorrect(circle.getWord())) {
					removeThis();
					break;
				}
			}
		}

		linePaint.setAlpha(0);
		invalidate();
	}

	private boolean isSamePosition(int x1, int y1, int w1, int h1, int x2,
			int y2) {
		if (x2 >= x1 && y2 >= y1 && x2 <= w1 && y2 <= h1) {
			return true;
		}
		return false;
	}

	/**
	 * 480 기준으로 작성된 픽셀 값을 현재 기기의 해상도에 맞게 변환한다.
	 * 
	 * @param context
	 *            - context
	 * @param px
	 *            - 480 기준의 픽셀.
	 * @return - 현재 디바이스 해상도에 맞는 px의 변경된 값.
	 */
	private int convetPx(Context context, int px) {
		return DisplayInfo.convertPixelForDevice(context, px);
	}

}
