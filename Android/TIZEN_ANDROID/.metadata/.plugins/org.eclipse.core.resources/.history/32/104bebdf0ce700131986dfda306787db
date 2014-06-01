package ac.seahorse.seahorsegear2;

import java.io.IOException;
import java.util.ArrayList;

import com.samsung.android.sdk.accessory.SASocket;

/***
 * 연결된 기어2 서비스와 통신을 하기 위한 소켓.
 * 
 * @author KKS
 * 
 */
public class GearSocket extends SASocket {
	// 이 객체는 사실상 SAAgent에 의해 Class file로 이용된다. 따라서 Main에서 이 객체를
	// 생성했다고 한들 그 객체와 SAAgent에 의해 불리는 객체는 다르다. 리스너는 동일해야 하므로 static을 해준다.
	private static ArrayList<GearMsgReceiveListener> callbackList = new ArrayList<GearMsgReceiveListener>();
	private static SASocket uHandler;
	private static int accessoryChannelID;

	public GearSocket() {
		super(GearSocket.class.getName());
	}

	public void setAccessoryChannelID(int accessoryChannelID) {
		GearSocket.accessoryChannelID = accessoryChannelID;
	}

	public int getAccessoryChannelID() {
		return accessoryChannelID;
	}

	/**
	 * SAAgent를 통해 통신을 수행할 소켓을 받는다.
	 * 
	 * @param socket
	 *            - SASocket를 확장한 SAAgent에서 받은 객체.
	 */
	public void setGearSocket(SASocket socket) {
		uHandler = socket;
	}

	public SASocket getGearSocket() {
		return uHandler;
	}

	public void sendMessage(final String msg) {
		if (uHandler != null) {
			// 네트워크 통신이므로 쓰레드로 수행.
			new Thread(new Runnable() {
				@Override
				public void run() {
					try {
						uHandler.send(accessoryChannelID, msg.getBytes());
					} catch (IOException e) {
						// Message send fail.
					}
				}
			}).start();
		}
	}

	/**
	 * Gear에서 메시지가 전달되어 왔을 때 메시지를 전달받을 리스너.
	 * 
	 * @param listener
	 *            - Gear에서 전달된 메시지를 받을 리스너.
	 */
	public void addReceivedMsgListener(GearMsgReceiveListener listener) {
		if (listener != null) {
			callbackList.add(listener);
		}
	}

	public void removeReceivedMsgListener(GearMsgReceiveListener listener) {
		if (listener != null) {
			callbackList.remove(listener);
		}
	}

	public void clearReceivedMsgListener() {
		callbackList.removeAll(callbackList);
	}

	public int disconnected(int err) {
		// connect fail
		switch (err) {
		case ERROR_CONNECTION_CLOSED:
			uHandler = null;
			callbackList.removeAll(callbackList);
			accessoryChannelID = 0;
			break;

		default:
			break;
		}
		return err;
	}

	@Override
	public void onReceive(int channelId, byte[] data) {
		for (GearMsgReceiveListener callback : callbackList) {
			callback.receivedData(new String(data));
		}
	}

	@Override
	public void onError(int channelId, String errorString, int error) {
		// Connections is not alive Error.
	}

	@Override
	protected void onServiceConnectionLost(int errorCode) {
		if (callbackList != null) {
			callbackList.removeAll(callbackList);
		}
	}

}
