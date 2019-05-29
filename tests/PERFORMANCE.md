# Testing the Performance of Mobile Apps using WebDriverIO

See README for setting up the environment

See the `app.forms.perf.spec.js` test for the code to gather performance data.

## Saucelabs and other cloud vendors:



## Running a real device



## The inspector

1. Start the Appium server through the Appium Desktop client.
2. Click on the `Search` button.
3. Start a session with the correct `Desired Capabilities`. E.g.

    {
        // The defaults you need to have in your config
        deviceName: 'iPhone X',
        platformName: 'iOS',
        platformVersion: '12.2',
        orientation: 'PORTRAIT',
        maxInstances: 1,
        // The path to the app
        app: join(process.cwd(), './apps/iOS-Simulator-NativeDemoApp-0.2.1.app.zip'),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
    },

4. The app will open in Appium Desktop and offer the inspector and the option of screen recording.

## Performance detail
