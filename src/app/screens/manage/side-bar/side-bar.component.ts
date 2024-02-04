import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { IToolBarHeader } from '@app/shared/interfaces/tool-bar-header';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input()
  snav_manage!: MatSidenav;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  getButtons(): IToolBarHeader[] {
    return [
      {
        name: 'wallet',
        label: 'Carteira',
        icon: 'account_balance_wallet',
      },
      {
        name: 'bank',
        label: 'Guardado',
        icon: 'account_balance',
      },
      {
        name: 'transactions',
        label: 'Movimentação',
        icon: 'payments',
      },
    ];
  }

  openPage(page: string) {
    return this.router.navigate([page], { relativeTo: this.route });
  }
}
