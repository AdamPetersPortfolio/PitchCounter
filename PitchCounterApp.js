/**
 * Summary. Contains the implementation to create a instrument dependent
 *          pitch counter. Exports a PitchCounterApp object for
 *          a react file to use.
 *
 * @file   This files defines the PitchCounterApp class.
 * @author Adam Peters.
 */

class PitchCounterApp {
    constructor(instr) {
        this.stopped = true;
        this.instrument = new InstrumentListener(instr);
        this.get_pitch_count = function () {
            return this.instrument.get_pitch_count();
        };
    }

    /**
     * Change the Instrument to which the app is listening
     *
     * @param {instr} the String name of the instrument
     */
    change_instrument(instr) {
        if (this.stopped) {
            this.changeState();
        } else {
            this.changeState();
            this.instrument.changeInstrument(instr)
            this..changeState();
        }
    }

    /**
     * Start the EventListener. Cannot start on opening of WebPage due
     * to AudioContext limitations.
     */
    start() {
        this.stopped = true;
        this.instrument.startListener();
    }

    /**
     * Completely stop the app from listening.
     */
    stop() {
        this.stopped = true;
        this.instrument.stopListener();
    }

    /**
     * Pause the app from listening.
     */
     changeState() {
        this.stopped = !this.stopped;
        return this.instrument.changeListenerState();
    }
}

app = new PitchCounterApp("piano");

function Begin() {
    app.start();
}

function Stop() {
    app.stop();
}

function ChangeState() {
    app.changeState();
}

function ChangeInstrument(instr) {
    app.change_instrument(instr);
}
