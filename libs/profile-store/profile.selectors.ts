import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProfileReducers from './profile.reducers';

export const getUserProfileState = createFeatureSelector<ProfileState>(fromProfileReducers.profileFeatureKey);

export const getUserProfile = createSelector(getUserProfileState, ({ userProfile }) => {

  return userProfile;

});
export const getProfileLoading = createSelector(getUserProfileState, ( {isProfileLoading}) => isProfileLoading)
export const getUsers = createSelector(getUserProfileState, ( {users }) => {
  return users;
});
export const getUsersLoading = createSelector(getUserProfileState, ({isUsersLoading }) => isUsersLoading);
export const getUsersIsLoaded = createSelector(getUserProfileState, ({users}) => users !== null);
