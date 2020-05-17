import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css'],
})
export class RequestCreateComponent implements OnInit {
  title: string = 'Create Request';
  request: Request = new Request();
  user: User = null;
  submitBtnTitle: string = 'Create Request';

  constructor(
    private requestSvc: RequestService,
    private userSvc: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save() {
    this.requestSvc.create(this.request).subscribe((jr) => {
      if (jr.errors == null) {
        this.router.navigateByUrl('/request/lines');
      } else {
        console.log(
          '***Error creating new Request***',
          this.request,
          jr.errors
        );
      }
    });
  }
}
