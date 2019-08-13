import {FormControl} from "@angular/forms";

export class PhoneNumberValidator {
    static phoneNumValidator(control: FormControl): { [s: string]: boolean } {
        let phoneNum: string = control.value;
        const charsRegex = new RegExp("[a-zA-Z]");
        const charRegexResult = charsRegex.test(phoneNum);
        if (phoneNum && phoneNum !== "N/A" && !charRegexResult) {
            phoneNum = `${phoneNum}`;
            const phoneWithOutMask = phoneNum.match(/\d/g);
            phoneNum = phoneWithOutMask.join("");
            if (phoneNum.length < 10) {
                return { incorrectPhoneNumber: true };
            } else {
                return null;
            }
        }
    }
}
