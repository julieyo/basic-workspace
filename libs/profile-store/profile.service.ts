// Use the random user generator API found here: https://randomuser.me/ to retrieve data for your services.
// Further documentation for implementation can be found here: https://randomuser.me/documentation#format

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsServiceResponse } from '../feature-profile-details/src/lib/models/forms-service.model';

@Injectable({
    providedIn: 'root'
})
export class FormsService {
    constructor(private http: HttpClient) { }
    readonly url = 'https://randomuser.me/api/';
    readonly limit = 15;

    /**
     * getUserProfile - retrieve a user profile from api
     *
     */
    getUserProfile() {
        // Write code here to retrieve a user profile from the random user API
        return this.http.get<FormsServiceResponse>(this.url);
    }

    /**
     * getUsers - retrieve users from api
     * @param numberOfUsers - optional parameter to say how many to retrieve
     */
    getUsers(numberOfUsers: number = 0) {
      const count = numberOfUsers > 0 ? numberOfUsers : this.limit;
      return this.http.get<FormsServiceResponse>(`${this.url}?results=${count}`);
    }
}
