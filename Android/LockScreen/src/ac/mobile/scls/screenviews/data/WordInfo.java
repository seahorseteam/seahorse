package ac.mobile.scls.screenviews.data;

import android.graphics.Paint;

public class WordInfo {
	public String word;
	public int x;
	public int y;
	public int width;
	public int height;
	public Paint paint;

	public WordInfo(String word, int x, int y, Paint paint) {
		this.word = word;
		this.x = x;
		this.y = y;
		this.paint = paint;
		width = (int) paint.measureText(word);
		height = (int) paint.getTextSize();
	}
}
