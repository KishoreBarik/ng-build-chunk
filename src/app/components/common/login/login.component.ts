import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Email} from "../../../validators";
import {Subscription} from "rxjs";


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    loginFormFG: FormGroup;
    subscriptions = new Subscription();

    constructor(private fb: FormBuilder) {
        this.loginFormFG = fb.group({
            "UserName": ["", Validators.compose([Validators.required, Email.emailValidator])],
            "Password": ["", Validators.required]
        });
    }

    // Redirect to the dashboard if authentication token is found in local storege
    ngOnInit() {

    }


}
