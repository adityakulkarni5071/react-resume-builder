// src/components/ResumePreview.js
import React, { forwardRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ResumePreview = forwardRef(({ data }, ref) => {
  const { header, summary, skills, experience, projects, achievements, education } = data;

  return (
    <Container
      ref={ref}
      className="border p-4 mt-4 shadow bg-white"
      style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}
    >
      {/* Header Section */}
      <div className="text-center mb-4">
        <h2 className="mb-1">{header.name || 'Your Name'}</h2>
        <h5 className="text-muted mb-2">{header.role || 'Your Job Title'}</h5>
        <div style={{ fontSize: '14px' }}>
          📞 {header.phone} &nbsp;|&nbsp; ✉️ {header.email} <br />
          🌐{' '}
          <a href={header.linkedin} target="_blank" rel="noreferrer" style={{ wordBreak: 'break-word' }}>
            {header.linkedin}
          </a>{' '}
          &nbsp;|&nbsp; 📍 {header.location}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <>
          <h5 className="border-bottom pb-1 text-center fw-bold">Summary</h5>
          <p>{summary}</p>
        </>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <>
          <h5 className="border-bottom pb-1 mt-4 text-center fw-bold">Skills</h5>
          <Row>
            {skills.map((skill, index) => (
              <Col key={index} xs={6} sm={4} md={3} className="mb-2">
                • {skill}
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <>
          <h5 className="border-bottom pb-1 mt-4 text-center fw-bold">Experience</h5>
          {experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <strong>{exp.role}</strong> @ {exp.company}<br />
              <small className="text-muted">{exp.duration} &nbsp;|&nbsp; {exp.location}</small>
              <p className="mt-2 mb-0">{exp.details}</p>
            </div>
          ))}
        </>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <>
          <h5 className="border-bottom pb-1 mt-4 text-center fw-bold">Projects</h5>
          {projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <strong>{proj.name}</strong> <span className="text-muted">({proj.duration})</span>
              <p className="mt-2 mb-0">{proj.description}</p>
            </div>
          ))}
        </>
      )}

      {/* Achievements */}
      {achievements && (
        <>
          <h5 className="border-bottom pb-1 mt-4 text-center fw-bold">Key Achievements</h5>
          <p>{achievements}</p>
        </>
      )}

      {/* Education */}
      {education.length > 0 && (
        <>
          <h5 className="border-bottom pb-1 mt-4 text-center fw-bold">Education</h5>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <strong>{edu.degree}</strong><br />
              {edu.college} ({edu.year})<br />
              <em>{edu.location}</em>
            </div>
          ))}
        </>
      )}
    </Container>
  );
});

export default ResumePreview;
