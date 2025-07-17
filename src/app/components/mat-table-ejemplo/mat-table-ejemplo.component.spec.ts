import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableEjemploComponent } from './mat-table-ejemplo.component';

describe('MatTableEjemploComponent', () => {
  let component: MatTableEjemploComponent;
  let fixture: ComponentFixture<MatTableEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTableEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
