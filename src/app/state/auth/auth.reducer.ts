import { createReducer, on } from '@ngrx/store';
import { loginFailure, loginSuccess } from './auth.actions';

export interface AuthState {
  token: string | null,
  user: any,
  error: any
}

export const initialState: AuthState = {
  token: null,
  user: null,
  error: null
}

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, res) => {
    return {
      ...state,
      token: res.token,
      user: res.user
    };
  }),
  on(loginFailure, (state, error) => {
    return {
      ...state,
      error: error,
      user: null,
      token: null
    };
  })
)

export function authReducer(state: any, action: any) {
  return _authReducer(state, action)
}
