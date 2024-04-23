import {Component, inject} from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {TitleComponent} from "../../../shared/title/title.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-pages-users',
  standalone: true,
  imports: [
    TitleComponent,RouterModule
  ],
  templateUrl: './pages-users.component.html',
  styleUrl: './pages-users.component.css'
})
export default class PagesUsersComponent {
    public  userService = inject(UsersService);



}
