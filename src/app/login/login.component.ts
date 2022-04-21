import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginRequest } from '../state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = 'ZahiriNatZuke';
  public password: string = 'Pass123/*';

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
  }

  async login() {
    this.store.dispatch(loginRequest({ username: this.username, password: this.password }));
  }
}
