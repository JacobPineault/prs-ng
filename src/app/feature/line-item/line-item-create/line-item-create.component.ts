import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css'],
})
export class LineItemCreateComponent implements OnInit {
  title: string = 'Line-Item Create';
  lineItem: LineItem = new LineItem();
  vendors: Vendor[] = [];
  products: Product[] = [];
  quantity: number = 0;

  constructor(
    private router: Router,
    private productSvc: ProductService,
    private vendorSvc: VendorService
  ) {}

  ngOnInit(): void {
    this.vendorSvc.list().subscribe((jr) => {
      this.vendors = jr.data as Vendor[];
    });
    this.productSvc.list().subscribe((jr) => {
      this.products = jr.data as Product[];
    });
  }

  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }

  compProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }
}
