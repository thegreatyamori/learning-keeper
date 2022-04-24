import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTextareaComponent } from 'src/app/components/title-textarea/title-textarea.component';

describe('TitleTextareaComponent', () => {
  let component: TitleTextareaComponent;
  let fixture: ComponentFixture<TitleTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleTextareaComponent ]
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
});
