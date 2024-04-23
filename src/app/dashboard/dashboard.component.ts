import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {SidemenuComponent} from "../shared/sidemenu/sidemenu.component";
import {routes} from "../app.routes";


@Component({
  standalone: true,
  imports: [RouterModule,SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export default class DashboardComponent {


}
