import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

const baseUrl = environment.baseUrl;

@Injectable()
export class BaseHttpInterceptor implements HttpInterceptor {


    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let authReq = null;
        const access_token = "FAKETOKEN";

        authReq = req.clone({
            headers: req.headers
            .set("Cache-Control", "no-cache,no-store")
            .set("Pragma", "no-cache")
            .set(
                "Authorization",
                access_token ? `Bearer ${access_token["access_token"]}` : ""
            ),
            url: req.url
        });

        this.startLoader();
        return next.handle(authReq).pipe(
            tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.hideLoader();
                    }
                },
                (err: any) => {
                    // this._as.error("returned " + `${err.statusText}` + " with error code " +`${err.status}`
                    // + " from the api " + `${err.url}`, false, "long" );
                    this.hideLoader();
                }
            )
        );
    }

    private startLoader(): void {
        // this._loadrServ.display(true);
    }

    private hideLoader(): void {
        // this._loadrServ.display(false);
    }
}
