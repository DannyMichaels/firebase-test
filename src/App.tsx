import './App.scss';
import { Route, Switch, Link } from 'react-router-dom';
import { Signup } from './screens/auth/Signup/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './screens/auth/Dashboard/Dashboard';
import Login from './screens/auth/Login/Login';
import PrivateRoute from './components/auth/PrivateRoute/PrivateRoute';
import ForgotPassword from './screens/auth/ForgotPassword/ForgotPassword';
import { UpdateProfile } from './screens/auth/UpdateProfile/UpdateProfile';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </div>
    </Container>
  );
}
export default App;
