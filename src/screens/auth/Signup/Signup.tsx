import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useAuth } from './../../../contexts/AuthContext';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Signup: React.FC = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      null !== passwordRef.current &&
      null !== passwordConfirmRef.current &&
      null !== emailRef.current
    ) {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match');
      }
      try {
        setIsLoading(true);
        setError('');
        await signup(emailRef.current.value, passwordRef.current.value);
        return history.push('/profile');
      } catch {
        return setError('failed to create an account');
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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

            <Form.Group id="passwordConfirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                ref={passwordConfirmRef}
                type="passwordConfirm"
                required
              />
            </Form.Group>
            <Button disabled={isLoading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </>
  );
};
