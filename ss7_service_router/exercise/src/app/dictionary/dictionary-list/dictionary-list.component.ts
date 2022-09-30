import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Word} from "../../model/word";
import {FormControl, FormGroup} from "@angular/forms";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {
  word:Word = null;
  dictionary: Word[] = [];
  constructor(private dictionaryService:DictionaryService,private router: Router) {
    this.dictionary = this.dictionaryService.dictionary;
  }


  ngOnInit(): void {
  }

  search() {
    this.router.navigateByUrl('dictionary/'+this.word);
  }
}
