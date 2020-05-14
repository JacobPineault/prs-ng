import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  title: string = 'Actor Create';
  user: User = new User();
  submitBtnTitle: string = 'Create';

  constructor() {}

  ngOnInit(): void {}
}
