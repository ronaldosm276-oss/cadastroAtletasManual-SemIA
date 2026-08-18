import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../services/atleta-service';
import { Atleta } from '../../models/Atleta';
//  importou forms module, pesquise mais sobre modulos e este em especifico

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {
  // primeiramente vamos definir atributos
  id = 0;
  nome = '';
  cpf = 0;
  sexo = '';
  cep = 0;
  ruaLogradouro = '';
  bairro = '';
  cidade = '';
  uf = '';

  // isso serve apenas para definir que essas variaveis existem e começam vazias

  //construtor, o que é o construtor; vamos injetar a logica para trabalhar com os dados enviados pelos componentes

  constructor(private atletaService: AtletaService) {
    // o que isso faz?
  }
  //declaração de funções
  exibirDados() {
    console.log(
      this.nome,
      this.cpf,
      this.sexo,
      this.ruaLogradouro,
      this.bairro,
      this.cidade,
      this.uf,
    );
    // oq é this? 'Esse'
    // falando do objeto que estamos trabalhando?
  }

  salvarAtleta() {
    const pessoaAtleta = new Atleta();
    pessoaAtleta.nome = this.nome;
    pessoaAtleta.cpf = this.cpf;
    pessoaAtleta.sexo = this.sexo;
    pessoaAtleta.cep = this.cep;
    pessoaAtleta.ruaLogradouro = this.ruaLogradouro;
    pessoaAtleta.bairro = this.bairro;
    pessoaAtleta.cidade = this.cidade;

    //se nao me engano, this fala sobre ESSE elemento QUE RECEBEU O DADO AGORA, o objeto que estamos trabalhando
    //isso cria uma instancia do modelo pessoa, para trabalharmos com o serviço
    //isso segue o que o modelo pede, e já pegamos esses dados com ngModel e definimos aqui em cima

    // instanciamento

    this.atletaService.adicionarAtleta(pessoaAtleta);

    // this.atletaService.listarAtleta(this.id);

    this.limpar();
  }
  limpar() {
    this.nome = '';
    this.cpf = 0;
    this.sexo = '';
    this.cep = 0;
    this.ruaLogradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';
  }
}
