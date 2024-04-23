import {booleanAttribute, Component, Input} from '@angular/core';

@Component({
  selector: 'Tit',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() public title:string= '';
  @Input({transform: booleanAttribute}) public WithShadow:boolean = false;

  constructor() {
    console.log(this.title);
  }
}
