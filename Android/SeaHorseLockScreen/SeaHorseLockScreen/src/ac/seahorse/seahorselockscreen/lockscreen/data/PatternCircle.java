package ac.seahorse.seahorselockscreen.lockscreen.data;

import android.graphics.Bitmap;
import android.graphics.Paint;

/***
 * 잠금화면에서 보이는 원 모양. 보통 원과 원을 연결하여 잠금을 해제할 때 쓰인다. 단어 정보를 포함하는데 이는 이 원이 어떤 단어의 옆에
 * 붙는지 판단하기 위해서이다.
 * 
 * @author KKS
 * @category Image
 * 
 */
public class PatternCircle {
	private Word word;
	private Paint paint;
	private int cx, cy;
	private float radious;
	// 패턴 모양이 복잡하게 생길 경우에 사용할 비트맵 객체.
	private Bitmap baseBmp;
	private Bitmap correctBmp;
	private Bitmap incorrectBmp;

	public Word getWord() {
		return word;
	}

	/***
	 * 어떤 단어의 옆에 있는지 구분하기 위해 받는다.
	 * 
	 * @param word
	 *            - 이 원 모양의 마스터가 될 단어 객체.
	 */
	public void setWord(Word word) {
		this.word = word;
	}

	public Paint getPaint() {
		return paint;
	}

	public void setPaint(Paint paint) {
		this.paint = paint;
	}

	public int getCx() {
		return cx;
	}

	public void setCx(int cx) {
		this.cx = cx;

	}

	public int getCy() {
		return cy;
	}

	public void setCy(int cy) {
		this.cy = cy;
	}

	public float getRadious() {
		return radious;
	}

	public void setRadious(float rad) {
		radious = rad;
	}

	public Bitmap getBaseCircleBmp() {
		return baseBmp;
	}

	public void setBaseCircleBmp(Bitmap baseCircleBmp) {
		this.baseBmp = baseCircleBmp;
	}

	public Bitmap getCorrectBmp() {
		return correctBmp;
	}

	public void setCorrectBmp(Bitmap correctBmp) {
		this.correctBmp = correctBmp;
	}

	public Bitmap getIncorrectBmp() {
		return incorrectBmp;
	}

	public void setIncorrectBmp(Bitmap incorrectBmp) {
		this.incorrectBmp = incorrectBmp;
	}

}
