import {FormControl} from "@angular/forms";

export class CustomValidator {
    static NameValidator(control: FormControl): { [s: string]: boolean } {
        const name: string = control.value;
        const NAME_REGEXP = /^[A-Za-z']+[A-Za-z '-]*$/i;
        if (name && name !== "N/A" && !NAME_REGEXP.test(name)) {
            return { incorrectName: true };
        }
        return null;
    }

    static UnknownNameValidator(
        control: FormControl
    ): { [s: string]: boolean } {
        const name: string = control.value;
        if (name && name !== "N/A" && name.toLocaleLowerCase() === "unknown") {
            return { unknownName: true };
        }
        return null;
    }

    static AlphaNumericValidator(
        control: FormControl
    ): { [s: string]: boolean } {
        const name: string = control.value;
        const NAME_REGEXP = /^[A-Za-z0-9]*$/i;
        if (name != null && name !== "N/A" && !NAME_REGEXP.test(name)) {
            return { incorrectName: true };
        }
        return null;
    }

    static CardNumberValidator(control: FormControl): { [s: string]: boolean } {
        const cardNumber: string = control.value;
        const CARD_REGEXP = /^[a-zA-Z]{3}[0-9]{10}$/i;
        if (cardNumber != null && !CARD_REGEXP.test(cardNumber)) {
            return { invalidCard: true };
        }
        return null;
    }

    static I20DS2019Validator(control: FormControl): { [s: string]: boolean } {
        const docNum: string = control.value;
        if (
            docNum != null &&
            (docNum.length > 11 || !docNum.toLowerCase().startsWith("n"))
        ) {
            return { "invalidI-20DS-2019Number": true };
        }
        return null;
    }

    static PassPortNumberValidator(
        control: FormControl
    ): { [s: string]: boolean } {
        const passport: string = control.value;
        if (
            passport &&
            passport !== "N/A" &&
            (passport.length < 6 || passport.length > 12)
        ) {
            return { incorrectPassportNum: true };
        } else {
            return null;
        }
    }

}
