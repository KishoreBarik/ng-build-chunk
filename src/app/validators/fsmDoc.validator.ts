import {FormControl} from "@angular/forms";

export class fsmDoc {
    static fsmDocNumberValidator(
        control: FormControl
    ): { [s: string]: boolean } {
        const fsmDocNumber = `${control.value}`;
        if (
            fsmDocNumber &&
            (fsmDocNumber[0] !== "A" ||
            (fsmDocNumber.length !== 7 || !/^[0-9"]+$/.test(fsmDocNumber.slice(1))))
        ) {
            return { incorrectFsmDocNum: true };
        } else {
            return null;
        }
    }
}
