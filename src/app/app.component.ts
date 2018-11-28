import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  myObs: Observable<Object>;
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
      this.myObs = this.http.get("../assets/data/jobs.json")
      .pipe(map((res: Response) => res.body));
      this.myObs.subscribe(jobs => console.log("jobs", jobs));
  }

}



