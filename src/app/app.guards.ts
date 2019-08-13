import {BaseUtils} from "./utils/base.util";
import {Injectable} from "@angular/core";
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanDeactivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import * as moment from "moment";
import * as _ from "lodash";
import {Observable} from "rxjs";
@Injectable()
export class BaseAuthGuard {

    validateAuth() {
        return true;
    }

    sessionValidation(authToken: any, router: Router) {
        if (authToken && authToken !== "undefined" && authToken.Privs) {
            if (moment().isAfter(authToken[".expires"])) {
                router.navigate(["/login"]);
                return false;
             } else {
                return true;
            }
        }
    }
}


@Injectable()
export class IsSessionExpires implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        return true;
    }
}


@Injectable()
export class IsUserHasAccess implements CanActivate {
    constructor(private router: Router,
        private _ar: ActivatedRoute,
        private _bu: BaseUtils) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> |
                                                                            Promise<boolean> |
                                                                            boolean {
        return true;
    }
}

