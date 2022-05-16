import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TitleTextareaComponent } from 'src/app/components/title-textarea/title-textarea.component';
import { InvalidBorderDirective } from '../../../app/directives/invalid-border.directive';

describe('InvalidBorderDirective', () => {
  let fixture: ComponentFixture<TitleTextareaComponent>;
  let component: TitleTextareaComponent;
  let textarea: HTMLTextAreaElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvalidBorderDirective, TitleTextareaComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTextareaComponent);
    component = fixture.componentInstance;
    textarea = fixture.debugElement.query(By.css('.textarea-title')).nativeElement;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should change the border color to "red" when the text value is invalid', () => {
    const event = new Event('change');
    textarea.value = 'hello world';
    textarea.dispatchEvent(event);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(textarea.style.cssText).toEqual('border-color: red;');
    })
  });

  it('should change the border color to "initial" when the text value is valid', () => {
    const event = new Event('change');
    textarea.value = 'hello world.';
    textarea.dispatchEvent(event);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(textarea.style.cssText).toEqual('border-color: initial;');
    })
  });
});
