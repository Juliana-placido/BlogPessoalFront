import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';

interface User {

  id: number;
  name: string;

}

// Ação de login bem-sucedido
export const loginSuccess = (user: User): { type: typeof LOGIN_SUCCESS; payload: User } => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// Ação de login com falha
export const loginFailure = (error: string): { type: typeof LOGIN_FAILURE; payload: string } => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Ação de logout
export const logout = (): { type: typeof LOGOUT } => ({
  type: LOGOUT,
});

// Ação assíncrona para realizar o login
export const login = (username: string, password: string) => {
  return async (dispatch: any) => {
    try {
      // Lógica de autenticação assíncrona (exemplo simplificado)
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const user: User = await response.json();
        dispatch(loginSuccess(user));
      } else {
        const error = 'Credenciais inválidas';
        dispatch(loginFailure(error));
      }
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
};
