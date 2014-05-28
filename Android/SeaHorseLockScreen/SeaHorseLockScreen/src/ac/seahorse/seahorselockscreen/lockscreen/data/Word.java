package ac.seahorse.seahorselockscreen.lockscreen.data;

import android.graphics.Paint;

/***
 * 단어 정보.
 * 
 * @author KKS
 * @category Data
 */
public class Word {
	private String word;
	private int x;
	private int y;
	private int width;
	private int height;
	private Paint paint;

	public Word(String word) {
		if (word != null) {
			this.word = word;
		}
	}

	public String getString() {
		return word;
	}

	public void setString(String word) {
		this.word = word;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public Paint getPaint() {
		return paint;
	}

	public void setPaint(Paint paint) {
		this.paint = paint;
		width = (int) paint.measureText(word);
		height = (int) paint.getTextSize();
	}
}
