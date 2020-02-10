import { Component, OnInit } from "@angular/core";
import { RecordModel, GPS } from "../models/RecordModels";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-display-user-records",
  templateUrl: "./display-user-records.component.html",
  styleUrls: ["./display-user-records.component.css"]
})
export class DisplayUserRecordsComponent implements OnInit {
  arrRecords = [];

  constructor(private http: HttpClient, private router: Router) {}

  onLogout() {
    let path = "/login";
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expires_at");
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    if (!this.isLoggedIn()) {
      let path = "/login";
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.router.navigate([path]);
    } else {
      let token: string = localStorage.getItem("token");
      const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders().append('token', token),
      };
      
      let user: String = localStorage.getItem("userId");
      this.http
        .get("http://localhost:4000/api/v1/records/get-by-user/" + user, requestOptions)
        .subscribe(
          (data: any) => {
            console.log(data);
            this.arrRecords = data.data;
          },
          error => {
            console.log("ERROR");
            console.log(error.message);
            alert("There was an error getting your data, please try again.")
          }
        );
    }
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
