import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css'],
})
export class RequestLinesComponent implements OnInit {
  title: string = 'Request-Lines';
  request: Request = new Request();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  save() {}
}
