import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  @Input() jobs: object[];
  @Output() currentIdx = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }
  onHandleClick(idx: number) {
    this.currentIdx.emit(idx);
  }

}
