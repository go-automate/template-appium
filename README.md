
`npm install -g appium`


To verify that all of Appium's dependencies are met you can use appium-doctor. Install it with `npm install -g appium-doctor`, then run the `appium-doctor` command, supplying the `--ios` or `--android` flags to verify that all of the dependencies are set up correctly.

Start appium with the `appium` command and it starts on localhost 4732

Using `webdriverio` as an appium client (seems to be the recommended one)

> NOTE: Samples code reference: https://github.com/appium/appium/tree/master/sample-code

The next thing we need to do is to start an Appium session. We do this by defining a set of server options and Desired Capabilities, and calling wdio.remote() with them. Desired Capabilities are just a set of keys and values that get sent to the Appium server during session initialization, that tell Appium what kind of thing we want to automate. The minimum set of required capabilities for any Appium driver should include:

platformName: the name of the platform to automate
platformVersion: the version of the platform to automate
deviceName: the kind of device to automate
app: the path to the app you want to automate (but use the browserName capability instead in the case of automating a web browser)
automationName: the name of the driver you wish to use
For more information on Desired Capabilities and for a list of all the Capabilities you can use in Appium, see our Capabilities doc.

Used this boilerplate code to get everything running:

https://github.com/webdriverio/appium-boilerplate/

And copied over the `tests`, the `config` directories, all the base config files (eslint etc) and also adapted my package.json with the dependencies and scripts.

Set up emulators:

`https://github.com/webdriverio/appium-boilerplate/blob/master/docs/ANDROID_IOS_SETUP.md`

To start the android emulator from the command line:

`/Users/standoubt/Library/Android/sdk/emulator/emulator -avd Nexus_5X_API_23 -netdelay none -netspeed full`

`emulator -list-avds`

To list all available emulators

Also can use the following module:

`https://github.com/wswebcreation/start-android-emulator`
`npm install -g start-android-emulator`
`start-android-emulator`

NOTE: Need to set up emulator in PATH.

For iOS, you need to download the simulator you want (open XCODE, go to XCODE > Properties, then choose `Components` and select the simulator you want. Then open it in apps)

You can also use the `start-ios-simulator` npm module to start it from the command line:

`https://github.com/wswebcreation/start-ios-simulator`

`npm install -g start-ios-simulator`

`start-ios-simulator`

## Android: Running the tests

To run the tests:

`npm run android.app`

And if there are chromedriver problems due to using an older device, see the following fix:

`https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md`

This will also install the app in the emulator. To install it onto the emulator manually:

`adb install demo.apk`

From the directory that contains the apk file. The emulator must be running.

NOTE: Add the `adb` location to your path `/Users/standoubt/Library/Android/sdk/platform-tools`

Using a physical device:

??

## IOS

To run the tests:

`npm run ios.app`


## Performance Data

See this test for gathering performance data:

`tests/specs/app.forms.perf.spec.js`

Useful links:


https://appiumpro.com/editions/12
http://appium.io/docs/en/commands/mobile-command/
https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/ios/ios-xctest-performance.md

Things to investigate:

 - Running on SauceLabs

https://saucelabs.com/Appium
https://saucelabs.com/blog/appium-sauce-labs-integration

 - Running on a physical device?

http://appium.io/docs/en/drivers/ios-xcuitest-real-devices/

 - The Appium desktop and inspector

https://github.com/appium/appium-desktop

 - Read up about instruments:

 https://help.apple.com/instruments/mac/current/#/dev7b09c84f5

 How would you get the identifiers if you have the source code?
