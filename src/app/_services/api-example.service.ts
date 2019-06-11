import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GenericResponseService } from 'ng-etg-base';
import { environment } from '@environments/environment';

import { User } from '@models/user.model';

@Injectable({
    providedIn: 'root',
})
export class ApiExampleService extends GenericResponseService<User> {

    constructor(
        httpClient: HttpClient
    ) {
        super(httpClient, environment.apiUrl, "User");
    }
}