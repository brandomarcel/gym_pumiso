import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembresiasComponent } from './add-membresias.component';

describe('AddMembresiasComponent', () => {
  let component: AddMembresiasComponent;
  let fixture: ComponentFixture<AddMembresiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMembresiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMembresiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
