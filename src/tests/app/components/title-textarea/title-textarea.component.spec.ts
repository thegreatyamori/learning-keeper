import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TitleTextareaComponent } from 'src/app/components/title-textarea/title-textarea.component';

describe('TitleTextareaComponent', () => {
  let component: TitleTextareaComponent;
  let fixture: ComponentFixture<TitleTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleTextareaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have title as name attribute", () => {
    const ngContainer = fixture.nativeElement as HTMLElement;
    const textarea = ngContainer.firstElementChild as HTMLTextAreaElement;

    expect(textarea.name).toEqual('title');
  });

  it("should have 'hello world.' as title value", () => {
    const textarea = fixture.debugElement.query(By.css('.textarea-title')).nativeElement;
    const event = new Event('change');
    textarea.value = 'hello world.';
    textarea.dispatchEvent(event);

    fixture.detectChanges()

    fixture.whenStable().then(() => {
      expect(component.title).toEqual('hello world.');
    })
  });

  it("should have error: 'Not valid text !' when have 'hello world' value", () => {
    const textarea = fixture.debugElement.query(By.css('.textarea-title')).nativeElement;
    const event = new Event('change');
    textarea.value = 'hello world';
    textarea.dispatchEvent(event);

    fixture.detectChanges()

    fixture.whenStable().then(() => {
      expect(component.title).toEqual('');
      expect(component.handleValue(event)).toThrowError('Not valid text !')
    })
  });
});
