// src/components/EducationForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';

const EducationForm = ({ data, setData }) => {
  const [edu, setEdu] = useState({
    degree: '',
    college: '',
    location: '',
    year: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    const { degree, college, location, year } = edu;

    if (!degree || !college || !location || !year) {
      setError('All fields are required.');
      return;
    }

    setData({
      ...data,
      education: [...data.education, edu],
    });

    setEdu({ degree: '', college: '', location: '', year: '' });
    setError('');
  };

  const handleRemoveEducation = (indexToRemove) => {
    const updated = data.education.filter((_, index) => index !== indexToRemove);
    setData({ ...data, education: updated });
  };

  return (
    <Form className="mb-5" onSubmit={handleAddEducation}>
      <h4 className="mb-3">🎓 Education</h4>

      {error && (
        <Alert variant="danger" className="py-2 px-3">
          {error}
        </Alert>
      )}

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="degree">
            <Form.Label>Degree <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="degree"
              placeholder="e.g. B.Tech in Computer Science"
              value={edu.degree}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="college">
            <Form.Label>College Name <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="college"
              placeholder="College / University Name"
              value={edu.college}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="location">
            <Form.Label>Location <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="City, Country"
              value={edu.location}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="year">
            <Form.Label>Passing Year <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="year"
              placeholder="e.g. 2020"
              value={edu.year}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <div className="text-end mb-4">
        <Button type="submit" variant="primary">Add Education</Button>
      </div>

      {data.education.length > 0 && (
        <>
          <h5 className="mt-4">📚 Saved Education</h5>
          {data.education.map((eduItem, index) => (
            <Card key={index} className="mb-2 shadow-sm">
              <Card.Body>
                <Card.Title className="mb-1">{eduItem.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {eduItem.college} — {eduItem.year}
                </Card.Subtitle>
                <Card.Text className="mb-2"><em>{eduItem.location}</em></Card.Text>
                <div className="text-end">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemoveEducation(index)}
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

export default EducationForm;
