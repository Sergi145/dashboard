import {Component, computed, inject, signal} from '@angular/core';
import {TitleComponent} from "../../../shared/title/title.component";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../interfaces/req-response";
import {toSignal} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-pages-user',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './pages-user.component.html',
  styleUrl: './pages-user.component.css'
})
export default class PagesUserComponent {

  private route= inject (ActivatedRoute);
  private userService = inject(UsersService);

  //public user =signal<User| undefined>(undefined)

  //constructor() {
    //this.route.params.subscribe(params => {
      //console.log({params});
    //})
  //}



  public user= toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.userService.getUserByID(id))
    )
  );

  public titlelabel = computed(()=> {
    if (this.user()) {
      return `Informacion del usuario ${this.user()?.first_name} ${this.user()?.last_name}`
    }

    return 'Información del usuario'
  })

}
