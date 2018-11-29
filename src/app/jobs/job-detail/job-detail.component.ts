import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  @Input() jobs: object[];
  constructor() { }

  ngOnInit() {

  }

  getJobs() {
    console.log(this.jobs);
  }

}
