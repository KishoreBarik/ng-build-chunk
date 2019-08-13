import {environment} from "./../../environments/environment";
import {URLSearchParams} from "@angular/http";

const baseUrl = environment.baseUrl;

export class BaseHttpRequest {
    url?: string;
    endpoint: string;
    type?: string;
    header?: any;
    requestBody?: any;
    responseType?: any;

    constructor(requestConfig) {
        const token = JSON.parse(sessionStorage.getItem("$1"));
        const secondarytoken = sessionStorage.getItem("$10");
        this.header = {
            Authorization: (token && token.access_token) ? `Bearer ${token.access_token}` : "",
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-SelectedAccountId": secondarytoken
        };
        if (requestConfig.responseType) {
            this.responseType = requestConfig.responseType;
        }
        this.type = requestConfig.type ? requestConfig.type : "get";
        this.url = (requestConfig.url ? requestConfig.url : baseUrl) + requestConfig.endpoint;
        if (requestConfig.header) {
            this.processHeader(requestConfig.header);
        }
        this.requestBody = requestConfig.requestBody
            ? this.processParams(requestConfig.requestBody)
            : this.type === "post"
            ? ""
            : { search: "" };
    }

    private processParams(bodyObj): any {
        if (this.header["Content-Type"] == "application/json") {
            return bodyObj;
        } else {
            if (typeof(bodyObj) == "object") {
                const urlSearchParams = new URLSearchParams();
                for (const key in bodyObj) {
                    urlSearchParams.append(key, bodyObj[key]);
                }
                const body = urlSearchParams.toString();
                return this.type === "post" ? body : { search: body };
            }
        }

    }

    private processHeader(headerObj) {
        if (typeof(headerObj) == "object") {
            for (const key in headerObj) {
                this.header[key] = headerObj[key];
            }
        }
    }

}
