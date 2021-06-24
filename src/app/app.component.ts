import { Component } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aurora-ang';
  customers = [];
  cust_string = "";
  constructor(private http:HttpClient) {

  }

  got_data() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
      })
    };
    // -----------------  ADD YOUR URL TO THE GET REQUEST  --------
    // UPDATEME
    this.http.get("").subscribe((data:any) => this.customers = data);
    this.cust_string = JSON.stringify(this.customers)
    console.log(this.cust_string);
  }
}
