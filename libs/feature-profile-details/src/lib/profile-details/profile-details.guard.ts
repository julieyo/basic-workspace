import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProfileState } from '../../../../../libs/feature-profile-details/src/lib/models/profile-state.model';
import * as profileSelectors from '../../../../../libs/profile-store/profile.selectors';
import * as profileActions from '../../../../../libs/profile-store/profile.actions';
import { map, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileDetailsGuard implements CanActivate {
  constructor(private store: Store<ProfileState>, private router: Router) {

  }
  /**
   * canActivate
   *
   * use this guard to trigger the load of the users if none are loaded yet.
   */
  canActivate(route: ActivatedRouteSnapshot) {
    const userId = route.paramMap.get('id');
    if (!userId) {
      this.store.dispatch(profileActions.getProfile());
      return true;
    } else {
      return this.store.select(profileSelectors.getUsersIsLoaded).pipe(
        take(1),
        map(users => {
          if (!users && userId) {
            // redirect to route without id
            return this.router.parseUrl('/profile-details');
          }
          this.store.dispatch(profileActions.setUserProfile({index: +userId}));
          return true;
        })
      );
    }
  }
}
