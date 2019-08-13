import {FormControl} from "@angular/forms";

export class ZipValidator {
    static zipValidator(control: FormControl): { [s: string]: boolean } {
        const zip: string = control.value;

        if (zip && (zip.length !== 5 && zip.length !== 10)) {
            return { incorrectZip: true };
        } else {
            return null;
        }
    }
}
