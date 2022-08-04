import { NgModule } from "@angular/core";
import { ProductData } from "./product.mock";
import { ProductRepository } from "./product.repository";

@NgModule({
    providers: [ProductRepository, ProductData]
})
export class ModelModule {}