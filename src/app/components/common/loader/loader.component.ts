import {LoaderService} from "./../../../services";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-loader",
    templateUrl: "./loader.component.html"
})
export class LoaderComponent implements OnInit {
    _loader: any;

    constructor(private loaderService: LoaderService) {}

    ngOnInit() {
        this.loaderService.getMessage().subscribe(loader => this._loader = loader);
    }

}
