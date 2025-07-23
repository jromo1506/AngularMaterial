import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../services/api.service';


interface Usuario {
  id:number;
  nombre:string;
  correo:string;
}

@Component({
  selector: 'app-mat-table-ejemplo',
  imports: [CommonModule,MatTableModule, MatPaginatorModule],
  templateUrl: './mat-table-ejemplo.component.html',
  styleUrl: './mat-table-ejemplo.component.scss',
  providers:[{ provide: MatPaginatorIntl, useValue: matPaginatorIntlEs() }]
})


export class MatTableEjemploComponent implements AfterViewInit{

  datos:any[]=[];
  
displayedColumns: string[] = ['id', 'nombreCompleto', 'email', 'telefono', 'ciudad'];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!:MatPaginator;


  constructor(private api:ApiService){
   this.api.getDummies().subscribe(res => {
    this.datos = res.users.map((u: any) => ({
      id: u.id,
      nombreCompleto: `${u.firstName} ${u.lastName}`,
      email: u.email,
      telefono: u.phone,
      ciudad: u.address?.city
    }));


    console.log(this.datos);
    this.dataSource = new MatTableDataSource(this.datos);
    this.dataSource.paginator = this.paginator;
  });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}


function matPaginatorIntlEs(): MatPaginatorIntl {
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = 'Elementos por página:';
  paginatorIntl.nextPageLabel = 'Página siguiente';
  paginatorIntl.previousPageLabel = 'Página anterior';
  paginatorIntl.firstPageLabel = 'Primera página';
  paginatorIntl.lastPageLabel = 'Última página';
  paginatorIntl.getRangeLabel = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) return `0 de ${length}`;
    const startIndex = page * pageSize;
    const endIndex = Math.min(startIndex + pageSize, length);
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };
  return paginatorIntl;
}