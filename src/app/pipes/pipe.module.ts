import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {KeysPipe} from "./keys-filter.pipe";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        KeysPipe
    ],
    exports: [
        KeysPipe
    ],
    providers: []
})
export class PipeModule {
}
