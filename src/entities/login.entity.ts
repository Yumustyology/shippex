import { entity } from 'simpler-state';

interface LoginState {
  url: string;
  email: string;
  password: string;
  buttonDisabled: boolean;
  error: {
    email: string;
    password: string;
    url: string;
  };
}

export const loginState = entity<LoginState>({
  url: '', 
  email: '',
  password: '',
  // TODO: change this to true later
  buttonDisabled: false,
  error: {
    email: '',
    password: '',
    url: '',
  },
});

export const setLoginUrl = (url: string) => {
  loginState.set((prev) => ({ ...prev, url, error: { ...prev.error, url: '' } }));
};

export const setLoginEmail = (email: string) => {
  loginState.set((prev) => ({ ...prev, email, error: { ...prev.error, email: '' } }));
};

export const setLoginPassword = (password: string) => {
  loginState.set((prev) => ({ ...prev, password, error: { ...prev.error, password: '' } }));
};

export const resetLoginState = () => {
  loginState.set({ url: '', email: '', password: '', error: { email: '', password: '', url: '' }, buttonDisabled: true });
};

export const setLoginError = (field: keyof LoginState['error'], error: string) => {
  loginState.set((prev) => ({
    ...prev,
    error: { ...prev.error, [field]: error },
  }));
};
