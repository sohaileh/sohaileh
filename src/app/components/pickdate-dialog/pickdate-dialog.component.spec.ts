import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickdateDialogComponent } from './pickdate-dialog.component';

describe('PickdateDialogComponent', () => {
  let component: PickdateDialogComponent;
  let fixture: ComponentFixture<PickdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
