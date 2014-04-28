package ac.mobile.scls.screenviews;

import java.util.ArrayList;

import ac.mobile.scls.screenviews.data.MeaningInfo;
import ac.mobile.scls.screenviews.data.WordInfo;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.view.View;

public class SCLSViewModel extends View {
	private WordInfo wordInfo;
	private ArrayList<MeaningInfo> meaningList;
	private Paint wordPaint;
	private Paint meaningPaint;
	private Paint bgPaint;

	public SCLSViewModel(Context context) {
		super(context);
		initReference();
	}

	private void initReference() {
		wordInfo = null;
		meaningList = new ArrayList<MeaningInfo>();
		wordPaint = new Paint();
		meaningPaint = new Paint();

		bgPaint = new Paint();
		bgPaint.setColor(Color.WHITE);
	}

	public void setWordInfo(String word, int x, int y) {
		wordInfo = new WordInfo(word, x, y, wordPaint);
	}

	public WordInfo getWordInfo() {
		return wordInfo;
	}

	/***
	 * @param meaning
	 *            - 뜻
	 * @param x
	 *            - 출력될 위치 x
	 * @param y
	 *            - 출력될 위치 y
	 * @param paint
	 *            - 이 글자를 표현할 Paint 정보. null이면 기본 paint를 사용.
	 * @param bCorrectMean
	 *            - 단어에 옳은 뜻이면 true, 아니면 false.
	 */
	public void addMeaning(String meaning, int x, int y, Paint paint,
			boolean bCorrectMean) {
		if (meaning != null) {
			if (paint == null) {
				paint = meaningPaint;
			}
			meaningList
					.add(new MeaningInfo(meaning, x, y, paint, bCorrectMean));
		}
	}

	/***
	 * @param meaning
	 *            - 뜻
	 * @param x
	 *            - 출력될 위치 x
	 * @param y
	 *            - 출력될 위치 y
	 * @param bCorrectMean
	 *            - 단어에 옳은 뜻이면 true, 아니면 false.
	 */
	public void addMeaning(String meaning, int x, int y, boolean bCorrectMean) {
		addMeaning(meaning, x, y, null, bCorrectMean);
	}

	public void removeMeaning(String meaning) {
		if (meaning != null) {
			int idx = 0;
			for (MeaningInfo meaningInfo : meaningList) {
				if (meaningInfo.meaning.equalsIgnoreCase(meaning)) {
					meaningList.remove(idx);
					break;
				}
				idx++;
			}
		}
	}

	public ArrayList<MeaningInfo> getMeaningList() {
		return meaningList;
	}

	public Paint getWordPaint() {
		return wordPaint;
	}

	public void setWordPaint(Paint wordPaint) {
		this.wordPaint = wordPaint;
	}

	public Paint getMeaningPaint() {
		return meaningPaint;
	}

	public void setMeaningPaint(Paint meaningPaint) {
		this.meaningPaint = meaningPaint;
	}

	@Override
	protected void onDraw(Canvas canvas) {
		super.onDraw(canvas);
		canvas.drawRect(0, 0, canvas.getWidth(), canvas.getHeight(), bgPaint);

		if (wordInfo != null) {
			canvas.drawText(wordInfo.word, wordInfo.x, wordInfo.y, wordPaint);
		}

		for (MeaningInfo meaningInfo : meaningList) {
			canvas.drawText(meaningInfo.meaning, meaningInfo.x, meaningInfo.y,
					meaningPaint);
		}

	}
}
