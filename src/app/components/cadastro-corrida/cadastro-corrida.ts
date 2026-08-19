import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CadastroService } from '../../services/cadastro';

@Component({
  selector: 'app-cadastro-corrida',
  imports: [FormsModule],
  templateUrl: './cadastro-corrida.html',
  styleUrl: './cadastro-corrida.css',
})
export class CadastroCorrida {
  id = 0
  descricao = ''
  data = ''
  distancia5 = ''
  distancia10 = ''
  distancia25 = ''

  constructor(private cadastroService: CadastroService){
    

  }

  debugExibirTabela(){
      console.log(this.descricao, this.data, this.distancia5)
    }


}



//O tonto usou Claude para corrigir um erro de DI, mas nunca olhou o diff entre o que a IA sugeriu e o que ele colou de volta no arquivo real.
//Injetou o model (Corrida) em vez do service (cadastroService) e ficou reenviando o mesmo arquivo quebrado três vezes, achando que o erro ia sumir sozinho.