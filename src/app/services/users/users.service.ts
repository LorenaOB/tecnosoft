import { Injectable } from '@angular/core';
import { UtilitiesService } from '../utilities/utilities.service';
import { Urls, LocalStorageNames } from '../../config';
import { User } from '../../model/User';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private userDescription = new BehaviorSubject<string>('');
  private userRole = new BehaviorSubject<string>('');

  isLoggedIn$ = this.isLoggedIn.asObservable();
  userDescription$ = this.userDescription.asObservable();
  userRole$ = this.userRole.asObservable();

  constructor(
    private utilitiesService: UtilitiesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  async getUsersJson(): Promise<any> {
    this.utilitiesService.getJsonData(Urls.usersUrl).subscribe({
      next: (response) => {
        const users: User[] = response.map((users: User) => users);
        localStorage.setItem(
          LocalStorageNames.usersList,
          JSON.stringify(users)
        );

        return users;
      },
      error: (error) => {
        alert('Error consultando usuarios!');
        return [];
      },
    });
  }

  getUsersList(): any[] {
    const data = localStorage.getItem(LocalStorageNames.usersList);
    return data ? JSON.parse(data) : [];
  }

  getUser(email: string): User {
    return this.getUsersList()?.find((user) => user.email === email);
  }

  userExists(email: string): boolean {
    return this.getUser(email) !== undefined;
  }

  createUser(user: User): boolean {
    if (this.userExists(user.email)) {
      return false;
    } else {
      const data = this.getUsersList();
      data.push(user);
      localStorage.setItem(LocalStorageNames.usersList, JSON.stringify(data));
      return true;
    }
  }

  editUser(currentEmail: string, user: User): boolean {
    const currentUser: User = this.getUser(currentEmail);

    if (this.userExists(currentEmail)) {
      let data = this.getUsersList();
      let userToEdit = data?.find((u) => u.email === currentEmail);

      userToEdit.email = user.email;
      userToEdit.name = user.name;
      userToEdit.role = user.role;
      userToEdit.password = user.password;
      userToEdit.active = user.active;

      localStorage.setItem(LocalStorageNames.usersList, JSON.stringify(data));
      return true;
    }

    return false;
  }

  validateCredentials(email: string, password: string): User {
    const user: User =
      this.getUsersList()?.find(
        (user) => user.email == email && user.password == password
      ) ?? new User();

    if (user?.role === undefined) {
      this.endSession();
    } else {
      localStorage.setItem(
        LocalStorageNames.userLoggedIn,
        JSON.stringify(user)
      );
      this.isLoggedIn.next(true);
      this.userDescription.next(user?.name?.toUpperCase() + ' | ' + user?.role?.toUpperCase());
      this.userRole.next(user?.role);
    }

    return user;
  }

  endSession(redirect: boolean = false) {
    localStorage.removeItem(LocalStorageNames.userLoggedIn);
    this.isLoggedIn.next(false);

    if (redirect) {
      this.router.navigate(['/']);
    }
  }
}
