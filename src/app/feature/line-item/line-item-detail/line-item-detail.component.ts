import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-item-detail',
  templateUrl: './line-item-detail.component.html',
  styleUrls: ['./line-item-detail.component.css'],
})
export class LineItemDetailComponent implements OnInit {
  lineItem: LineItem = null;
  lineItemId: number = 0;

  constructor(
    private liSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parms) => (this.lineItemId = parms['id']));
    this.liSvc.get(this.lineItemId).subscribe((jr) => {
      this.lineItem = jr.data as LineItem;
      console.log(this.lineItem);
    });
    this.liSvc.delete(this.lineItemId).subscribe((jr) => {
      if (jr.errors == null) {
        this.router.navigateByUrl('line-item/list/' + this.lineItem.request.id);
      } else {
        console.log('Error removing product', this.lineItemId, jr.errors);
      }
    });
  }
}
