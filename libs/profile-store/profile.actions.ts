import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../feature-profile-details/src/lib/models/profile.model';

/**
 * The following are constants for specifying actions
 */
export const GET_USER_PROFILE = '[Profile Details Component] Get user profile request';
export const GET_USER_PROFILE_SUCCESS = '[Profile Details Component] Get user profile request success';
export const GET_USER_PROFILE_FAILED = '[Profile Details Component] Get user profile request failed';

export const GET_USERS = '[Profile List Component] Get users';
export const GET_USERS_SUCCESS = '[Profile List Component] Get users success';
export const GET_USERS_FAILED = '[Profile List Component] Get users failed';

export const SET_USER_PROFILE = '[Profile Details Component] Set user profile request';
/**
 * getProfile - action to request a single user profile
 * @param userId: number -- index of user profile, can be null
 *
 */
export const getProfile = createAction(GET_USER_PROFILE);

/**
 * getUserProfileSuccess - action when request to get user profile is successful
 * @param profile: UserProfile -- the instance of the retrieved user profile
 */
export const getUserProfileSuccess = createAction(GET_USER_PROFILE_SUCCESS,
  props <{profile: UserProfile}>()
);

/**
 * getUserProfileFailed - action when request to get user profile failed
 */
export const getUserProfileFailed = createAction(GET_USER_PROFILE_FAILED);

/**
 * getUsers - action to request list of users
 *
 */
export const getUsers = createAction(GET_USERS);

/**
 * getUsersSuccess - action for successful load
 * @param profiles: Array<UserProfile>
 */
export const getUsersSuccess = createAction(GET_USERS_SUCCESS,
  props <{profiles: Array<UserProfile>}>()
);

/**
 * getUsersFailed - action for when request to load users fails
 */
export const getUsersFailed = createAction(GET_USERS_FAILED);

/**
 * setUserProfile - action to save user profile
 */
export const setUserProfile = createAction(SET_USER_PROFILE,
  props<{index: number}>()
);
