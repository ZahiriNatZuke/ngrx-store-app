import { createAction, props } from '@ngrx/store';

export enum authActions {
  loginRequest = '[Auth] Login Request',
  loginSuccess = '[Auth] Login Success',
  loginFailure = '[Auth] Login Failure'
}

export const loginRequest = createAction(
  authActions.loginRequest,
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  authActions.loginSuccess,
  props<{ token: any, user: Object }>()
);

export const loginFailure = createAction(
  authActions.loginFailure,
  props<any>()
);
