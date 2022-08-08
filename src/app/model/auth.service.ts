import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestData } from "./rest.data";

@Injectable()
export class AuthService {
    constructor(private restData: RestData) {

    }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.restData.authenticate(username, password);
    }

    get authenticated(): boolean {
        return this.restData.auth_token != null;
    }

    clear() {
        this.restData.auth_token = null;
    }
}