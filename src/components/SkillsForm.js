// src/components/SkillsForm.js
import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col, Badge } from 'react-bootstrap';

const SkillsForm = ({ data, setData }) => {
  const [skill, setSkill] = useState('');
  const [error, setError] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!skill.trim()) {
      setError('Skill cannot be empty.');
      return;
    }

    setData({
      ...data,
      skills: [...data.skills, skill.trim()],
    });

    setSkill('');
    setError('');
  };

  const handleRemoveSkill = (indexToRemove) => {
    const updatedSkills = data.skills.filter((_, index) => index !== indexToRemove);
    setData({ ...data, skills: updatedSkills });
  };

  return (
    <Form className="mb-5" onSubmit={handleAddSkill}>
      <h4 className="mb-3">💡 Skills</h4>

      {error && <Alert variant="danger">{error}</Alert>}

      <Row className="align-items-end mb-3">
        <Col md={9}>
          <Form.Group controlId="skill">
            <Form.Label>Enter a Skill <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Selenium, Java, Manual Testing"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Button type="submit" variant="primary" className="w-100">
            Add Skill
          </Button>
        </Col>
      </Row>

      {data.skills.length > 0 && (
        <div className="mb-3">
          <h6 className="mb-2">🛠️ Added Skills:</h6>
          <div className="d-flex flex-wrap gap-2">
            {data.skills.map((s, index) => (
              <Badge
                key={index}
                bg="dark"
                className="p-2"
                pill
                style={{
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onClick={() => handleRemoveSkill(index)}
              >
                {s} <span style={{ marginLeft: '6px' }}>✕</span>
              </Badge>
            ))}
          </div>
          <small className="text-muted">Click on any skill to remove it.</small>
        </div>
      )}
    </Form>
  );
};

export default SkillsForm;
