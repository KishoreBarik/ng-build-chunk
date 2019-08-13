import {FormControl} from "@angular/forms";

export class alienRegNum {
    static alienRegNumValidator(
        control: FormControl
    ): { [s: string]: boolean } {
        const alienregnum = `${control.value}`;
        if (
            alienregnum &&
            alienregnum !== "N/A" &&
            (alienregnum.length !== 9 || !/^[0-9"]+$/.test(alienregnum))
        ) {
            return { incorrectAlienRegNum: true };
        } else {
            return null;
        }
    }
}
