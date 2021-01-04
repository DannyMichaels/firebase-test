import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useAuth } from './../../../contexts/AuthContext';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (null !== emailRef.current && null !== passwordRef.current) {
      try {
        setIsLoading(true);
        setError('');
        await login(emailRef.current.value, passwordRef.current.value);
        history.push('/profile');
      } catch (error) {
        setError(error.message);
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" required />
            </Form.Group>

            <Button disabled={isLoading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Need an Account? <Link to="/signup">Signup</Link>
      </div>
    </>
  );
}
