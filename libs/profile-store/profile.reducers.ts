import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';
import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';

export const initialState: ProfileState = {
    userProfile: null,
    isProfileLoading: false,
    users: null,
    isUsersLoading: false
}

const userProfileReducer = createReducer(
    initialState,
    on(ProfileActions.getProfile, state => {
        // Write code here
        return { ...state, isProfileLoading: true }
    }),
    on(ProfileActions.getUserProfileSuccess, (state, {profile} ) => {
      return { ...state, userProfile: profile, isProfileLoading: false }
    }),
    on(ProfileActions.getUserProfileFailed, state => {
      return { ...state, userProfile: null, isProfileLoading: false }
    }),
    on(ProfileActions.getUsers, state => {
      return { ...state, isUsersLoading: true}
    }),
    on(ProfileActions.getUsersSuccess, (state, {profiles}) => {
      return { ...state, isUsersLoading: false, users: profiles}
    }),
    on(ProfileActions.getUsersFailed, state => {
      return { ...state, isUsersLoading: false}
    }),
    on(ProfileActions.setUserProfile, (state, {index}) => {
      let profile = null;

      if (state.users && index >=0 && index < state.users.length) {
        profile = state.users[index];
      }
      return { ...state, userProfile: profile};
    })
  );

  export function reducer(state: ProfileState | undefined, action: Action) {
    return userProfileReducer(state, action);
  }

  export const profileFeatureKey = 'profile';
