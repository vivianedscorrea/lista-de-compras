import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

@Component({
  selector: 'app-root',
  imports: [ListaComprasComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lista-de-compras';
}