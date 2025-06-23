// src/components/HeaderForm.js
import React, { useState } from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';

const HeaderForm = ({ data, setData }) => {
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      header: { ...data.header, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setError('Please fill in all required fields.');
    } else {
      setError('');
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} className="mb-4" onSubmit={handleSubmit}>
      <h4 className="mb-3">🧾 Personal Information</h4>

      {error && <Alert variant="danger">{error}</Alert>}

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Full Name *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter full name"
              name="name"
              value={data.header.name || ''}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Full Name is required.</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="role">
            <Form.Label>Job Title *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="e.g. Software Test Engineer"
              name="role"
              value={data.header.role || ''}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Job Title is required.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              name="email"
              value={data.header.email || ''}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Valid email is required.</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="phone">
            <Form.Label>Phone *</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Enter phone number"
              name="phone"
              value={data.header.phone || ''}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Phone number is required.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="linkedin">
            <Form.Label>LinkedIn *</Form.Label>
            <Form.Control
              required
              type="url"
              placeholder="LinkedIn URL"
              name="linkedin"
              value={data.header.linkedin || ''}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">LinkedIn URL is required.</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="location">
            <Form.Label>Location *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="City, Country"
              name="location"
              value={data.header.location || ''}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Location is required.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <div className="text-end">
        <Button type="submit" variant="primary">Save Info</Button>
      </div>
    </Form>
  );
};

export default HeaderForm;
