package ac.seahorse.seahorselockscreen.lockscreen.view;

import java.util.ArrayList;
import java.util.Date;

import ac.seahorse.seahorselockscreen.R;
import ac.seahorse.seahorselockscreen.lockscreen.data.LockScreenDataManager;
import ac.seahorse.seahorselockscreen.lockscreen.data.PatternCircle;
import ac.seahorse.seahorselockscreen.lockscreen.data.Word;
import ac.seahorse.seahorselockscreen.lockscreen.data.support.DisplayInfo;
import ac.seahorse.seahorselockscreen.lockscreen.data.support.MyDBG;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Toast;

/***
 * Lock Screen Type 1 == Pattern Type
 * 
 * @author KKS
 * @category LockScreenView
 */
public class LockScreenType1 extends LockScreenView {
	private int screenWidth;
	private int screenHeight;

	private static final String TEXT_TYPE = "Helvetica";
	private static final int TYPE_FACE_NORMAL = Typeface.NORMAL;
	private static final int TYPE_FACE_BOLD = Typeface.BOLD;
	private Typeface dateTypeface;
	private Typeface wordTypeface;
	private Typeface meanTypeface;

	private Bitmap unlockBtnBmp;
	private Bitmap bottomTitleBmp;
	private int bottomTitlePosX;
	private int bottomTitlePosY;
	private int unlockBtnPosX;
	private int unlockBtnPosY;

	private static final int TXT_ALL_POSY = 40;
	private static final int PADDING_SIDE = 45;
	private static final int MEAN_CIRCLE_DISTANCE = 10;
	private static final int MEANTXT_SLICE_LIMIT = 9;
	private final int MAGNETIC_RANGE = 40;
	private final int PATTERN_CIRCLE_SIZE = 75;
	private final int WORD_TXT_SIZE = 25;
	private final int MEAN_TXT_SIZE = 20;
	private ArrayList<PatternCircle> pattern;
	private QuestionWord questionWord;
	private Paint bgPaint;
	private Paint linePaint;
	private int circleMidX;
	private int circleMidY;
	private int lineMovX;
	private int lineMovY;
	private int radMid;
	private boolean bTouchStart;
	private boolean bTouchExit;

	private final int[] TIME_NUM = { R.drawable.time_0, R.drawable.time_1,
			R.drawable.time_2, R.drawable.time_3, R.drawable.time_4,
			R.drawable.time_5, R.drawable.time_6, R.drawable.time_7,
			R.drawable.time_8, R.drawable.time_9 };
	private final int[] TIME_AMPM = { R.drawable.time_am, R.drawable.time_pm };
	private final int TIME_AM = 0;
	private final int TIME_PM = 1;
	private final int TIMEPANEL_HOURS1 = 0;
	private final int TIMEPANEL_HOURS2 = 1;
	private final int TIMEPANEL_MID = 2;
	private final int TIMEPANEL_MIN1 = 3;
	private final int TIMEPANEL_MIN2 = 4;
	private final int TIMEPANEL_AMPM = 5;
	private int datePosX;
	private int datePosY;
	// [am] [1] [2] [:] [2] [4] -> x = 6, y = 6
	private Bitmap[] timeBmpArr;
	private Bitmap[] timePanel;
	private int[] timePosX = { 0, 0, 0, 0, 0, 0 };
	private int[] timePosY = { 0, 0, 0, 0, 0, 0 };
	private Paint datePaint;
	private String date = "INIT";
	private String[] week = { "일", "월", "화", "수", "목", "금", "토" };

	private final int CONVERT_PX_SIZE480 = 480;
	private final int CONVERT_PX_SIZE720 = 720;

	private int selcMeanToastIdx;
	private boolean bTouchEnable;
	private int selcPatternIdx;

	private Runnable nextTimeRunnable = new Runnable() {
		@Override
		public void run() {
			try {
				long nextTime = (60 - new Date().getSeconds()) * 1000;
				Thread.sleep(nextTime);
				post(new Runnable() {
					@Override
					public void run() {
						invalidate();
					}
				});
			} catch (InterruptedException e) {
			}
		}
	};

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
		int cvtCircleSize = convertPx(context, PATTERN_CIRCLE_SIZE,
				CONVERT_PX_SIZE480);
		int cvtPaddingSize = convertPx(context, PADDING_SIDE,
				CONVERT_PX_SIZE480);
		int cvtCircleDistance = convertPx(context, MEAN_CIRCLE_DISTANCE,
				CONVERT_PX_SIZE480);
		bTouchEnable = true;

		/* 배경 이미지 생성 */
		int[] display = DisplayInfo.getDisplaySize(context);
		screenWidth = display[0];
		screenHeight = display[1];
		bgPaint = new Paint();
		bgPaint.setColor(Color.rgb(88, 113, 143));

		// 잠금화면 바로 해제하기 버튼
		unlockBtnBmp = BitmapFactory.decodeResource(getResources(),
				R.drawable.unlockbtn);
		int unlockBtnH = unlockBtnBmp.getHeight();
		int unlockBtnW = unlockBtnBmp.getWidth();

		// 로고 이미지 - 720 기준
		bottomTitleBmp = BitmapFactory.decodeResource(getResources(),
				R.drawable.bottom_title);
		int bottomTitleH = bottomTitleBmp.getHeight();
		int bottomTitleW = bottomTitleBmp.getWidth();

		// 해상도에 맞게 px값 변경, 위치 선정
		bottomTitlePosX = (screenWidth / 2) - (bottomTitleW / 2);
		bottomTitlePosY = screenHeight
				- DisplayInfo.getStatusBarHeight(context) - (bottomTitleH * 2);
		bottomTitleBmp = Bitmap.createScaledBitmap(bottomTitleBmp,
				bottomTitleW, bottomTitleH, true);

		unlockBtnPosX = (screenWidth / 2) - (unlockBtnW / 2);
		unlockBtnPosY = bottomTitlePosY - unlockBtnH - 15;
		unlockBtnBmp = Bitmap.createScaledBitmap(unlockBtnBmp, unlockBtnW,
				unlockBtnH, true);

		/* 단어 준비 */
		Paint wordPaint = new Paint();
		wordTypeface = Typeface.create(TEXT_TYPE, TYPE_FACE_BOLD);
		wordPaint.setTypeface(wordTypeface);
		wordPaint.setColor(Color.WHITE);
		wordPaint.setTextSize(convertPx(context, WORD_TXT_SIZE,
				CONVERT_PX_SIZE480));
		Word word = new Word(dataMng.getLockScreenWord()[0]);
		word.setPaint(wordPaint);

		/* 단어 뜻 보기 준비 & 문제 목록 준비 */
		Paint meanPaint = new Paint();
		meanTypeface = Typeface.create(TEXT_TYPE, TYPE_FACE_NORMAL);
		meanPaint.setTypeface(meanTypeface);
		meanPaint.setColor(Color.WHITE);
		meanPaint.setTextSize(convertPx(context, MEAN_TXT_SIZE,
				CONVERT_PX_SIZE480));
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
		int cvtTxtAllPosY = convertPx(context, TXT_ALL_POSY, CONVERT_PX_SIZE720);
		int centerY = (screenHeight / 2)
				+ convertPx(context, cvtTxtAllPosY, CONVERT_PX_SIZE720);
		word.setX(cvtPaddingSize);
		word.setY(centerY);

		/* 단어 뜻 중 제일 긴 단어 찾기. 단어 뜻 정렬의 기준이 됨. (가운데 정렬) */
		int baseWidth = 0;
		for (Word mean : questionWord.getAnswerList()) {
			if (mean.getWidth() > baseWidth) {
				baseWidth = mean.getWidth();
			}
		}

		/* 단어의 뜻 위치 선정 - 단어의 뜻은 최소 1개 이상이어야 함. */
		ArrayList<Word> answerList = questionWord.getAnswerList();
		Word tmpWord;
		int posX;
		int tmpGap = (answerList.size() * 2);
		int gapY = (screenHeight / tmpGap) + (cvtCircleSize / tmpGap)
				- cvtCircleDistance;
		int startPosY = centerY - ((gapY * (answerList.size() - 1)) / 2);
		for (int idx = 0; idx < answerList.size(); idx++) {
			tmpWord = answerList.get(idx);
			posX = screenWidth - baseWidth
					+ ((baseWidth - tmpWord.getWidth()) / 2) - cvtPaddingSize;
			tmpWord = answerList.get(idx);
			tmpWord.setX(posX);
			if (idx == 0) { // base line
				tmpWord.setY(startPosY);
			} else {
				tmpWord.setY(answerList.get(idx - 1).getY() + gapY);
			}
		}

		/* 패턴 모양 형성 */
		pattern = new ArrayList<PatternCircle>();
		Bitmap baseCircleImg = BitmapFactory.decodeResource(getResources(),
				PatternCircle.PATTERN_CIRCLE_RES[PatternCircle.CIRCLE_BASE]);
		Bitmap corrCircleImg = BitmapFactory.decodeResource(getResources(),
				PatternCircle.PATTERN_CIRCLE_RES[PatternCircle.CIRCLE_CORR]);
		Bitmap incorrCircleImg = BitmapFactory.decodeResource(getResources(),
				PatternCircle.PATTERN_CIRCLE_RES[PatternCircle.CIRCLE_INCORR]);

		int circleW = baseCircleImg.getWidth();
		int circleH = baseCircleImg.getHeight();

		// 패턴 - 단어
		PatternCircle circle = new PatternCircle();
		int wordX = word.getX();
		int wordY = word.getY();
		int wordW = word.getWidth();
		int wordH = word.getHeight();
		circle.setCx(wordX + (wordW / 2) - (circleW / 2));
		circle.setCy(wordY - wordH - circleH);
		circle.setBaseCircleBmp(baseCircleImg);
		circle.setCorrectBmp(corrCircleImg);
		circle.setIncorrectBmp(incorrCircleImg);
		circle.setRadious(circleW);
		circle.setWord(word);
		pattern.add(circle);

		// 패턴 - 뜻
		int txtDist = convertPx(context, WORD_TXT_SIZE - MEAN_TXT_SIZE,
				CONVERT_PX_SIZE480);
		for (int idx = 0; idx < answerList.size(); idx++) {
			Word ans = answerList.get(idx);
			circle = new PatternCircle();
			wordX = ans.getX();
			wordY = ans.getY();
			wordW = ans.getWidth();
			wordH = ans.getHeight();
			circle.setCx(wordX + (wordW / 2) - (circleW / 2));
			circle.setCy(wordY - wordH - circleH - txtDist);
			circle.setBaseCircleBmp(baseCircleImg);
			circle.setCorrectBmp(corrCircleImg);
			circle.setIncorrectBmp(incorrCircleImg);
			circle.setRadious(circleW);
			circle.setWord(ans);
			pattern.add(circle);
		}

		PatternCircle startCircle = pattern.get(0);
		radMid = (int) (startCircle.getRadious() / 2);
		lineMovX = circleMidX = startCircle.getCx() + radMid;
		lineMovY = circleMidY = startCircle.getCy() + radMid;

		// 패턴 - 라인 페인트
		linePaint = new Paint();
		linePaint.setStrokeWidth(cvtCircleSize / 7);
		linePaint.setAlpha(0);
		// linePaint.setColor(Color.rgb(255, 255, 255));

		// 시계 세팅
		initWatch();
	}

	private void initWatch() {
		datePaint = new Paint();
		dateTypeface = Typeface.create(TEXT_TYPE, TYPE_FACE_NORMAL);
		datePaint.setTypeface(dateTypeface);
		datePaint.setColor(Color.rgb(201, 209, 214));
		datePaint.setTextSize(convertPx(getContext(), 20, CONVERT_PX_SIZE480));
		datePosY = convertPx(getContext(), PADDING_SIDE / 4, CONVERT_PX_SIZE480)
				+ DisplayInfo.getStatusBarHeight(getContext());
		timeBmpArr = new Bitmap[10];
		for (int i = 0; i < timeBmpArr.length; i++) {
			timeBmpArr[i] = BitmapFactory.decodeResource(getResources(),
					TIME_NUM[i]);
		}
		timePanel = new Bitmap[6];
		timePanel[TIMEPANEL_AMPM] = BitmapFactory.decodeResource(
				getResources(), TIME_AMPM[TIME_AM]);
		timePanel[TIMEPANEL_MID] = BitmapFactory.decodeResource(getResources(),
				R.drawable.time_mid);
	}

	private void refreshWatch() {
		Date dateObj = new Date();
		String year = (dateObj.getYear() + 1900) + "년";
		String month = (dateObj.getMonth() + 1) + "월";
		String day = dateObj.getDate() + "일";
		String weekDay = week[dateObj.getDay()] + "요일";
		String dateChain = year + " " + month + " " + day + " " + weekDay;
		if (date.equals(dateChain) == false) {
			date = dateChain;
			int dateW = (int) datePaint.measureText(date);
			datePosX = (screenWidth / 2) - (dateW / 2);
			for (int i = 0; i < timePosY.length; i++) {
				timePosY[i] = (int) (datePosY + datePaint.getTextSize());
			}
		}

		if (timePanel[TIMEPANEL_AMPM] != null) {
			timePanel[TIMEPANEL_AMPM].recycle();
		}
		int hours = dateObj.getHours();
		int minutes = dateObj.getMinutes();
		if (hours < 12) {
			timePanel[TIMEPANEL_AMPM] = BitmapFactory.decodeResource(
					getResources(), TIME_AMPM[TIME_AM]);
		} else {
			hours -= 12;
			timePanel[TIMEPANEL_AMPM] = BitmapFactory.decodeResource(
					getResources(), TIME_AMPM[TIME_PM]);
		}

		if (hours == 0) {
			// if hours == 0 then am 00:00 or pm 12:00.
			hours = 12;
		}

		timePanel[TIMEPANEL_HOURS1] = timeBmpArr[hours / 10];
		timePanel[TIMEPANEL_HOURS2] = timeBmpArr[hours % 10];
		timePanel[TIMEPANEL_MIN1] = timeBmpArr[minutes / 10];
		timePanel[TIMEPANEL_MIN2] = timeBmpArr[minutes % 10];

		int timePanelSize = 0;
		for (int i = 0; i < timePanel.length; i++) {
			timePanelSize += timePanel[i].getWidth();
		}

		timePosX[0] = (screenWidth / 2) - (timePanelSize / 2);
		for (int i = 1; i < timePanel.length; i++) {
			timePosX[i] = timePosX[i - 1] + timePanel[i - 1].getWidth();
		}

		new Thread(nextTimeRunnable).start();
	}

	@Override
	protected void onDraw(Canvas canvas) {
		super.onDraw(canvas);
		// 시계 세팅
		refreshWatch();
		// 배경색 칠하기
		canvas.drawRect(0, 0, screenWidth, screenHeight, bgPaint);
		// 로고 그리기
		canvas.drawBitmap(bottomTitleBmp, bottomTitlePosX, bottomTitlePosY,
				null);
		// 잠금화면 바로 해제 버튼
		canvas.drawBitmap(unlockBtnBmp, unlockBtnPosX, unlockBtnPosY, null);
		// 패턴-선 그리기
		canvas.drawLine(circleMidX, circleMidY, lineMovX, lineMovY, linePaint);
		// 시계 그리기
		canvas.drawText(date, datePosX, datePosY, datePaint);
		for (int i = 0; i < timePosX.length; i++) {
			Bitmap bmp = timePanel[i];
			canvas.drawBitmap(bmp, timePosX[i], timePosY[i], null);
		}

		// 단어, 질문 그리기
		Word word = questionWord.getString();
		canvas.drawText(word.getString(), word.getX(), word.getY(),
				word.getPaint());
		for (Word mean : questionWord.getAnswerList()) {
			String meanTmp = stringSlice(mean.getString());
			canvas.drawText(meanTmp, mean.getX(), mean.getY(), mean.getPaint());
		}
		// 패턴-원 그리기
		for (int i = 0; i < pattern.size(); i++) {
			PatternCircle circle = pattern.get(i);
			canvas.drawBitmap(circle.getBaseCircleBmp(), circle.getCx(),
					circle.getCy(), null);
		}

		// 패턴 - 정답 맞춘 뒤 이미지 변경.
		if (bTouchEnable == false) {
			PatternCircle wordCircle = pattern.get(0);
			PatternCircle meanCircle = pattern.get(selcPatternIdx);
			if (questionWord.isCorrect(meanCircle.getWord())) {
				canvas.drawBitmap(wordCircle.getCorrectBmp(),
						wordCircle.getCx(), wordCircle.getCy(), null);
				canvas.drawBitmap(meanCircle.getCorrectBmp(),
						meanCircle.getCx(), meanCircle.getCy(), null);
			} else {
				canvas.drawBitmap(wordCircle.getIncorrectBmp(),
						wordCircle.getCx(), wordCircle.getCy(), null);
				canvas.drawBitmap(meanCircle.getIncorrectBmp(),
						meanCircle.getCx(), meanCircle.getCy(), null);
			}
		}
	}

	@Override
	public void onTouchDown(View v, MotionEvent event) {
		int x = (int) event.getX();
		int y = (int) event.getY();

		if (isTouchExit(x, y)) {
			bTouchExit = true;
		}

		if (bTouchEnable) {
			PatternCircle circle = pattern.get(0);
			int cx1 = circle.getCx() - MAGNETIC_RANGE;
			int cy1 = circle.getCy() - MAGNETIC_RANGE;
			int cx2 = circle.getCx() + (int) circle.getRadious()
					+ MAGNETIC_RANGE;
			int cy2 = circle.getCy() + (int) circle.getRadious()
					+ MAGNETIC_RANGE;
			if (isSamePosition(cx1, cy1, cx2, cy2, x, y)) {
				bTouchStart = true;
				linePaint.setAlpha(100);
			}
		}
	}

	@Override
	public void onTouchMove(View v, MotionEvent event) {
		if (bTouchStart && bTouchEnable) {
			linePaint.setColor(Color.WHITE);
			lineMovX = (int) event.getX();
			lineMovY = (int) event.getY();
			for (int i = 1; i < pattern.size(); i++) {
				PatternCircle circle = pattern.get(i); // Index 0 is word.
				int x = circle.getCx() - MAGNETIC_RANGE;
				int y = circle.getCy() - MAGNETIC_RANGE;
				int w = circle.getCx() + (int) circle.getRadious()
						+ MAGNETIC_RANGE;
				int h = circle.getCy() + (int) circle.getRadious()
						+ MAGNETIC_RANGE;
				if (isSamePosition(x, y, w, h, lineMovX, lineMovY)) {
					lineMovX = circle.getCx() + radMid;
					lineMovY = circle.getCy() + radMid;
					if (selcMeanToastIdx != i) {
						Toast.makeText(getContext(),
								circle.getWord().getString(),
								Toast.LENGTH_SHORT).show();
						selcMeanToastIdx = i;
					}
					break;
				}
			}
			invalidate();
		}
	}

	@Override
	public void onTouchUp(View v, MotionEvent event) {
		int x = (int) event.getX();
		int y = (int) event.getY();
		if (bTouchStart) {
			bTouchStart = false;
			for (int i = 1; i < pattern.size(); i++) {
				PatternCircle circle = pattern.get(i); // Index 0 is word.
				int cx1 = circle.getCx() - MAGNETIC_RANGE;
				int cy1 = circle.getCy() - MAGNETIC_RANGE;
				int cx2 = circle.getCx() + (int) circle.getRadious()
						+ MAGNETIC_RANGE;
				int cy2 = circle.getCy() + (int) circle.getRadious()
						+ MAGNETIC_RANGE;
				if (isSamePosition(cx1, cy1, cx2, cy2, x, y)) {
					bTouchEnable = false;
					selcPatternIdx = i;
					if (questionWord.isCorrect(circle.getWord())) { // correct
						linePaint.setColor(Color.rgb(23, 227, 196));
						new Thread() {
							public void run() {
								try {
									Thread.sleep(1000);
								} catch (InterruptedException e) {
								} finally {
									bTouchEnable = true;
									linePaint.setColor(Color.WHITE);
									linePaint.setAlpha(0);
									postInvalidate();
									removeThis();
								}
							};
						}.start();
					} else { // incorrect
						linePaint.setColor(Color.rgb(247, 169, 52));
						new Thread() {
							public void run() {
								try {
									Thread.sleep(1000);
									bTouchEnable = true;
									linePaint.setColor(Color.WHITE);
									linePaint.setAlpha(0);
									postInvalidate();
								} catch (InterruptedException e) {
								}
							};
						}.start();
					}
					break;
				} else {
					selcPatternIdx = 0;
					linePaint.setAlpha(0);
				}
			}
		} else if (bTouchExit) {
			if (isTouchExit(x, y)) {
				bTouchExit = false;
				removeThis();
			}
		}
		invalidate();
	}

	private boolean isSamePosition(int x1, int y1, int w1, int h1, int x2,
			int y2) {
		if (x2 >= x1 && y2 >= y1 && x2 <= w1 && y2 <= h1) {
			return true;
		}
		return false;
	}

	private boolean isTouchExit(int x, int y) {
		int w = unlockBtnBmp.getWidth();
		int h = unlockBtnBmp.getHeight();
		if (isSamePosition(unlockBtnPosX, unlockBtnPosY, unlockBtnPosX + w,
				unlockBtnPosY + h, x, y)) {
			return true;
		}
		return false;
	}

	private String stringSlice(String answer) {
		if (answer.length() > MEANTXT_SLICE_LIMIT) {
			answer = answer.substring(0, MEANTXT_SLICE_LIMIT);
			answer = answer.concat("...");
		}
		return answer;
	}

	private int convertPx(Context context, int px, int baseSize) {
		return DisplayInfo.convertPixelForDevice(context, px, baseSize);
	}

}