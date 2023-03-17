export const isUserLogin = state => state.user.isLogin;
export const getUser = state => state.user.user;
export const getLoginedUser = state => {
  const { isLogin, token } = state.user;
  return { isLogin, token };
};
export const isUserError = state => state.user.error;
