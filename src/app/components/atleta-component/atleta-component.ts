import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
//  importou forms module, pesquise mais sobre modulos e este em especifico

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

  // primeiramente vamos definir atributos

  nome = ''
  cpf = ''
  sexo = ''
  cep = ''
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  // isso serve apenas para definir que essas variaveis existem e começam vazias


  //declaração de funções
  exibirDados(){

    console.log(this.nome, this.cpf, this.sexo, this.ruaLogradouro, this.bairro, this.cidade, this.uf)

  }
}
