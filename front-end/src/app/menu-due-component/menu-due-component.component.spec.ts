import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDueComponentComponent } from './menu-due-component.component';

describe('MenuDueComponentComponent', () => {
  let component: MenuDueComponentComponent;
  let fixture: ComponentFixture<MenuDueComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDueComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
