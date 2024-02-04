import { Component } from '@angular/core';

@Component({
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {
  showSideBar: boolean = false;

  show(bool: boolean): boolean {
    return this.showSideBar = bool;
  }
}
