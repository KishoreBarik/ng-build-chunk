import {FormControl} from "@angular/forms";

let newPassword: string = null;
let newPasswrd: string = null;
let confirmPasswrd: string = null;
const passwrd_REGEXP: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

export class PasswordValidator {
    static confirmPassword(control: FormControl) {
        confirmPasswrd = `${control.value}`;
        if (
            confirmPasswrd &&
            (!passwrd_REGEXP.test(confirmPasswrd) &&
                confirmPasswrd !== newPassword)
        ) {
            return { incorrectConfirmPassword: true };
        } else {
            return null;
        }
    }

    static validNewPassword(control: FormControl) {
        newPasswrd = `${control.value}`;
        if (
            newPasswrd &&
            (!passwrd_REGEXP.test(newPasswrd) || newPasswrd === newPassword)
        ) {
            return { incorrectNewPassword: true };
        } else {
            return null;
        }
    }

    static validPassword(control: FormControl) {
        newPassword = `${control.value}`;
        if (
            newPassword &&
            (!passwrd_REGEXP.test(newPassword) && newPassword !== confirmPasswrd)
        ) {
            return { incorrectPassword: true };
        } else {
            return null;
        }
    }
}
