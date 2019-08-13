import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";

export function maxDateValidator(maxQualDate: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let value = null;
        let maxDate = null;
        (control.value) ? (value = new Date(control.value), maxDate = new Date(maxQualDate)) : null;
        return (value > maxDate) ? { "inValidDate": { value: control.value } } : null;
    };
}

@Directive({
    selector: "[maxDateDirective]",
    providers: [{ provide: NG_VALIDATORS, useExisting: MaxDateValidatorDirective, multi: true }]
})
export class MaxDateValidatorDirective implements Validator {
    @Input("maxDateDirective")
    maxQualDate: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.maxQualDate ? maxDateValidator(this.maxQualDate)(control) : null;
    }
}
