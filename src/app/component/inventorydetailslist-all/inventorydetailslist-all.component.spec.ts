import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorydetailslistAllComponent } from './inventorydetailslist-all.component';

describe('InventorydetailslistAllComponent', () => {
  let component: InventorydetailslistAllComponent;
  let fixture: ComponentFixture<InventorydetailslistAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorydetailslistAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorydetailslistAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
