import { Component, Input, OnInit } from '@angular/core';
import { IToolBarHeader } from '../../interfaces/tool-bar-header';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IUser } from '@app/shared/interfaces/user';
import { filter, map } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {
  @Input() user!: IUser;
  @Input() snav!: MatSidenav;
  @Input() showButtons: boolean = true;
  _actualRoute: string | null = null;

  get actualRoute(): string | null {
    return this._actualRoute;
  }

  set actualRoute(route: string) {
    this._actualRoute = route;
  }

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actualRoute = this.router.url.split('/')[1];
    this.getActualRoute();
  }

  getTools(): IToolBarHeader[] {
    return [
      {
        name: 'home',
        label: 'Inicio',
        icon: 'home',
      },
      {
        name: 'manage_account',
        label: 'Gerenciar',
        icon: 'currency_exchange',
      },
    ];
  }

  getActualRoute() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(
        map((route: any) => {
          return route.url.split('/')[1];
        })
      )
      .subscribe((route) => {
        this.actualRoute = route;
      });
  }

  getActivatedTool(tool: IToolBarHeader) {
    return tool.name === this.actualRoute;
  }

  goToRoute(route: string[]) {
    return this.router.navigate(route);
  }
}
