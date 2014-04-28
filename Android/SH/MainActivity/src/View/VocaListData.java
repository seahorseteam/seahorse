package View;

public class VocaListData {
	private String Title;
	private int WordCnt;
	private int ExamCnt;
	private int LinkCnt;
	
	public VocaListData(String Title, int WordCnt, int ExamCnt,
			int LinkCnt) {
		this.setTitle(Title);
		this.setWordCnt(WordCnt);
		this.setExamCnt(ExamCnt);
		this.setLinkCnt(LinkCnt);

	}

	// 리스트 뷰에 단어장 제목 추가 하는 부분 
	public String getTitle() {
		return Title;
	}

	public void setTitle(String Title) {
		this.Title = Title;
	}

	// 리스트 뷰에 단어 수 추가 하는 부분
	public int getWordCnt() {
		return WordCnt;
	}

	public void setWordCnt(int WordCnt) {
		this.WordCnt = WordCnt;
	}

	// 리스트 뷰에 예문 수 추가 하는 부분
	public int getExamCnt() {
		return ExamCnt;
	}

	public void setExamCnt(int ExamCnt) {
		this.ExamCnt = ExamCnt;
	}

	// 리스트 뷰에 링크 수 추가 하는 부분
	public int getLinkCnt() {
		return LinkCnt;
	}

	public void setLinkCnt(int LinkCnt) {
		this.LinkCnt = LinkCnt;
	}
}
