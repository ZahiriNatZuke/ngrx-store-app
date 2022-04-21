import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthService } from '../../login/auth.service';
import { loginFailure, loginRequest, loginSuccess } from './auth.actions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

@Injectable()
export class AuthEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
  }

  public loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest),
      exhaustMap((action: any) =>
        this.authService.login(action.username, action.password)
          .pipe(
            map((res: any) => loginSuccess({ token: res.access, user: res.user })),
            catchError(error => of(loginFailure(error)))
          )
      )
    )
  );

  public loginSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap((res: any) => {
          this.router.navigate(['/home']);
          alert(`Login Successfully, Welcome ${ res.user.username }!!!`);
        })
      ),
    { dispatch: false }
  );

}
