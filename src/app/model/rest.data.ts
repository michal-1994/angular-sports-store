import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { HttpClient } from "@angular/common/http";

const PROTOCOL = "http";
const PORT = "3500";

@Injectable()
export class RestData {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }
}