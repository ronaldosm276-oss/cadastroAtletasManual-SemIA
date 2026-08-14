import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Corrida } from '../../models/Corrida';

@Component({
  selector: 'app-cadastro-corrida',
  imports: [FormsModule],
  templateUrl: './cadastro-corrida.html',
  styleUrl: './cadastro-corrida.css',
})
export class CadastroCorrida {

  descricao = ''
  data = ''
  distancia = ''


  constructor(private corrida:Corrida){
// de novo, pra que isso funciona?
  }

  
}
