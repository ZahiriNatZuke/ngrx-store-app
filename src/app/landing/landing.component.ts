import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectToken, selectUser } from '../state/auth/auth.selector';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  public user$ = this.store.select(selectUser);

  public jwt$ = this.store.select(selectToken);

  constructor(private readonly store: Store) {
  }

}
