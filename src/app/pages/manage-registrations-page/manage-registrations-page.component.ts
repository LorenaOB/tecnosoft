import { Component } from '@angular/core';
import { UserMenuComponent } from "../../shared/user-menu/user-menu.component";

@Component({
    selector: 'app-manage-registrations-page',
    standalone: true,
    templateUrl: './manage-registrations-page.component.html',
    styleUrl: './manage-registrations-page.component.css',
    imports: [UserMenuComponent]
})
export class ManageRegistrationsPageComponent {

}
