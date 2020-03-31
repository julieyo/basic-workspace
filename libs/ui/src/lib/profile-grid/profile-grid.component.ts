import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UserProfile } from '../../../../feature-profile-details/src/lib/models';
import { Router } from '@angular/router';

@Component({
  selector: 'monofunworkspace-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileGridComponent {
  @Input() users: UserProfile[];

  displayedColumns: string[] = ['pictureUrl', 'name', 'email'];

  constructor(private router: Router) { }

  goToProfile(userIndex) {
    // Write code to navigate to the profile details page
    this.router.navigateByUrl(`/profile-details/${userIndex}`);
  }
}
