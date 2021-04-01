import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresShowComponent } from './trabajadores-show.component';

describe('TrabajadoresShowComponent', () => {
  let component: TrabajadoresShowComponent;
  let fixture: ComponentFixture<TrabajadoresShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadoresShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadoresShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
