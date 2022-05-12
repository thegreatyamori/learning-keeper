import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-textarea',
  templateUrl: './title-textarea.component.html',
  styles: []
})
export class TitleTextareaComponent implements OnInit {
  title: string = ''

  constructor() { }

  ngOnInit(): void { }

  handleValue(evt: Event): void {
    let sentence = this.retrieveValue(evt)
    let isValidSentence = this.validateSentence(sentence)

    console.log(sentence, isValidSentence);
    if (!isValidSentence) throw "Not valid text !";

    this.title = sentence;
  }

  private retrieveValue(evt: Event): string {
    const target = evt.target as HTMLTextAreaElement;
    return target.value;
  }

  private validateSentence(payload: string): boolean {
    const validate_sentence_regex = new RegExp(/([^\.\?\!]*)[\.\?\!]/, 'g')
    return validate_sentence_regex.test(payload)
  }
}
