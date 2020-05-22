import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  message: string = '';
  user: User = new User();

  constructor(
    private userSvc: UserService,
    protected sysSvc: SystemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user.userName = 'jakepino';
    this.user.password = 'admin';
    this.sysSvc.loggedInUser = null;
  }

  login() {
    console.log('login called for user:', this.user);
    this.userSvc.login(this.user).subscribe((jr) => {
      console.log('jr:', jr);
      if (!jr.errors) {
        if (!jr.data) {
          this.message = '***User not found. Please Retry***';
        } else {
          this.user = jr.data as User;
          this.sysSvc.loggedInUser = this.user;
          console.log(
            'Setting user in SystemService...',
            this.sysSvc.loggedInUser
          );
          this.router.navigateByUrl('/home');
        }
      } else {
        this.message = '***Invalid Username/Password combo. Please Retry***';
      }
    });
  }
}
