import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";

export function minDateValidator(minQualDate: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let value = null;
        let minDate = null;
        (control.value) ? (value = new Date(control.value), minDate = new Date(minQualDate)) : null;
        return (value < minDate) ? { "inValidDate": { value: control.value } } : null;
    };
}

@Directive({
    selector: "[minDateDirective]",
    providers: [{ provide: NG_VALIDATORS, useExisting: MinDateValidatorDirective, multi: true }]
})
export class MinDateValidatorDirective implements Validator {
    @Input("minDateDirective")
    minQualDate: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.minQualDate ? minDateValidator(this.minQualDate)(control) : null;
    }
}
