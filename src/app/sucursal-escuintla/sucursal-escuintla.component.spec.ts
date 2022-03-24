import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalEscuintlaComponent } from './sucursal-escuintla.component';

describe('SucursalEscuintlaComponent', () => {
  let component: SucursalEscuintlaComponent;
  let fixture: ComponentFixture<SucursalEscuintlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalEscuintlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalEscuintlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
