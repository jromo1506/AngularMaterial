import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceEjemploComponent } from './data-source-ejemplo.component';

describe('DataSourceEjemploComponent', () => {
  let component: DataSourceEjemploComponent;
  let fixture: ComponentFixture<DataSourceEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSourceEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSourceEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
