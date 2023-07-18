import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixirsComponent } from './elixirs.component';

describe('ElixirsComponent', () => {
  let component: ElixirsComponent;
  let fixture: ComponentFixture<ElixirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElixirsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElixirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
