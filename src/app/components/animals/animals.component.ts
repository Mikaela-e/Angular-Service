import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/app/models/Animal';
import { AnimalService } from 'src/app/Services/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  EveryAnimals : Animals[] = []; 
  
  constructor(private service: AnimalService) { }

  ngOnInit(): void {
    this.EveryAnimals = this.service.getAnimals();
  }

}
