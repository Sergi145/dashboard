import { Component } from '@angular/core';
import {HeavyLoadersComponentFast} from "../../../shared/heavy-loaders/heavy-loaders.component-fast";
import {TitleComponent} from "../../../shared/title/title.component";

@Component({
  selector: 'app-pages-defer-options',
  standalone: true,
  imports: [HeavyLoadersComponentFast,TitleComponent],
  templateUrl: './pages-defer-options.component.html',
  styleUrl: './pages-defer-options.component.css'
})
export default class PagesDeferOptionsComponent {

}
