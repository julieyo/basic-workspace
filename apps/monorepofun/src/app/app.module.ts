import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UiModule } from '../../../../libs/ui/src';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoComponent } from './info.component';
import { ProfileListGuard } from './feature-profile-list/feature-profile-list.guard';

@NgModule({
  declarations: [AppComponent, InfoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    MatToolbarModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          component: InfoComponent
        },
        {
          path: 'profile-details',
          loadChildren: () =>
            import('@monofunworkspace/feature-profile-details').then(
              module => module.FeatureProfileDetailsModule
            )
        },
        {
          path: 'profile-list',
          pathMatch: 'full',
          canActivate: [ProfileListGuard],
          loadChildren: () =>
            import('./feature-profile-list/feature-profile-list.module').then(
              module => module.FeatureProfileListModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [ProfileListGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
