import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../model/User';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserMenuComponent } from '../../shared/user-menu/user-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../../forms/user-form/user-form.component';

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [CommonModule, MatTableModule, UserMenuComponent],
  templateUrl: './users-management.component.html',
  styleUrl: './users-management.component.css'
})
export class UsersManagementComponent {

  users: User[] = [];
  displayedColumns: string[] = ['Usuario', 'Nombre', 'Estado', 'Rol', 'Acciones'];
  public dataSource = new MatTableDataSource(this.users);
  
  constructor(private usersService: UsersService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsersList();
  }

  userManage(action: string, email: string = ''){
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '50%',
      data: { action: action, userEmail: email }
    });

    // Cierre del modal:
    dialogRef.afterClosed().subscribe(result => {
      this.users = this.usersService.getUsersList();
    });
  }
}