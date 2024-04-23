import { Component } from '@angular/core';
import {HeavyLoadersComponentSlow} from "../../../shared/heavy-loaders/heavy-loaders.component-slow";
import {TitleComponent} from "../../../shared/title/title.component";


@Component({
  selector: 'app-pages-defer-views',
  standalone: true,
  imports: [HeavyLoadersComponentSlow, TitleComponent],
  templateUrl: './pages-defer-views.component.html',
  styleUrl: './pages-defer-views.component.css'
})
export default class PagesDeferViewsComponent {

}
