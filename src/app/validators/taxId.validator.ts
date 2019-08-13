import {FormControl} from "@angular/forms";

export class TaxIdValidator {
    static taxValidator(control: FormControl): { [s: string]: boolean } {
        let taxId: string = control.value;
        if (taxId) {
            const numbers = taxId.match(/\d/g);
            taxId = numbers.join("");
            if (taxId.length < 9 || /[a-zA-Z]/.test(taxId)) {
                return { incorrectTaxId: true };
            } else {
                return null;
            }
        }
    }
}
