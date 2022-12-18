import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equiptment: string[] = [
    "Habitat dome", "drones", "food containers", "oxygen tanks"
  ]

  itemBeingEdited: string = null;
  
  constructor() { }

  ngOnInit() {
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(newItem: string, originalItem: string) {
    if (!this.equiptment.includes(newItem)) {
      let index = this.equiptment.indexOf(originalItem);
      this.equiptment.splice(index, 1, newItem);
    }
    
    this.itemBeingEdited = null;
  }

  remove(item: string) {
    let index = this.equiptment.indexOf(item);
    this.equiptment.splice(index, 1);
  }

  add(item: string) {
    if (!this.equiptment.includes(item)) {
      this.equiptment.push(item);
    }
  }

}
