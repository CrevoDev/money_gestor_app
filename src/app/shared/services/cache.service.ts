import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  setToken(token: string): void {
    window.localStorage.setItem('token', token);
  }

  getToken(): string | null {
    const cache = window.localStorage.getItem('token');
    if (!cache) return null;
    return cache;
  }
}
