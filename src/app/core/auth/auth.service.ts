import { Injectable } from '@angular/core';
import { IUser } from '@app/shared/interfaces/user';
import { CacheService } from '@app/shared/services/cache.service';
import { UserService } from '@app/shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly cacheService: CacheService,
    private readonly userService: UserService
  ) {}

  public login(user: Partial<IUser>): boolean {
    if (
      Object.entries(user).some(([k, v]) => (this.userService.userTest as any)[k] !== v)
    )
      return false;
    const token = JSON.stringify(this.userService.userTest);
    this.cacheService.setToken(token);
    return true;
  }

  public authenticate(): boolean {
    const token = this.cacheService.getToken();
    if (!token) return false;
    const userDecoded: IUser = JSON.parse(token) as IUser;
    this.userService.user = userDecoded;
    return true;
  }
}
