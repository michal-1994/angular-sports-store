import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductData } from "./product.mock";
import { ProductRepository } from "./product.repository";

@NgModule({
    providers: [ProductRepository, ProductData, Cart]
})
export class ModelModule {}