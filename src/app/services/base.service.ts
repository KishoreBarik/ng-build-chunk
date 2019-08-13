import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {BaseHttpRequest} from "./../models";
import {Headers, Http, RequestOptions, XHRBackend} from "@angular/http";

@Injectable()
export class RnDHttp extends Http {
    constructor(backend: XHRBackend, options: RequestOptions) {
        super(backend, options);
    }

    sendRequest(ajaxConfig: BaseHttpRequest) {
        this._defaultOptions.headers = new Headers(ajaxConfig.header);
        if (ajaxConfig.responseType) {
            this._defaultOptions.responseType = ajaxConfig.responseType;
        } else {
            this._defaultOptions.responseType = null;
        }

        return this[ajaxConfig.type](ajaxConfig.url, ajaxConfig.requestBody)
            .map((response) => response._body)
            .catch((error: any) => {
                return Observable.throw(error);
            });

    }

    GET(endPoint: string, requestOptions?: any) {
        const obj = {
            endpoint: endPoint,
            type: "get",
            responseType: null
        };
        if (requestOptions && requestOptions.responseType) {
            obj.responseType = requestOptions.responseType;
        }
        const reqe = new BaseHttpRequest(obj);
        return this.sendRequest(reqe);
    }

    POST(endPoint: string, reqBody: any, header?: any, requestOptions?: any) {
        const obj = { endpoint: endPoint, type: "post", requestBody: reqBody, header: null, responseType: null };
        if (header) {
            obj.header = header;
        }
        if (requestOptions && requestOptions.responseType) {
            obj.responseType = requestOptions.responseType;
        }
        const reqe = new BaseHttpRequest(obj);
        return this.sendRequest(reqe);
    }

    PUT(endPoint: string, reqBody: any, header?: any) {
        const obj = { endpoint: endPoint, type: "put", requestBody: reqBody, header: null };
        if (header) {
            obj.header = header;
        }
        const reqe = new BaseHttpRequest(obj);
        return this.sendRequest(reqe);
    }

    DELETE(endPoint: string, header?: any) {
        const obj = { endpoint: endPoint, type: "delete", header: null };
        if (header) {
            obj.header = header;
        }
        const reqe = new BaseHttpRequest(obj);
        return this.sendRequest(reqe);
    }

}

export function httpFn(backend: XHRBackend, options: RequestOptions) {
    return new RnDHttp(backend, options);
}
