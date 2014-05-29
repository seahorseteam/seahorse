/**
 * This interface provides the relative alarm, which occurs at a fixed interval in future.
          <p>
This alarm triggers after a duration mentioned in <em>delay</em> attribute from the moment the alarm is added. 
If a <em>period</em> is provided, the alarm keeps triggering for the given interval.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmRelative}
 */
function AlarmRelative() {};
AlarmRelative.prototype = new Alarm();

/**
 * This interface provides an absolute alarm, which triggers at a specified absolute date.
          <p>
If a <em>period</em> is provided, the alarm keeps triggering for the given interval. If the <em>daysOfTheWeek</em> array is not empty, the alarm triggers every week, for the given days, at the time defined by <em>date</em> attribute.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmAbsolute}
 */
function AlarmAbsolute() {};
AlarmAbsolute.prototype = new Alarm();

/**
 * This interface is an abstract interface for alarm types.
 *
 * @super Object
 * @constructor
 * @return {Alarm}
 */
function Alarm() {};
Alarm.prototype = new Object();

/**
 * This interface provides methods to manage alarms.
 *
 * @super Object
 * @constructor
 * @return {AlarmManager}
 */
function AlarmManager() {};
AlarmManager.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform. There will be a object that allows access to the functionality of the Alarm API.
 *
 * @super Object
 * @constructor
 * @return {AlarmManagerObject}
 */
function AlarmManagerObject() {};
AlarmManagerObject.prototype = new Object();

/**
 * An attribute to store the difference in time (in seconds) between when an alarm is added and it is triggered.
 *
 * @type Number
 */
AlarmRelative.prototype.delay = new Number();

/**
 * An attribute to store the duration in seconds between each trigger of an alarm. By default, this attribute is set to , indicating that this alarm does not repeat.
 *
 * @type Number
 */
AlarmRelative.prototype.period = new Number();

/**
 * Returns duration in seconds before the next alarm is triggered.
            <p>
If the alarm has expired, this method returns <var>null</var>.
            </p>
           
 *
 * @type Number
 * @memberOf AlarmRelative
 * @returns {Number}
 */
AlarmRelative.prototype.getRemainingSeconds = function(){ var ret = new Number(); return ret; };

/**
 * An attribute to store the absolute date/time when the alarm is initially triggered.
 * <p>
This attribute is precise to the second. Milliseconds will be ignored.
            </p>
 *
 * @type Date
 */
AlarmAbsolute.prototype.date = new Date();

/**
 * An attribute to store the duration in seconds between each trigger of the alarm.
 * <p>
By default, this attribute is set to <var>null</var>, indicating that this alarm does not repeat.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type Number
 */
AlarmAbsolute.prototype.period = new Number();

/**
 * An attribute to store the days of the week associated with the recurrence rule.
 * <p>
By default, this attribute is set to an empty array.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type array
 */
AlarmAbsolute.prototype.daysOfTheWeek = new array();

/**
 * Returns the date / time of the next alarm trigger.
            <p>
If the alarm has expired, this method returns <var>null</var>. The returned date is precise to the second.
            </p>
           
 *
 * @type Date
 * @memberOf AlarmAbsolute
 * @returns {Date}
 */
AlarmAbsolute.prototype.getNextScheduledDate = function(){ var ret = new Date(); return ret; };

/**
 * The alarm identifier.
 *
 * @type AlarmId
 */
Alarm.prototype.id = new AlarmId();

/**
 * The period of a minute. It defines the number of seconds per minute.
 *
 * @type Number
 */
AlarmManager.PERIOD_MINUTE = new Number();

/**
 * The period of an hour. It defines the number of seconds per hour.
 *
 * @type Number
 */
AlarmManager.PERIOD_HOUR = new Number();

/**
 * The period of a day. It defines the number of seconds per day.
 *
 * @type Number
 */
AlarmManager.PERIOD_DAY = new Number();

/**
 * The period of a week. It defines the number of seconds in a week.
 *
 * @type Number
 */
AlarmManager.PERIOD_WEEK = new Number();

/**
 * Adds an alarm to the storage.
            <p>
Set an alarm with the application ID to be run. You should definitely provide the application ID to run 
and the <a href=" http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/app_guide/application_service.htm">application control </a>information if it is necessary. 
For more information about the application contorl, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.device.apireference/tizen/application.html">The Application API</a>.
            </p>
           
 *
 * @param {Alarm} alarm
 * @param {ApplicationId} applicationId
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.add = function(alarm, applicationId, appControl){ return; };

/**
 * Removes an alarm from the storage.
            <p>
If an alarm goes off, it will be removed from the storage automatically.
            </p>
           
 *
 * @param {AlarmId} id
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.remove = function(id){ return; };

/**
 * Removes all alarms added by an application.
            <p>
Because each application has its own alarm storage, this method removes alarms only added by the calling application.
            </p>
           
 *
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.removeAll = function(){ return; };

/**
 * Returns an alarm as per the specified identifier.
 *
 * @param {AlarmId} id
 * @type Alarm
 * @memberOf AlarmManager
 * @returns {Alarm}
 */
AlarmManager.prototype.get = function(id){ var ret = new Alarm(); return ret; };

/**
 * Retrieves all alarms in an application storage..
            <p>
Alarms that have already been triggered are removed automatically from the storage.
            </p>
           
 *
 * @type array
 * @memberOf AlarmManager
 * @returns {array}
 */
AlarmManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * This API provides the functionality for scheduling the system alarm. It allows you to run other applications and have them perform operations at the specific time. You can schedule an alarm to go off once or to repeat at specific intervals.
 * <p>
Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
        </p>
 * <p>
Once an alarm goes off, it will be removed from the alarm storage automatically.
<em>AlarmManager</em> provides methods to manage alarms such as adding and removing. 
For more information on the Alarm features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
AlarmManagerObject.prototype.alarm = new AlarmManager();

/**
 * This API provides the functionality for scheduling the system alarm. It allows you to run other applications and have them perform operations at the specific time. You can schedule an alarm to go off once or to repeat at specific intervals.
 * <p>
Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
        </p>
 * <p>
Once an alarm goes off, it will be removed from the alarm storage automatically.
<em>AlarmManager</em> provides methods to manage alarms such as adding and removing. 
For more information on the Alarm features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
Tizen.prototype.alarm = new AlarmManager();

/**
 * This interface defines the current application's information and the basic operations (such as exit or hide) for the current application .
 *
 * @super Object
 * @constructor
 * @return {Application}
 */
function Application() {};
Application.prototype = new Object();

/**
 * This interface defines the certificate information of an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationCertificate}
 */
function ApplicationCertificate() {};
ApplicationCertificate.prototype = new Object();

/**
 * This interface specified a success callback that is invoked when system finished searching applications which is matched by specific application control .
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects and application control as an input parameter.
It is used in <em>ApplicationManager.findAppControl()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FindAppControlSuccessCallback}
 */
function FindAppControlSuccessCallback() {};
FindAppControlSuccessCallback.prototype = new Object();

/**
 * This interface invokes the success callback that is invoked when the installed application list is retrieved.
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationArraySuccessCallback}
 */
function ApplicationInformationArraySuccessCallback() {};
ApplicationInformationArraySuccessCallback.prototype = new Object();

/**
 * This callback interface specifies success callbacks that are invoked as a reply from the requested application control within the application control requester.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 <em>onsuccess()</em> - Invoked by the callee application calls <em>RequestedApplicationControl.replyResult()</em>.            </li>
            <li>
 <em>onfailure()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyFailure()</em>.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlDataArrayReplyCallback}
 */
function ApplicationControlDataArrayReplyCallback() {};
ApplicationControlDataArrayReplyCallback.prototype = new Object();

/**
 * This interface defines a key/value pair used to pass data between applications through the interface.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlData}
 */
function ApplicationControlData() {};
ApplicationControlData.prototype = new Object();

/**
 * This interface defines the general information available to an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformation}
 */
function ApplicationInformation() {};
ApplicationInformation.prototype = new Object();

/**
 * This callback interface that specifies the success callback that is invoked when the list of running applications is retrieved.
          <p>
This callback interface specifies a success method with
an array of <em>ApplicationContext </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsContext()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationContextArraySuccessCallback}
 */
function ApplicationContextArraySuccessCallback() {};
ApplicationContextArraySuccessCallback.prototype = new Object();

/**
 * This interface defines the information available about a running application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationContext}
 */
function ApplicationContext() {};
ApplicationContext.prototype = new Object();

/**
 * This interface defines what is instantiated by the object by the Tizen Platform.
          <p>
There will be a <em>tizen.application </em>object that allows access to Application API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationManagerObject}
 */
function ApplicationManagerObject() {};
ApplicationManagerObject.prototype = new Object();

/**
 * This section defines the application manager interface.
 *
 * @super Object
 * @constructor
 * @return {ApplicationManager}
 */
function ApplicationManager() {};
ApplicationManager.prototype = new Object();

/**
 * This interface consists of an operation, URI, MIME type, and data. It describes an action to be performed by other applications and is passed to launch other applications. If the system gets the application control request, it finds the corresponding application to be launched with the delivered application control and launches the selected application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControl}
 */
function ApplicationControl() {};
ApplicationControl.prototype = new Object();

/**
 * The callback interface to specify for subscribing for notification of changes in the list of installed applications on a device.
          <p>
This callback interface specifies methods that will be invoked when
an application is installed, updated, or uninstalled.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationEventCallback}
 */
function ApplicationInformationEventCallback() {};
ApplicationInformationEventCallback.prototype = new Object();

/**
 * This interface defines the meta data of an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationMetaData}
 */
function ApplicationMetaData() {};
ApplicationMetaData.prototype = new Object();

/**
 * This interface has an application control information requested and passed from other application and is passed to launch other applications. The newly launched application can get the requested application control through method, and send the results to the calling application through the method after performing the required action requested the calling application.
 *
 * @super Object
 * @constructor
 * @return {RequestedApplicationControl}
 */
function RequestedApplicationControl() {};
RequestedApplicationControl.prototype = new Object();

/**
 * An attribute to store the application information for the current application.
 *
 * @type ApplicationInformation
 */
Application.prototype.appInfo = new ApplicationInformation();

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
Application.prototype.contextId = new ApplicationContextId();

/**
 * Exits the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.exit = function(){ return; };

/**
 * Hides the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.hide = function(){ return; };

/**
 * Gets the requested application control passed to the current application.
            <p>
Gets the requested application control that contains the application control
passed by the <em>launchAppControl()</em> method from the calling application.
The requested application control contains the reason the application
was launched and what it has to perform. For example, an application
might be launched to display an image on a page by other
application's request. In all of these cases, the application is
responsible for checking the contents of the application control and responding
appropriately when it is launched.
            </p>
           
 *
 * @type RequestedApplicationControl
 * @memberOf Application
 * @returns {RequestedApplicationControl}
 */
Application.prototype.getRequestedAppControl = function(){ var ret = new RequestedApplicationControl(); return ret; };

/**
 * An attribute to store the type of the application certificate.
 *
 * @type String
 */
ApplicationCertificate.prototype.type = new String();

/**
 * An attribute to store the value of the application certificate.
 *
 * @type String
 */
ApplicationCertificate.prototype.value = new String();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf FindAppControlSuccessCallback
 * @returns {void}
 */
FindAppControlSuccessCallback.prototype.onsuccess = function(informationArray, appControl){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf ApplicationInformationArraySuccessCallback
 * @returns {void}
 */
ApplicationInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * Called when the callee application calls .
 *
 * @param {array} data
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onsuccess = function(data){ return; };

/**
 * Called when the callee application calls .
 *
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onfailure = function(){ return; };

/**
 * An attribute to store the name of a key.
 *
 * @type String
 */
ApplicationControlData.prototype.key = new String();

/**
 * An attribute to store the value associated with a key.
 *
 * @type array
 */
ApplicationControlData.prototype.value = new array();

/**
 * An attribute to store the identifier of an application for application management.
 *
 * @type ApplicationId
 */
ApplicationInformation.prototype.id = new ApplicationId();

/**
 * An attribute to store the name of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.iconPath = new String();

/**
 * An attribute to store the version of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.version = new String();

/**
 * An attribute that determines whether the application information should be shown (such as in the menus) or not.
 *
 * @type Boolean
 */
ApplicationInformation.prototype.show = new Boolean();

/**
 * An array of attributes to store the categories that the app belongs to.
 *
 * @type array
 */
ApplicationInformation.prototype.categories = new array();

/**
 * An attribute to store the application install/update time.
 *
 * @type Date
 */
ApplicationInformation.prototype.installDate = new Date();

/**
 * An attribute to store the application size (installed space).
 *
 * @type Number
 */
ApplicationInformation.prototype.size = new Number();

/**
 * An attribute to store the package ID of application.
 *
 * @type PackageId
 */
ApplicationInformation.prototype.packageId = new PackageId();

/**
 * Called when completes successfully.
 *
 * @param {array} contexts
 * @type void
 * @memberOf ApplicationContextArraySuccessCallback
 * @returns {void}
 */
ApplicationContextArraySuccessCallback.prototype.onsuccess = function(contexts){ return; };

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
ApplicationContext.prototype.id = new ApplicationContextId();

/**
 * An attribute to store the ID of an installed application.
 *
 * @type ApplicationId
 */
ApplicationContext.prototype.appId = new ApplicationId();

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for current application such as exit or hide.
        </p>
 * <p>
For more information on the Application features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
ApplicationManagerObject.prototype.application = new ApplicationManager();

/**
 * Gets the object defining the current application.
 *
 * @type Application
 * @memberOf ApplicationManager
 * @returns {Application}
 */
ApplicationManager.prototype.getCurrentApplication = function(){ var ret = new Application(); return ret; };

/**
 * Kills an application with the specified application context ID.
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the context is not found with specified context ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value
or if the specified context ID matches the context ID of the calling application.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextId} contextId
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.kill = function(contextId, successCallback, errorCallback){ return; };

/**
 * Launches an application with the given application ID.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the application is not found with given ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launch = function(id, successCallback, errorCallback){ return; };

/**
 * Launches an application with the specified application control.
            <p>
An application can launch other applications with the application control,
and get back the results from the launched applications.
            </p>
            <p>
The application control consists of an operation, URI, and MIME type, and describes
the request to be performed by the newly launched application. The
application control is passed to the <em>launchAppControl()</em> method to launch an
application. The system tries to find the proper application
to perform the requested application control, then launches the selected application.
            </p>
            <p>
The application control request is passed to the newly launched application
and it can be accessed by <em>getRequestedAppControl() </em>method. The passed
application control contains the reason the application was launched and
information about what the application is doing. The launched application
can send a result to the caller application with the <em>replyResult() </em>method of
<em>RequestedApplicationControl</em> interface.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If system cannot find the application that matches the specified application control.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ApplicationControlDataArrayReplyCallback} replyCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launchAppControl = function(appControl, id, successCallback, errorCallback, replyCallback){ return; };

/**
 * Finds application information can be launched with the given application control.
            <p>
An application can get a list of other applications can be launched with the application control.
            </p>
            <p>
The <em>ErrorCallback()<em> is launched with these error types:
</em></em>            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {FindAppControlSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.findAppControl = function(appControl, successCallback, errorCallback){ return; };

/**
 * Gets a list of application contexts for applications that are currently running on a device. The information contained for each application corresponds to the application state at the time when the list was generated.
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsContext = function(successCallback, errorCallback){ return; };

/**
 * Gets the application context for the specified application context ID. If the ID is set to or is not set at all, the method returns the application context of the current application. The list of running applications and their application IDs is obtained with .
 *
 * @param {ApplicationContextId} contextId
 * @type ApplicationContext
 * @memberOf ApplicationManager
 * @returns {ApplicationContext}
 */
ApplicationManager.prototype.getAppContext = function(contextId){ var ret = new ApplicationContext(); return ret; };

/**
 * Gets the list of installed application's information on a device. The information contained on each application corresponds to the application state at the moment when the list was generated.
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets application information for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application information for the current application.
The list of installed applications and their application IDs is obtained with <em>getAppsInfo()</em>.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type ApplicationInformation
 * @memberOf ApplicationManager
 * @returns {ApplicationInformation}
 */
ApplicationManager.prototype.getAppInfo = function(id){ var ret = new ApplicationInformation(); return ret; };

/**
 * Gets application certificates for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application certificates for the current application.
            </p>
            <p>
The certificate types are listed below
            </p>
            <ul>
              <li>
 AUTHOR_ROOT - Author Root Certificate               </li>
              <li>
 AUTHOR_INTERMEDIATE - Author Intermediate Certificate               </li>
              <li>
 AUTHOR_SIGNER - Author Signer Certificate               </li>
              <li>
 DISTRIBUTOR_ROOT - Distributor Root Certificate               </li>
              <li>
 DISTRIBUTOR_INTERMEDIATE - Distributor Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR_SIGNER - Distributor Signer Certificate               </li>
              <li>
 DISTRIBUTOR2_ROOT - Distributor2 Root Certificate               </li>
              <li>
 DISTRIBUTOR2_INTERMEDIATE - Distributor2 Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR2_SIGNER - Distributor2 Signer Certificate               </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppCerts = function(id){ var ret = new array(); return ret; };

/**
 * Gets URI of read-only shared directory of application for a specified application ID.
            <p>
The shared directory is used to export data to other applications.
If the ID is set to <var>null</var> or not set at all, it returns shared directory URI for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type String
 * @memberOf ApplicationManager
 * @returns {String}
 */
ApplicationManager.prototype.getAppSharedURI = function(id){ var ret = new String(); return ret; };

/**
 * Gets application meta data array for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application meta data array for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppMetaData = function(id){ var ret = new array(); return ret; };

/**
 * Adds a listener for receiving any notification for changes in the list of the installed applications on a device.
            <p>
It install a callback that is triggered every time a change occurs on
the list of installed applications on a device. This change may
be occurred by a new installation, uninstallation, or update of an application.
            </p>
            <p>
When executed, the implementation must immediately return a listener
ID that identifies the listener. After returning the ID, the change
detection operation is started asynchronously.
            </p>
            <p>
The <em>ApplicationInformationEventCallback </em>must be invoked every time a new
application is installed, removed, or updated.
            </p>
            <p>
The change detection must continue until the <em>removeAppInfoEventListener()</em> method is called
with the corresponding listener identifier.
            </p>
           
 *
 * @param {ApplicationInformationEventCallback} eventCallback
 * @type Number
 * @memberOf ApplicationManager
 * @returns {Number}
 */
ApplicationManager.prototype.addAppInfoEventListener = function(eventCallback){ var ret = new Number(); return ret; };

/**
 * Removes the listener to stop receiving notifications for changes on the list of installed applications on a device.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.removeAppInfoEventListener = function(watchId){ return; };

/**
 * An attribute to store the string that defines the action to be performed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.operation = new String();

/**
 * An attribute to store the URI needed by application control.
 *
 * @type String
 */
ApplicationControl.prototype.uri = new String();

/**
 * An attribute to store the MIME type of a content.
 *
 * @type String
 */
ApplicationControl.prototype.mime = new String();

/**
 * An attribute to store the category of the application to be launched.
 *
 * @type String
 */
ApplicationControl.prototype.category = new String();

/**
 * An array of attributes to store the data needed for an application control.
 *
 * @type array
 */
ApplicationControl.prototype.data = new array();

/**
 * Called when an application is installed.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when an application is updated.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when an application is uninstalled.
 *
 * @param {ApplicationId} id
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the key of the application meta data.
 *
 * @type String
 */
ApplicationMetaData.prototype.key = new String();

/**
 * An attribute to store the value of the application meta data.
 *
 * @type String
 */
ApplicationMetaData.prototype.value = new String();

/**
 * An attribute to store the application control object that describes caller application's request. It contains the information that the calling application passed to .
 *
 * @type ApplicationControl
 */
RequestedApplicationControl.prototype.appControl = new ApplicationControl();

/**
 * An attribute to store the caller application's ID
 *
 * @type ApplicationId
 */
RequestedApplicationControl.prototype.callerAppId = new ApplicationId();

/**
 * Sends the results to the caller application.
 *
 * @param {array} data
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyResult = function(data){ return; };

/**
 * Notifies the calling application that the application failed to perform the requested action.
 *
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyFailure = function(){ return; };

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for current application such as exit or hide.
        </p>
 * <p>
For more information on the Application features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
Tizen.prototype.application = new ApplicationManager();

/**
 * The callback function used to return a content to scan has been completed.
 *
 * @super Object
 * @constructor
 * @return {ContentScanSuccessCallback}
 */
function ContentScanSuccessCallback() {};
ContentScanSuccessCallback.prototype = new Object();

/**
 * The interface that provides lyrics for music.
 *
 * @super Object
 * @constructor
 * @return {AudioContentLyrics}
 */
function AudioContentLyrics() {};
AudioContentLyrics.prototype = new Object();

/**
 * The content interface that provides access to properties of content.
 *
 * @super Object
 * @constructor
 * @return {Content}
 */
function Content() {};
Content.prototype = new Object();

/**
 * Defines what is instantiated in the tizen object.
          <p>
There will be a tizen.content object that allows accessing the
functionality of the content module.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContentManagerObject}
 */
function ContentManagerObject() {};
ContentManagerObject.prototype = new Object();

/**
 * The callback function used to return a list of content objects.
 *
 * @super Object
 * @constructor
 * @return {ContentArraySuccessCallback}
 */
function ContentArraySuccessCallback() {};
ContentArraySuccessCallback.prototype = new Object();

/**
 * The interface that extends a basic content object with image-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {ImageContent}
 */
function ImageContent() {};
ImageContent.prototype = new Content();

/**
 * This interface specifies a set of methods that will be invoked every time a content change occurs.
 *
 * @super Object
 * @constructor
 * @return {ContentChangeCallback}
 */
function ContentChangeCallback() {};
ContentChangeCallback.prototype = new Object();

/**
 * The interface that extends a basic content object with audio-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {AudioContent}
 */
function AudioContent() {};
AudioContent.prototype = new Content();

/**
 * The interface that extends a basic content object with video-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {VideoContent}
 */
function VideoContent() {};
VideoContent.prototype = new Content();

/**
 * ContentManager interface that provides operations to retrieve and manipulate contents.
 *
 * @super Object
 * @constructor
 * @return {ContentManager}
 */
function ContentManager() {};
ContentManager.prototype = new Object();

/**
 * The callback function used to return a list of ContentDirectory objects.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectoryArraySuccessCallback}
 */
function ContentDirectoryArraySuccessCallback() {};
ContentDirectoryArraySuccessCallback.prototype = new Object();

/**
 * The content directory interface that provides access to properties of a content directory.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectory}
 */
function ContentDirectory() {};
ContentDirectory.prototype = new Object();

/**
 * Called when the scanning has been completed.
 *
 * @param {String} contentURI
 * @type void
 * @memberOf ContentScanSuccessCallback
 * @returns {void}
 */
ContentScanSuccessCallback.prototype.onsuccess = function(contentURI){ return; };

/**
 * The type of lyrics: whether they are synchronized with the music or not.
 *
 * @type AudioContentLyricsType
 */
AudioContentLyrics.prototype.type = new AudioContentLyricsType();

/**
 * The array of timestamps in milliseconds for lyrics.
 * <p>
If the lyrics are not synchronized (if there is no time information for the lyrics) the array is undefined.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.timestamps = new array();

/**
 * The array of lyric snippets.
 * <p>
If the lyrics are not synchronized, the array has only one member with full lyrics.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.texts = new array();

/**
 * The list of attributes that can be written back to the local backend using update or updateBatch method.
 *
 * @type array
 */
Content.prototype.editableAttributes = new array();

/**
 * The opaque content ID.
 *
 * @type ContentId
 */
Content.prototype.id = new ContentId();

/**
 * The name of content. The initial value is the file name of the content.
 *
 * @type String
 */
Content.prototype.name = new String();

/**
 * The content type.
 *
 * @type ContentType
 */
Content.prototype.type = new ContentType();

/**
 * The content MIME type.
 *
 * @type String
 */
Content.prototype.mimeType = new String();

/**
 * The content title.
 *
 * @type String
 */
Content.prototype.title = new String();

/**
 * The URI that can be used to access the content.
 *
 * @type String
 */
Content.prototype.contentURI = new String();

/**
 * The array of content thumbnails URIs.
 *
 * @type array
 */
Content.prototype.thumbnailURIs = new array();

/**
 * The date when a content has been released to the public. If only the release year is known, then the day and month are set to January 1st.
 *
 * @type Date
 */
Content.prototype.releaseDate = new Date();

/**
 * The date when this content has last been modified.
 *
 * @type Date
 */
Content.prototype.modifiedDate = new Date();

/**
 * The file size of the content in bytes.
 *
 * @type Number
 */
Content.prototype.size = new Number();

/**
 * The content description.
 *
 * @type String
 */
Content.prototype.description = new String();

/**
 * The content rating (value varies from 0 to 10).
 *
 * @type Number
 */
Content.prototype.rating = new Number();

/**
 * API to discover and manage images, videos, music and other contents.
 * <p>
This API provides functionality to discover contents (such as images, videos, music or others)
that are available on the device. It is possible to search for specific contents using filters.
The API also supports setting attributes of specific contents.
        </p>
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming\html\guide\content_guide\mediacontent.htm">Content Guide</a>.
        </p>
 *
 * @type ContentManager
 */
ContentManagerObject.prototype.content = new ContentManager();

/**
 * Called when the list of content is retrieved successfully.
 *
 * @param {array} contents
 * @type void
 * @memberOf ContentArraySuccessCallback
 * @returns {void}
 */
ContentArraySuccessCallback.prototype.onsuccess = function(contents){ return; };

/**
 * The geographical location where the image has been made.
 *
 * @type SimpleCoordinates
 */
ImageContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The width of the Image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.width = new Number();

/**
 * The height of the Image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.height = new Number();

/**
 * Information about image orientation.
 *
 * @type ImageContentOrientation
 */
ImageContent.prototype.orientation = new ImageContentOrientation();

/**
 * Called when content is added.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentadded = function(content){ return; };

/**
 * Called when content is updated.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentupdated = function(content){ return; };

/**
 * Called when content is removed.
 *
 * @param {ContentId} id
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentremoved = function(id){ return; };

/**
 * The album name that the audio belongs to.
 *
 * @type String
 */
AudioContent.prototype.album = new String();

/**
 * The list of genres that the audio belongs to.
 *
 * @type array
 */
AudioContent.prototype.genres = new array();

/**
 * The list of artists that created the audio.
 *
 * @type array
 */
AudioContent.prototype.artists = new array();

/**
 * The list of composers for the music.
 *
 * @type array
 */
AudioContent.prototype.composers = new array();

/**
 * The lyrics to the song that is contained in the audio.
 *
 * @type AudioContentLyrics
 */
AudioContent.prototype.lyrics = new AudioContentLyrics();

/**
 * The copyright information.
 *
 * @type String
 */
AudioContent.prototype.copyright = new String();

/**
 * The audio bitrate in bits per second. By default, this value is 0.
 *
 * @type Number
 */
AudioContent.prototype.bitrate = new Number();

/**
 * The track number if the audio belongs to an album.
 *
 * @type Number
 */
AudioContent.prototype.trackNumber = new Number();

/**
 * The audio duration in milliseconds.
 *
 * @type Number
 */
AudioContent.prototype.duration = new Number();

/**
 * The geographical location where the video was made.
 *
 * @type SimpleCoordinates
 */
VideoContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The album name to which the video belongs.
 *
 * @type String
 */
VideoContent.prototype.album = new String();

/**
 * The list of artists that created the video.
 *
 * @type array
 */
VideoContent.prototype.artists = new array();

/**
 * The video duration in milliseconds.
 *
 * @type Number
 */
VideoContent.prototype.duration = new Number();

/**
 * The width of the video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.width = new Number();

/**
 * The height of the video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.height = new Number();

/**
 * Changes attributes of a content in the content database, synchronously.
            <p>
When an application has changed some attributes in a content, this method allows writing it
back to the content database.
            </p>
           
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.update = function(content){ return; };

/**
 * Changes attributes of a number of contents in the content database, asynchronously.
            <p>
When an application has changed any attributes in array of content, this method allows writing them
back to the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {array} contents
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.updateBatch = function(contents, successCallback, errorCallback){ return; };

/**
 * Gets a list of content directories.
            <p>
This method returns (via callback) a list of content directory objects. To obtain a list of contents
in a specific directory, use find() method with the directory ID.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentDirectoryArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getDirectories = function(successCallback, errorCallback){ return; };

/**
 * Finds contents that meets the search condition given by a filter
            <p>
This method allows searching based on a supplied filter. For more detail on AbstractFilter, refer to the
<a href="http://127.0.0.1:55697/help/topic/org.tizen.web.device.apireference/tizen/tizen.html#::Tizen::AbstractFilter">Tizen</a> module. The filter allows precise searching such
as "return all songs by artist U2, ordered by name".
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ContentDirectoryId} directoryId
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.find = function(successCallback, errorCallback, directoryId, filter, sortMode, count, offset){ return; };

/**
 * Scan a file to create or update a content in the content database.
            <p>
When an application creates or updates a content, this method allows scan it 
to insert or update the content in the content database.
            </p>
           
 *
 * @param {String} contentURI
 * @param {ContentScanSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.scanFile = function(contentURI, successCallback, errorCallback){ return; };

/**
 * Sets a listener to receive notifications about content changes.
 *
 * @param {ContentChangeCallback} changeCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.setChangeListener = function(changeCallback){ return; };

/**
 * Unset the listener to stop receiving notification for content changes.
 *
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.unsetChangeListener = function(){ return; };

/**
 * Called when the list of directory is retrieved successfully.
 *
 * @param {array} directories
 * @type void
 * @memberOf ContentDirectoryArraySuccessCallback
 * @returns {void}
 */
ContentDirectoryArraySuccessCallback.prototype.onsuccess = function(directories){ return; };

/**
 * The opaque content directory ID.
 *
 * @type ContentDirectoryId
 */
ContentDirectory.prototype.id = new ContentDirectoryId();

/**
 * The directory path on the device.
 *
 * @type String
 */
ContentDirectory.prototype.directoryURI = new String();

/**
 * The directory name.
 *
 * @type String
 */
ContentDirectory.prototype.title = new String();

/**
 * The type of a device storage.
 *
 * @type ContentDirectoryStorageType
 */
ContentDirectory.prototype.storageType = new ContentDirectoryStorageType();

/**
 * The directory modification date.
 *
 * @type Date
 */
ContentDirectory.prototype.modifiedDate = new Date();

/**
 * API to discover and manage images, videos, music and other contents.
 * <p>
This API provides functionality to discover contents (such as images, videos, music or others)
that are available on the device. It is possible to search for specific contents using filters.
The API also supports setting attributes of specific contents.
        </p>
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming\html\guide\content_guide\mediacontent.htm">Content Guide</a>.
        </p>
 *
 * @type ContentManager
 */
Tizen.prototype.content = new ContentManager();

/**
 * The success callback to read the content of a file as a DOMString.
          <p>
This callback interface specifies a success callback with 
a DOMString object as input argument. It is used in asynchronous
operations, such as File.readAsText().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStringSuccessCallback}
 */
function FileStringSuccessCallback() {};
FileStringSuccessCallback.prototype = new Object();

/**
 * The success callback to retrieve a FileSystemStorage object.
          <p>
This callback interface specifies a success callback with 
a FileSystmeStorage object as input argument. It is used in asynchronous
operations, such as FileSystemManager.getStorage() and
FileSystemManager.addStorageStateChangeListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageSuccessCallback}
 */
function FileSystemStorageSuccessCallback() {};
FileSystemStorageSuccessCallback.prototype = new Object();

/**
 * The file system manager interface that provides access to the filesystem API.
          <p>
This manager exposes the filesystem base API, and provides functionality, such as
determining root and default locations, resolving a given location
into a file handle, and registering filesystem listeners for
filesystem events.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManager}
 */
function FileSystemManager() {};
FileSystemManager.prototype = new Object();

/**
 * FileStream API.
          <p>
A FileStream represents a handle to a File opened for read and/or
write operations. Read and write operations are performed relative
to a position attribute, which is a pointer that represents the current position in the file.
          </p>
          <p>
A series of read/write methods are available that permit both binary and
text to be processed.
          </p>
          <p>
Once a file stream is closed, any operation attempted on this stream
will result in a standard JavaScript error.
          </p>
          <p>
The read/write operations in this interface do not throw any security
exceptions as the access rights are expected to be granted through the initial
resolve() method or through the openStream() method of the File interface.
Therefore, all actions performed on a successfully resolved File and FileStream are
expected to succeed. This avoids successive asynchronous calls and may potentially increase
application for a user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStream}
 */
function FileStream() {};
FileStream.prototype = new Object();

/**
 * The file system specific success callback.
          <p>
This callback interface specifies a success callback with 
a File object as input argument. It is used in asynchronous
operations, such as FileSystemManager.resolve() and
copying, moving, and deleting files.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSuccessCallback}
 */
function FileSuccessCallback() {};
FileSuccessCallback.prototype = new Object();

/**
 * The file interface.
          <p>
This interface represents the file abstraction in use.
A file handle represents a file
if the isFile property is <em>true</em>, if the isFile property is <em>false</em>, the file
handle represents a directory.
If a file handle represents a directory, it can address files and directories.
          </p>
          <p>
The file object permissions for the file object location and tree rooted
at that location depends upon the mode defined in the resolve method.
When a File object creates a child File object, 
the new File object inherits its access rights from
the parent object without any reference to the security framework, as
noted in certain methods of File.
          </p>
          <p>
A file handle representing a file can be opened for I/O operations,
such as reading and writing.
          </p>
          <p>
A file handle representing a directory can be used for listing all
files and directories rooted as the file handle location.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {File}
 */
function File() {};
File.prototype = new Object();

/**
 * The FileSystemStorage interface.
          <p>
This interface gives additional information about a storage, such as if the
device is mounted, if it's a removable drive or not, or the device's name.
To retrieve the mount point, the resolve() method should be used using
the label as argument.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorage}
 */
function FileSystemStorage() {};
FileSystemStorage.prototype = new Object();

/**
 * Defines what is instantiated in the tizen object.
          <p>
There will be a tizen.filesystem object that allows accessing the
functionality of the filesystem API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManagerObject}
 */
function FileSystemManagerObject() {};
FileSystemManagerObject.prototype = new Object();

/**
 * The success callback to open a file for raw access.
          <p>
This callback interface specifies a success callback with 
a FileStream object as input argument. It is used by asynchronous
methods, such as File.openStream().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStreamSuccessCallback}
 */
function FileStreamSuccessCallback() {};
FileStreamSuccessCallback.prototype = new Object();

/**
 * The success callback to retrieve FileSystemStorage objects.
          <p>
This callback interface specifies a success callback with 
an array of FileSystemStorage objects as input argument. It is used in asynchronous
operations, such as FileSystemManager.listStorages().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageArraySuccessCallback}
 */
function FileSystemStorageArraySuccessCallback() {};
FileSystemStorageArraySuccessCallback.prototype = new Object();

/**
 * The file system specific success callback for listing methods.
          <p>
This callback interface specifies a success callback with a function
taking an array of File objects as input argument. It is used in asynchronous
methods, such as File.listFiles().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileArraySuccessCallback}
 */
function FileArraySuccessCallback() {};
FileArraySuccessCallback.prototype = new Object();

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {String} fileStr
 * @type void
 * @memberOf FileStringSuccessCallback
 * @returns {void}
 */
FileStringSuccessCallback.prototype.onsuccess = function(fileStr){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {FileSystemStorage} storage
 * @type void
 * @memberOf FileSystemStorageSuccessCallback
 * @returns {void}
 */
FileSystemStorageSuccessCallback.prototype.onsuccess = function(storage){ return; };

/**
 * Contains the platform-dependent maximum path length.
 *
 * @type Number
 */
FileSystemManager.prototype.maxPathLength = new Number();

/**
 * Resolves a location to a file handle.
            <p>
It validates and resolves the given location to a file handle.
If the operation completes successfully, the handle is returned
in the FileSuccessCallback.
A valid location is prefixed with a valid root or
default location and must address an existing,
accessible file or directory.
            </p>
            <p>
A location can contain virtual path like (<var>documents/some_file.txt</var>)
or it can be a file's URI (<var>file:///my_strange_path/some_file.png</var>).
            </p>
            <p>
The list of root locations that MUST be supported by a compliant
implementation are:
            </p>
            <ul>
              <li>
documents: Describes the default folder in which text documents
(such as pdf, doc...) are stored by default in the device. For example, in some
platforms it corresponds to the "My Documents" folder.              </li>
              <li>
images: Describes the default folder in which still images, like
pictures (such as jpg, gif, png, etc.), are stored in the
device by default. For example, in some platforms it corresponds to the "My Images"
folder.              </li>
              <li>
music: Describes the default folder in which sound clips (such as mp3,
aac, etc.) are stored in the device by default. For example, in some platforms it
corresponds to the "My Music" folder.              </li>
              <li>
videos: Describes the default folder in which video clips (such as
avi, mp4, etc.) are stored in the device by default. For example, in some platforms
it corresponds to the "My Videos" folder.              </li>
              <li>
downloads: Describes the default folder in which files downloaded
(such as by a browser, e-mail client, etc.) are stored by default in the
device. For example, in some platforms it corresponds to the "Downloads" folder.
              </li>
              <li>
ringtones: Describes the default folder in which ringtones (such as mp3, etc)
are stored by default in the device.               </li>
              <li>
wgt-package: Describes the read-only folder in which the content of
the widget file was extracted to.              </li>
              <li>
wgt-private: Describes a private folder in which a widget can
store information. This folder MUST be accessible only to the
widget. Other widgets or applications MUST NOT access the
information stored there.              </li>
              <li>
wgt-private-tmp: Describes a temporary, private folder in which a widget
can store data that is available during one widget execution
cycle. Content of this folder MAY be removed from this directory
when the widget is closed or the Web Runtime is restarted.
This folder MUST be accessible only to the widget. Other
widgets or applications MUST NOT have access to it.              </li>
            </ul>
            <p>
The mode parameter specifies whether the resulting File object
has read-only access ("r" access), read and write access ("rw" access),
append access ("a" access), or write access ("w" access) to the root location.
"rw", "a", "w" modes are checked as 'write permission' when acessing the root location.
If trying to access with "r", "rw", "a" mode on read-only location (ex. ringtones), InvalidValuesError will be thrown in ErrorCallback.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.
For example, the mode is not valid (that is not "r", "rw", "a", or "w").              </li>
              <li>
NotFoundError: The location input argument does not correspond to a valid location.              </li>
              <li>
UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {String} location
 * @param {FileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileMode} mode
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.resolve = function(location, onsuccess, onerror, mode){ return; };

/**
 * Gets information about a storage based on its label.
            <p>
Get storage information based on its label (example: "MyThumbDrive",
"InternalFlash"). The onsuccess will receive as input argument the data
structure containing additional information about the drive.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: No drive was found with the given label.              </li>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {String} label
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.getStorage = function(label, onsuccess, onerror){ return; };

/**
 * Lists the available storages on the device.
            <p>
Get the list of available internal and external storage devices. The
onsuccess will receive as input argument a list of the data
structure containing additional information about each drive found.
Can get storages would have a label named as 'internal0', virtual roots (images, documents,...), 'removable1', 'removable2'.
'removable1' label would be used to resolve sdcard and 'removable2' label would be used to resolve usb host, if supported.
The vfat filesystem used widly as sdcard filesystem is not case-sensitive. 
If you want to handle the file on sdcard, you need to consider case-sensitive filenames are regarded as same name.
            </p>
            <p>
Labels can be different, depends on platform implementation.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {FileSystemStorageArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.listStorages = function(onsuccess, onerror){ return; };

/**
 * Subscribes to notifications when a storage state changes.
            <p>
The most common usage for this method would be to watch notifications of
additions and removals of external storages.
            </p>
            <p>
When executed, the implementation MUST immediately return a subscription identifier that identifies
the watch operation. After returning the identifier, the watch operation is started
asynchronously. The onsuccess MUST be invoked every time
a storage state changes. If the attempt fails, the onerror (if present)
MUST be invoked with the relevant error type.
            </p>
            <p>
The watch operation MUST continue until the removeStorageStateChangeListener() method is
called with the corresponding subscription identifier.
            </p>
           
 *
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf FileSystemManager
 * @returns {Number}
 */
FileSystemManager.prototype.addStorageStateChangeListener = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Unsubscribes a storage watch operation.
            <p>
If the watchId argument is valid and corresponds to a subscription already in
place, the watch process MUST immediately stop and no further callbacks MUST be
invoked.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.removeStorageStateChangeListener = function(watchId){ return; };

/**
 * Indicates whether or not the current file pointer is at the end of the file.
 * <p>
If <em>true</em>, this attribute indicates that the file pointer is at the end of the file.
            </p>
 * <p>
If <em>false</em>, this attribute indicates that the file pointer is not at the end of the file
and may be anywhere within the file.
            </p>
 *
 * @type Boolean
 */
FileStream.prototype.eof = new Boolean();

/**
 * Gets/sets stream position for reads/writes.
 * <p>
The stream position is an offset of bytes from the start of
the file stream. When invoking an operation that reads or
writes from the stream, the operation will take place from the
byte defined by this position attribute. If the read or write
operation is successful, the position of the stream is advanced
by the number of bytes read or written. If the read/write operation is not
successful, the position of the stream is unchanged.
            </p>
 *
 * @type Number
 */
FileStream.prototype.position = new Number();

/**
 * Returns the number of bytes that are available for reading from the stream.
 * <p>
The number of bytes available for reading is the maximum
amount of bytes that can be read in the next read operation.
It corresponds to the number of bytes available after the file pointer
denoted by the position attribute.
            </p>
 * <p>
-1 if eof is <em>true</em>.
            </p>
 *
 * @type Number
 */
FileStream.prototype.bytesAvailable = new Number();

/**
 * Closes this FileStream.
            <p>
Flushes any pending buffered writes and closes the File. Always succeeds.
Note that pending writes might not succeed.
            </p>
           
 *
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.close = function(){ return; };

/**
 * Reads the specified number of characters from this FileStream.
            <p>
Reads the specified number of characters after the position file pointer and returns them as a string.
The resulting string length might be shorter than charCount if eof
is <em>true</em>.
            </p>
           
 *
 * @param {Number} charCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.read = function(charCount){ var ret = new String(); return ret; };

/**
 * Reads the specified number of bytes from this FileStream.
 *
 * @param {Number} byteCount
 * @type array
 * @memberOf FileStream
 * @returns {array}
 */
FileStream.prototype.readBytes = function(byteCount){ var ret = new array(); return ret; };

/**
 * Reads the specified number of bytes from this FileStream, encoding the result in base64.
 *
 * @param {Number} byteCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.readBase64 = function(byteCount){ var ret = new String(); return ret; };

/**
 * Writes the specified DOMString to this FileStream.
 *
 * @param {String} stringData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.write = function(stringData){ return; };

/**
 * Writes the specified bytes to this FileStream.
 *
 * @param {array} byteData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBytes = function(byteData){ return; };

/**
 * Converts the specified base64 DOMString to bytes and writes the result to this FileStream.
 *
 * @param {String} base64Data
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBase64 = function(base64Data){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {File} file
 * @type void
 * @memberOf FileSuccessCallback
 * @returns {void}
 */
FileSuccessCallback.prototype.onsuccess = function(file){ return; };

/**
 * The parent directory handle.
 * <p>
<em>null</em> if there is no parent directory.
            </p>
 * <p>
If there is no parent directory, this represents a root location.
            </p>
 *
 * @type File
 */
File.prototype.parent = new File();

/**
 * The file/directory access state in the filesystem.
 * <p>
<em>true</em> if object has read-only access at its location.
            </p>
 * <p>
<em>false</em> if object has write access at its location.
            </p>
 * <p>
This attribute represents the actual state of a
file or directory in the filesystem. Its value is not affected by
the mode used in FileSystemManager.resolve that was used to
create the File object from which this File object was obtained.
            </p>
 *
 * @type Boolean
 */
File.prototype.readOnly = new Boolean();

/**
 * The file type.
 * <p>
<em>true</em> if this handle is a file.
<em>false</em> if this handle is a directory.
            </p>
 *
 * @type Boolean
 */
File.prototype.isFile = new Boolean();

/**
 * The file type.
 * <p>
<em>true</em> if this handle is a directory,
<em>false</em> if this handle is a file.
            </p>
 *
 * @type Boolean
 */
File.prototype.isDirectory = new Boolean();

/**
 * The creation timestamp of this file.
 * <p>
This is the timestamp when the file was first created in the filesystem.
Equivalent to the timestamp when a call to createFile() succeeds.
            </p>
 * <p>
If the platform does not support this attribute, it MUST
be <em>null</em>.
            </p>
 * <p>
It is unspecified and platform-dependent if the creation
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.created = new Date();

/**
 * The modification timestamp.
 * <p>
The modification timestamp of this file. This is the timestamp
of the most recent modification to the file, usually when the last
write operation succeeded. Opening a file for reading does not change
the modification timestamp.
            </p>
 * <p>
If the platform does not support this attribute, it MUST
be <em>null</em>.
            </p>
 * <p>
It is unspecified and platform-dependent if the modified
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.modified = new Date();

/**
 * The path of this file, excluding the file name.
 * <p>
This is the path of this file, beginning with the name of the root containing the file,
up to and including the directory containing the file, but excluding the file name.
            </p>
 * <p>
Except in a special case of the File representing the root itself, the last
character is always the character '/'.
            </p>
 * <p>
For example, if a file is located at music/ramones/volume1/RockawayBeach.mp3,
the path would be music/ramones/volume1/.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the path would be
music/ramones/.
            </p>
 * <p>
For the virtual roots, the path is same as the name of the virtual root. 
For example, if the root is music, then the path is music. If the root is documents, then the path is documents.
            </p>
 *
 * @type String
 */
File.prototype.path = new String();

/**
 * The file name, excluding any path components.
 * <p>
This is the name of this file, excluding the root name and any other path components.
            </p>
 * <p>
For example, if a file is located at
music/ramones/volume1/RockawayBeach.mp3, the name would be RockawayBeach.mp3.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the
name would be volume1.
            </p>
 * <p>
For the special case of the root itself, the name is an empty string.
            </p>
 *
 * @type String
 */
File.prototype.name = new String();

/**
 * The full path of this file.
 * <p>
The full path of this file, beginning with the name of the root containing the file,
and including the name of the file or directory itself.
            </p>
 * <p>
For instance, for a file, if the file is located at
music/ramones/volume1/RockawayBeach.mp3, then the fullPath is
music/ramones/volume1/RockawayBeach.mp3.
            </p>
 * <p>
For a directory, if the directory is located at music/ramones/volume1, then the
fullPath is music/ramones/volume1.
            </p>
 * <p>
For the special case of the root itself, if the root is music, then the fullPath is
music.
            </p>
 * <p>
The fullPath is always equal to path + name.
            </p>
 *
 * @type String
 */
File.prototype.fullPath = new String();

/**
 * The size of this file, in bytes.
 * <p>
If there's an attempt to read this attribute on a directory,
<em>undefined</em> is returned. To retrieve the
number of files and directories contained in the directory,
use the length attribute, instead.
            </p>
 *
 * @type Number
 */
File.prototype.fileSize = new Number();

/**
 * The number of files and directories contained in this file handle.
 * <p>
If there's an attempt to read this attribute on a file,
<em>undefined</em> is returned. To retrieve the
size of a file, use the fileSize attribute instead.
            </p>
 *
 * @type Number
 */
File.prototype.length = new Number();

/**
 * Returns a URI for the file.
            <p>
Returns a URI that can be used to identify this entry (such as using it
as the src attribute on an HTML img element). The URI has no specific
expiration, it should be valid at least as long as the file exists.
            </p>
            <p>
When this method is invoked, the implementation MUST generate a URI.
            </p>
            <p>
If that URI corresponds to any of the public virtual roots (that is
images, videos, music, documents, and downloads) the URI
MUST be globally unique and could be used by any widget.
            </p>
            <p>
If that URI corresponds to a file located in any of the widget private
areas (such as wgt-package, wgt-private, wgt-private-tmp). The generated
URI MUST be unique for that file and for the widget making the request
(such as including some derived from the widget id in the URI). 
These URIs MUST NOT be accessible to other widgets,
apart from the one invoking this method.
            </p>
           
 *
 * @type String
 * @memberOf File
 * @returns {String}
 */
File.prototype.toURI = function(){ var ret = new String(); return ret; };

/**
 * Returns the list of all files in this directory.
            <p>
The list of files will be passed as a File[] in the onsuccess
and contains directories and files. However, the directories "." and ".."
MUST NOT be returned. Each File object part of the array MUST inherit
all the access rights (that is one of the values in FileMode) from the File object in which
this method was invoked.
            </p>
            <p>
If the filter is passed and contains valid values, only those directories
and files in the directory that match the filter criteria specified
in the FileFilter interface MUST be returned in the onsuccess.
If no filter is passed, the filter is <em>null</em> or undefined, or the filter contains invalid
values, the implementation MUST return the full list of files in the directory.
            </p>
            <p>
If the directory does not contain any files or directories, or
the filter criteria is unmatched to any files or directories, the onsuccess will be
invoked with an empty array.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
IOError: The operation is launched on a file (not a directory).              </li>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {FileArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileFilter} filter
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.listFiles = function(onsuccess, onerror, filter){ return; };

/**
 * Opens the file in the given mode supporting the given encoding.
            <p>
This operation is performed asynchronously. If the file is opened
successfully, the onsuccess is invoked with a FileStream
that can be used for reading and writing the file, depending on the
mode. The return FileStream instance includes a file pointer, which represents
the current position in the file. The filepointer will, by default, be at the start of the file,
except in the case of opening with append ("a") mode, in which case
the filepointer points to the end of the file.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contains an invalid value.               </li>
              <li>
IOError: The operation is launched on a directory (not a file), the file is not
valid or it does not exist.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {FileMode} mode
 * @param {FileStreamSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.openStream = function(mode, onsuccess, onerror, encoding){ return; };

/**
 * Reads the content of a file as a DOMString.
            <p>
If the operation is successfully executed, the onsuccess is
invoked and a DOMString is passed as input parameter that represents
the file content in the format determined by the encoding parameter.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
IOError: The operation is launched on a directory (not a file), the file is not
valid, or the file does not exist.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {FileStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.readAsText = function(onsuccess, onerror, encoding){ return; };

/**
 * Copies (and overwrites if possible and specified) a file or a directory from a specified location to another specified location.
            <p>
The copy of the file or directory identified by the originFilePath parameter
MUST be created in the path passed in the destinationFilePath parameter.
            </p>
            <p>
The file or directory to be copied MUST be under the Directory from which the method
is invoked, otherwise the operation MUST NOT be performed.
            </p>
            <p>
If the copy is performed successfully, the onsuccess is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError: originFilePath does not correspond to a valid file or destinationPath is not a valid path.              </li>
              <li>
IOError: The File in which the copyTo method is invoked is a file (not a directory), 
originFilePath corresponds to a file or directory in use by another process,
overwrite parameter is <em>false</em> and destinationFilePath corresponds to an existing
file or directory.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.copyTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Moves a file or a directory from a specified location to another.
            <p>
The file or directory will be moved (and will overwrite if possible and specified)
atomically to the given path. This operation is different from 
instantiating copyTo and then deleting the original file, as on certain
platforms, this operation does not require extra disk space.
            </p>
            <p>
The file or directory identified by the originFilePath parameter
MUST be moved to the path passed in the destinationFilePath parameter.
            </p>
            <p>
The file to be moved MUST be under the Directory from which the method
is invoked, otherwise the operation MUST NOT be performed.
            </p>
            <p>
If the file or directory is moved successfully, the onsuccess is
invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.               </li>
              <li>
NotFoundError: originFilePath does not correspond to a valid file or destinationPath is not a valid path.              </li>
              <li>
IOError: The File in which the moveTo method is invoked is a file (not a directory),
originFilePath corresponds to a file or directory in use by another process,
overwrite parameter is <em>false</em> and destinationFilePath corresponds to an existing
file or directory.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.moveTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Creates a new directory.
            <p>
A new directory will be created relative to the current
directory that this operation is performed on. The implementation will attempt to
create all necessary sub-directories specified in the dirPath, as well. The use of "."
or ".." in path components is not supported.
            </p>
            <p>
This operation can only be performed on file handlers that
represent a directory (that is, <var>isDirectory == true</var>).
            </p>
            <p>
If the directory is successfully created, it will be returned.
            </p>
            <p>
In case the directory cannot be created, an error MUST be thrown
with the appropriate error type.
            </p>
           
 *
 * @param {String} dirPath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createDirectory = function(dirPath){ var ret = new File(); return ret; };

/**
 * Creates a new empty file in a specified location.
            <p>
A new empty file is created in the given path relative
to the directory indicated by current 'File' object's 'path' attribute.
The use of "." or ".." in path components is not supported.
This operation can only be performed on file handlers that
represent a directory (that is, <var>isDirectory == true</var>).
            </p>
            <p>
If the file is successfully created, a file handler MUST
be returned by this method.
            </p>
            <p>
In case the file cannot be created, an error MUST be thrown
with the appropriate error type.
            </p>
           
 *
 * @param {String} relativeFilePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createFile = function(relativeFilePath){ var ret = new File(); return ret; };

/**
 * Resolves an existing file or directory relative to the current directory this operation is performed on, and returns a file handle for it.
            <p>
The filePath is not allowed to contain the "." or ".." directories.
            </p>
            <p>
The encoding of file paths is <a href="http://www.ietf.org/rfc/rfc2279.txt">UTF-8</a>.
            </p>
           
 *
 * @param {String} filePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.resolve = function(filePath){ var ret = new File(); return ret; };

/**
 * Deletes a specified directory and directory tree if specified.
            <p>
This function attempts to asynchronously delete a directory or directory tree under the current
directory.
            </p>
            <p>
If the recursive parameter is set to <em>true</em>, all the directories and files under the specified
directory MUST be deleted. If the recursive parameter is set to false, the directory will
only be deleted if it is empty, otherwise an IOError error type will be passed in onerror.
            </p>
            <p>
The directory to be deleted MUST be under the Directory that the method
is invoked from, otherwise the operation MUST NOT be performed.
If the deletion is performed successfully, the onsuccess is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.               </li>
              <li>
NotFoundError: The passed directory does not correspond to a valid directory.               </li>
              <li>
IOError: The File in which the delete method is invoked
is a file (not a directory), the directory is in use by another process
or the directory is not empty and recursive argument is <em>false</em>.
This code will be also used if a recursive deletion partially fails
and any data deleted so far cannot be recovered. This may occur
due to the lack of filesystem permissions or if any
directories or files are opened by other processes.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {String} directoryPath
 * @param {Boolean} recursive
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteDirectory = function(directoryPath, recursive, onsuccess, onerror){ return; };

/**
 * Deletes a specified file.
            <p>
This function attempts to asynchronously delete a file under the current directory.
            </p>
            <p>
The file to be deleted MUST be under the Directory from which the method
is invoked, otherwise the operation MUST NOT be performed.
            </p>
            <p>
If the deletion is performed successfully, the onsuccess is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.               </li>
              <li>
NotFoundError: The file does not correspond to a valid file.               </li>
              <li>
IOError: The file in which the delete method is invoked
is a directory (not a file), the file is in use by another process,
or there is no permission in the file system.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {String} filePath
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteFile = function(filePath, onsuccess, onerror){ return; };

/**
 * The storage name.
 * <p>
Used as input for functions like getStorage() and also used as 'location' parameter for File.resolve() and FileSystemManager.resolve().
            </p>
 *
 * @type String
 */
FileSystemStorage.prototype.label = new String();

/**
 * The storage type.
 * <p>
Defines whether the storage is internal or external.
            </p>
 *
 * @type FileSystemStorageType
 */
FileSystemStorage.prototype.type = new FileSystemStorageType();

/**
 * The storage state.
 * <p>
Defines whether the storage is mounted or not.
            </p>
 *
 * @type FileSystemStorageState
 */
FileSystemStorage.prototype.state = new FileSystemStorageState();

/**
 * This API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual
filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em> where <em>&lt;rootname&gt;</em> is
the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or
directory relative to that root.
        </p>
 * <p>
The following virtual roots MUST be supported:
        </p>
 * <ul>
 * <li>images: the images location
 * <li>videos: the videos location
 * <li>music: the sounds location
 * <li>documents: the documents location
 * <li>downloads: the location for downloaded items
 * <li>ringtones: the location for ringtones (read-only location)
 * <li>wgt-package: the widget package location (read-only location)
 * <li>wgt-private: the widget private storage
 * <li>wgt-private-tmp: the widget private volatile storage area
 * </ul>
 * <p>
The file URI path is also supported. if you want to access other paths out of virtual root, 
for example '/tmp/', 'file:///tmp' could be used as location parameter.
        </p>
 * <p>
To access specific locations from those specified above, a file handle
must be retrieved using the filesystem.resolve call.
        </p>
 * <p>
A file handle represents either a file or a directory. For a file, the
isFile attribute is <em>true</em>. For a directory, the isDirectory attribute
is <em>true</em>. A file can be opened for read and write operations, using a
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation MUST support the use of the following
characters in file names:
        </p>
 * <ul>
 * <li>Letters (azAZ)
 * <li>Numbers (0-9)
 * <li>Blank spaces
 * <li>Underscores ("_")
 * <li>Hyphens ("-")
 * <li>Periods (".")
 * </ul>
 * <p>
The implementation MAY support additional characters in file names,
depending on platform support.
        </p>
 * <p>
The implementation MAY forbid the use of additional characters in file
names, depending on the platform. The use of the path separator "/"
in file names MUST NOT be allowed. The "/" character is used as the (path)
component separator.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended that you avoid any dependency
on aspects that cannot be supported across many platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem,
the encoding used for the file path SHOULD be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
FileSystemManagerObject.prototype.filesystem = new FileSystemManager();

/**
 * The method invoked when the File.openStream asynchronous call completes successfully.
 *
 * @param {FileStream} filestream
 * @type void
 * @memberOf FileStreamSuccessCallback
 * @returns {void}
 */
FileStreamSuccessCallback.prototype.onsuccess = function(filestream){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} storages
 * @type void
 * @memberOf FileSystemStorageArraySuccessCallback
 * @returns {void}
 */
FileSystemStorageArraySuccessCallback.prototype.onsuccess = function(storages){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} files
 * @type void
 * @memberOf FileArraySuccessCallback
 * @returns {void}
 */
FileArraySuccessCallback.prototype.onsuccess = function(files){ return; };

/**
 * This API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual
filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em> where <em>&lt;rootname&gt;</em> is
the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or
directory relative to that root.
        </p>
 * <p>
The following virtual roots MUST be supported:
        </p>
 * <ul>
 * <li>images: the images location
 * <li>videos: the videos location
 * <li>music: the sounds location
 * <li>documents: the documents location
 * <li>downloads: the location for downloaded items
 * <li>ringtones: the location for ringtones (read-only location)
 * <li>wgt-package: the widget package location (read-only location)
 * <li>wgt-private: the widget private storage
 * <li>wgt-private-tmp: the widget private volatile storage area
 * </ul>
 * <p>
The file URI path is also supported. if you want to access other paths out of virtual root, 
for example '/tmp/', 'file:///tmp' could be used as location parameter.
        </p>
 * <p>
To access specific locations from those specified above, a file handle
must be retrieved using the filesystem.resolve call.
        </p>
 * <p>
A file handle represents either a file or a directory. For a file, the
isFile attribute is <em>true</em>. For a directory, the isDirectory attribute
is <em>true</em>. A file can be opened for read and write operations, using a
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation MUST support the use of the following
characters in file names:
        </p>
 * <ul>
 * <li>Letters (azAZ)
 * <li>Numbers (0-9)
 * <li>Blank spaces
 * <li>Underscores ("_")
 * <li>Hyphens ("-")
 * <li>Periods (".")
 * </ul>
 * <p>
The implementation MAY support additional characters in file names,
depending on platform support.
        </p>
 * <p>
The implementation MAY forbid the use of additional characters in file
names, depending on the platform. The use of the path separator "/"
in file names MUST NOT be allowed. The "/" character is used as the (path)
component separator.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended that you avoid any dependency
on aspects that cannot be supported across many platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem,
the encoding used for the file path SHOULD be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
Tizen.prototype.filesystem = new FileSystemManager();

/**
 * 
 *
 * @super Object
 * @constructor
 * @return {IrLedManagerObject}
 */
function IrLedManagerObject() {};
IrLedManagerObject.prototype = new Object();

/**
 * IrLedManager interface.
          <p>
This interface gives a way to access IrLed.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {IrLedManager}
 */
function IrLedManager() {};
IrLedManager.prototype = new Object();

/**
 * This API provides access to a device's IrLed.
 *
 * @feature http://developer.samsung.com/tizen/feature/irled
 * @type IrLedManager
 */
IrLedManagerObject.prototype.irled = new IrLedManager();

/**
 * Sends data to IrLed.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: If error is occured during sending data.               </li>
              <li>
NotSupportedError: if the feature is not supported.               </li>
            </ul>
           
 *
 * @param {String} data
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf IrLedManager
 * @returns {void}
 */
IrLedManager.prototype.send = function(data, onsuccess, onerror){ return; };

/**
 * Sends data to IrLed.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: If error is occured during sending data.               </li>
              <li>
NotSupportedError: if the feature is not supported.               </li>
            </ul>
           
 *
 * @param {String} data
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf WebAPIs
 * @returns {void}
 */
WebAPIs.prototype.send = function(data, onsuccess, onerror){ return; };

/**
 * Callback interface invoked when the motion data has changed. For example code, see MotionManager interface
 *
 * @super Object
 * @constructor
 * @return {MotionInfoSuccessCallback}
 */
function MotionInfoSuccessCallback() {};
MotionInfoSuccessCallback.prototype = new Object();

/**
 * This interface provides methods to access motion data.
 *
 * @super Object
 * @constructor
 * @return {MotionManager}
 */
function MotionManager() {};
MotionManager.prototype = new Object();

/**
 * This interface represents monitor result of sleep status.
 *
 * @super Object
 * @constructor
 * @return {MotionSleepMonitorInfo}
 */
function MotionSleepMonitorInfo() {};
MotionSleepMonitorInfo.prototype = new MotionInfo();

/**
 * This interface represents pedometer motion data.
 *
 * @super Object
 * @constructor
 * @return {MotionPedometerInfo}
 */
function MotionPedometerInfo() {};
MotionPedometerInfo.prototype = new MotionInfo();

/**
 * This is a common abstract interface used by different types of motion information objects.
 *
 * @super Object
 * @constructor
 * @return {MotionInfo}
 */
function MotionInfo() {};
MotionInfo.prototype = new Object();

/**
 * This interface defines what is instantiated by the object. The object allows access to the motion data.
 *
 * @super Object
 * @constructor
 * @return {MotionManagerObject}
 */
function MotionManagerObject() {};
MotionManagerObject.prototype = new Object();

/**
 * This interface represents HRM data.
 *
 * @super Object
 * @constructor
 * @return {MotionHRMInfo}
 */
function MotionHRMInfo() {};
MotionHRMInfo.prototype = new MotionInfo();

/**
 * Called when the motion data has changed.
 *
 * @param {MotionInfo} motionInfo
 * @type void
 * @memberOf MotionInfoSuccessCallback
 * @returns {void}
 */
MotionInfoSuccessCallback.prototype.onsuccess = function(motionInfo){ return; };

/**
 * Gets the current motion data for the requested type.
            <p>
Note that getMotionInfo method only support pedometer type. When the MotionType is not equal to PEDOMETER, TypeMismtatchError will be thrown
            </p>
            <p>
start method should be called before calling getMotionInfo method for turning on pedometer sensor.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If getMotionInfo method is called without calling start method with PEDOMETER.              </li>
            </ul>
           
 *
 * @param {MotionType} type
 * @param {MotionInfoSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MotionManager
 * @returns {void}
 */
MotionManager.prototype.getMotionInfo = function(type, successCallback, errorCallback){ return; };

/**
 * Starts and registers a change listener to be called when the motion data for a given motion type changes.
 *
 * @param {MotionType} type
 * @param {MotionInfoSuccessCallback} successCallback
 * @type void
 * @memberOf MotionManager
 * @returns {void}
 */
MotionManager.prototype.start = function(type, successCallback){ return; };

/**
 * Stops and unregisters a previously registered listener for changed motion data.
 *
 * @param {MotionType} type
 * @type void
 * @memberOf MotionManager
 * @returns {void}
 */
MotionManager.prototype.stop = function(type){ return; };

/**
 * An attribute to indicate the sleep status of each minute for certain period of time(currently 20 minutes).
 *
 * @type array
 */
MotionSleepMonitorInfo.prototype.sleepStatus = new array();

/**
 * An attribute to indicate the status of current steps.
 *
 * @type PedometerStepStatus
 */
MotionPedometerInfo.prototype.stepStatus = new PedometerStepStatus();

/**
 * An attribute to indicate current speed in km/h.
 *
 * @type Number
 */
MotionPedometerInfo.prototype.speed = new Number();

/**
 * An attribute to indicate step count per second.
 *
 * @type Number
 */
MotionPedometerInfo.prototype.walkingFrequency = new Number();

/**
 * An attribute to indicate cumulative distance traveled since the last start method call in meters.
 *
 * @type Number
 */
MotionPedometerInfo.prototype.cumulativeDistance = new Number();

/**
 * An attribute to indicate cumulative calories burned since the last start method call in kcal.
 *
 * @type Number
 */
MotionPedometerInfo.prototype.cumulativeCalorie = new Number();

/**
 * An attribute to indicate cumulative step count of the walk and the run since the last start method call. The value is the sum of all below step counts.
 *
 * @type Number
 */
MotionPedometerInfo.prototype.cumulativeTotalStepCount = new Number();

/**
 * An attribute to indicate cumulative walk step count since the last start method call.
 *
 * @type Number
 */
MotionPedometerInfo.prototype.cumulativeWalkStepCount = new Number();

/**
 * An attribute to indicate cumulative run step count since the last start method call.
 *
 * @type Number
 */
MotionPedometerInfo.prototype.cumulativeRunStepCount = new Number();

/**
 * This API defines interfaces and methods to manage motion data from various sensors on the device.
 * <p>
The following motion functionalities are provided:
        </p>
 * <ul>
 * <li>Start and stop notification of the motion data change.
 * <li>Get current motion data.
 * </ul>
 *
 * @feature http://developer.samsung.com/tizen/feature/pedometer
 * @type MotionManager
 */
MotionManagerObject.prototype.motion = new MotionManager();

/**
 * An attribute to indicate the heart rate in beats per minute. When a user takes off the watch device, the heartRate represents -3. When a user shakes the watch, the heartRate represents -2.
 *
 * @type Number
 */
MotionHRMInfo.prototype.heartRate = new Number();

/**
 * An attribute to indicate peak-to-peak interval in ms.
 *
 * @type Number
 */
MotionHRMInfo.prototype.rRInterval = new Number();

/**
 * This API defines interfaces and methods to manage motion data from various sensors on the device.
 * <p>
The following motion functionalities are provided:
        </p>
 * <ul>
 * <li>Start and stop notification of the motion data change.
 * <li>Get current motion data.
 * </ul>
 *
 * @feature http://developer.samsung.com/tizen/feature/pedometer
 * @type MotionManager
 */
WebAPIs.prototype.motion = new MotionManager();

/**
 * This interface invokes the success callback with an array of objects as an input parameter when the installed package list is retrieved.
          <p>
It is used in <em>tizen.package.getPackagesInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageInformationArraySuccessCallback}
 */
function PackageInformationArraySuccessCallback() {};
PackageInformationArraySuccessCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There is a <em>tizen.package </em>object that allows access to Package API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageManagerObject}
 */
function PackageManagerObject() {};
PackageManagerObject.prototype = new Object();

/**
 * This callback interface specifies methods that are invoked when a package is installed, updated, or uninstalled.
 *
 * @super Object
 * @constructor
 * @return {PackageInformationEventCallback}
 */
function PackageInformationEventCallback() {};
PackageInformationEventCallback.prototype = new Object();

/**
 * This interface defines the general information available to an installed package.
 *
 * @super Object
 * @constructor
 * @return {PackageInformation}
 */
function PackageInformation() {};
PackageInformation.prototype = new Object();

/**
 * This interface defines the package manager.
 *
 * @super Object
 * @constructor
 * @return {PackageManager}
 */
function PackageManager() {};
PackageManager.prototype = new Object();

/**
 * This callback interface specifies subscriptions for any notification on the progress or completion of requests.
 *
 * @super Object
 * @constructor
 * @return {PackageProgressCallback}
 */
function PackageProgressCallback() {};
PackageProgressCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf PackageInformationArraySuccessCallback
 * @returns {void}
 */
PackageInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application is able to be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
PackageManagerObject.prototype.package = new PackageManager();

/**
 * Called when a package is installed.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when a package is updated.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when a package is uninstalled.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the identifier of a package.
 *
 * @type PackageId
 */
PackageInformation.prototype.id = new PackageId();

/**
 * An attribute to store the package name.
 *
 * @type String
 */
PackageInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of a package.
 *
 * @type String
 */
PackageInformation.prototype.iconPath = new String();

/**
 * An attribute to store the package version.
 *
 * @type String
 */
PackageInformation.prototype.version = new String();

/**
 * An attribute to store the total installed size(package + data) of a package.
 *
 * @type Number
 */
PackageInformation.prototype.totalSize = new Number();

/**
 * An attribute to store the current data size of a package.
 *
 * @type Number
 */
PackageInformation.prototype.dataSize = new Number();

/**
 * An attribute to store the latest installed or updated time of a package.
 *
 * @type Date
 */
PackageInformation.prototype.lastModified = new Date();

/**
 * An attribute to store the author of a package.
 *
 * @type String
 */
PackageInformation.prototype.author = new String();

/**
 * An attribute to store the package description.
 *
 * @type String
 */
PackageInformation.prototype.description = new String();

/**
 * An attribute to store the application ID list of a package.
 *
 * @type array
 */
PackageInformation.prototype.appIds = new array();

/**
 * Installs a package with a specified package path on a device.
            <p>
This API provides a way to notify the progress and completion of an installation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found in the specified path.              </li>
              <li>
UnknownError - If it is not allowed to install the package by platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {String} path
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.install = function(path, progressCallback, errorCallback){ return; };

/**
 * Uninstalls the package with a specified package ID.
            <p>
This API provides a way to notify about the progress and completion of an uninstallation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found with specified ID.              </li>
              <li>
UnknownError - If it is not allowed to uninstall the package from the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageId} id
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.uninstall = function(id, progressCallback, errorCallback){ return; };

/**
 * Gets information of the installed packages.
            <p>
The result contains the snapshots of the installed packages information.
            </p>
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.getPackagesInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets information of an installed package.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns package information of the current application.
The list of installed packages and their package IDs is obtained using <em>getPackagesInfo()</em>.
            </p>
           
 *
 * @param {PackageId} id
 * @type PackageInformation
 * @memberOf PackageManager
 * @returns {PackageInformation}
 */
PackageManager.prototype.getPackageInfo = function(id){ var ret = new PackageInformation(); return ret; };

/**
 * Sets a listener to receive notifications for any changes made to the list of installed packages.
            <p>
This method sets a <em>PackageInformationEventCallback</em> type callback that is triggered when a package is installed, removed or updated.
            </p>
            <p>
The callback lasts until <em>unsetPackageInfoEventListener()</em> method is called.
            </p>
           
 *
 * @param {PackageInformationEventCallback} eventCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.setPackageInfoEventListener = function(eventCallback){ return; };

/**
 * Unsets the listener to stop receiving package notifications.
 *
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.unsetPackageInfoEventListener = function(){ return; };

/**
 * Called while the request is in progress.
 *
 * @param {PackageId} id
 * @param {Number} progress
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.onprogress = function(id, progress){ return; };

/**
 * Called while the request is completed.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.oncomplete = function(id){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application is able to be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
Tizen.prototype.package = new PackageManager();

/**
 * This callback interface defines notification for the screen state changes.
 *
 * @super Object
 * @constructor
 * @return {ScreenStateChangeCallback}
 */
function ScreenStateChangeCallback() {};
ScreenStateChangeCallback.prototype = new Object();

/**
 * This interface is used to request resource states, however, these requests can be overridden by the system. If the requests are overridden, the application is notified with the provided listener callback.
 *
 * @super Object
 * @constructor
 * @return {PowerManager}
 */
function PowerManager() {};
PowerManager.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.power </em>object that allows accessing of a functionality of the Power API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PowerManagerObject}
 */
function PowerManagerObject() {};
PowerManagerObject.prototype = new Object();

/**
 * Called on screen state change.
 *
 * @param {PowerScreenState} previousState
 * @param {PowerScreenState} changedState
 * @type void
 * @memberOf ScreenStateChangeCallback
 * @returns {void}
 */
ScreenStateChangeCallback.prototype.onchanged = function(previousState, changedState){ return; };

/**
 * Requests the minimum-state for a power resource.
 *
 * @param {PowerResource} resource
 * @param {PowerState} state
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.request = function(resource, state){ return; };

/**
 * Releases the power state request for the given resource.
 *
 * @param {PowerResource} resource
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.release = function(resource){ return; };

/**
 * Sets the screen state change callback and monitors its state changes.
 *
 * @param {ScreenStateChangeCallback} listener
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenStateChangeListener = function(listener){ return; };

/**
 * Unsets the screen state change callback and stop monitoring it.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.unsetScreenStateChangeListener = function(){ return; };

/**
 * Gets the screen brightness level of an application, from 0 to 1.
 *
 * @type Number
 * @memberOf PowerManager
 * @returns {Number}
 */
PowerManager.prototype.getScreenBrightness = function(){ var ret = new Number(); return ret; };

/**
 * Sets the screen brightness level for an application, from 0 to 1.
            <p>
An approximation is made for best effort when the given value is not exactly applicable by the hardware or system.
            </p>
           
 *
 * @param {Number} brightness
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenBrightness = function(brightness){ return; };

/**
 * Returns if the screen is on.
 *
 * @type Boolean
 * @memberOf PowerManager
 * @returns {Boolean}
 */
PowerManager.prototype.isScreenOn = function(){ var ret = new Boolean(); return ret; };

/**
 * Restores the screen brightness to the system default setting value.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.restoreScreenBrightness = function(){ return; };

/**
 * Turns on the screen.
            <p>
This API triggers turn-on process and then updates the status when it completes. While the operation is on-going, the isScreenOn() method returns false.
            </p>
           
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOn = function(){ return; };

/**
 * Turns off the screen.
            <p>
This API triggers turn-off process and then updates the status when it completes. While the operation is on-going, the isScreenOn() method returns true
            </p>
           
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOff = function(){ return; };

/**
 * This API provides support for requesting power management related resource states.
 * <p>
For more information on the Power features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/power.htm">Power Guide</a>.
        </p>
 *
 * @type PowerManager
 */
PowerManagerObject.prototype.power = new PowerManager();

/**
 * This API provides support for requesting power management related resource states.
 * <p>
For more information on the Power features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/power.htm">Power Guide</a>.
        </p>
 *
 * @type PowerManager
 */
Tizen.prototype.power = new PowerManager();

/**
 * The interface which contains the information of the accessory device that the Accessory Peer Agent runs on.
 *
 * @super Object
 * @constructor
 * @return {SAPeerAccessory}
 */
function SAPeerAccessory() {};
SAPeerAccessory.prototype = new Object();

/**
 * The callback function to be invoked when sending a file.
 *
 * @super Object
 * @constructor
 * @return {SAFileSendCallback}
 */
function SAFileSendCallback() {};
SAFileSendCallback.prototype = new Object();

/**
 * The main interface between Service Provider/Service Consumer applications and the Accessory Service Framework.
          <p>
This interface is the the main interface for an application to interact with the Accessory Service Framework.
The application should provide Accessory Service Profile information in an XML file, for example /res/&lt;yourname&gt;.xml, and declare the path of the XML file in 
the config.xml file of the your web application project as follows.
          </p>
          <p>
&lt;tizen:metadata key="AccessoryServicesLocation" value="res/serviceprofile.xml"/&gt;
          </p>
          <p>
An example of accessory XML file (/res/&lt;yourname&gt;.xml) specifying Accessory Service Profile details is illustrated below:
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SAAgent}
 */
function SAAgent() {};
SAAgent.prototype = new Object();

/**
 * Represents an instance of File Transfer between a Service Provider and a Service Consumer.
 *
 * @super Object
 * @constructor
 * @return {SAFileTransfer}
 */
function SAFileTransfer() {};
SAFileTransfer.prototype = new Object();

/**
 * Defines what is instantiated in the webapis object.
          <p>
There will be a webapis.sa object that allows accessing the
functionality of the SAP API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SAManagerObject}
 */
function SAManagerObject() {};
SAManagerObject.prototype = new Object();

/**
 * SAManager provides an API to get SAAgents specified in an Accessory Service Profile.
          <p>
SAManager interface will be always available within WebAPIs object in the ECMAScript hierarchy (window.webapis.sa). 
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SAManager}
 */
function SAManager() {};
SAManager.prototype = new Object();

/**
 * The interface which contains the information of an Accessory Peer Agent and the accessory device that the Accessory Peer Agent runs on.
 *
 * @super Object
 * @constructor
 * @return {SAPeerAgent}
 */
function SAPeerAgent() {};
SAPeerAgent.prototype = new Object();

/**
 * The callback function to be invoked when finding remote Accessory Peer Agents.
 *
 * @super Object
 * @constructor
 * @return {SAPeerAgentFindCallback}
 */
function SAPeerAgentFindCallback() {};
SAPeerAgentFindCallback.prototype = new Object();

/**
 * Callback for notification of connection request events.
 *
 * @super Object
 * @constructor
 * @return {ServiceConnectionCallback}
 */
function ServiceConnectionCallback() {};
ServiceConnectionCallback.prototype = new Object();

/**
 * The callback function to be invoked when receiving file.
 *
 * @super Object
 * @constructor
 * @return {SAFileReceiveCallback}
 */
function SAFileReceiveCallback() {};
SAFileReceiveCallback.prototype = new Object();

/**
 * Represents an instance of a Service Connection between a Service Provider and a Service Consumer.
 *
 * @super Object
 * @constructor
 * @return {SASocket}
 */
function SASocket() {};
SASocket.prototype = new Object();

/**
 * The callback function to be invoked when peer device is attached or detached.
 *
 * @super Object
 * @constructor
 * @return {SADeviceStatusCallback}
 */
function SADeviceStatusCallback() {};
SADeviceStatusCallback.prototype = new Object();

/**
 * Callback invoked when SAAgent object successfully retrieved from the accessory service profile.
 *
 * @super Object
 * @constructor
 * @return {SAAgentSuccessCallback}
 */
function SAAgentSuccessCallback() {};
SAAgentSuccessCallback.prototype = new Object();

/**
 * The method to be called when the data is received from the remote Accessory Peer Agent.
 *
 * @super Object
 * @constructor
 * @return {SADataReceiveCallback}
 */
function SADataReceiveCallback() {};
SADataReceiveCallback.prototype = new Object();

/**
 * The callback function to be invoked when the service connection was lost.
 *
 * @super Object
 * @constructor
 * @return {SASocketStatusCallback}
 */
function SASocketStatusCallback() {};
SASocketStatusCallback.prototype = new Object();

/**
 * The address of the Accessory Device.
 *
 * @type String
 */
SAPeerAccessory.prototype.deviceAddress = new String();

/**
 * The name of the Accessory Device.
 *
 * @type String
 */
SAPeerAccessory.prototype.deviceName = new String();

/**
 * The product identifier of the Accessory Device.
 *
 * @type String
 */
SAPeerAccessory.prototype.productId = new String();

/**
 * The transport type supported by Accessory Device.
 *
 * @type TransportType
 */
SAPeerAccessory.prototype.transportType = new TransportType();

/**
 * The vendor identifier of the Accessory Device.
 *
 * @type String
 */
SAPeerAccessory.prototype.vendorId = new String();

/**
 * This method provides progress information.
 *
 * @param {TransferId} id
 * @param {Number} progress
 * @type void
 * @memberOf SAFileSendCallback
 * @returns {void}
 */
SAFileSendCallback.prototype.onprogress = function(id, progress){ return; };

/**
 * This method indicates the file transfer is complete.
 *
 * @param {TransferId} id
 * @param {String} localPath
 * @type void
 * @memberOf SAFileSendCallback
 * @returns {void}
 */
SAFileSendCallback.prototype.oncomplete = function(id, localPath){ return; };

/**
 * This method is invoked when an error occurs during file send.
 *
 * @param {SAFileSendErrorCode} errorCode
 * @param {TransferId} id
 * @type void
 * @memberOf SAFileSendCallback
 * @returns {void}
 */
SAFileSendCallback.prototype.onerror = function(errorCode, id){ return; };

/**
 * The ID read from the service profile which is the Service Profile identifier of the Service Provider or Service Consumer.
 *
 * @type String
 */
SAAgent.prototype.id = new String();

/**
 * The name read from the service profile which is the friendly name of the Service Provider or Service Consumer.
 *
 * @type String
 */
SAAgent.prototype.name = new String();

/**
 * The role of the SAAgent read from the service profile. Available values are "PROVIDER" and "CONSUMER".
 *
 * @type SARole
 */
SAAgent.prototype.role = new SARole();

/**
 * The channel information read from service profile.
 *
 * @type array
 */
SAAgent.prototype.channelIds = new array();

/**
 * Request to establish Service Connection with remote Accessory Peer Agent.
            <p>
A Service Provider or Service Consumer application may call this method to establish a Service Connection with a remote Accessory Peer Agent.
The application will be notified of the Service Connection request 
result via the ServiceConnectionCallback registered by setServiceConnectionListener(), which reports whether the request was accepted and the Service Connection 
established, or the request for Service Connection was not successful.  
            </p>
            <p>
The application is expected to ensure the availability of Accessory Peer Agent before calling this method. 
This method is typically called in the SAPeerAgentFindSuccessCallback callback.
            </p>
           
 *
 * @param {SAPeerAgent} peerAgent
 * @type void
 * @memberOf SAAgent
 * @returns {void}
 */
SAAgent.prototype.requestServiceConnection = function(peerAgent){ return; };

/**
 * The method to set a listener to get both connection request and connection establish event.
            <ul>
              <li>
the onconnect() method of ServiceConnectionCallback is invoked when the connection between Service Provider and Service Consumer application is established.              </li>
              <li>
the onrequest() method of ServiceConnectionCallback the invoked when a remote Accessory Peer Agent requests Service Connection with this application.              </li>
              <li>
the onerror() method of ServiceConnectionCallback is invoked when an error occurs during the connect/request operation.               </li>
            </ul>
           
 *
 * @param {ServiceConnectionCallback} callback
 * @type void
 * @memberOf SAAgent
 * @returns {void}
 */
SAAgent.prototype.setServiceConnectionListener = function(callback){ return; };

/**
 * A method to accept the incoming Service Connection request from the remote Accessory Peer Agent.
 *
 * @param {SAPeerAgent} peerAgent
 * @type void
 * @memberOf SAAgent
 * @returns {void}
 */
SAAgent.prototype.acceptServiceConnectionRequest = function(peerAgent){ return; };

/**
 * A method to reject the incoming Service Connection request from the remote Accessory Peer Agent.
 *
 * @param {SAPeerAgent} peerAgent
 * @type void
 * @memberOf SAAgent
 * @returns {void}
 */
SAAgent.prototype.rejectServiceConnectionRequest = function(peerAgent){ return; };

/**
 * A method to find matching accessory Peer Agent.
            <p>
This method starts discovery of matching Accessory Peer Agents. If any matching Accessory Peer Agent is found, the application will be notified via the onpeeragentfound callback that is registered by the setPeerAgentFindListener function. 
If multiple matching Accessory Peer Agents are found, the callback will be invoked multiple times, one for each matching Accessory Peer Agent.
            </p>
           
 *
 * @type void
 * @memberOf SAAgent
 * @returns {void}
 */
SAAgent.prototype.findPeerAgents = function(){ return; };

/**
 * The method to set a listener to get found remote Accessory Peer Agents.
            <ul>
              <li>
onpeeragentfound() of SAPeerAgentFindCallback invoked when a remote Accessory Peer Agent is found.              </li>
              <li>
onpeeragentupdated() of SAPeerAgentFindCallback invoked to notify application of a change in the status of a peer agent on remote device.              </li>
              <li>
onerror() of SAPeerAgentFindCallback invoked when an error occurs during remote Accessory Peer Agent finding.               </li>
            </ul>
           
 *
 * @param {SAPeerAgentFindCallback} callback
 * @type void
 * @memberOf SAAgent
 * @returns {void}
 */
SAAgent.prototype.setPeerAgentFindListener = function(callback){ return; };

/**
 * The method to get an object witch all file transfer functionalities can be accessed.
 *
 * @type SAFileTransfer
 * @memberOf SAAgent
 * @returns {SAFileTransfer}
 */
SAAgent.prototype.getSAFileTransfer = function(){ var ret = new SAFileTransfer(); return ret; };

/**
 * The defalut path where the received file is stored.
 *
 * @type String
 */
SAFileTransfer.prototype.defaultReceivePath = new String();

/**
 * Send a file to connected peer.
            <p>
the filePath is either a path from virtual root or the URI path as described in the Filesystem API.
            </p>
           
 *
 * @param {SAPeerAgent} peerAgent
 * @param {String} filePath
 * @type Number
 * @memberOf SAFileTransfer
 * @returns {Number}
 */
SAFileTransfer.prototype.sendFile = function(peerAgent, filePath){ var ret = new Number(); return ret; };

/**
 * This API is for the sender to set a listener for getting the send file status, such as on file progress, on send complete, and on any error status.
 *
 * @param {SAFileSendCallback} callback
 * @type void
 * @memberOf SAFileTransfer
 * @returns {void}
 */
SAFileTransfer.prototype.setFileSendListener = function(callback){ return; };

/**
 * This API is for the receiver to set a listener for file receive status, such as on receive file, on file progress, on receive complete, and on any error situation.
 *
 * @param {SAFileReceiveCallback} callback
 * @type void
 * @memberOf SAFileTransfer
 * @returns {void}
 */
SAFileTransfer.prototype.setFileReceiveListener = function(callback){ return; };

/**
 * This method needs to be called by the receiver of the file.
 *
 * @param {TransferId} id
 * @param {String} localPath
 * @type void
 * @memberOf SAFileTransfer
 * @returns {void}
 */
SAFileTransfer.prototype.receiveFile = function(id, localPath){ return; };

/**
 * Cancel ongoing file transfer. This may be called by sender or receiver of the file.This API is availabe for both the sender and the receiver side.
 *
 * @param {TransferId} id
 * @type void
 * @memberOf SAFileTransfer
 * @returns {void}
 */
SAFileTransfer.prototype.cancelFile = function(id){ return; };

/**
 * A method to reject the incoming transfer request from the remote Accessory Peer Agent.
 *
 * @param {TransferId} id
 * @type void
 * @memberOf SAFileTransfer
 * @returns {void}
 */
SAFileTransfer.prototype.rejectFile = function(id){ return; };

/**
 * The Samsung Accessory Service Framework allows service discovery and the creation of Accessory Service Connections between Application Level Entities (ALE) for data exchange using the Samsung Accessory Protocol(SAP). This functionality is available through the SAP Service API.
 * <p>
The entities in the Samsung Accessory Service are:
        </p>
 * <ul>
 * <li>: an Accessory Service Profile defines the roles of Service Provider and Service Consumer, and specifies the formats for application level protocol messages and message sequences between Service Consumer and Service Provider.
 * <li>: a Service Provider is an ALE whose role is defined in the associated Accessory Service Profile specification.
 * <li>: a Service Consumer is an ALE whose role is defined in the associated Accessory Service Profile specification.
 * <li>: an Accessory Peer Agent is the main interface between the Accessory Service Framework and a Service Provider or Service Consumer. From the perspective of the Accessory Service Framework, Service Providers and Service Consumers are considered Accessory Peer Agents.
 * <li>: a Service Connection represents the dialog between a Service Consumer and a Service Provider.
 * <li>: a Service Channel is a logical data channel between a Service Consumer and a Service Provider.
 * </ul>
 *
 * @feature http://developer.samsung.com/tizen/feature/network.accessory_protocol
 * @type SAManager
 */
SAManagerObject.prototype.sa = new SAManager();

/**
 * Request SAAgent specified in Accessory Service Profile.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the device does not support the Samsung Accessory feature, the error callback will be invoked with the message VENDOR_NOT_SUPPORTED or DEVICE_NOT_SUPPORTED               </li>
            </ul>
           
 *
 * @param {SAAgentSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SAManager
 * @returns {void}
 */
SAManager.prototype.requestSAAgent = function(successCallback, errorCallback){ return; };

/**
 * Sets a listener that is called when peer device is attached or detached.
 *
 * @param {SADeviceStatusCallback} callback
 * @type void
 * @memberOf SAManager
 * @returns {void}
 */
SAManager.prototype.setDeviceStatusListener = function(callback){ return; };

/**
 * The accessory device that the Accessory Peer Agent runs on.
 *
 * @type SAPeerAccessory
 */
SAPeerAgent.prototype.peerAccessory = new SAPeerAccessory();

/**
 * The name of the application that the Accessory Peer Agent belong to.
 *
 * @type String
 */
SAPeerAgent.prototype.appName = new String();

/**
 * The maximum payload size supported for sendData() and secureSendData().
 *
 * @type Number
 */
SAPeerAgent.prototype.maxAllowedDataSize = new Number();

/**
 * The identifier of the Peer Agent.
 *
 * @type String
 */
SAPeerAgent.prototype.peerId = new String();

/**
 * The Service Profile Specification version that the Accessory Peer Agent supports.
 *
 * @type String
 */
SAPeerAgent.prototype.profileVersion = new String();

/**
 * Called whenever a remote Accessory Peer Agent is found.
 *
 * @param {SAPeerAgent} peerAgent
 * @type void
 * @memberOf SAPeerAgentFindCallback
 * @returns {void}
 */
SAPeerAgentFindCallback.prototype.onpeeragentfound = function(peerAgent){ return; };

/**
 * This callabck is invoked to notify application of a change in the status of a peer agent on remote device. This callback will be invoked only if you had previously initiated a service discovery request by a call to findPeerAgens(). The status of the discovered peer is contained in the result parameter of the callback and indicates the availability or unavailability of the peer agent. If there is more than one service agent for which the status is updated (on one or more connected accessory devices), this callback will be invoked once for each peer service agent.
 *
 * @param {SAPeerAgent} peerAgent
 * @param {PeerAgentStatus} status
 * @type void
 * @memberOf SAPeerAgentFindCallback
 * @returns {void}
 */
SAPeerAgentFindCallback.prototype.onpeeragentupdated = function(peerAgent, status){ return; };

/**
 * Called when any kind of error occurs while finding remote Accessory Peer Agents.
 *
 * @param {SAPeerAgentFindErrorCode} errorCode
 * @type void
 * @memberOf SAPeerAgentFindCallback
 * @returns {void}
 */
SAPeerAgentFindCallback.prototype.onerror = function(errorCode){ return; };

/**
 * This callback is invoked when a remote Accessory Peer Agent requests a Service Connection with this application.
            <p>
Application shall call SAAgnet.acceptServiceConnectionRequest() to accept Service Connection request, 
or call SAAgnet.rejectServiceConnectionRequest() to reject in this callback.
            </p>
           
 *
 * @param {SAPeerAgent} peerAgent
 * @type void
 * @memberOf ServiceConnectionCallback
 * @returns {void}
 */
ServiceConnectionCallback.prototype.onrequest = function(peerAgent){ return; };

/**
 * This callback is invoked when the connection between the Service Provider and the Service Consumer is established.
 *
 * @param {SASocket} socket
 * @type void
 * @memberOf ServiceConnectionCallback
 * @returns {void}
 */
ServiceConnectionCallback.prototype.onconnect = function(socket){ return; };

/**
 * This callback is invoked when any kind of error occurs during connect/request operation.
 *
 * @param {SAServiceConnectionErrorCode} errorCode
 * @type void
 * @memberOf ServiceConnectionCallback
 * @returns {void}
 */
ServiceConnectionCallback.prototype.onerror = function(errorCode){ return; };

/**
 * This method is invoked on the receiver side when there is an incoming file transfer request from the sender. The receiver needs to have registered beforehand for the file transfer service to receive this callback.
 *
 * @param {TransferId} id
 * @param {String} fileName
 * @type void
 * @memberOf SAFileReceiveCallback
 * @returns {void}
 */
SAFileReceiveCallback.prototype.onreceive = function(id, fileName){ return; };

/**
 * This method provides the progress information.
 *
 * @param {TransferId} id
 * @param {Number} progress
 * @type void
 * @memberOf SAFileReceiveCallback
 * @returns {void}
 */
SAFileReceiveCallback.prototype.onprogress = function(id, progress){ return; };

/**
 * This method indicates the file transfer is complete.
 *
 * @param {TransferId} id
 * @param {String} localPath
 * @type void
 * @memberOf SAFileReceiveCallback
 * @returns {void}
 */
SAFileReceiveCallback.prototype.oncomplete = function(id, localPath){ return; };

/**
 * This method is invoked when an error occurs during file receive.
 *
 * @param {SAFileReceiveErrorCode} errorCode
 * @param {TransferId} id
 * @type void
 * @memberOf SAFileReceiveCallback
 * @returns {void}
 */
SAFileReceiveCallback.prototype.onerror = function(errorCode, id){ return; };

/**
 * An object containing the information about the connected remote Accessory Peer Agent, and the information about the Accessory Device that the Accessory Peer Agent runs on.
 *
 * @type SAPeerAgent
 */
SASocket.prototype.peerAgent = new SAPeerAgent();

/**
 * Closes the Service Connection with a remote Accessory Peer Agent.
 *
 * @type void
 * @memberOf SASocket
 * @returns {void}
 */
SASocket.prototype.close = function(){ return; };

/**
 * Returns the status of the underlying Accessory Service connection.
 *
 * @type Boolean
 * @memberOf SASocket
 * @returns {Boolean}
 */
SASocket.prototype.isConnected = function(){ var ret = new Boolean(); return ret; };

/**
 * Send sting data to a remote Accessory Peer Agent.
            <p>
Send a string to the specified Service Channel. The string must not be longer than value of maxAllowedDataSize attribute in SAPeerAgent interface.
            </p>
           
 *
 * @param {SAChannelId} channelId
 * @param {String} data
 * @type void
 * @memberOf SASocket
 * @returns {void}
 */
SASocket.prototype.sendData = function(channelId, data){ return; };

/**
 * Send encrypted sting data to a remote Accessory Peer Agent.
            <p>
Send an encrypted string to the specified Service Channel. The string must not be longer than value of maxAllowedDataSize attribute in SAPeerAgent interface.
            </p>
           
 *
 * @param {SAChannelId} channelId
 * @param {String} data
 * @type void
 * @memberOf SASocket
 * @returns {void}
 */
SASocket.prototype.sendSecureData = function(channelId, data){ return; };

/**
 * Sets a listener that is called when data is received from the remote Accessory Peer Agent.
 *
 * @param {SADataReceiveCallback} callback
 * @type void
 * @memberOf SASocket
 * @returns {void}
 */
SASocket.prototype.setDataReceiveListener = function(callback){ return; };

/**
 * Sets a listener to monitor the socket's connection status.
            <p>
The connection may be lost for various reasons.
For example: 
            </p>
            <ul>
              <li>
The accessory device went out of range for the wireless connectivity.              </li>
              <li>
The Accessory Peer Agent terminated the Service Connection.              </li>
              <li>
Error occurred which resulted in the Service Connection being terminated.              </li>
            </ul>
            <p>
The reason of Service Connection lost is indicated via the errorCode. <br/>            </p>
            <p>
The application is expected to implement appropriate error handling mechanisms in this callback method. 
For example, the application should stop sending data on channels of the Service Connection if the connection is lost. <br/>            </p>
           
 *
 * @param {SASocketStatusCallback} callback
 * @type void
 * @memberOf SASocket
 * @returns {void}
 */
SASocket.prototype.setSocketStatusListener = function(callback){ return; };

/**
 * This callback is invoked when peer device is attached or detached.
 *
 * @param {TransportType} type
 * @param {DeviceStatus} status
 * @type void
 * @memberOf SADeviceStatusCallback
 * @returns {void}
 */
SADeviceStatusCallback.prototype.ondevicestatus = function(type, status){ return; };

/**
 * This callback is invoked when agents specified in the Service Profile were successfully retrieved.
 *
 * @param {array} agents
 * @type void
 * @memberOf SAAgentSuccessCallback
 * @returns {void}
 */
SAAgentSuccessCallback.prototype.onsuccess = function(agents){ return; };

/**
 * Called when the data received from the remote Accessory Peer Agent.
 *
 * @param {SAChannelId} channelId
 * @param {String} data
 * @type void
 * @memberOf SADataReceiveCallback
 * @returns {void}
 */
SADataReceiveCallback.prototype.onreceive = function(channelId, data){ return; };

/**
 * Called to indicate to the application that the Service Connection with the Accessory Peer Agent was lost.
 *
 * @param {SASocketStatusErrorCode} reason
 * @type void
 * @memberOf SASocketStatusCallback
 * @returns {void}
 */
SASocketStatusCallback.prototype.onconnectionlost = function(reason){ return; };

/**
 * The Samsung Accessory Service Framework allows service discovery and the creation of Accessory Service Connections between Application Level Entities (ALE) for data exchange using the Samsung Accessory Protocol(SAP). This functionality is available through the SAP Service API.
 * <p>
The entities in the Samsung Accessory Service are:
        </p>
 * <ul>
 * <li>: an Accessory Service Profile defines the roles of Service Provider and Service Consumer, and specifies the formats for application level protocol messages and message sequences between Service Consumer and Service Provider.
 * <li>: a Service Provider is an ALE whose role is defined in the associated Accessory Service Profile specification.
 * <li>: a Service Consumer is an ALE whose role is defined in the associated Accessory Service Profile specification.
 * <li>: an Accessory Peer Agent is the main interface between the Accessory Service Framework and a Service Provider or Service Consumer. From the perspective of the Accessory Service Framework, Service Providers and Service Consumers are considered Accessory Peer Agents.
 * <li>: a Service Connection represents the dialog between a Service Consumer and a Service Provider.
 * <li>: a Service Channel is a logical data channel between a Service Consumer and a Service Provider.
 * </ul>
 *
 * @feature http://developer.samsung.com/tizen/feature/network.accessory_protocol
 * @type SAManager
 */
WebAPIs.prototype.sa = new SAManager();

/**
 * This property reflects the information of the device orientation in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceOrientation}
 */
function SystemInfoDeviceOrientation() {};
SystemInfoDeviceOrientation.prototype = new SystemInfoProperty();

/**
 * This property reflects the peripheral information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPeripheral}
 */
function SystemInfoPeripheral() {};
SystemInfoPeripheral.prototype = new SystemInfoProperty();

/**
 * Systemfinfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument. 
It is used in asynchronous
operations, such as getPropertyValue() or addPropertyValueChangeListener()
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertySuccessCallback}
 */
function SystemInfoPropertySuccessCallback() {};
SystemInfoPropertySuccessCallback.prototype = new Object();

/**
 * This property exposes the data storage devices connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorage}
 */
function SystemInfoStorage() {};
SystemInfoStorage.prototype = new SystemInfoProperty();

/**
 * This is a common abstract interface used by different types of system information objects.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoProperty}
 */
function SystemInfoProperty() {};
SystemInfoProperty.prototype = new Object();

/**
 * SystemInfoDeviceCapability object.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceCapability}
 */
function SystemInfoDeviceCapability() {};
SystemInfoDeviceCapability.prototype = new Object();

/**
 * This property reflects the state of the CPUs available to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCpu}
 */
function SystemInfoCpu() {};
SystemInfoCpu.prototype = new SystemInfoProperty();

/**
 * This property exposes a single storage device connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorageUnit}
 */
function SystemInfoStorageUnit() {};
SystemInfoStorageUnit.prototype = new SystemInfoProperty();

/**
 * This property reflects the general state of the system's battery
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBattery}
 */
function SystemInfoBattery() {};
SystemInfoBattery.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBuild}
 */
function SystemInfoBuild() {};
SystemInfoBuild.prototype = new SystemInfoProperty();

/**
 * This entry interface queries the information of a system.
          <p>
This API offers methods for retrieving system information
and for subscribing notifications of system information changes.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfo}
 */
function SystemInfo() {};
SystemInfo.prototype = new Object();

/**
 * This property reflects the information of the Display.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDisplay}
 */
function SystemInfoDisplay() {};
SystemInfoDisplay.prototype = new SystemInfoProperty();

/**
 * Defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a tizen.systeminfo object that allows accessing the
functionality of the SystemInfo API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoObject}
 */
function SystemInfoObject() {};
SystemInfoObject.prototype = new Object();

/**
 * Represents the status of the current device orientation.
 *
 * @type SystemInfoDeviceOrientationStatus
 */
SystemInfoDeviceOrientation.prototype.status = new SystemInfoDeviceOrientationStatus();

/**
 * whether the device is in autorotation.
 *
 * @type Boolean
 */
SystemInfoDeviceOrientation.prototype.isAutoRotation = new Boolean();

/**
 * Represents the video out status.
 *
 * @type Boolean
 */
SystemInfoPeripheral.prototype.isVideoOutputOn = new Boolean();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @param {SystemInfoProperty} prop
 * @type void
 * @memberOf SystemInfoPropertySuccessCallback
 * @returns {void}
 */
SystemInfoPropertySuccessCallback.prototype.onsuccess = function(prop){ return; };

/**
 * The array of storage units connected to this device.
 *
 * @type array
 */
SystemInfoStorage.prototype.units = new array();

/**
 * Indicates whether the device supports Bluetooth.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.bluetooth = new Boolean();

/**
 * Indicates whether the device supports NFC.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfc = new Boolean();

/**
 * Indicates whether the device supports NFC reserved push.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfcReservedPush = new Boolean();

/**
 * The number of point in Multi-point touch.
 *
 * @type Number
 */
SystemInfoDeviceCapability.prototype.multiTouchCount = new Number();

/**
 * Indicates whether the device supports the built-in Keyboard.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboard = new Boolean();

/**
 * Indicates whether the device supports the built-in keyboard layout.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboardLayout = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifi = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi direct.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifiDirect = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.opengles = new Boolean();

/**
 * The device 3DC texture format for OpenGL-ES. One example of possible output is as follows: "3dc/atc/etc/ptc/pvrtc/utc"
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.openglestextureFormat = new String();

/**
 * Indicates whether the device supports OpenGL-ES version 1.1.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion1_1 = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES version 2.0.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion2_0 = new Boolean();

/**
 * Indicates whether the device supports FM radio.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.fmRadio = new Boolean();

/**
 * The version of the platform in the format. For example, represents a platform version where the major version is and the minor and build versions are .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformVersion = new String();

/**
 * The version of the Web API in the format. For example, represents a web api version where the major version is and the minor version is .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.webApiVersion = new String();

/**
 * The version of the native API in the format.For example, represents a native api version where the major version is and the minor version is .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.nativeApiVersion = new String();

/**
 * The name of the platform.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformName = new String();

/**
 * Indicates whether the device supports camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.camera = new Boolean();

/**
 * Indicates whether the device supports front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFront = new Boolean();

/**
 * Indicates whether the device supports flash on the front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFrontFlash = new Boolean();

/**
 * Indicates whether the device supports back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBack = new Boolean();

/**
 * Indicates whether the device supports flash on the back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBackFlash = new Boolean();

/**
 * Indicates whether the device supports CPS or not.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.location = new Boolean();

/**
 * Indicates whether the device supports GPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationGps = new Boolean();

/**
 * Indicates whether the device supports WPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationWps = new Boolean();

/**
 * Indicates whether the device supports microphone.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.microphone = new Boolean();

/**
 * Indicates whether the device supports USB host.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbHost = new Boolean();

/**
 * Indicates whether the device supports USB accessory.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbAccessory = new Boolean();

/**
 * Indicates whether the device supports RCA output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputRca = new Boolean();

/**
 * Indicates whether the device supports HDMI output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputHdmi = new Boolean();

/**
 * The device CPU architecture. The possible values for this attribute are: armv6, armv7, x86.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreCpuArch = new String();

/**
 * The device FPU architecture. The possible values for this attribute are: vfpv3 / sse2 / sse3 / ssse3.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreFpuArch = new String();

/**
 * Indicates whether the device supports VOIP.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.sipVoip = new Boolean();

/**
 * The device unique ID.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.duid = new String();

/**
 * Indicates whether the device supports speech recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechRecognition = new Boolean();

/**
 * Indicates whether the device supports speech synthesis.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechSynthesis = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometer = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometer = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscope = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscopeWakeup = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometer = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometer = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximity = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximityWakeup = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeter = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeterWakeup = new Boolean();

/**
 * Indicates whether the device supports data encryption.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.dataEncryption = new Boolean();

/**
 * Indicates whether the device supports hardware acceleration for 2D/3D graphics.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.graphicsAcceleration = new Boolean();

/**
 * Indicates whether the device supports push service.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.push = new Boolean();

/**
 * Indicates whether the device supports the telephony feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephony = new Boolean();

/**
 * Indicates whether the device supports the mms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonyMms = new Boolean();

/**
 * Indicates whether the device supports the sms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonySms = new Boolean();

/**
 * Indicates whether the device supports the screen normal size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSizeNormal = new Boolean();

/**
 * Indicates whether the device supports the 480 * 800 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize480_800 = new Boolean();

/**
 * Indicates whether the device supports the 720 * 1280 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize720_1280 = new Boolean();

/**
 * Indicates whether the device supports auto rotation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.autoRotation = new Boolean();

/**
 * Indicates whether the device supports shell app widget.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.shellAppWidget = new Boolean();

/**
 * Indicates whether the device supports vision image recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionImageRecognition = new Boolean();

/**
 * Indicates whether the device supports vision qrcode generation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeGeneration = new Boolean();

/**
 * Indicates whether the device supports vision qrcode recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeRecognition = new Boolean();

/**
 * Indicates whether the device supports vision face recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionFaceRecognition = new Boolean();

/**
 * Indicates whether the device supports secure element.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.secureElement = new Boolean();

/**
 * Indicates whether the device supports native osp API.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nativeOspCompatible = new Boolean();

/**
 * Represents the profile of the current device.
 *
 * @type SystemInfoProfile
 */
SystemInfoDeviceCapability.prototype.profile = new SystemInfoProfile();

/**
 * An attribute to indicate the current CPU load, as a number between and , representing the minimum and maximum values allowed on this system. Any threshold parameter used in a watch function to monitor this property applies to this attribute.
 *
 * @type Number
 */
SystemInfoCpu.prototype.load = new Number();

/**
 * The type of a storage device. The value is one of the constants defined for this type.
 * <p>
The supported storage unit types are:
            </p>
 * <ul>
 * <li>UNKNOWN
 * <li>INTERNAL
 * <li>USB_HOST
 * <li>MMC
 * </ul>
 *
 * @type String
 */
SystemInfoStorageUnit.prototype.type = new String();

/**
 * The amount of data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.capacity = new Number();

/**
 * The amount of available data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.availableCapacity = new Number();

/**
 * An attribute to indicate whether a device can be removed or not.
 * <p>
The following values are supported:
            </p>
 * <ul>
 * <li>- If this storage unit can be removed from the system (such as an sdcard unplugged)
 * <li>- If this storage unit cannot be removed from the system
 * </ul>
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemovable = new Boolean();

/**
 * true if this unit can be removed from the system (such as an sdcard unplugged), false otherwise.
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemoveable = new Boolean();

/**
 * An attribute to specify the remaining level of an internal battery, scaled from to :
 * <ul>
 * <li>indicates that the battery level is the lowest and the system is about to enter shutdown mode.
 * <li>indicates that the system's charge is maximum.
 * </ul>
 * <p>
Any threshold parameter used in a watch operation to monitor this property applies to this attribute.
            </p>
 *
 * @type Number
 */
SystemInfoBattery.prototype.level = new Number();

/**
 * Indicates whether the battery source is currently charging.
 *
 * @type Boolean
 */
SystemInfoBattery.prototype.isCharging = new Boolean();

/**
 * Represents the model name of the current device.
 *
 * @type String
 */
SystemInfoBuild.prototype.model = new String();

/**
 * Represents the manufacturer of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.manufacturer = new String();

/**
 * Represents the build version information of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.buildVersion = new String();

/**
 * Gets the capabilities of the device.
            <p>
The function must synchronously acquire the capabilities of the device. 
            </p>
           
 *
 * @type SystemInfoDeviceCapability
 * @memberOf SystemInfo
 * @returns {SystemInfoDeviceCapability}
 */
SystemInfo.prototype.getCapabilities = function(){ var ret = new SystemInfoDeviceCapability(); return ret; };

/**
 * Gets the current value of a specified system property.
            <p>
The function must asynchronously acquire the current value of the requested property. If it is successful,
the successCallback must be invoked with an object containing the information provided by the property.
            </p>
            <p>
The <em>errorCallback() </em>can be launched with any of these error types:
            </p>
            <ul>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValue = function(property, successCallback, errorCallback){ return; };

/**
 * Adds a listener to allow tracking of changes in one or more system properties.
            <p>
When called, it immediately returns and then asynchronously starts a watch process defined by the following steps:
            </p>
            <p>
1. Acquire the system's current values for the property requested. 
If successful, it invokes the associated successCallback,
passing the resulting property value. 
The type of the passed object is indicated by the property's value type in the definitions below.
For example, when <var>BATTERY</var> is passed for <em>SystemInfoPropertyId</em>, <em>SystemInfoBattery </em>object is returned.<br/>            </p>
            <p>
2. Register the successCallback to receive system events that the status of the requested properties may have changed.
            </p>
            <p>
3. When a system event is successfully received invoke the associated successCallback with an object containing the property
values.
            </p>
            <p>
4. Repeat step 3 until removePropertyValueChangeListener function is called.
            </p>
            <p>
If property value is 'BUILD', listener would not be registered because 'BUILD' property's value is a fixed value.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueChangeListener = function(property, successCallback, options){ var ret = new Number(); return ret; };

/**
 * Unsubscribes notifications for property changes set up by addPropertyValueChangeListener.
            <p>
If a valid listenerId argument is passed that corresponds to a subscription
already place, then the watch process MUST immediately terminate and no further
callback is invoked. If the listenerId argument does not correspond to a valid subscription,
the method should return without any further action.
            </p>
           
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.removePropertyValueChangeListener = function(listenerId){ return; };

/**
 * The total number of addressable pixels in the horizontal direction of a rectangular entity (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionWidth = new Number();

/**
 * The total number of addressable pixels in the vertical direction of a rectangular element (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionHeight = new Number();

/**
 * Resolution of this device, along its width, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchWidth = new Number();

/**
 * Resolution of this device, along its height, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchHeight = new Number();

/**
 * The display's physical width in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalWidth = new Number();

/**
 * The display's physical height in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalHeight = new Number();

/**
 * The current brightness of a display ranging between to .
 *
 * @type Number
 */
SystemInfoDisplay.prototype.brightness = new Number();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values. 
        </p>
 * <p>
The following provides an overview of the tree data structure:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>CPU
 * <li>STORAGE
 * <li>DISPLAY
 * <li>DEVICE_ORIENTATION
 * <li>BUILD
 * <li>PERIPHERAL
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @type SystemInfo
 */
SystemInfoObject.prototype.systeminfo = new SystemInfo();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values. 
        </p>
 * <p>
The following provides an overview of the tree data structure:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>CPU
 * <li>STORAGE
 * <li>DISPLAY
 * <li>DEVICE_ORIENTATION
 * <li>BUILD
 * <li>PERIPHERAL
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @type SystemInfo
 */
Tizen.prototype.systeminfo = new SystemInfo();

/**
 * Defines what is instantiated in the tizen object by the Tizen Platform.
          <p>
There will be a tizen.time object that allows accessing the
functionality of the Time API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TimeManagerObject}
 */
function TimeManagerObject() {};
TimeManagerObject.prototype = new Object();

/**
 * The TimeUtil class that provides access to the time API.
          <p>
This interface offers methods to manage date / time as well as timezones such as:
          </p>
          <ul>
            <li>
Get the current date / time using getCurrentDateTime().            </li>
            <li>
Get timezones using getLocalTimezone() and getAvailableTimezones().            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {TimeUtil}
 */
function TimeUtil() {};
TimeUtil.prototype = new Object();

/**
 * The TZDate object represents information regarding a given date / time in a predefined timezone. If its date / time is exceed the platform limit, TZDate will be invalid.
 *
 * @super Object
 * @constructor
 * @return {TZDate}
 */
function TZDate() {};
TZDate.prototype = new Object();

/**
 * The TimeDuration object that contains the length and its associated time unit.
 *
 * @super Object
 * @constructor
 * @return {TimeDuration}
 */
function TimeDuration() {};
TimeDuration.prototype = new Object();

/**
 * The Time API provides information regarding date / time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost. 
        </p>
 * <p>
This API can be used to get TZDate objects with full time zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>. 
        </p>
 *
 * @type TimeUtil
 */
TimeManagerObject.prototype.time = new TimeUtil();

/**
 * Returns the current date / time.
 *
 * @type TZDate
 * @memberOf TimeUtil
 * @returns {TZDate}
 */
TimeUtil.prototype.getCurrentDateTime = function(){ var ret = new TZDate(); return ret; };

/**
 * Returns identifier of the local system timezone.
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getLocalTimezone = function(){ var ret = new String(); return ret; };

/**
 * Returns synchronously the identifiers of the timezones supported by the device.
            <p>
Zero or more slashes separate different components of a timezone identifier,
with the most general descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
           
 *
 * @type array
 * @memberOf TimeUtil
 * @returns {array}
 */
TimeUtil.prototype.getAvailableTimezones = function(){ var ret = new array(); return ret; };

/**
 * 
            <p>
Returns the date format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"d" = day number (1 to 31)              </li>
              <li>
"D" = day name              </li>
              <li>
"m" = month number (1 to 12)              </li>
              <li>
"M" = month name              </li>
              <li>
"y" = year              </li>
            </ul>
            <p>
Examples of string formats include: "d/m/y", "y-d-m", "D, M d y".
            </p>
           
 *
 * @param {Boolean} shortformat
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getDateFormat = function(shortformat){ var ret = new String(); return ret; };

/**
 * 
            <p>
Returns the time format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"h" = hours (0 to 23 or 1 to 12 if AM/PM display)              </li>
              <li>
"m" = minutes (0 to 59)              </li>
              <li>
"s" = seconds (0 to 59)              </li>
              <li>
"ap" = AM/PM display              </li>
            </ul>
            <p>
Examples of string formats include: "h:m:s ap", "h:m:s".
            </p>
           
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getTimeFormat = function(){ var ret = new String(); return ret; };

/**
 * Returns if the given year is a leap year.
 *
 * @param {Number} year
 * @type Boolean
 * @memberOf TimeUtil
 * @returns {Boolean}
 */
TimeUtil.prototype.isLeapYear = function(year){ var ret = new Boolean(); return ret; };

/**
 * Sets a listener for receiving any notification for changes of time on a device.
 *
 * @param {SuccessCallback} changeCallback
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.setDateTimeChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to stop receiving notifications for changes of time on a device.
 *
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.unsetDateTimeChangeListener = function(){ return; };

/**
 * Returns the day of the month (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month (from 1-31).
            <p>
If it tries to set the day bigger than the last day of the month or smaller than 1, it will be calculated automatically.
For example, if TZDate's month is May and parameter is 32, it will be June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setDate = function(date){ return; };

/**
 * Returns the day of the week (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDay = function(){ var ret = new Number(); return ret; };

/**
 * Returns the year.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setFullYear = function(year){ return; };

/**
 * Returns the hour (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour (0-23).
            <p>
If it tries to set the hour bigger than 23 or smaller than 0, it will be calculated automatically.
For example, if hours is 24, it will set 0 and add to a date.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setHours = function(hours){ return; };

/**
 * Returns the milliseconds (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds (from 0-999).
            <p>
If it tries to set the millisecond bigger than 999 or smaller than 0, it will be calculated automatically.
For example, if ms is 1000, it will set 0 and add to a second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMilliseconds = function(ms){ return; };

/**
 * Returns the minutes (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes.
            <p>
If it tries to set the minute bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if minutes is 60, it will set 0 and add to an hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMinutes = function(minutes){ return; };

/**
 * Returns the month (from 0-11).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month (from 0-11).
            <p>
If it tries to set the month bigger than 11 or smaller than 0, it will be calculated automatically.
For example, if month is 12, it will set 0 and add to a year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMonth = function(month){ return; };

/**
 * Returns the seconds (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds (from 0-59).
            <p>
If it tries to set the second bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if seconds is 60, it will set 0 and add to a minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setSeconds = function(seconds){ return; };

/**
 * Returns the day of the month, according to universal time (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month, according to universal time (from 1-31).
            <p>
If it tries to set the day bigger than the last day of the month or smaller than 1, it will be calculated automatically.
For example, if TZDate's month is May and date is 32, it will be June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCDate = function(date){ return; };

/**
 * Returns the day of the week, according to universal time (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDay = function(){ var ret = new Number(); return ret; };

/**
 * Returns the year, according to universal time.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year, according to universal time.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCFullYear = function(year){ return; };

/**
 * Returns the hour, according to universal time (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour, according to universal time (0-23).
            <p>
If it tries to set the hour bigger than 23 or smaller than 0, it will be calculated automatically.
For example, if hours is 24, it will set 0 and add to a date.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCHours = function(hours){ return; };

/**
 * Returns the milliseconds, according to universal time (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds, according to universal time (from 0-999).
            <p>
If it tries to set the millisecond bigger than 999 or smaller than 0, it will be calculated automatically.
For example, if ms is 1000, it will set 0 and add to a second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMilliseconds = function(ms){ return; };

/**
 * Returns the minutes, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes, according to universal time (from 0-59).
            <p>
If it tries to set the minute bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if minutes is 60, it will set 0 and add to an hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMinutes = function(minutes){ return; };

/**
 * Returns the month, according to universal time (from 0-11).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month, according to universal time (from 0-11).
            <p>
If it tries to set the month bigger than 11 or smaller than 0, it will be calculated automatically.
For example, if month is 12, it will set 0 and add to a year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMonth = function(month){ return; };

/**
 * Returns the seconds, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds, according to universal time (from 0-59).
            <p>
If it tries to set the second bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if seconds is 60, it will set 0 and add to a minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCSeconds = function(seconds){ return; };

/**
 * Returns timezone identifier.
            <p>
Zero or more slashes separate different components, with the most general
descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
            <p>
This attribute uniquely identifies the timezone.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezone = function(){ var ret = new String(); return ret; };

/**
 * Returns a copy of the TZDate converted to a given time zone.
 *
 * @param {String} tzid
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toTimezone = function(tzid){ var ret = new TZDate(); return ret; };

/**
 * Returns a copy of the TZDate converted to the local time zone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toLocalTimezone = function(){ var ret = new TZDate(); return ret; };

/**
 * Returns a copy of the TZDate converted to Coordinated Universal Time (UTC).
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toUTC = function(){ var ret = new TZDate(); return ret; };

/**
 * Calculates the difference with another TZDate object.
            <p>
Calculates the difference in time between <em>this</em> and other.
This comparison method takes timezones into consideration for the comparison.
            </p>
            <p>
The TimeDuration that is returned is effectively <em>this</em> - other.
The return value is a duration in milliseconds both TZDate objects have a time component, in days, otherwise.
The result value will be:
            </p>
            <ul>
              <li>
Negative, if other is in the future              </li>
              <li>
0 if the two date / times are equal              </li>
              <li>
Positive, if other is in the past              </li>
            </ul>
           
 *
 * @param {TZDate} other
 * @type TimeDuration
 * @memberOf TZDate
 * @returns {TimeDuration}
 */
TZDate.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks if the TZDate is equal to another.
            <p>
This method takes the timezones into consideration and will return <em>true</em>if the two TZDate objects represent the same instant in different timezones.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks if the TZDate is earlier than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.earlierThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks if the TZDate is later than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.laterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Returns a new date by adding a duration to the current TZDate object.
            <p>
If the length of duration is negative, the new date / time will be
earlier than it used to.
            </p>
            <p>
Note that calling this method does not alter the current object.
            </p>
           
 *
 * @param {TimeDuration} duration
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.addDuration = function(duration){ var ret = new TZDate(); return ret; };

/**
 * Returns the date portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleDateString = function(){ var ret = new String(); return ret; };

/**
 * Returns the time portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleString = function(){ var ret = new String(); return ret; };

/**
 * Returns the date portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toDateString = function(){ var ret = new String(); return ret; };

/**
 * Returns the time portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toString = function(){ var ret = new String(); return ret; };

/**
 * Determines the time zone abbreviation to be used at a particular date in the time zone.
            <p>
For example, in Toronto this is currently "EST" during the winter months and "EDT" during the
summer months when daylight savings time is in effect.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezoneAbbreviation = function(){ var ret = new String(); return ret; };

/**
 * Gets the number of seconds from Coordinated Universal Time (UTC) offset for the timezone.
            <p>
Returns the offset (in seconds) from UTC of the timezone, accounting for daylight
savings if in effect in the timezone. For example, if time zone is GMT+8, it will return -32,400.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.secondsFromUTC = function(){ var ret = new Number(); return ret; };

/**
 * Indicates if Daylight Saving Time(DST) is active for this TZDate.
            <p>
Indicates if daylight savings are in effect for the time zone and instant
identified by the TZDate object.
            </p>
           
 *
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.isDST = function(){ var ret = new Boolean(); return ret; };

/**
 * Returns the date of the previous daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getPreviousDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * Returns the date of the next daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getNextDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * Duration length.
 * <p>
The unit of the duration length (milliseconds, seconds, minutes, hours, or days)
is determined by the duration unit attribute.
            </p>
 *
 * @type Number
 */
TimeDuration.prototype.length = new Number();

/**
 * Duration unit (milliseconds, seconds, minutes, hours, or days).
 * <p>
The default value is "MSECS" (milliseconds unit).
            </p>
 *
 * @type TimeDurationUnit
 */
TimeDuration.prototype.unit = new TimeDurationUnit();

/**
 * Calculates the difference between two TimeDuration objects.
            <p>
Calculates the difference in time between <em>this</em> and <em>other</em>.
The TimeDuration that is returned is effectively <em>first</em> - <em>other</em> (that is: positive if the first parameter is larger).
            </p>
            <p>
The returned TimeDuration is the biggest possible unit without losing the precision.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type TimeDuration
 * @memberOf TimeDuration
 * @returns {TimeDuration}
 */
TimeDuration.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks if the TimeDuration is equal to another.
            <p>
This method takes the units into consideration and will return true
if the two TimeDuration objects represent the same duration in different units.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks if the TimeDuration is lower than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.lessThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks if the TimeDuration is greater than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.greaterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * The Time API provides information regarding date / time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost. 
        </p>
 * <p>
This API can be used to get TZDate objects with full time zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>. 
        </p>
 *
 * @type TimeUtil
 */
Tizen.prototype.time = new TimeUtil();

/**
 * represents a set of filters.
          <p>
The composite filters can be one of the 2 types:
          </p>
          <ul>
            <li>
The union - used to filter objects that match any of the filters it includes.            </li>
            <li>
The intersection - used to filter objects that match all filters it includes.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {CompositeFilter}
 */
function CompositeFilter() {};
CompositeFilter.prototype = new AbstractFilter();

/**
 * This interface is used in methods that require only an error as input parameter in the error callback. If an invalid function (such as null) is passed to the API that accepts ErrorCallback, it silently fails and there is no further action.
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * Generic exception interface.
          <p>
This interface will be used by the APIs to throw errors synchronously.
          </p>
          <p>
The attempt to set an attribute value may or may not raise WebAPIException synchronously with error type TypeMismatchError or InvalidValuesError.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIException}
 */
function WebAPIException() {};
WebAPIException.prototype = new Object();

/**
 * represents a filter based on an object attribute which has values that are within a particular range.
          <p>
Range filters, where only one boundary is set, are available.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeRangeFilter}
 */
function AttributeRangeFilter() {};
AttributeRangeFilter.prototype = new AbstractFilter();

/**
 * represents a point (latitude and longitude) in map coordinate system.
          <p>
Latitude and longitude are of the WGS84 datum.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SimpleCoordinates}
 */
function SimpleCoordinates() {};
SimpleCoordinates.prototype = new Object();

/**
 * This interface represents a set of filter.
          <p>
It represents the query statement for the specified value of the <em>matchValue</em> by the rule of <em>matchFlag</em>.
          </p>
          <p>
If no <em>matchValue</em> is defined, the filter will match all objects that have the attribute
defined (same as the "EXISTS" filter works), otherwise, it will only match objects which have an attribute that matches
the specified value.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeFilter}
 */
function AttributeFilter() {};
AttributeFilter.prototype = new AbstractFilter();

/**
 * Generic error interface.
          <p>
This interface will be used by the APIs in order to return them in the error callback of asynchronous methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIError}
 */
function WebAPIError() {};
WebAPIError.prototype = new Object();

/**
 * This interface is used in methods that do not require any return value in the success callback. In case of successful execution of an asynchronous call, or an API defined callback must be called immediately to notify the user.
 *
 * @super Object
 * @constructor
 * @return {SuccessCallback}
 */
function SuccessCallback() {};
SuccessCallback.prototype = new Object();

/**
 * Defines the tizen interface as a part of the window global object.
          <p>
The <em>Tizen</em> interface is always available within the <em>Window </em>object in the ECMAScript hierarchy.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TizenObject}
 */
function TizenObject() {};
TizenObject.prototype = new Object();

/**
 * The root of Tizen Web Device API.
          <p>
This is the Tizen root interface.
It is a property of the ECMAScript global object, as specified by the <em>TizenObject</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Tizen}
 */
function Tizen() {};
Tizen.prototype = new Object();

/**
 * This is a common interface used by different types of object filters.
          <p>
Never use this base interface directly, instead use <em>AbstractFilter</em> subtypes,
such as <em>AttributeFilter</em>, <em>AttributeRangeFilter</em>, and <em>CompositeFilter</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AbstractFilter}
 */
function AbstractFilter() {};
AbstractFilter.prototype = new Object();

/**
 * is a common interface used for sorting of queried data.
          <p>
Note that the sorting result of list type attributes is not determined.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SortMode}
 */
function SortMode() {};
SortMode.prototype = new Object();

/**
 * The composite filter type.
 *
 * @type CompositeFilterType
 */
CompositeFilter.prototype.type = new CompositeFilterType();

/**
 * The list of filters in the composite filter.
 *
 * @type array
 */
CompositeFilter.prototype.filters = new array();

/**
 * Method that is invoked when the error occurs.
 *
 * @param {WebAPIError} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * The index is not in the allowed range.
 *
 * @type Number
 */
WebAPIException.INDEX_SIZE_ERR = new Number();

/**
 * The specified range of text is too large.
 *
 * @type Number
 */
WebAPIException.DOMSTRING_SIZE_ERR = new Number();

/**
 * The operation would yield an incorrect node tree.
 *
 * @type Number
 */
WebAPIException.HIERARCHY_REQUEST_ERR = new Number();

/**
 * The object is in the wrong document.
 *
 * @type Number
 */
WebAPIException.WRONG_DOCUMENT_ERR = new Number();

/**
 * The string contains invalid characters.
 *
 * @type Number
 */
WebAPIException.INVALID_CHARACTER_ERR = new Number();

/**
 * Data is specified for a node that does not support data.
 *
 * @type Number
 */
WebAPIException.NO_DATA_ALLOWED_ERR = new Number();

/**
 * The object cannot be modified.
 *
 * @type Number
 */
WebAPIException.NO_MODIFICATION_ALLOWED_ERR = new Number();

/**
 * The object cannot be found here.
 *
 * @type Number
 */
WebAPIException.NOT_FOUND_ERR = new Number();

/**
 * The operation is not supported.
 *
 * @type Number
 */
WebAPIException.NOT_SUPPORTED_ERR = new Number();

/**
 * The specified attribute is already in use elsewhere.
 *
 * @type Number
 */
WebAPIException.INUSE_ATTRIBUTE_ERR = new Number();

/**
 * The object is in an invalid state.
 *
 * @type Number
 */
WebAPIException.INVALID_STATE_ERR = new Number();

/**
 * The string did not match the expected pattern.
 *
 * @type Number
 */
WebAPIException.SYNTAX_ERR = new Number();

/**
 * The object cannot be modified in this way.
 *
 * @type Number
 */
WebAPIException.INVALID_MODIFICATION_ERR = new Number();

/**
 * The operation is not allowed by Namespaces in XML.
 *
 * @type Number
 */
WebAPIException.NAMESPACE_ERR = new Number();

/**
 * The object does not support the operation or argument.
 *
 * @type Number
 */
WebAPIException.INVALID_ACCESS_ERR = new Number();

/**
 * The operation would cause the node to fail validation.
 *
 * @type Number
 */
WebAPIException.VALIDATION_ERR = new Number();

/**
 * The type of the object does not match the expected type.
 *
 * @type Number
 */
WebAPIException.TYPE_MISMATCH_ERR = new Number();

/**
 * The operation is insecure.
 *
 * @type Number
 */
WebAPIException.SECURITY_ERR = new Number();

/**
 * A network error occurred.
 *
 * @type Number
 */
WebAPIException.NETWORK_ERR = new Number();

/**
 * The operation was aborted.
 *
 * @type Number
 */
WebAPIException.ABORT_ERR = new Number();

/**
 * The given URL does not match another URL.
 *
 * @type Number
 */
WebAPIException.URL_MISMATCH_ERR = new Number();

/**
 * The quota has been exceeded.
 *
 * @type Number
 */
WebAPIException.QUOTA_EXCEEDED_ERR = new Number();

/**
 * The operation timed out.
 *
 * @type Number
 */
WebAPIException.TIMEOUT_ERR = new Number();

/**
 * The supplied node is incorrect or has an incorrect ancestor for this operation.
 *
 * @type Number
 */
WebAPIException.INVALID_NODE_TYPE_ERR = new Number();

/**
 * The object cannot be cloned.
 *
 * @type Number
 */
WebAPIException.DATA_CLONE_ERR = new Number();

/**
 * 16-bit error code. For the possible values for this attribute, see .
 *
 * @type Number
 */
WebAPIException.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it was initialized with. This attribute can have one of the following values:
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
For other possible values for this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:55697/help/topic/dom/#error-types">DOM error types</a> 
            </p>
 *
 * @type String
 */
WebAPIException.prototype.name = new String();

/**
 * An error message that describes the details of an encountered error. This attribute is mainly intended to be used for developers rather than end users, so it should not be used directly in the user interfaces as it is.
 *
 * @type String
 */
WebAPIException.prototype.message = new String();

/**
 * The name of the object attribute used for filtering.
 * <p>
The value of this attribute is exactly as it is defined in the object's interface. For attributes of complex type, use fully-qualified names
(such as 'geolocation.latitude' to filter on a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeRangeFilter.prototype.attributeName = new String();

/**
 * Objects with an attribute that is greater than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.initialValue = new any();

/**
 * Objects with an attribute that is strictly lower than to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.endValue = new any();

/**
 * Latitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.latitude = new Number();

/**
 * Longitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.longitude = new Number();

/**
 * The name of the object attribute used for filtering.
 * <p>
This is the name of the object attribute exactly as it is defined in
the object's interface. For attributes of complex type, use fully-qualified names
(such as 'geolocation.latitude' to filter on a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of an array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeFilter.prototype.attributeName = new String();

/**
 * The match flag used for attribute-based filtering.
 * <p>
By default, this attribute is set to "EXACTLY".
            </p>
 *
 * @type FilterMatchFlag
 */
AttributeFilter.prototype.matchFlag = new FilterMatchFlag();

/**
 * The value used for matching.
 * <p>
The filter will match if the attribute value matches the given matchValue.
            </p>
 * <p>
This value is not used if the <em>matchFlag</em> is set to "EXISTS".
By default, this attribute is set to null.
            </p>
 *
 * @type any
 */
AttributeFilter.prototype.matchValue = new any();

/**
 * 16-bit error code. Possible values are defined in .
 *
 * @type Number
 */
WebAPIError.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it was initialized with. This attribute can have one of the following values:
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
For other possible values for this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:55697/help/topic/dom/#error-types">DOM error types</a> 
            </p>
 *
 * @type String
 */
WebAPIError.prototype.name = new String();

/**
 * An error message that describes the details of the error encountered. This attribute is not intended to be used directly in the user interfaces as it is mainly intended to be useful for developers rather than end users.
 *
 * @type String
 */
WebAPIError.prototype.message = new String();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @type void
 * @memberOf SuccessCallback
 * @returns {void}
 */
SuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in the Tizen Web Device API.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that gives information of the platform's error and
filters interfaces that are used to make query for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
TizenObject.prototype.tizen = new Tizen();

/**
 * The name of the object attribute used for sorting.
 *
 * @type String
 */
SortMode.prototype.attributeName = new String();

/**
 * The type of the sorting.
 * <p>
By default, this attribute is set to <var>ASC</var>.
            </p>
 *
 * @type SortModeOrder
 */
SortMode.prototype.order = new SortModeOrder();

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in the Tizen Web Device API.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that gives information of the platform's error and
filters interfaces that are used to make query for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:55697/help/topic/org.tizen.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
Window.prototype.tizen = new Tizen();

/**
 * Defines the webapis interface as part of the window global object.
          <p>
There will be a window.webapis object that allows accessing the
functionality of the webapis API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WindowWebAPIs}
 */
function WindowWebAPIs() {};
WindowWebAPIs.prototype = new Object();

/**
 * represents a set of filters.
          <p>
The composite filters can be one of the 2 types: 
          </p>
          <ul>
            <li>
The union - used to filter objects that match any of the filters it includes.            </li>
            <li>
The intersection - used to filter objects that match all filters it includes.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {CompositeFilter}
 */
function CompositeFilter() {};
CompositeFilter.prototype = new AbstractFilter();

/**
 * This cinterface is used in methods that only an error as input parameter in the error callback. If an invalid function (such as null) is passed to the API that accepts ErrorCallback, it silently fails and there is no further action.
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * Generic exception interface.
          <p>
This interface will be used by the APIs to throw errors synchronously.
          </p>
          <p>
The attempt to set an attribute value may or may not raise WebAPIException synchronously with error type TypeMismatchError or InvalidValuesError.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIException}
 */
function WebAPIException() {};
WebAPIException.prototype = new Object();

/**
 * represents a filter based on an object attribute which has values that are within a particular range.
          <p>
Range filters, where only one boundary is set, are available.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeRangeFilter}
 */
function AttributeRangeFilter() {};
AttributeRangeFilter.prototype = new AbstractFilter();

/**
 * represents a point (latitude and longitude) in map coordinate system.
          <p>
Latitude and longitude are of the WGS84 datum. 
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SimpleCoordinates}
 */
function SimpleCoordinates() {};
SimpleCoordinates.prototype = new Object();

/**
 * This interface represents a set of filter.
          <p>
It represents the query statement for the specified value of the <em>matchValue</em> by the rule of <em>matchFlag</em>.
          </p>
          <p>
If no <em>matchValue</em> is defined, the filter will match all objects that have the attribute
defined (same as the "EXISTS" filter works), otherwise, it will only match objects which have an attribute that matches
the specified value.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeFilter}
 */
function AttributeFilter() {};
AttributeFilter.prototype = new AbstractFilter();

/**
 * Generic error interface.
          <p>
This interface will be used by the APIs in order to return them in the error callback of asynchronous methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIError}
 */
function WebAPIError() {};
WebAPIError.prototype = new Object();

/**
 * The Samsung Web API's root. The WebAPIs interface will be always available within the Window object in the ECMAScript hierarchy.
 *
 * @super Object
 * @constructor
 * @return {WebAPIs}
 */
function WebAPIs() {};
WebAPIs.prototype = new Object();

/**
 * This interface is used in methods that do not require any return value in the success callback. In case of successful execution of an asynchronous call, or an API defined callback must be called immediately to notify the user.
 *
 * @super Object
 * @constructor
 * @return {SuccessCallback}
 */
function SuccessCallback() {};
SuccessCallback.prototype = new Object();

/**
 * This is a common interface used by different types of object filters.
          <p>
Never use this base interface directly, instead use <em>AbstractFilter</em> subtypes,
such as <em>AttributeFilter</em>, <em>AttributeRangeFilter</em>, and <em>CompositeFilter</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AbstractFilter}
 */
function AbstractFilter() {};
AbstractFilter.prototype = new Object();

/**
 * is a common interface used for sorting of queried data.
          <p>
Note that the sorting result of list type attributes is not determined.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SortMode}
 */
function SortMode() {};
SortMode.prototype = new Object();

/**
 * This API provides the basic definitions that are used in all other Web APIs (Generic purpose Web APIs).
 * <p>
These include generic callbacks for error, the WebAPIError interface and object filters.
Additionally, this API also specifies the location in the ECMAScript hierarchy in which the Web APIs are instantiated (window.webapis).
.
        </p>
 *
 * @type WebAPIs
 */
WindowWebAPIs.prototype.webapis = new WebAPIs();

/**
 * Composite filter type.
 *
 * @type CompositeFilterType
 */
CompositeFilter.prototype.type = new CompositeFilterType();

/**
 * The list of filters in the composite filter.
 *
 * @type array
 */
CompositeFilter.prototype.filters = new array();

/**
 * Method that is invoked when the error occurs.
 *
 * @param {WebAPIError} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * The index is not in the allowed range.
 *
 * @type Number
 */
WebAPIException.INDEX_SIZE_ERR = new Number();

/**
 * The specified range of text is too large.
 *
 * @type Number
 */
WebAPIException.DOMSTRING_SIZE_ERR = new Number();

/**
 * The operation would yield an incorrect node tree.
 *
 * @type Number
 */
WebAPIException.HIERARCHY_REQUEST_ERR = new Number();

/**
 * The object is in the wrong document.
 *
 * @type Number
 */
WebAPIException.WRONG_DOCUMENT_ERR = new Number();

/**
 * The string contains invalid characters.
 *
 * @type Number
 */
WebAPIException.INVALID_CHARACTER_ERR = new Number();

/**
 * If data is specified for a Node which does not support data.
 *
 * @type Number
 */
WebAPIException.NO_DATA_ALLOWED_ERR = new Number();

/**
 * If an attempt is made to modify an object where modifications are not allowed.
 *
 * @type Number
 */
WebAPIException.NO_MODIFICATION_ALLOWED_ERR = new Number();

/**
 * If an attempt is made to reference a Node in a context where it does not exist.
 *
 * @type Number
 */
WebAPIException.NOT_FOUND_ERR = new Number();

/**
 * If the implementation does not support the requested type of object or operation.
 *
 * @type Number
 */
WebAPIException.NOT_SUPPORTED_ERR = new Number();

/**
 * If an attempt is made to add an attribute that is already in use elsewhere.
 *
 * @type Number
 */
WebAPIException.INUSE_ATTRIBUTE_ERR = new Number();

/**
 * If an attempt is made to use an object that is not, or is no longer, usable.
 *
 * @type Number
 */
WebAPIException.INVALID_STATE_ERR = new Number();

/**
 * If an invalid or illegal string is specified.
 *
 * @type Number
 */
WebAPIException.SYNTAX_ERR = new Number();

/**
 * If an attempt is made to modify the type of the underlying object.
 *
 * @type Number
 */
WebAPIException.INVALID_MODIFICATION_ERR = new Number();

/**
 * If an attempt is made to create or change an object in a way which is incorrect with regard to namespaces.
 *
 * @type Number
 */
WebAPIException.NAMESPACE_ERR = new Number();

/**
 * If a parameter or an operation is not supported by the underlying object.
 *
 * @type Number
 */
WebAPIException.INVALID_ACCESS_ERR = new Number();

/**
 * If a call to a method such as insertBefore or removeChild would make the Node invalid with respect to "partial validity", this exception would be raised and the operation would not be done. This code is used in [DOM Level 3 Validation].
 *
 * @type Number
 */
WebAPIException.VALIDATION_ERR = new Number();

/**
 * If the type of an object is incompatible with the expected type of the parameter associated to the object.
 *
 * @type Number
 */
WebAPIException.TYPE_MISMATCH_ERR = new Number();

/**
 * If an attempt is made to perform an operation or access some data in a way that would be a security risk or a violation of the user agent's security policy.
 *
 * @type Number
 */
WebAPIException.SECURITY_ERR = new Number();

/**
 * If a network error occurs in synchronous requests.
 *
 * @type Number
 */
WebAPIException.NETWORK_ERR = new Number();

/**
 * If the abort error occurs in asynchronous requests by user prompt.
 *
 * @type Number
 */
WebAPIException.ABORT_ERR = new Number();

/**
 * If the given URL does not match another URL
 *
 * @type Number
 */
WebAPIException.URL_MISMATCH_ERR = new Number();

/**
 * If the quota has been exceeded..
 *
 * @type Number
 */
WebAPIException.QUOTA_EXCEEDED_ERR = new Number();

/**
 * If the operation could not be completed because it timed out.
 *
 * @type Number
 */
WebAPIException.TIMEOUT_ERR = new Number();

/**
 * If the supplied node is incorrect or has an incorrect ancestor for this operation.
 *
 * @type Number
 */
WebAPIException.INVALID_NODE_TYPE_ERR = new Number();

/**
 * If the object can not be cloned.
 *
 * @type Number
 */
WebAPIException.DATA_CLONE_ERR = new Number();

/**
 * 16-bit error code. For the possible values for this attribute, see .
 *
 * @type Number
 */
WebAPIException.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it was initialized with. This attribute can have one of the following values:
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
For other possible values for this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:55697/help/topic/dom/#error-types">DOM error types</a> 
            </p>
 *
 * @type String
 */
WebAPIException.prototype.name = new String();

/**
 * An error message that describes the details of an encountered error. This attribute is mainly intended to be used for developers rather than end users, so it should not be used directly in the user interfaces as it is.
 *
 * @type String
 */
WebAPIException.prototype.message = new String();

/**
 * The name of the object attribute used for filtering.
 * <p>
The value of this attribute is exactly as it is defined in the object's interface. For attributes of complex type, use fully-qualified names
(such as 'organizations.role' to filter on a contact's role in an organization).
            </p>
 * <p>
For attributes of array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeRangeFilter.prototype.attributeName = new String();

/**
 * Objects with an attribute that is greater than or equal to will match.
 * <p>
By default, this attribute is set to <em>null</em>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.initialValue = new any();

/**
 * Objects with an attribute that is strictly lower than to will match.
 * <p>
By default, this attribute is set to <em>null</em>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.endValue = new any();

/**
 * Latitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.latitude = new Number();

/**
 * Longitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.longitude = new Number();

/**
 * The name of the object attribute used for filtering.
 * <p>
This is the name of the object attribute exactly as it is defined in
the object's interface. For attributes of complex type, use fully-qualified names
(such as 'organizations.role' to filter on a contact's role in an organization).
            </p>
 * <p>
For attributes of an array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeFilter.prototype.attributeName = new String();

/**
 * The match flag used for attribute-based filtering.
 * <p>
By default, this attribute is set to "EXACTLY".
            </p>
 *
 * @type FilterMatchFlag
 */
AttributeFilter.prototype.matchFlag = new FilterMatchFlag();

/**
 * The value used for matching.
 * <p>
The filter will match if the attribute value matches the given matchValue.
            </p>
 * <p>
This value is not used if the <em>matchFlag</em> is set to "EXISTS".
By default, this attribute is set to null.
            </p>
 *
 * @type any
 */
AttributeFilter.prototype.matchValue = new any();

/**
 * An error type.
 * <p>
The name attribute must return the value it was initialized to.
Possible values are the ones defined in <a href="http://www.w3.ohttp://127.0.0.1:55697/help/topic/dom/#error-types">DOM error types</a>. 
            </p>
 * <p>
Extra values which will not be covered in DOM error types can be defined including:
            </p>
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
These values SHOULD NOT be minted if the meaning of exception or error is simular with predefined error types.
            </p>
 *
 * @type String
 */
WebAPIError.prototype.name = new String();

/**
 * An error message that describes the details of the error encountered. This attribute is not intended to be used directly in the user interfaces as it is mainly intended to be useful for developers rather than end-users
 *
 * @type String
 */
WebAPIError.prototype.message = new String();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @type void
 * @memberOf SuccessCallback
 * @returns {void}
 */
SuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * The name of the object attribute used for sorting.
 *
 * @type String
 */
SortMode.prototype.attributeName = new String();

/**
 * The type of the sorting.
 * <p>
By default, this attribute is set to <em>ASC</em>.
            </p>
 *
 * @type SortModeOrder
 */
SortMode.prototype.order = new SortModeOrder();

/**
 * This API provides the basic definitions that are used in all other Web APIs (Generic purpose Web APIs).
 * <p>
These include generic callbacks for error, the WebAPIError interface and object filters.
Additionally, this API also specifies the location in the ECMAScript hierarchy in which the Web APIs are instantiated (window.webapis).
.
        </p>
 *
 * @type WebAPIs
 */
Window.prototype.webapis = new WebAPIs();

/**
 * This interface defines a factory method to create object given the object as input.
 *
 * @super Object
 * @constructor
 * @return {TizenCamera}
 */
function TizenCamera() {};
TizenCamera.prototype = new Object();

/**
 * This interface defines a global object (under ) that exposes a single interface for creating a object.
 *
 * @super Object
 * @constructor
 * @return {NavigatorTizenCamera}
 */
function NavigatorTizenCamera() {};
NavigatorTizenCamera.prototype = new Object();

/**
 * The error callback for any camera error.
 *
 * @super Object
 * @constructor
 * @return {CameraErrorCallback}
 */
function CameraErrorCallback() {};
CameraErrorCallback.prototype = new Object();

/**
 * The success callback for TizenCamera.createCameraControl().
 *
 * @super Object
 * @constructor
 * @return {CreateCameraSuccessCallback}
 */
function CreateCameraSuccessCallback() {};
CreateCameraSuccessCallback.prototype = new Object();

/**
 * This interface defines a collection of camera capabilities that the camera device provides.
 *
 * @super Object
 * @constructor
 * @return {CameraCapabilities}
 */
function CameraCapabilities() {};
CameraCapabilities.prototype = new Object();

/**
 * Error callback interface for method.
 *
 * @super Object
 * @constructor
 * @return {CameraSettingErrorCallback}
 */
function CameraSettingErrorCallback() {};
CameraSettingErrorCallback.prototype = new Object();

/**
 * This interface defines attributes of object passed as error to CameraErrorCallback.
 *
 * @super Object
 * @constructor
 * @return {CameraError}
 */
function CameraError() {};
CameraError.prototype = new Object();

/**
 * This interface defines image capture related methods.
 *
 * @super Object
 * @constructor
 * @return {CameraImageCapture}
 */
function CameraImageCapture() {};
CameraImageCapture.prototype = new Object();

/**
 * This interface defines attributes and methods to configure camera options, record audio/video, and capture image.
 *
 * @super Object
 * @constructor
 * @return {CameraControl}
 */
function CameraControl() {};
CameraControl.prototype = new Object();

/**
 * Success callback interface for camera methods.
 *
 * @super Object
 * @constructor
 * @return {CameraSuccessCallback}
 */
function CameraSuccessCallback() {};
CameraSuccessCallback.prototype = new Object();

/**
 * Error This interface defines attributes of object passed as error to CameraSettingErrorCallback.
 *
 * @super Object
 * @constructor
 * @return {CameraSettingErrors}
 */
function CameraSettingErrors() {};
CameraSettingErrors.prototype = new Object();

/**
 * This interface defines media recording related methods.
 *
 * @super Object
 * @constructor
 * @return {CameraMediaRecorder}
 */
function CameraMediaRecorder() {};
CameraMediaRecorder.prototype = new Object();

/**
 * Asynchronous create CameraControl object using input stream.
 *
 * @param {MediaStream} stream
 * @param {CreateCameraSuccessCallback} successCallback
 * @param {CameraErrorCallback} errorCallback
 * @type void
 * @memberOf TizenCamera
 * @returns {void}
 */
TizenCamera.prototype.createCameraControl = function(stream, successCallback, errorCallback){ return; };

/**
 * An attribute to store tizen camera object.
 *
 * @type TizenCamera
 */
NavigatorTizenCamera.prototype.tizCamera = new TizenCamera();

/**
 * Called on error
 *
 * @param {CameraError} error
 * @type void
 * @memberOf CameraErrorCallback
 * @returns {void}
 */
CameraErrorCallback.prototype.handleEvent = function(error){ return; };

/**
 * Called on success.
 *
 * @param {CameraControl} cameraControl
 * @type void
 * @memberOf CreateCameraSuccessCallback
 * @returns {void}
 */
CreateCameraSuccessCallback.prototype.handleEvent = function(cameraControl){ return; };

/**
 * Array containing available picture sizes. The following values must be supported:
 * <ul>
 * <li>[320, 240]
 * <li>[320, 320]
 * <li>[640, 480]
 * <li>[640, 640]
 * <li>[1280, 720]
 * <li>[1280, 960]
 * </ul>
 *
 * @type array
 */
CameraCapabilities.prototype.pictureSizes = new array();

/**
 * Array containing avaliable picture formats. The following formats must be supported:
 * <ul>
 * <li>"jpeg"
 * <li>"png"
 * </ul>
 *
 * @type array
 */
CameraCapabilities.prototype.pictureFormats = new array();

/**
 * Array containing avaliable picture formats. The following formats must be supported:
 * <ul>
 * <li>"3gp"
 * </ul>
 *
 * @type array
 */
CameraCapabilities.prototype.recordingFormats = new array();

/**
 * Called on error.
 *
 * @param {CameraSettingErrors} errors
 * @type void
 * @memberOf CameraSettingErrorCallback
 * @returns {void}
 */
CameraSettingErrorCallback.prototype.handleEvent = function(errors){ return; };

/**
 * Code for error occurred during object creation.
 *
 * @type Number
 */
CameraError.CREATION_FAILED = new Number();

/**
 * Code for error occurred on permission denied exception.
 *
 * @type Number
 */
CameraError.PERMISSION_DENIED = new Number();

/**
 * Code for error occurred when device has no avaliable camera.
 *
 * @type Number
 */
CameraError.NO_CAMERA = new Number();

/**
 * Code for error occurred on pipeline error.
 *
 * @type Number
 */
CameraError.PIPELINE_ERR = new Number();

/**
 * Error code.
 *
 * @type Number
 */
CameraError.prototype.code = new Number();

/**
 * Shutter event handler.
 *
 * @type EventHandler
 */
CameraImageCapture.prototype.onshutter = new EventHandler();

/**
 * Set new settings for camera image capture.
 *
 * @param {CameraPictureSettings} settings
 * @param {CameraSuccessCallback} onsuccess
 * @param {CameraSettingErrorCallback} onerror
 * @type void
 * @memberOf CameraImageCapture
 * @returns {void}
 */
CameraImageCapture.prototype.applySettings = function(settings, onsuccess, onerror){ return; };

/**
 * Take picture using camera.
 *
 * @param {CameraSuccessCallback} onsuccess
 * @param {CameraErrorCallback} onerror
 * @type void
 * @memberOf CameraImageCapture
 * @returns {void}
 */
CameraImageCapture.prototype.takePicture = function(onsuccess, onerror){ return; };

/**
 * Represents a collection of camera capabilities that camera device provides.
 *
 * @type CameraCapabilities
 */
CameraControl.prototype.capabilities = new CameraCapabilities();

/**
 * Represents object defines media recording related methods.
 *
 * @type CameraMediaRecorder
 */
CameraControl.prototype.recorder = new CameraMediaRecorder();

/**
 * Represents object defines image capture related methods.
 *
 * @type CameraImageCapture
 */
CameraControl.prototype.image = new CameraImageCapture();

/**
 * Method to apply new settings to CameraControl object.
 *
 * @param {CameraControlSettings} settings
 * @param {CameraSuccessCallback} onsuccess
 * @param {CameraSettingErrorCallback} onerror
 * @type void
 * @memberOf CameraControl
 * @returns {void}
 */
CameraControl.prototype.applySettings = function(settings, onsuccess, onerror){ return; };

/**
 * Method responsible for autofocus.
 *
 * @type Boolean
 * @memberOf CameraControl
 * @returns {Boolean}
 */
CameraControl.prototype.autoFocus = function(){ var ret = new Boolean(); return ret; };

/**
 * Method should be called application is done using the camera, it release the camera for other applications or processes.
 *
 * @type void
 * @memberOf CameraControl
 * @returns {void}
 */
CameraControl.prototype.release = function(){ return; };

/**
 * Called on success.
 *
 * @type void
 * @memberOf CameraSuccessCallback
 * @returns {void}
 */
CameraSuccessCallback.prototype.handleEvent = function(){ return; };

/**
 * Code for invalid focus area.
 *
 * @type Number
 */
CameraSettingErrors.FOCUS_AREA_ERR = new Number();

/**
 * Code for invalid picture size.
 *
 * @type Number
 */
CameraSettingErrors.PICTURE_SIZE_ERR = new Number();

/**
 * Code for invalid picture format.
 *
 * @type Number
 */
CameraSettingErrors.PICTURE_FORMAT_ERR = new Number();

/**
 * Code for invalid recording format.
 *
 * @type Number
 */
CameraSettingErrors.RECORDING_FORMAT_ERR = new Number();

/**
 * Code for invalid file name.
 *
 * @type Number
 */
CameraSettingErrors.FILENAME_ERR = new Number();

/**
 * Code for invalid max file size.
 *
 * @type Number
 */
CameraSettingErrors.MAX_FILE_SIZE_BYTES_ERR = new Number();

/**
 * Error code.
 *
 * @type array
 */
CameraSettingErrors.prototype.codes = new array();

/**
 * Recording state change event handler.
 *
 * @type EventHandler
 */
CameraMediaRecorder.prototype.onrecordingstatechange = new EventHandler();

/**
 * Set new settings for camera recording.
 *
 * @param {CameraRecorderSettings} settings
 * @param {CameraSuccessCallback} onsuccess
 * @param {CameraSettingErrorCallback} onerror
 * @type void
 * @memberOf CameraMediaRecorder
 * @returns {void}
 */
CameraMediaRecorder.prototype.applySettings = function(settings, onsuccess, onerror){ return; };

/**
 * Start recording movie using camera device.
 *
 * @param {CameraSuccessCallback} onsuccess
 * @param {CameraErrorCallback} onerror
 * @type void
 * @memberOf CameraMediaRecorder
 * @returns {void}
 */
CameraMediaRecorder.prototype.start = function(onsuccess, onerror){ return; };

/**
 * Stop recording movie using camera device.
 *
 * @param {CameraSuccessCallback} onsuccess
 * @param {CameraErrorCallback} onerror
 * @type void
 * @memberOf CameraMediaRecorder
 * @returns {void}
 */
CameraMediaRecorder.prototype.stop = function(onsuccess, onerror){ return; };

/**
 * An attribute to store tizen camera object.
 *
 * @type TizenCamera
 */
Navigator.prototype.tizCamera = new TizenCamera();

/**
 * This interface is a pointer to W3C interface.
 *
 * @super Object
 * @constructor
 * @return {Navigator}
 */
function Navigator() {};
Navigator.prototype = new Object();

/**
 * This interface is a pointer to W3C interface.
 *
 * @super Object
 * @constructor
 * @return {MediaStream}
 */
function MediaStream() {};
MediaStream.prototype = new Object();

