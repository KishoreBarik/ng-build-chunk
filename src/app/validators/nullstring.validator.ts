import {FormControl} from "@angular/forms";

export class stringNull {
    static stringNullValidator(
        control: FormControl
    ): { [s: string]: boolean } {
        const docTitle = `${control.value}`;
        if (docTitle === "null") {
            return {incorrectDocTitle: true};
        } else {
            return null;
        }
    }
}
