import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { AlertService } from 'ng-etg-base';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
        private alertService: AlertService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise((resolve, reject) => {
            this.authService.isAuthenticated().then((isAuth) => {
                if (!isAuth) {
                    this.alertService.toastError("You are not currently authenticated and are not allowed to navigate to that page", "Not Authorized", 8000);
                }

                resolve(isAuth);
            });
        });
    }
}