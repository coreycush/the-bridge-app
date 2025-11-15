import { Login } from "./screens/Login";

export default function RootLayout() {
  const handleLogin = (credentials: { email: string; password: string }) => {
    console.log(credentials);
  };
  const handleRegister = () => {
    console.log("registered");
  };
  const handlePasswordReset = () => {
    console.log("reset password");
  };

  return (
    <Login
      onLogin={handleLogin}
      onRegister={handleRegister}
      onForgotPassword={handlePasswordReset}
    />
  );
}
