# Testing the Performance of Mobile Apps using WebDriverIO

See README for setting up the environment

See the `app.forms.perf.spec.js` test for the code to gather performance data.

## Saucelabs and other cloud vendors:

1. Got an account
2. Clicked on Real Device Testing
2.1 Uploaded the app (real device one in the iOS case)
3. Followed instructions for the Capabilities:
3.1 Need to see which devices are available and choose the device, OS and OS version accordingly (in Europe)
3.2 Need your API id
3.3 Need you app id

Looks like you can't gather the performance data as it runs the appium server on the SauceLabs side, so it can't save the data. I'm guessing SauceLabs provides performance data anyway?

It would be nice to get my dotenv working so I can store my API id in a .env file

## Running a real device

Seems like this is the place to get performance data using the code.




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
