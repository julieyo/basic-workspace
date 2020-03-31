import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProfileActions from '../../../../profile-store/profile.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, switchMap, tap } from 'rxjs/operators';
import { UserProfile } from '../models';
import * as profileSelectors from '../../../../profile-store/profile.selectors';

@Component({
  selector: 'monofunworkspace-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  user$: Observable<UserProfile>;
  loading$: Observable<boolean>;
  constructor(private store: Store<any>, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.loading$ = this.store.select(profileSelectors.getProfileLoading);
    this.user$ = this.store.select(profileSelectors.getUserProfile);
  }
}
