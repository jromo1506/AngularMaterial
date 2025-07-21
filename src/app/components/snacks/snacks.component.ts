import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-snacks',
  imports: [MatSnackBarModule,MatDialogModule,DialogComponent],
  templateUrl: './snacks.component.html',
  styleUrl: './snacks.component.scss'
})
export class SnacksComponent {
  constructor(private snackBar:MatSnackBar,private dialog: MatDialog){}

  mostrarSnack(){
   this.snackBar.open('Guardado exitosamente', 'Cerrar', {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  });
  }

  
openDialog() {
  const dialogRef = this.dialog.open(DialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log('Respuesta del usuario:', result); // 'yes' o 'no'
  });
}

}
