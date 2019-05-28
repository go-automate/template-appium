import Gestures from '../helpers/Gestures';
import TabBar from '../screenobjects/components/tab.bar';
import FormScreen from '../screenobjects/forms.screen';
import LoginScreen from '../screenobjects/login.screen';
import fs from 'fs';

describe('WebdriverIO and Appium, interacting with form elements,', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown(true);
        TabBar.openForms();
        FormScreen.waitForIsShown(true);
    });

    it('should be able type in the input and validate the text', () => {
        let startArgs = {
            pid: 'current',
            profileName: 'Time Profiler',
            timeout: 60000
        };

        let jsonStartArgs = JSON.stringify(startArgs);

        console.log(jsonStartArgs);

        let stopArgs = {
            profileName: 'Time Profiler',
        };

        let jsonStopArgs = JSON.stringify(stopArgs);

        let perfResults;

        browser.execute('mobile: startPerfRecord', jsonStartArgs);

        const text = 'Hello, this is a demo app';
        FormScreen.input.setValue(text);
        expect(FormScreen.inputTextResult.getText()).toEqual(text);

        /**
         * IMPORTANT!!
         *  Because the app is not closed and opened between the tests
         *  (and thus is NOT starting with the keyboard hidden)
         *  the keyboard is closed here if it is still visible.
         */
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }

        perfResults = browser.execute('mobile: stopPerfRecord', jsonStopArgs);

        // Try decoding this.

        let buff = Buffer.from(perfResults, 'base64');
        let perfDataDecoded = Uint8Array.from(buff);

        // Create a file
        const filePath = '/Users/standoubt/Documents/perf.zip';

        fs.writeFile(filePath, perfDataDecoded, (err) => {
            if (err) console.log(err);
            console.log('Successfully Written to File');
        });
    });
});
