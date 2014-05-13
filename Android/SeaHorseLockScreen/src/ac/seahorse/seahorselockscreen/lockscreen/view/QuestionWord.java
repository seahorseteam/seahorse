package ac.seahorse.seahorselockscreen.lockscreen.view;

import java.util.ArrayList;

import ac.seahorse.seahorselockscreen.lockscreen.data.Word;

/***
 * 단어와 그 단어에 맞는 뜻 정보를 담고있다. 뜻은 정답인 것과 오답인 것을 구분하기 위핸 boolean 을 받는다. LockScreen
 * View에서 사용하는 데이터이다.
 * 
 * @author KKS
 * @category Data
 */
public class QuestionWord {
	private Word word;
	private ArrayList<Word> answer;
	private Word correctAnswer;

	public QuestionWord() {
		answer = new ArrayList<Word>();
	}

	public Word getString() {
		return word;
	}

	public void setString(Word word) {
		this.word = word;
	}

	public void setAnswerList(ArrayList<Word> answerList) {
		answer = answerList;
	}

	public ArrayList<Word> getAnswerList() {
		return answer;
	}

	public boolean isCorrect(Word mean) {
		if (mean.getString().equalsIgnoreCase(correctAnswer.getString())) {
			return true;
		}
		return false;
	}

	/**
	 * 단어의 보기가 될 뜻을 추가한다.
	 * 
	 * @param mean
	 *            - 단어의 보기가 될 뜻.
	 * @param bCorrect
	 *            - 해당 뜻이 단어의 정답인지 아닌지를 정한다.
	 */
	public void addAnswer(Word mean, boolean bCorrect) {
		if (mean != null) {
			answer.add(mean);
			if (bCorrect) {
				correctAnswer = mean;
			}
		}
	}

	public void removeAnswer(Word target) {
		if (target != null) {
			answer.remove(target);
		}
	}

	public void clearAnswerList() {
		answer.removeAll(answer);
	}

}
