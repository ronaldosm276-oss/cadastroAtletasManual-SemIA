import { Injectable } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { Corrida } from '../models/Corrida';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  private atletas: Pessoa[] = [];

  // sobre private, o que é private: sao elementos que só podem acessados com dot notation

  adicionar(pessoas: Pessoa) {
    //nao e a forma correta de gerar id
    pessoas.id = this.atletas.length + 1;
    this.atletas.push(pessoas);

    
  }
  listar() {
    console.table(this.atletas)
    return this.atletas;
  }

  private localizarAtleta(idAtleta: number) {
    return this.atletas.findIndex((elem) => elem.id === idAtleta);
  }
  //porque usou number com n minusculo, o que é issi
  remover(posicaoArray: number) {
    this.atletas.splice(1, posicaoArray);
  }

  remover2(pessoa: Pessoa){
    this.atletas = this.atletas.filter(elem => elem.id !== pessoa.id)
  }
  //outra maneira, usa filter, ve todos os elementos, excluir aquele que id elem.id for diferente de pessoa.id e cria uma nova array sem esse elemento
  alterar(pessoa: Pessoa) {
    let posArray = this.localizarAtleta(pessoa.id);

    if (posArray >= 0) {
      this.atletas[posArray] = pessoa;
    }
  }


}

export class cadastroService {
  private corridaCad: Corrida[] = [];

  private proximoId: number = 1
  // gerar ids
  adicionarCorrida(corridaAdd: Corrida){

    corridaAdd.id = this.proximoId++,

    this.corridaCad.push(corridaAdd)

    // geração de ids, peguei um fragmento da ia, o que está ocorrendo:
    // corridaCad é tipo modelo corrida array, corridaCad é um array,
    // proximoId começa com 1, função adicionar corrida, usa parametro corrida de tipo modelo corrida, push para adicionar o novo valor ao final do array

  }

  listaCorrida(){
    
  }
}
