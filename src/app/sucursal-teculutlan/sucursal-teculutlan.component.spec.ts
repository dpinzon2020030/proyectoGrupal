import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalTeculutlanComponent } from './sucursal-teculutlan.component';

describe('SucursalTeculutlanComponent', () => {
  let component: SucursalTeculutlanComponent;
  let fixture: ComponentFixture<SucursalTeculutlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalTeculutlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalTeculutlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
