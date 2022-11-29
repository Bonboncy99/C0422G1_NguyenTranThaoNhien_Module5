import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  like = 0;
  list = [];

  @Input() test1: number;

  constructor() {
  }

  ngOnInit(): void {
    if (this.test1 === 1) {
      this.showCaNhan();
    } else {
      this.showChung();
    }
  }

  addBaiDang() {
    this.list.unshift('Them moi');
  }

  showCaNhan() {
    this.list = ['baif dang ca nhan 1', 'baif dang ca nhan 2', 'baif dang ca nhan 3'];
  }

  showChung() {
    this.list = ['baif dang chung 1', 'baif dang chung 2', 'baif dang chung 3'];
  }

  likeThis() {
    if (this.like) {
      this.like = 1;
    }
    this.like = 0;
  }


}
