// src/components/ExperienceForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';

const ExperienceForm = ({ data, setData }) => {
  const [experience, setExperience] = useState({
    company: '',
    role: '',
    duration: '',
    location: '',
    details: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    const { company, role, duration, location, details } = experience;

    if (!company || !role || !duration || !location || !details) {
      setError('All fields are required.');
      return;
    }

    setData({
      ...data,
      experience: [...data.experience, experience],
    });

    setExperience({
      company: '',
      role: '',
      duration: '',
      location: '',
      details: '',
    });

    setError('');
  };

  const handleRemoveExperience = (indexToRemove) => {
    const updated = data.experience.filter((_, i) => i !== indexToRemove);
    setData({ ...data, experience: updated });
  };

  return (
    <Form className="mb-5" onSubmit={handleAddExperience}>
      <h4 className="mb-3">💼 Work Experience</h4>

      {error && <Alert variant="danger">{error}</Alert>}

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="role">
            <Form.Label>Role <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="role"
              placeholder="e.g. Software Test Engineer"
              value={experience.role}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="company">
            <Form.Label>Company <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="company"
              placeholder="Company name"
              value={experience.company}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="duration">
            <Form.Label>Duration <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="duration"
              placeholder="e.g. Nov 2021 - Present"
              value={experience.duration}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="location">
            <Form.Label>Location <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="City, Country"
              value={experience.location}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="details" className="mb-3">
        <Form.Label>Work Description <span className="text-danger">*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="details"
          style={{ resize: 'none' }}
          placeholder="Key responsibilities, tools used, achievements"
          value={experience.details}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <div className="text-end mb-4">
        <Button type="submit" variant="primary">Add Experience</Button>
      </div>

      {data.experience.length > 0 && (
        <>
          <h5 className="mb-3">🗃️ Saved Experiences</h5>
          {data.experience.map((exp, index) => (
            <Card key={index} className="mb-2 shadow-sm">
              <Card.Body>
                <Card.Title>{exp.role} at {exp.company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {exp.duration} | {exp.location}
                </Card.Subtitle>
                <Card.Text>{exp.details}</Card.Text>
                <div className="text-end">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemoveExperience(index)}
                  >
                    Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </Form>
  );
};

export default ExperienceForm;
