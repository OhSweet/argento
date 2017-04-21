adb uninstall com.theotherside
call react-native run-android
Setlocal
(Set apkurl=\android\app\build\outputs\apk\app-debug.apk)
(Set fullapkurl=%cd%%apkurl%)

call adb install %fullapkurl%
call adb reverse tcp:8081 tcp:8081
call adb shell am start -n com.theotherside/com.theotherside.MainActivity
