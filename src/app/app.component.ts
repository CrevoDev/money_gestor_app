import { UserService } from '@app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { IUser } from './shared/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'red-app';
  hiddeToolBar: boolean = false;
  hiddenToolbarList: string[] = ['/login'];

  user!: IUser;

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(
        map((route: any) => {
          return route.url;
        })
      )
      .subscribe((route) => {
        this.hiddeToolBar = this.hiddenToolbarList.some((hiddenRoute) =>
          route.startsWith(hiddenRoute)
        );
        if (!this.hiddeToolBar) this.user = this.userService.user;
      });
  }
}
