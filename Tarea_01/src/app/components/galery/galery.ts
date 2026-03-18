import {ChangeDetectionStrategy,  Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Imagen {
  titulo: string;
  url: string;
  categoria: string;
};

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './galery.html',
  styleUrls: ['./galery.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Galery {
  categoria= '';

  cambiarCategoria(valor: string){
    this.categoria = valor;
  }

  imagenes: Imagen[] = [
    {titulo: 'Ardilla', url: 'img/ardilla.jpg', categoria: 'animales'},
    {titulo: 'Bosque', url: 'img/bosque.jpg', categoria: 'naturaleza'},
    {titulo: 'Celular', url: 'img/cellphone.jpg', categoria: 'tecnologia'},
    {titulo: 'Conejo', url: 'img/conejo.jpg', categoria: 'animales'},
    {titulo: 'Enchiladas', url: 'img/enchiladas.jpeg', categoria: 'comida'},
    {titulo: 'Ensalada', url: 'img/ensalada.jpg', categoria: 'comida'},
    {titulo: 'Montaña', url: 'img/montaña.jpg', categoria: 'naturaleza'},
    {titulo: 'Pizza', url: 'img/pizza.jpg', categoria: 'comida'},
    {titulo: 'Playa', url: 'img/playa.jpg', categoria: 'naturaleza'},
    {titulo: 'Ps4', url: 'img/ps4.jpg', categoria: 'tecnologia'},
    {titulo: 'Puerquito', url: 'img/puerquito.jpg', categoria: 'animales'},
    {titulo: 'Sooccer', url: 'img/sooccer.jpg', categoria: 'deportes'},
    {titulo: 'Swiming', url: 'img/swiming.jpg', categoria: 'deportes'},
    {titulo: 'Tablet', url: 'img/Tablet.jpg', categoria: 'tecnologia'},
    {titulo: 'Taekwondo', url: 'img/taekwondo.jpg', categoria: 'deportes'}
  ];
}