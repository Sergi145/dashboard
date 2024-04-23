import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {TitleComponent} from "../../../shared/title/title.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-pages-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleComponent, JsonPipe],
  templateUrl: './pages-change-detection.component.html',
  styleUrl: './pages-change-detection.component.css'
})
export default  class PagesChangeDetectionComponent {

  public currentFramekork = computed(()=> `Change detection - ${this.frameworkSignal().name}`)
  public frameworkSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkSignalProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {
    setTimeout(()=> {
     this.frameworkSignal.update(value=> ({
       ...value,
       name: 'React'
     }) )

      console.log('hola');
    },3000)
  }

}
