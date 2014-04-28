package ac.mobile.scls.screenviews.data;

import android.graphics.Paint;

public class MeaningInfo {
	public String meaning;
	public int x;
	public int y;
	public int width;
	public boolean bCorrect;
	public int height;

	public MeaningInfo(String meaning, int x, int y, Paint paint,
			boolean bCorrect) {
		this.meaning = meaning;
		this.x = x;
		this.y = y;
		this.bCorrect = bCorrect;
		width = (int) paint.measureText(meaning);
		height = (int) paint.getTextSize();
	}
}
