import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss']
})
export class PaginationBarComponent implements OnInit, OnChanges {

  @Input('size') nbPages = 0;
  @Input('currentPage') currentPage = 1;
  @Output('changed') pageHasChanged: EventEmitter<number>;

  pages: number[]; 

  constructor() { 
    this.pages = [];
    this.pageHasChanged = new EventEmitter<number>()
  }

  ngOnInit() {
    this.fillPages();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fillPages();
  }

  fillPages(){
    this.pages = Array(this.nbPages).fill(1).map((x, i) => i);
  }

  pageChanged(page){
    this.currentPage = page;
    this.pageHasChanged.emit(this.currentPage);
  }

}
