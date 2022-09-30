import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary = [{word: "Dog", mean: "Chó", description: "4 chân"},
    {word: "Chicken", mean: "Gà", description: "2 chân, có cánh nhưng không thể bay"},
    {word: "Pig", mean: "Heo", description: "Lấy thịt"},
    {word: "Bird", mean: "Chim", description: "Như Gà nhưng bay được"},
    {word: "Cat", mean: "Mèo", description: "Chảnh"},
  ]

  constructor() {
  }

  findByName(word) {
    let result = this.dictionary.find((element)=>element.word  === word)
    return result;
  }
}
