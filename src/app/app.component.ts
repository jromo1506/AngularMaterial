import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableEjemploComponent } from './components/mat-table-ejemplo/mat-table-ejemplo.component';
import { SnacksComponent } from './components/snacks/snacks.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatTableEjemploComponent,SnacksComponent,DialogComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularMat';
}
