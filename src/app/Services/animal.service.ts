import { Injectable } from '@angular/core';
import { Animals } from '../models/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  EveryAnimals : Animals[] = 
  [new Animals("hund", 4, true, false)
  ,new Animals("katt", 10, true, false),
  new Animals("Gris", 3, false, true)];
  constructor() { }

  getAnimals(){
    return this.EveryAnimals;
  }
}
