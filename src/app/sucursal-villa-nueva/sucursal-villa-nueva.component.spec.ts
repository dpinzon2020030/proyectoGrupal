import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalVillaNuevaComponent } from './sucursal-villa-nueva.component';

describe('SucursalVillaNuevaComponent', () => {
  let component: SucursalVillaNuevaComponent;
  let fixture: ComponentFixture<SucursalVillaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalVillaNuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalVillaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
