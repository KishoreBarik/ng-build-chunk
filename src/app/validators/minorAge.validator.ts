import {FormControl} from "@angular/forms";

export class MinorAge {
    static MinorAgeValidator(control: FormControl): { [s: string]: boolean } {
        const DOB: string = control.value;
        const today = new Date();
        const birthDate = new Date(DOB);
        let age = today.getFullYear() - birthDate.getFullYear();
        const dobYearLength =
            // tslint:disable-next-line:no-bitwise
            (Math.log(birthDate.getFullYear()) * Math.LOG10E + 1) | 0;
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 16 || dobYearLength !== 4) {
            return { Minor: true };
        } else if (age > 120) {
            return { AgeExceed: true };
        } else {
            return null;
        }
    }

    static MinorAgeGuardianValidator(
        control: FormControl
    ): { [s: string]: boolean } {
        const DOB: string = control.value;
        if (DOB) {
            const today = new Date();
            const birthDate = new Date(DOB);
            let age = today.getFullYear() - birthDate.getFullYear();
            const dobYearLength =
                // tslint:disable-next-line:no-bitwise
                (Math.log(birthDate.getFullYear()) * Math.LOG10E + 1) | 0;
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age >= 16 && age < 18 && dobYearLength === 4) {
                return null;
            } else {
                return { MinorGuardian: true };
            }
        } else {
            return null;
        }
    }
}
