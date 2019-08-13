import {FormControl} from "@angular/forms";

export class PoBoxAddress {
    static PoBoxAddressValidator(
        control: FormControl
    ): { [s: string]: boolean } {
        const address: string = control.value;
        const ADDRESS1_REGEXP = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\W]+)$/;
        // tslint:disable-next-line:max-line-length
        const POBOXADDRESS_REGEXP: RegExp = /.*[pP][!@#$%^&*()`',.?";:\-{}|<> ]*[oO][!@#$;%^&*(),.`?\-' ":{}|<> ]*[Bb][!@#$;`%^&*'(),.?\-" :{}|<> ]*[Oo][!@;#$%^&*()',`.?\-":{}|<> ]*[Xx].*/;
        if (
            (address != null && !ADDRESS1_REGEXP.test(address)) ||
            POBOXADDRESS_REGEXP.test(address)
        ) {
            return { incorrectAddress1Format: true };
        } else {
            return null;
        }
    }
}
