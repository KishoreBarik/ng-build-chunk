import { BaseUtils } from "./../utils";
import {FormControl} from "@angular/forms";
import * as _ from "lodash";

let globalSSN: string = null;
let confirmSSN: string = null;
const SSNRegx = /^(?!000|666)[0-8][0-9]{2}(?!00)[0-9]{2}(?!0000)[0-9]{4}|9[0-9]{2}[9,7][0-9]{5}$/;

export class ConfirmSSN {
    static confirmSSNValidator(control: FormControl) {
        confirmSSN = control.value;
        const isValidConfSSN = SSNRegx.test(confirmSSN);
        if (confirmSSN && globalSSN && confirmSSN !== globalSSN) {
            return { incorrectConfirmSSN: true };
        } else if (globalSSN && confirmSSN === null) {
            return { incorrectConfirmSSN: true };
        } else {
            if (!isValidConfSSN) {
                return { incorrectSSN: true };
            } else {
                return null;
            }
        }
    }

    static validSSN(control: FormControl) {
        globalSSN = control.value;
        const isValidSSN = SSNRegx.test(globalSSN);
        if (globalSSN && isValidSSN && globalSSN !== confirmSSN) {
            return { incorrectConfirmSSN: true };
        } else {
            if (!isValidSSN) {
                return { incorrectSSN: true };
            } else {
                return null;
            }
        }
    }

    static SSNValdator(control: FormControl) {
        const SSN = `${control.value}`;
        const isValidSSN = SSNRegx.test(SSN);
        if (SSN && !isValidSSN) {
            return { incorrectSSN: true };
        } else {
            return null;
        }
    }

    static SSNValidationWithRemovingMasking(control: FormControl) {
        let SSN = `${control.value}`;
        SSN = SSN.replace(/-/g, "")
            .split("_")
            .join("");

        const isValidSSN = SSNRegx.test(SSN);
        if (SSN && !isValidSSN) {
            return { incorrectSSN: true };
        } else {
            return null;
        }
    }

    static mismatchPartnerSNN(control: FormControl) {
        globalSSN = control.value;
        if (globalSSN && !_.isNull(sessionStorage.getItem("$5"))) {
            if (
                JSON.parse(
                    JSON.parse(sessionStorage.getItem("$5")).EmpInfo
                ).SSNLast4.trim() === globalSSN.substring(5, 9)
            ) {
                return null;
            } else {
                return { mismatchPartnerSNN: true };
            }
        } else {
            return null;
        }
    }
}
