
ReactNative_TOT
Install 
Git
Node LTS เท่านั้น  10.15.3
VS code
Java 8 เท่านั้น 
android studio 
python 2 เท่านั้น 
// Set path
นำ Path Android studio
set PATH "%PATH%;C:\Users\tan\AppData\Local\Android\Sdk\platform-tools"
adb devices
File -> setting 
 -> API Level 27 / 28
 -> Android SDK Build-Tools
-> Show Package Details (มุมขวาล่าง) ติดตังเวอร์ชัน 28.0.2และ 28.0.3แล้วหรือไม่
-> Android SDK Build Tool , Emulator , SDK Platformtool,SDK tools, USB Driver, Support Repository , Play service x86 Emulator
Declare Variable
let x = 22;
let y ;  // undefined 
Compare 
const n = 5;
const s = “5”;
n==s // true
n===s  // false
3+8+”5” => 88
“3”+5+8 => 385
Arrow Function 
const f1 = function () {return “hello”}
const f2 = () => 'Hello Arrow'
const f3 = (a,b) => {return a+b}
Destructuring Assignment
const obj = {b:2,c:3,d:4}
const {a,b,c} = obj;
console.log(a);

// install react-native
npm install -g react-native-cli
react-native init 
react-native init totmobileapp
cd totmobileapp
open totmobileapp/android in android studio -> build

// Run project
1. react-native start -- --reset-cache
(open new windows)
2. react-native run-android
// at android visual
RR
Ctrl+M

//VS code extension
* ES7 React
* React native tools
//auto gen code
rncs
// install react library
https://reactnavigation.org/docs/en/getting-started.html
https://github.com/oblador/react-native-vector-icons
https://docs.nativebase.io/Components.html#button-block-headref
https://github.com/axios/axios
API
https://api.codingthailand.com/api/course
https://api.codingthailand.com/api/course/1
News API
https://newsapi.org/v2/top-headlines?country=th&apiKey=ab0d4aca4cea481e8157d31c68eb2b23
//Chrome
json viwer chrome extension 

// Install webview
https://github.com/react-native-community/react-native-webview
    npm install react-native-webview —save
    react-native link react-native-webview
    recompile on android studio (rebuild)
        will see on : settings.gradle

Register API
https://api.codingthailand.com/api/register
install date function
https://date-fns.org
npm install date-fns —save
async storage (keep data)
https://github.com/react-native-community/react-native-async-storage
npm install @react-native-community/async-storage —save
react-native link @react-native-community/async-storage
then build at Android studio

Camera API 
https://github.com/react-native-community/react-native-camera
npm install react-native-camera --save
react-native link react-native-camera
add to app : manifests : AndroidManifest.xml
 <uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
android/app/build.gradle:
insert arounf line97 
missingDimensionStrategy 'react-native-camera', ‘general'

// API Upload Picture
https://api.codingthailand.com/api/upload
// react-native-maps
// have to have google play store
npm install --save react-native-maps
react-native link react-native-maps

add  android:app:AndroidManifest.xml
<application>
 
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>
then rebuild android studio
api key : xxxxx
add in build.gradle (project maps) (android studio) - 
dependencies {
  ...
  implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
}

//Application Icon generation 
web -> appicon.co
and replace at folder
folder -> android/app/src/main/res
modify -> android/app/src/main/AndroidMenifest
android:roundIcon="@mipmap/ic_launcher"
rebuild android studio
