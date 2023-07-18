import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixirCardComponent } from './elixir-card.component';

describe('ElixirCardComponent', () => {
  let component: ElixirCardComponent;
  let fixture: ComponentFixture<ElixirCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElixirCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElixirCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
