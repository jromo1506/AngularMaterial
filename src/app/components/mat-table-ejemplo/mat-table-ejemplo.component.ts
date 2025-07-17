import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


interface Usuario {
  id:number;
  nombre:string;
  correo:string;
}

@Component({
  selector: 'app-mat-table-ejemplo',
  imports: [CommonModule,MatTableModule, MatPaginatorModule],
  templateUrl: './mat-table-ejemplo.component.html',
  styleUrl: './mat-table-ejemplo.component.scss'
})


export class MatTableEjemploComponent implements AfterViewInit{
  displayedColumns:string[] =['id','nombre','correo'];
  dataSource = new MatTableDataSource<Usuario>([
    { id: 1, nombre: 'Ana', correo: 'ana@mail.com' },
    { id: 2, nombre: 'Luis', correo: 'luis@mail.com' },
    { id: 3, nombre: 'Sofía', correo: 'sofia@mail.com' },
    { id: 4, nombre: 'Carlos', correo: 'carlos@mail.com' },
    { id: 5, nombre: 'Lucía', correo: 'lucia@mail.com' }
  ]);
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
