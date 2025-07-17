import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableEjemploComponent } from './components/mat-table-ejemplo/mat-table-ejemplo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatTableEjemploComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularMat';
}
