import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UsersService } from './services/users/users.service';
import { LocalStorageNames } from './config';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {
  title = '.:.tecnosoft.:.';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    let lsUsers = localStorage.getItem(LocalStorageNames.usersList);

    if (lsUsers == null || lsUsers == undefined) {
      this.usersService.getUsersJson();
    }
  }
}
