import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "input-user-data-form",
  templateUrl: "./input-user-data-form.component.html",
  styleUrls: ["./input-user-data-form.component.css"]
})
export class InputUserDataFormComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  invalidName() {
    return this.submitted && this.userForm.controls.username.errors != null;
  }

  invalidEmail() {
    return this.submitted && this.userForm.controls.email.errors != null;
  }

  invalidPassword() {
    return this.submitted && this.userForm.controls.password.errors != null;
  }

  ngOnInit() {
    if (this.isLoggedIn()) {
      let path = "/records";
      this.router.navigate([path]);
    }

    this.userForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  onLogin() {
    let path = "/login";
    this.router.navigate([path]);
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid == true) {
      return;
    } else {
      let data: any = Object.assign(this.userForm.value);

      this.http
        .post("http://localhost:4000/api/v1/users/create", data)
        .subscribe(
          (data: any) => {
            this.loginUser();
          },
          error => {
            console.log("ERROR");
            console.log(error.message);
            alert("There was an error, please try again.")
          }
        );

      this.registered = true;
    }
  }

  loginUser() {
    let data: any = Object.assign(this.userForm.value);

    this.http.post("http://localhost:4000/api/v1/users/login", data).subscribe(
      (data: any) => {
        let path = "/records";
        console.log(data.data);
        const expiresAt = moment().add(data.data.expiresIn, "second");
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("userId", data.data.userId);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
        this.router.navigate([path]);
      },
      error => {
        console.log("ERROR");
        console.log(error.message);
        alert("There was an error, please try again.");
      }
    );
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
