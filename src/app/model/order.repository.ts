import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { ProductData } from "./product.mock";
import { RestData } from "./rest.data";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded: boolean = false;

    constructor(private productData: ProductData, private restData: RestData) { }

    loadOrders() {
        this.loaded = true;
        this.restData.getOrders().subscribe(orders => this.orders = orders)
    }

    getOrders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.productData.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.restData.updateOrder(order).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, order);
        })
    }

    deleteOrder(id: number) {
        this.restData.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id == o.id))
        })
    }
}