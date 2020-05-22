import C from './constants'
export const login = user => {
  return {
    type: C.LOGIN,
    payload: user
  };
};

export const logout = () => {
  return {
    type: C.LOGOUT
  };
};


