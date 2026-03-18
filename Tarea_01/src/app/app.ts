import { Component, signal } from '@angular/core';
import { Galery } from './components/galery/galery'; 
import { Footer } from './components/footer/footer'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Galery, Footer ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Tarea01');
}
