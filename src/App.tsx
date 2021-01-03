import './App.scss';
import { Route, Switch, Link } from 'react-router-dom';
import { Signup } from './screens/auth/Signup/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './screens/auth/Dashboard/Dashboard';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route to="/signup" component={Signup} />
          </Switch>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
