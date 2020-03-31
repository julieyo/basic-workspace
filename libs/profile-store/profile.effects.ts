import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userProfileActions from './profile.actions';
import { FormsService } from './profile.service';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { UserProfile } from '../feature-profile-details/src/lib/models/profile.model';
import { FormsServiceResult } from '../feature-profile-details/src/lib/models/forms-service.model';
import { Action } from '@ngrx/store';
@Injectable()
export class ProfileEffects {

  getUserProfileRequest$ = createEffect(() => this.actions$.pipe(
    // Write code to retrieve random user from API here
    // Hint: You will need to use some rxjs operators here
    ofType(userProfileActions.getProfile),
    switchMap(() => this.formsService.getUserProfile()),
    switchMap((response) => {
      const actions = new Array<Action>();
      if (response.results) {
        const profiles = this.processResults(response.results);
        actions.push(userProfileActions.getUserProfileSuccess({profile: profiles[0]}));
      } else {
        actions.push(userProfileActions.getUserProfileFailed());
      }
      return actions;
    }),
    catchError((error) => {
      console.log(error);
      return [userProfileActions.getUserProfileFailed];
    })
  ));

  getUsersRequest$ = createEffect(() => this.actions$.pipe(
    ofType(userProfileActions.getUsers),
    switchMap(() => this.formsService.getUsers()),
    switchMap((response) => {
      const actions = new Array<Action>();
      if (response.results) {
        const profiles = this.processResults(response.results);
        actions.push(userProfileActions.getUsersSuccess({profiles: profiles}));
      } else {
        actions.push(userProfileActions.getUsersFailed());
      }
      return actions;
    }),
    catchError((error) => {
      console.log(error);
      return [userProfileActions.getUsersFailed];
    })
  ));
  constructor(
    private actions$: Actions,
    private formsService: FormsService
  ) {}

  private processResults(results: Array<FormsServiceResult>) {
    return results.map(user =>
      <UserProfile>{
        firstName: user.name.first,
        lastName: user.name.last,
        city: user.location.city,
        state: user.location.state,
        email: user.email,
        phone: user.phone,
        cell: user.cell,
        pictureUrl: user.picture.medium
      }
    );
  }
}

// FYI: The response from the API will return an object with different properties than the UserProfile model.
