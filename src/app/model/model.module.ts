import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { ProductData } from "./product.mock";
import { ProductRepository } from "./product.repository";

@NgModule({
    providers: [ProductRepository, ProductData, Cart, Order, OrderRepository]
})
export class ModelModule {}