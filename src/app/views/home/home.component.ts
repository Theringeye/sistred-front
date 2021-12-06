import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.localStorage.clear();
    window.localStorage.setItem(
      "token",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlcmljc29uIiwiZXhwIjoxNjY5OTgzOTA0fQ.x1PRYxJUh4Wank7iE7qrjBg-miTFi_x2Ciy997I6yk1_UVQDBbKI08qf2yegHY7CLrSS14WZne4oz7xG4gmh7A"
    );
  }
}
