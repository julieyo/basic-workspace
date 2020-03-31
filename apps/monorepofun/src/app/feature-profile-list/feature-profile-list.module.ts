import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from '../../../../../libs/ui/src/lib/ui.module';
import { FeatureProfileListComponent } from './feature-profile-list.component';
import { ProfileStoreModule } from '../../../../../libs/profile-store/profile-store.module';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects} from '../../../../../libs/profile-store/profile.effects';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const routes: Routes = [
  { path: '', component: FeatureProfileListComponent }
];

@NgModule({
  declarations: [FeatureProfileListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    UiModule,
    ProfileStoreModule,
    EffectsModule.forFeature([ProfileEffects])
  ]
})
export class FeatureProfileListModule { }
