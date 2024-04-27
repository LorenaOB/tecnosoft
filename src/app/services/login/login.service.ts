import { Injectable } from '@angular/core';
import { UtilitiesService } from '../utilities/utilities.service';
import { urls } from '../../config';
import { UsersService } from '../users/users.service';
import { User } from '../../model/User';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  constructor(private utilitiesService: UtilitiesService) {}

  async validateLogin(email: string, password: string): Promise<boolean> {
    this.utilitiesService.getJsonData(urls.usersUrl).subscribe({
      next: (response) => {
        const data: User[] = response.map((data: User) => data);
        const info = data.find(user => user.email === email && user.password === password);
        console.log('UserService', info);
        return true;
      },
      error: (error) => {
        alert('Error consultando usuarios!');
      },
    });
    return false;
  }
}
