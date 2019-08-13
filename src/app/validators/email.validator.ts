import {FormControl} from "@angular/forms";

export class Email {
    static emailValidator(control: FormControl): { [s: string]: boolean } {
        const email: string = control.value;
        const EMAIL_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
        if (
            email &&
            email.toLocaleUpperCase() !== "N/A" &&
            (email.length <= 5 || !EMAIL_REGEXP.test(email))
        ) {
            return { incorrectMailFormat: true };
        }
        return null;
    }
}
