import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css'],
})
export class RequestApproveComponent implements OnInit {
  title: String = 'PurchaseRequest Approve/Reject';
  title1: string = 'Lines';
  user: User = null;
  lineItems: LineItem[] = [];
  lineTotal: number = 0;
  request: Request = null;
  requestId: number = 0;

  constructor(
    private requestSvc: RequestService,
    private sysSvc: SystemService,
    private liSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parms) => (this.requestId = parms['id']));
    this.requestSvc.get(this.requestId).subscribe((jr) => {
      this.request = jr.data as Request;
    });
    this.sysSvc.checkLogin();
    this.user = this.sysSvc.loggedInUser;

    this.liSvc.list(this.requestId).subscribe((jr) => {
      this.lineItems = jr.data as LineItem[];
    });
  }

  accept() {
    this.requestSvc.approve(this.request).subscribe((jr) => {
      if (jr.errors == null) {
        this.router.navigateByUrl('/request/review/' + this.user.id);
      } else {
        console.log('***Error approving request***' + jr.errors);
      }
    });
  }

  reject() {
    this.requestSvc.edit(this.request).subscribe((jr) => {
      if (jr.errors == null) {
      } else {
        console.log(
          '***Error adding justification***',
          this.request,
          jr.errors
        );
      }
    });
    this.requestSvc.reject(this.request).subscribe((jr) => {
      if (jr.errors == null) {
        this.router.navigateByUrl('/request/review/' + this.user.id);
      } else {
        console.log('***Error rejecting request***' + jr.errors);
      }
    });
  }
}
