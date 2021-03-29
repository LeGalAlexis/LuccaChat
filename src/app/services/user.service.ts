import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];

  private connectedUsers: User[];

  constructor() {
    this.users = new Array<User>();
    this.connectedUsers = new Array<User>();
    if(localStorage.getItem('users')) {
      this.users= JSON.parse(localStorage.getItem('users')!);
    }
  }

  public registerUser(user: User): boolean {
    let existingUser: User | undefined = this.users.find(u => u.name == user.name);
    if(existingUser != undefined) {
      return false;
    }
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

  public getUsers(): Array<User> {
    return this.users;
  }

  public connectUser(user: User): boolean {
    let existingUser: User | undefined = this.users.find(u => u.name == user.name && u.password == user.password);
    if(existingUser == undefined) {
      return false;
    }
    let userInConnected: User | undefined = this.connectedUsers.find(u => u.name == user.name);
    if(userInConnected != undefined) {
      return false;
    }
    this.connectedUsers.push(user);
    return true;
  }

  public disconnectUser(userName: string): void {
    this.connectedUsers = this.connectedUsers.filter(u => u.name !== userName);
  }

  public getConnectedUser(): Array<User> {
    return this.connectedUsers;
  }

}
