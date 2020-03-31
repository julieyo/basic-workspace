import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../../../../../libs/feature-profile-details/src/lib/models/profile.model';
import { Store } from '@ngrx/store';
import { switchMap, filter, tap} from 'rxjs/operators';
import { ProfileState } from  '../../../../../libs/feature-profile-details/src/lib/models/profile-state.model';
import * as profileSelectors from '../../../../../libs/profile-store/profile.selectors';
import * as profileActions from '../../../../../libs/profile-store/profile.actions';

@Component({
  selector: 'monofunworkspace-feature-profile-list',
  templateUrl: './feature-profile-list.component.html',
  styleUrls: ['./feature-profile-list.component.scss']
})
export class FeatureProfileListComponent implements OnInit {

  users$: Observable<Array<UserProfile>>;

  constructor(private store: Store<ProfileState>) {
  }

  ngOnInit(): void {
    this.users$ = this.store.select(profileSelectors.getUsers);
  }
}
