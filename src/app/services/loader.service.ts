import {Injectable} from "@angular/core";
import {NavigationStart, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Subject} from "rxjs";

@Injectable()
export class LoaderService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next(false);
                }
            }
        });
    }

    display(display: boolean, keepAfterNavigationChange?: any) {
        this.keepAfterNavigationChange = (keepAfterNavigationChange) ? keepAfterNavigationChange : false;
        this.subject.next(display);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
