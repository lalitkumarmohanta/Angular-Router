import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './product';


@Component({
  templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent
{

   product:Product;
   id;
   sub;

   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               private _productService:ProductService){
   }


   ngOnInit() {

      this.sub=this._Activatedroute.params.subscribe(params => { 
          this.id = params['id']; 
          let products=this._productService.getProducts();
          this.product=products.find(p => p.productID==this.id);    
      
      });
   }

   /* Using snapshot
   ngOnInit() {
       this.id=this._Activatedroute.snapshot.params['id'];
       let products=this._productService.getProducts();
       this.product=products.find(p => p.productID==this.id);
   }
   */

   onBack(): void {
     console.log(this._router.routerState);
      this._router.navigate(['product']);
      /*this._router.navigateByUrl('product');*/
   }


   ngOnDestroy() {
     this.sub.unsubscribe();
   }
   
}