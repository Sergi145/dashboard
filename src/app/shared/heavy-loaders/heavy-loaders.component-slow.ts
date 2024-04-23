import {Component, Input} from '@angular/core';
import {CommonModule, NgClass} from "@angular/common";

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule
  ],
  template: `<section [ngClass]="['w-full h-[600px]', cssClass]">Heavy loader slow</section>`
})
export class HeavyLoadersComponentSlow{

  @Input({required:true}) cssClass!:string;

    constructor() {
      const start= Date.now();
      while (Date.now() -start<3000){};
    }
}
