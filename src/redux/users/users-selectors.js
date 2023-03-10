export const isUserLogin = ({ user }) => user.isLogin;
export const getUser = ({ user }) => user.user;
export const getLoginedUser = ({ user }) => {
  const { isLogin, token } = user;
  return { isLogin, token };
};