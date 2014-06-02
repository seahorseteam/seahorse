package ac.seahorse.seahorselockscreen.lockscreen.view;

import ac.seahorse.seahorselockscreen.R;
import ac.seahorse.seahorselockscreen.lockscreen.data.support.DisplayInfo;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

public class Type1ImageManager {
	private final int[] TIME_NUM = { R.drawable.time_0, R.drawable.time_1,
			R.drawable.time_2, R.drawable.time_3, R.drawable.time_4,
			R.drawable.time_5, R.drawable.time_6, R.drawable.time_7,
			R.drawable.time_8, R.drawable.time_9 };
	private final int[] TIME_AMPM = { R.drawable.time_am, R.drawable.time_pm };
	public final int[] PATTERN_CIRCLE_RES = { R.drawable.pattern_circle_base,
			R.drawable.pattern_circle_correct,
			R.drawable.pattern_circle_incorrect };

	public static final int TIME_AM = 0;
	public static final int TIME_PM = 1;
	public static final int TIMEPANEL_HOURS1 = 0;
	public static final int TIMEPANEL_HOURS2 = 1;
	public static final int TIMEPANEL_MID = 2;
	public static final int TIMEPANEL_MIN1 = 3;
	public static final int TIMEPANEL_MIN2 = 4;
	public static final int TIMEPANEL_AMPM = 5;
	public static final int CIRCLE_BASE = 0;
	public static final int CIRCLE_CORR = 1;
	public static final int CIRCLE_INCORR = 2;
	public static final int CONVERT_PX_SIZE480 = 480;
	public static final int CONVERT_PX_SIZE720 = 720;

	private Bitmap[] timeBmpArr;
	private Bitmap[] timePanel;
	private Bitmap[] timeAmPmBmpArr;
	private Bitmap[] circleBmp;
	private Bitmap unlockBtnBmp;
	private Bitmap bottomTitleBmp;

	/***
	 * 사용되는 모든 이미지들은 720 기준의 이미지이다. 다른 해상도에서도 동일한 비율을 유지하게 하기 위해 720 기준의 가로, 세로
	 * 픽셀 값을 가지고 연산을 한다.
	 */
	private final int IMG_WIDTH = 0;
	private final int IMG_HEIGHT = 1;
	private int[][] IMG_SIZE_NUMBER = {
	/* 0 */{ 82, 97 },
	/* 1 */{ 54, 97 },
	/* 2 */{ 82, 97 },
	/* 3 */{ 83, 97 },
	/* 4 */{ 83, 97 },
	/* 5 */{ 83, 97 },
	/* 6 */{ 82, 97 },
	/* 7 */{ 76, 97 },
	/* 8 */{ 82, 97 },
	/* 9 */{ 81, 97 } };
	private int[] IMG_SIZE_AMPM = { 61, 97 };
	private int[] IMG_SIZE_TIME_MID = { 74, 97 };
	private int[] IMG_SIZE_BOTTOM_TITLE = { 262, 42 };
	private int[] IMG_SIZE_UNLOCK_BTN = { 221, 98 };
	private int[] IMG_SIZE_PATTERN_CIRCLE = { 110, 110 };

	private int displaySize;

	private Context mContext;

	public Type1ImageManager(Context context, int baseSize) {
		mContext = context;
		displaySize = baseSize;
		convertAllPxData();
		createTimeBmpArr();
		createTimeAmPmBmpArr();
		createTimePanel();
		createUnlockBtnBmp();
		createBottomTitleBmp();
		createCircleBmp();
	}

	private void convertAllPxData() {
		for (int i = 0; i < IMG_SIZE_NUMBER.length; i++) {
			convertPxData(IMG_SIZE_NUMBER[i]);
		}
		convertPxData(IMG_SIZE_AMPM);
		convertPxData(IMG_SIZE_TIME_MID);
		convertPxData(IMG_SIZE_BOTTOM_TITLE);
		convertPxData(IMG_SIZE_UNLOCK_BTN);
		convertPxData(IMG_SIZE_PATTERN_CIRCLE);
	}

	private void convertPxData(int[] pxData) {
		for (int i = 0; i < pxData.length; i++) {
			pxData[i] = convertPx(pxData[i]);
		}
	}

	private void createUnlockBtnBmp() {
		// create //
		unlockBtnBmp = BitmapFactory.decodeResource(mContext.getResources(),
				R.drawable.unlockbtn);
		// resize //
		unlockBtnBmp = Bitmap.createScaledBitmap(unlockBtnBmp,
				IMG_SIZE_UNLOCK_BTN[IMG_WIDTH],
				IMG_SIZE_UNLOCK_BTN[IMG_HEIGHT], true);
	}

	private void createBottomTitleBmp() {
		// create //
		bottomTitleBmp = BitmapFactory.decodeResource(mContext.getResources(),
				R.drawable.bottom_title);
		// resize //
		bottomTitleBmp = Bitmap.createScaledBitmap(bottomTitleBmp,
				IMG_SIZE_BOTTOM_TITLE[IMG_WIDTH],
				IMG_SIZE_BOTTOM_TITLE[IMG_HEIGHT], true);
	}

	public void createTimeBmpArr() {
		timeBmpArr = new Bitmap[10];
		for (int i = 0; i < getTimeBmpArr().length; i++) {
			// create //
			Bitmap numBmp = BitmapFactory.decodeResource(
					mContext.getResources(), TIME_NUM[i]);
			// resize //
			timeBmpArr[i] = Bitmap.createScaledBitmap(numBmp,
					IMG_SIZE_NUMBER[i][IMG_WIDTH],
					IMG_SIZE_NUMBER[i][IMG_HEIGHT], true);
		}
	}

	public void createTimeAmPmBmpArr() {
		timeAmPmBmpArr = new Bitmap[2];
		// create //
		timeAmPmBmpArr[TIME_AM] = BitmapFactory.decodeResource(
				mContext.getResources(), TIME_AMPM[TIME_AM]);
		timeAmPmBmpArr[TIME_PM] = BitmapFactory.decodeResource(
				mContext.getResources(), TIME_AMPM[TIME_PM]);
		// resize //
		timeAmPmBmpArr[TIME_AM] = Bitmap.createScaledBitmap(
				timeAmPmBmpArr[TIME_AM], IMG_SIZE_AMPM[IMG_WIDTH],
				IMG_SIZE_AMPM[IMG_HEIGHT], true);
		timeAmPmBmpArr[TIME_PM] = Bitmap.createScaledBitmap(
				timeAmPmBmpArr[TIME_PM], IMG_SIZE_AMPM[IMG_WIDTH],
				IMG_SIZE_AMPM[IMG_HEIGHT], true);
	}

	public void createTimePanel() {
		timePanel = new Bitmap[6];
		// create //
		timePanel[TIMEPANEL_MID] = BitmapFactory.decodeResource(
				mContext.getResources(), R.drawable.time_mid);
		// resize //
		timePanel[TIMEPANEL_MID] = Bitmap.createScaledBitmap(
				timePanel[TIMEPANEL_MID], IMG_SIZE_TIME_MID[IMG_WIDTH],
				IMG_SIZE_TIME_MID[IMG_HEIGHT], true);
	}

	private void createCircleBmp() {
		circleBmp = new Bitmap[3];
		// create //
		circleBmp[CIRCLE_BASE] = BitmapFactory.decodeResource(
				mContext.getResources(), PATTERN_CIRCLE_RES[CIRCLE_BASE]);
		circleBmp[CIRCLE_CORR] = BitmapFactory.decodeResource(
				mContext.getResources(), PATTERN_CIRCLE_RES[CIRCLE_CORR]);
		circleBmp[CIRCLE_INCORR] = BitmapFactory.decodeResource(
				mContext.getResources(), PATTERN_CIRCLE_RES[CIRCLE_INCORR]);

		// resize //
		circleBmp[CIRCLE_BASE] = Bitmap.createScaledBitmap(
				circleBmp[CIRCLE_BASE], IMG_SIZE_PATTERN_CIRCLE[IMG_WIDTH],
				IMG_SIZE_PATTERN_CIRCLE[IMG_HEIGHT], true);
		circleBmp[CIRCLE_CORR] = Bitmap.createScaledBitmap(
				circleBmp[CIRCLE_CORR], IMG_SIZE_PATTERN_CIRCLE[IMG_WIDTH],
				IMG_SIZE_PATTERN_CIRCLE[IMG_HEIGHT], true);
		circleBmp[CIRCLE_INCORR] = Bitmap.createScaledBitmap(
				circleBmp[CIRCLE_INCORR], IMG_SIZE_PATTERN_CIRCLE[IMG_WIDTH],
				IMG_SIZE_PATTERN_CIRCLE[IMG_HEIGHT], true);
	}

	public int convertPx(int px) {
		return convertPx(px, displaySize);
	}

	public int convertPx(int px, int baseSize) {
		return DisplayInfo.convertPixelForDevice(mContext, px, baseSize);
	}

	public Bitmap[] getTimeBmpArr() {
		return timeBmpArr;
	}

	public void setTimeBmpArr(Bitmap[] timeBmpArr) {
		this.timeBmpArr = timeBmpArr;
	}

	public Bitmap[] getTimePanel() {
		return timePanel;
	}

	public void setTimePanel(Bitmap[] timePanel) {
		this.timePanel = timePanel;
	}

	public Bitmap[] getTimeAmPmBmpArr() {
		return timeAmPmBmpArr;
	}

	public void setTimeAmPmBmpArr(Bitmap[] timeAmPmBmpArr) {
		this.timeAmPmBmpArr = timeAmPmBmpArr;
	}

	public Bitmap getUnlockBtnBmp() {
		return unlockBtnBmp;
	}

	public void setUnlockBtnBmp(Bitmap unlockBtnBmp) {
		this.unlockBtnBmp = unlockBtnBmp;
	}

	public Bitmap getBottomTitleBmp() {
		return bottomTitleBmp;
	}

	public void setBottomTitleBmp(Bitmap bottomTitleBmp) {
		this.bottomTitleBmp = bottomTitleBmp;
	}

	public Bitmap[] getCircleBmp() {
		return circleBmp;
	}

	public void setCircleBmp(Bitmap[] circleBmp) {
		this.circleBmp = circleBmp;
	}
}