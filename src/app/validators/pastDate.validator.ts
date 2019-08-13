import {FormControl} from "@angular/forms";
import * as moment from "moment";

export class ExpirationDate {
    static dateValidator(control: FormControl): { [s: string]: boolean } {
        const expDate: string = control.value;
        const date = new moment(expDate).format("YYYY/MM/DD");
        const now = moment().format("YYYY/MM/DD");
        if (expDate != null && now > date && expDate !== "N/A") {
            return { pastDate: true };
        } else {
            return null;
        }
    }
}
