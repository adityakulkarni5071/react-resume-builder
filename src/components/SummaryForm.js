// src/components/SummaryForm.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const SummaryForm = ({ data, setData }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, summary: value });
    if (!value.trim()) {
      setError('Summary is required.');
    } else {
      setError('');
    }
  };

  const handleValidate = (e) => {
    e.preventDefault();
    if (!data.summary.trim()) {
      setError('Please enter your summary.');
    } else {
      setError('');
    }
  };

  return (
    <Form className="mb-4" onSubmit={handleValidate}>
      <h4 className="mb-3">📝 Professional Summary</h4>

      {error && (
        <Alert variant="danger" className="py-2 px-3">
          {error}
        </Alert>
      )}

      <Form.Group controlId="summary">
        <Form.Label>Summary <span className="text-danger">*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          style={{ resize: 'none', fontSize: '15px' }}
          placeholder="Write a brief professional summary (2–5 lines)"
          value={data.summary}
          onChange={handleChange}
          isInvalid={!!error}
        />
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="text-end mt-3">
        <Button type="submit" variant="primary">
          Save Summary
        </Button>
      </div>
    </Form>
  );
};

export default SummaryForm;
