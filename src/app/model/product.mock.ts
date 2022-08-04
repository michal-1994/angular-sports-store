import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Product } from "./product.model";

@Injectable()
export class ProductData {
    private products: Product[] = [
        new Product(1, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
        new Product(2, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
        new Product(3, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
        new Product(4, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
        new Product(5, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100)
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products])
    }

}
