import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMembresiasComponent } from './list-membresias.component';

describe('ListMembresiasComponent', () => {
  let component: ListMembresiasComponent;
  let fixture: ComponentFixture<ListMembresiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMembresiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMembresiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
