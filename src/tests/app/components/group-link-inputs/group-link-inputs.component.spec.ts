import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLinkInputsComponent } from 'src/app/components/group-link-inputs/group-link-inputs.component';

describe('GroupLinkInputsComponent', () => {
  let component: GroupLinkInputsComponent;
  let fixture: ComponentFixture<GroupLinkInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupLinkInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupLinkInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
