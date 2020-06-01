import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorydetailslistComponent } from './inventorydetailslist.component';

describe('InventorydetailslistComponent', () => {
  let component: InventorydetailslistComponent;
  let fixture: ComponentFixture<InventorydetailslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorydetailslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorydetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
