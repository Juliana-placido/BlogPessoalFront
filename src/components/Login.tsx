import { Button } from '@material-ui/core';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Fazer login</h2>
      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
}

export default Login;

