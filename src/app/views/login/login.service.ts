import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}

  getDataExpiracaoToken(token: string): Date {
    const decode: any = this.getDecodedAccessToken(token);

    if (decode.exp === undefined) {
      console.log("token não é valido");
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decode.exp);
    console.log("Data de vencimento do token: " + date);
    return date;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
