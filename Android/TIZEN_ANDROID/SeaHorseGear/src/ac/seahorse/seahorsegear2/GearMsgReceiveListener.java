package ac.seahorse.seahorsegear2;

/***
 * 기어2에서 전달된 메시지를 콜백하기 위한 인터페이스.
 * 
 * @author KKS
 * 
 */
public interface GearMsgReceiveListener {
	/***
	 * Gear에서 이 어플리케이션으로 메시지를 보내온 순간 CallBack 한다.
	 * 
	 * @param msg
	 *            -Gear에서 전달된 메시지.
	 */
	public void receivedData(String msg);
}
