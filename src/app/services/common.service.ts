import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import * as Raven from "raven-js";
import { environment } from "../../environments/environment";

Raven
    .config("", {
        "maxBreadcrumbs": 50
    })
    .install();


@Injectable()
export class CommonService {
    selectedAccount$: Observable<Account>;
    _selectedAccount$: BehaviorSubject<Account>;

    errors$: Observable<any>;
    _errors$: BehaviorSubject<any>;

    constructor() {
        this._selectedAccount$ = (new BehaviorSubject({}) as BehaviorSubject<Account>);
        this.selectedAccount$ = this._selectedAccount$.asObservable();
    }

    storeSelectedAccDetails(selAcc) {

    }

    setDefaultAccToBs() {
       //
    }

    sendAddInfoToSentry(data: any) {
        try {
            Raven.captureException(data);
        } catch (e) {
            console.log("failed saving the error information in sentry", e);
        }
    }

}
