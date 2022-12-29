import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukloginComponent } from './buklogin.component';

describe('BukloginComponent', () => {
  let component: BukloginComponent;
  let fixture: ComponentFixture<BukloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BukloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BukloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
