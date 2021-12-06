import { LoginService } from "./../views/login/login.service";
import { Observable } from "rxjs";
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";

export class AuthInterceptor implements HttpInterceptor {
  
  loginService: LoginService = new LoginService();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = window.localStorage.getItem("token");

    this.loginService.getDataExpiracaoToken(token);

    const request = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + token),
    });
    return next.handle(request);
  }
}
