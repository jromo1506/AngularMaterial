import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPaginatorEjemploComponent } from './mat-paginator-ejemplo.component';

describe('MatPaginatorEjemploComponent', () => {
  let component: MatPaginatorEjemploComponent;
  let fixture: ComponentFixture<MatPaginatorEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatPaginatorEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatPaginatorEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
