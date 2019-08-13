import {PreloadingStrategy, Route} from "@angular/router";

import {Observable, of} from "rxjs";

export class AppCustomPreloader implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return  !window.location.pathname.includes("task") &&
        route.data && route.data.preload ? load() : of(null);
  }
}
