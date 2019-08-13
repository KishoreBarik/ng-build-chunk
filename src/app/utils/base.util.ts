
import * as moment from "moment-timezone";
import {FormGroup} from "@angular/forms";
import * as _ from "lodash";

export class BaseUtils {
    public newDateFormat = new moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    public timeZone = moment.tz.guess();
    public utcDateFormat = new moment.utc().format();

    public _isEmpty(input) {
        if (input === null || input === undefined) {
            return !input;
        } else if (typeof input === "object" && input.constructor === Object) {
            return !(Object.keys(input).length > 0);
        } else if (
            (typeof input === "object" && input.constructor === Array) ||
            typeof input === "string"
        ) {
            return !(input.length > 0);
        } else {
            return false;
        }
    }
}
