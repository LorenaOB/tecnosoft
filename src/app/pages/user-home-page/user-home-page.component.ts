import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, NavigationEnd } from '@angular/router';
import { delay, filter } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@Component({
  selector: 'app-user-home-page',
  standalone: true,
  imports: [MatIconModule, MatSidenavModule, MatDividerModule, MatToolbarModule],
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css',
})
export class UserHomePageComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router) {}

  ngAfterViewInit() {
    // this.observer
    //   .observe(['(max-width: 800px)'])
    //   .pipe(delay(1), untilDestroyed(this))
    //   .subscribe((res) => {
    //     if (res.matches) {
    //       this.sidenav.mode = 'over';
    //       this.sidenav.close();
    //     } else {
    //       this.sidenav.mode = 'side';
    //       this.sidenav.open();
    //     }
    //   });

    // this.router.events
    //   .pipe(
    //     untilDestroyed(this),
    //     filter((e) => e instanceof NavigationEnd)
    //   )
    //   .subscribe(() => {
    //     if (this.sidenav.mode === 'over') {
    //       this.sidenav.close();
    //     }
    //   });
  }
}
