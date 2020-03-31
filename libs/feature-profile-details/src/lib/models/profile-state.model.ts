import { UserProfile } from './profile.model';

export interface ProfileState {
    userProfile: UserProfile;
    isProfileLoading: boolean;
    users: Array<UserProfile>;
    isUsersLoading: boolean;
}
