import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu'
import { AtletaComponent } from "./components/atleta-component/atleta-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, AtletaComponent],
  // você importou o menu lá em import, mas esqueceu de colocar aqui
  // esse atleta component vc fez de forma automatica, e vai ser inutil
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetoManualEsporte');
}
