import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Word} from "../../model/word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  translateWord:Word = null;
  constructor(private dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let word = paramMap.get('word');
      console.log(word)
      this.translateWord = this.dictionaryService.findByName(word);
      console.log(this.dictionaryService.findByName(word))
    })
  }

  ngOnInit(): void {
  }
}
