package View;






import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebViewController extends WebViewClient {
	String str = new  String();
	@Override
	public boolean shouldOverrideUrlLoading(WebView view, String url) {
		view.loadUrl(url);
		this.str = url;
		return true;
	}
	public String getUrlStr(){
		return str; 
	}
}