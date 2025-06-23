// src/components/ProjectsForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';

const ProjectsForm = ({ data, setData }) => {
  const [project, setProject] = useState({
    name: '',
    duration: '',
    description: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    const { name, duration, description } = project;

    if (!name || !duration || !description) {
      setError('Please fill in all fields.');
      return;
    }

    setData({
      ...data,
      projects: [...data.projects, project],
    });

    setProject({ name: '', duration: '', description: '' });
    setError('');
  };

  const handleRemoveProject = (indexToRemove) => {
    const updatedProjects = data.projects.filter((_, i) => i !== indexToRemove);
    setData({ ...data, projects: updatedProjects });
  };

  return (
    <Form className="mb-5" onSubmit={handleAddProject}>
      <h4 className="mb-3">📁 Projects</h4>

      {error && (
        <Alert variant="danger" className="py-2 px-3">
          {error}
        </Alert>
      )}

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Project Name <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="e.g. CleverGround LMS"
              value={project.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="duration">
            <Form.Label>Duration <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="duration"
              placeholder="e.g. Nov 2021 - Present"
              value={project.duration}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="description" className="mb-3">
        <Form.Label>Description <span className="text-danger">*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          placeholder="Describe your role, technologies used, outcomes"
          value={project.description}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <div className="text-end mb-4">
        <Button type="submit" variant="primary">Add Project</Button>
      </div>

      {data.projects.length > 0 && (
        <>
          <h5 className="mb-3">🗂️ Saved Projects</h5>
          {data.projects.map((proj, index) => (
            <Card key={index} className="mb-2 shadow-sm">
              <Card.Body>
                <Card.Title className="mb-1">{proj.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{proj.duration}</Card.Subtitle>
                <Card.Text>{proj.description}</Card.Text>
                <div className="text-end">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemoveProject(index)}
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

export default ProjectsForm;
