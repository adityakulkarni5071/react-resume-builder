// src/components/AchievementsForm.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const AchievementsForm = ({ data, setData }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, achievements: value });

    if (!value.trim()) {
      setError('Key Achievements are required.');
    } else {
      setError('');
    }
  };

  const handleValidate = (e) => {
    e.preventDefault();
    if (!data.achievements.trim()) {
      setError('Please enter your key achievements.');
    } else {
      setError('');
    }
  };

  return (
    <Form className="mb-5" onSubmit={handleValidate}>
      <h4 className="mb-3">🏆 Key Achievements</h4>

      {error && (
        <Alert variant="danger" className="py-2 px-3">
          {error}
        </Alert>
      )}

      <Form.Group controlId="achievements">
        <Form.Label>
          Achievements <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          style={{ resize: 'none' }}
          placeholder="e.g. Automated 400+ test cases, reduced manual testing by 50%"
          value={data.achievements}
          onChange={handleChange}
          isInvalid={!!error}
        />
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="text-end mt-3">
        <Button type="submit" variant="primary">Save Achievements</Button>
      </div>
    </Form>
  );
};

export default AchievementsForm;
