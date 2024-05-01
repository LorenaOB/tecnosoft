import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserMenuComponent } from '../../shared/user-menu/user-menu.component';
import { CommonModule } from '@angular/common';
import { EventTecnoSoft } from '../../model/Event';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-home-page',
  standalone: true,
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css',
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    UserMenuComponent,
    CommonModule,
  ],
})
export class UserHomePageComponent {
  [x: string]: any;
  scheduledEvents: EventTecnoSoft[] = [];
  otherEvents: EventTecnoSoft[] = [];

  constructor() {
    this.defaultEvents();
  }

  // ToDo: Pendiente implemetar funcionalidad para traer los eventos de base de datos
  defaultEvents() {
    let event = new EventTecnoSoft(
      1,
      'Webinar sobre creación de contenido web',
      'Lugar: Virtual - Teams',
      'Por: Maria Jones - CEO StartUP Technologies',
      'Viernes',
      '17',
      'Mayo',
      '#08084a',
      '#ea4994',
      'btn-primary1'
    );
    this.scheduledEvents.push(event);

    event = new EventTecnoSoft(
      2,
      'Techtalk: Tendencias del mercado de software',
      'Lugar: Virtual - Teams',
      'Por: Jane Clark - CEO Smart Technologies',
      'Martes',
      '28',
      'Mayo',
      '#61bdc4',
      '#08084a',
      'btn-primary2'
    );
    this.otherEvents.push(event);

    event = new EventTecnoSoft(
      3,
      'Workshop DevOps: Cambiando paradigmas',
      'Lugar: Virtual - Teams',
      'Por: Bill Saint - CTO GenNova Industries',
      'Jueves',
      '06',
      'Junio',
      '#ea4994',
      '#61bdc4',
      'btn-primary3'
    );
    this.otherEvents.push(event);
  }

  private transferEvent(
    id: number,
    originArray: EventTecnoSoft[],
    destinationArray: EventTecnoSoft[]
  ) {
    const index = originArray.findIndex((event) => event.id === id);
    if (index !== -1) {
      const eventR = originArray.splice(index, 1)[0];
      destinationArray.push(eventR);
    }
  }

  registerEvent(id: number) {
    this.transferEvent(id, this.otherEvents, this.scheduledEvents);
    swal.fire(
      'Tu registro se realizó correctamente!',
      'Revisa tu correo electrónico',
      'success'
    );
  }

  cancelEvent(id: number) {
    this.transferEvent(id, this.scheduledEvents, this.otherEvents);
    swal.fire(
      'Tu agendamiento fue cancelado!',
      'Te esperamos pronto en otro de nuestros eventos',
      'warning'
    );
  }
}
