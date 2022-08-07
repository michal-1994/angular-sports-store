import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { ProductData } from "./product.mock";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];

    constructor(private productData: ProductData) { }

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.productData.saveOrder(order);
    }
}