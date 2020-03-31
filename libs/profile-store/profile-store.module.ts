import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromProfileReducers from './profile.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(fromProfileReducers.profileFeatureKey, fromProfileReducers.reducer)
  ],
})
export class ProfileStoreModule {}
