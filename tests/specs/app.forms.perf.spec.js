import TabBar from '../screenobjects/components/tab.bar';
import FormScreen from '../screenobjects/forms.screen';
import fs from 'fs';

describe('WebdriverIO and Appium, interacting with form elements,', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown(true);
        TabBar.openForms();
        FormScreen.waitForIsShown(true);
    });

    it('should be able type in the input and validate the text', () => {
        // Set up data for the Performance recording - need to set this up as a 'helper'
        let startArgs = {
            pid: 'current',
            profileName: 'Time Profiler',
            timeout: 60000
        };

        // Stringify this - not sure this is needed
        let jsonStartArgs = JSON.stringify(startArgs);

        // Set up data for stopping the performance recorder.
        let stopArgs = {
            profileName: 'Time Profiler',
        };

        // Again, not sure this is needed
        let jsonStopArgs = JSON.stringify(stopArgs);


        // Start performance testing
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

        // Stop performance test and capture the results.
        let perfResults = browser.execute('mobile: stopPerfRecord', jsonStopArgs);

        // Try decoding this.
        let buff = Buffer.from(perfResults, 'base64');
        // Convert it into a byte array
        let perfDataDecoded = Uint8Array.from(buff);

        // Create a file path
        const filePath = '/Users/standoubt/Documents/perf.zip';

        // Save the byte array as a file, using the path above. It will be a Zip.
        fs.writeFile(filePath, perfDataDecoded, (err) => {
            if (err) console.log(err);
            console.log('Successfully Written to File');
        });
    });
});
