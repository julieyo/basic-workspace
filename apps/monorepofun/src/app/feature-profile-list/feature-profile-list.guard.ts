import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProfileState } from '../../../../../libs/feature-profile-details/src/lib/models/profile-state.model';
import * as profileSelectors from '../../../../../libs/profile-store/profile.selectors';
import * as profileActions from '../../../../../libs/profile-store/profile.actions';
import { map, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileListGuard implements CanActivate {
  constructor(private store: Store<ProfileState>) {

  }
  /**
   * canActivate
   *
   * use this guard to trigger the load of the users if none are loaded yet.
   */
  canActivate() {
    return this.store.select(profileSelectors.getUsers).pipe(
      take(1),
      map(users => {
        if (!users) {
          this.store.dispatch(profileActions.getUsers());
        }
        return true;
      })
    );
  }
}
