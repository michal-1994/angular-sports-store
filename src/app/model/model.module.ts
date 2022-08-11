import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { Cart } from "./cart.model";
import { ConnectionService } from "./connection.service";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { ProductData } from "./product.mock";
import { ProductRepository } from "./product.repository";
import { RestData } from "./rest.data";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, ProductData, Cart, Order, OrderRepository, {
        provide: ProductData,
        useClass: RestData
    }, RestData, AuthService, ConnectionService]
})
export class ModelModule { }