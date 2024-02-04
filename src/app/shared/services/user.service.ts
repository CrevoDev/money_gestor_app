import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly _userTest: Partial<IUser> = {
    name: 'Cleverson Pedroso',
    username: 'cleverson.pedroso@docato.com.br',
    password: 'count123'
  }

  private _user!: IUser;

  constructor() { }

  public set user(user: IUser) {
    this._user = user;
  }

  public get user(): IUser {
    return this._user;
  }

  public get userTest(): Partial<IUser> {
    return this._userTest
  }
}
