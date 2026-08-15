import { Injectable } from '@angular/core';
import { Corrida } from '../models/Corrida';

@Injectable({
  providedIn: 'root',
})

export class cadastroService {

  private corridaCad: Corrida[] = [];

  private proximoId: number = 1
  // gerar ids
  adicionarCorrida(corridaAdd: Corrida)
  {

    corridaAdd.id = this.proximoId++,

    this.corridaCad.push(corridaAdd)

    // geração de ids, peguei um fragmento da ia, o que está ocorrendo:
    // corridaCad é tipo modelo corrida array, corridaCad é um array,
    // proximoId começa com 1, função adicionar corrida, usa parametro corrida de tipo modelo corrida, push para adicionar o novo valor ao final do array

  }

  listaCorrida(){

  }
}

