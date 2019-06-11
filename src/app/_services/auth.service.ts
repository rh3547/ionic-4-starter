import { Injectable } from '@angular/core';

import { ETGAuthService, OpenIddictService } from "ng-etg-base";
import { User } from "@models/user.model";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private etgAuth: ETGAuthService,
        private openIddictService: OpenIddictService<User>
    ) {
        this.etgAuth.setAuthSubject(this.openIddictService);
    }

    /*
    ========================================================================================
        Login Functions
    ========================================================================================
    */
    public login(username: string, password: string): Promise<any> {
        return this.etgAuth.login(username, password);
    }

    public logout() {
        return this.etgAuth.logout();
    }

    /*
    ========================================================================================
        Registration Functions
    ========================================================================================
    */
    public register(email: string, username: string, password: string, attributes: any): Promise<any> {
        return this.etgAuth.register(email, username, password, attributes);
    }

    /*
    ========================================================================================
        User/Auth Functions
    ========================================================================================
    */
    public getCurrentUser(): Promise<any> {
        return this.etgAuth.getCurrentUser();
    }

    public getAccessToken(): Promise<any> {
        return this.etgAuth.getAccessToken();
    }

    public getIdToken(): Promise<any> {
        return this.etgAuth.getIdToken();
    }

    public isAuthenticated(): Promise<boolean> {
        return this.etgAuth.isAuthenticated()
    }
}