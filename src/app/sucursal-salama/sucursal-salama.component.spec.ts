import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalSalamaComponent } from './sucursal-salama.component';

describe('SucursalSalamaComponent', () => {
  let component: SucursalSalamaComponent;
  let fixture: ComponentFixture<SucursalSalamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalSalamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalSalamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
