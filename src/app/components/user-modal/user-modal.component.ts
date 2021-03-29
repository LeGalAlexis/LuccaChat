import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<string>();
  isNewUserModal: boolean = false;
  userName: string = "";
  userPassword: string = "";
  errorMessage: string = "";

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  close(): void {
    this.closeEvent.emit();
  }

  createUser(): void {
    if (this.userName == "" || this.userPassword == "") {
      return;
    }
    let newUser: User = new User();
    newUser.name = this.userName;
    newUser.password = this.userPassword;
    let result: boolean = this.userService.registerUser(newUser);
    if (result) {
      this.connectUser();
    } else {
      this.errorMessage = "Echec dans la création de l'utilisateur";
    }
  }

  connectUser(): void {
    let user: User = new User();
    user.name = this.userName;
    user.password = this.userPassword;
    let connexionResult: boolean = this.userService.connectUser(user);
    if(connexionResult) {
      this.closeEvent.emit();
    } else {
      this.errorMessage = "Echec dans la connexion de l'utilisateur";
    }
  }

  getUnconnectedUsersNames(): Array<User> {
    return this.userService.getUsers().filter(item => this.userService.getConnectedUser().findIndex(u => u.name == item.name) < 0);
  }

}
