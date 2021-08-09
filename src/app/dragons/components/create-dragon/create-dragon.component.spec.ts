import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDragonComponent } from './create-dragon.component';

describe('CreateDragonComponent', () => {
  let component: CreateDragonComponent;
  let fixture: ComponentFixture<CreateDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDragonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
