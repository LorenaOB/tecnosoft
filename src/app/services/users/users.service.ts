import { Injectable } from '@angular/core';
import { UtilitiesService } from '../utilities/utilities.service';
import { urls } from '../../config';
import { User } from '../../model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];

  constructor(private utilitiesService: UtilitiesService) {}

  async getUsers(): Promise<any> {
    this.utilitiesService.getJsonData(urls.usersUrl).subscribe({
      next: (response) => {
        const data: User[] = response.map((data: User) => data);
        console.log('UserService', data);
        return data;
      },
      error: (error) => {
        alert('Error consultando usuarios!');
        return [];
      },
    });
  }
}
