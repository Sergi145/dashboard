import { Component } from '@angular/core';
import {TitleComponent} from "../../../shared/title/title.component";

@Component({
  selector: 'app-pages-view-transition',
  standalone: true,
  imports: [TitleComponent],
  template: `<Tit [title]="'View transition 2'"></Tit>
  <section class="flex justify-end">
    <img style="view-transition-name: hero-1" srcset="https://picsum.photos/id/237/200/300" alt="as" width="200" height="300">
    <div class="bg-blue-500 w-56 h-56"></div>
  </section>`,
  styleUrl: './pages-view-transition.component.css'
})
export default class PagesViewTransitionComponent {

}
