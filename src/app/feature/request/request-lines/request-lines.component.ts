import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { RequestService } from 'src/app/service/request.service';
import { LineItemService } from 'src/app/service/line-item.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css'],
})
export class RequestLinesComponent implements OnInit {
  title: string = 'Request-Lines';
  request: Request = new Request();
  lineItems: LineItem[] = [];
  lineItem: LineItem = new LineItem();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestSvc: RequestService,
    private liSvc: LineItemService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this;
    });
  }

  save() {}
}
