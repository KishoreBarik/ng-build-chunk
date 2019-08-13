import {Injectable} from "@angular/core";

@Injectable()
export class NavigationService {
    isBackButtonClicked: boolean;

    public setBackClicked(value: boolean) {
        this.isBackButtonClicked = value;
    }

    public getBackClicked() {
        return this.isBackButtonClicked;
    }
}
