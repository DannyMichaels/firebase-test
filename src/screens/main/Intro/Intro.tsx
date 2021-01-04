import './Intro.scss';
import React from 'react';
import { Form, Button, Card, Alert, Accordion } from 'react-bootstrap';

function Intro() {
  return (
    <>
      <main>
        <div className="inner-column">
          <section className="contact">(708) 477-5113</section>
          <header className="welcome">
            <h1>Welcome to SixKeys - Virtual Queue</h1>
            <h3>"stop wasting valuable time"</h3>
          </header>
        </div>
        <div className="inner-column">
          <section className="form">
            <Form>
              <Form.Group id="email">
                <label htmlFor="name">
                  <Form.Control
                    name="name"
                    placeholder="First & Last Name"
                    type="text"
                    required
                  />
                </label>
              </Form.Group>

              <Form.Group id="email">
                <label htmlFor="name">
                  <Form.Control
                    name="name"
                    placeholder="Phone Number #"
                    type="number"
                    required
                  />
                </label>
              </Form.Group>

              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Select Your Venue
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Form.Group id="location">
                        <Form.Label>Pasta Passion</Form.Label>
                        <Form.Control type="radio" />
                      </Form.Group>

                      <Form.Group id="location">
                        <Form.Label>Theme Park</Form.Label>
                        <Form.Control type="radio" />
                      </Form.Group>

                      <Form.Group id="location">
                        <Form.Label>Department of Motor Vehicles</Form.Label>
                        <Form.Control type="radio" />
                      </Form.Group>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Intro;
