import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Order } from "./order.model";
import { Product } from "./product.model";

@Injectable()
export class ProductData {
    private products: Product[] = [
        new Product(1, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
        new Product(2, "Produkt 2", "Kategoria 2", "Produkt 1 (Kategoria 2)", 100),
        new Product(3, "Produkt 3", "Kategoria 2", "Produkt 1 (Kategoria 2)", 100),
        new Product(4, "Produkt 4", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
        new Product(5, "Produkt 5", "Kategoria 3", "Produkt 1 (Kategoria 3)", 100)
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products])
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(order);
        console.log(JSON.stringify(order));
        return from([order]);
    }

}
