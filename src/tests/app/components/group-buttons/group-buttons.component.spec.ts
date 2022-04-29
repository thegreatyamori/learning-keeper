import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupButtonsComponent } from 'src/app/components/group-buttons/group-buttons.component';

describe('GroupButtonsComponent', () => {
  let component: GroupButtonsComponent;
  let fixture: ComponentFixture<GroupButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
