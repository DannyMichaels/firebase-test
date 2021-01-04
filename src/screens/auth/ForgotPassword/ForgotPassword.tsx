import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useAuth } from './../../../contexts/AuthContext';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // to get rid of typescript useRef errors...
    if (null !== emailRef.current) {
      try {
        setMessage('');
        setError('');
        setIsLoading(true);
        await resetPassword(emailRef.current.value);
        setMessage('Check your inbox for further instructions');
      } catch {
        setError('failed to reset password');
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              {/* <Form.Control ref={passwordRef} type="password" required /> */}
            </Form.Group>

            <Button disabled={isLoading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Need an Account? <Link to="/signup">Signup</Link>
      </div>
    </>
  );
}
