import { Component, OnInit } from '@angular/core';
import { validateSentence } from 'src/app/utils/validate-textarea';

@Component({
  selector: 'app-title-textarea',
  templateUrl: './title-textarea.component.html',
  styles: []
})
export class TitleTextareaComponent implements OnInit {
  title: string = '';

  constructor() { }

  ngOnInit(): void { }

  handleValue(evt: Event): void {
    const isValidSentence = validateSentence(evt);

    if (!isValidSentence) {
      throw "Not valid text !";
    }
    console.log(isValidSentence)
  }
}
