import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { UiModule } from '@monofunworkspace/ui';
import { ProfileStoreModule } from '../../../profile-store/profile-store.module';
import { ProfileDetailsGuard } from './profile-details/profile-details.guard';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from '../../../profile-store/profile.effects';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    ProfileStoreModule,
    EffectsModule.forFeature([ProfileEffects]),
    RouterModule.forChild([
      {
        path: ':id',
        pathMatch: 'full',
        component: ProfileDetailsComponent,
        canActivate: [ProfileDetailsGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        component: ProfileDetailsComponent,
        canActivate: [ProfileDetailsGuard]
      },
    ])
  ],
  providers: [ProfileDetailsGuard],
  declarations: [ProfileDetailsComponent]
})
export class FeatureProfileDetailsModule {}
