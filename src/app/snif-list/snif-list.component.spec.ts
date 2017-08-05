import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnifListComponent } from './snif-list.component';

describe('SnifListComponent', () => {
  let component: SnifListComponent;
  let fixture: ComponentFixture<SnifListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnifListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
