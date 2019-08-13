import {FormControl} from "@angular/forms";

export class Address1 {
    static Address1Validator(control: FormControl): { [s: string]: boolean } {
        const address: string = control.value;
        const ADDRESS1_REGEXP = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\W]+)$/;
        if (address != null && !ADDRESS1_REGEXP.test(address)) {
            return { incorrectAddress1Format: true };
        } else {
            return null;
        }
    }
}
