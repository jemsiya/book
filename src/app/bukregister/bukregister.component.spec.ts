import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukregisterComponent } from './bukregister.component';

describe('BukregisterComponent', () => {
  let component: BukregisterComponent;
  let fixture: ComponentFixture<BukregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BukregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BukregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
