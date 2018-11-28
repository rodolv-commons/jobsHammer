import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  @Input() jobs: object[];

  constructor() { }

  ngOnInit() {
  }

  getJobs () {
    console.log(this.jobs);
  }

}
