import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css'],
})
export class RequestReviewComponent implements OnInit {
  requests: Request[] = [];
  title: string = 'Review Submitted Requests';
  user: User = null;
  userId: number = 0;

  constructor(
    private requestSvc: RequestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parms) => (this.userId = parms['id']));
    this.requestSvc.review(this.userId).subscribe((jr) => {
      this.requests = jr.data as Request[];
    });
  }
}
