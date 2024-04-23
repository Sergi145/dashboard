import {Component, signal} from '@angular/core';
import {TitleComponent} from "../../../shared/title/title.component";

type Grade= 'A'|'B'|'C';

@Component({
  selector: 'app-pages-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './pages-control-flow.component.html',
  styleUrl: './pages-control-flow.component.css'
})
export default class PagesControlFlowComponent {
    public showContent= signal(false);
    public grade=signal<Grade>('B');
    public team = signal(['Rafinha','Pedri','Araujo','Sergi Roberto']);
    public team2 = signal([]);

    change(){
      this.showContent.update(value =>!value);
    }
}
