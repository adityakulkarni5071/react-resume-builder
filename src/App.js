// src/App.js
import React, { useState, useRef } from 'react';
import { Container, Button } from 'react-bootstrap';
import HeaderForm from './components/HeaderForm';
import SummaryForm from './components/SummaryForm';
import SkillsForm from './components/SkillsForm';
import ExperienceForm from './components/ExperienceForm';
import ProjectsForm from './components/ProjectsForm';
import AchievementsForm from './components/AchievementsForm';
import EducationForm from './components/EducationForm';
import ResumePreview from './components/ResumePreview';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  const [resumeData, setResumeData] = useState({
    header: {},
    summary: '',
    skills: [],
    experience: [],
    projects: [],
    achievements: '',
    education: [],
  });

  const resumeRef = useRef();

  const handleDownloadPDF = async () => {
  try {
    const input = resumeRef.current;

    // Set A4 dimensions in pixels (at 96 DPI)
    const a4Width = 595.28; // pt (approx 8.27 inches)
    const a4Height = 841.89; // pt (approx 11.69 inches)

    const canvas = await html2canvas(input, {
      scale: 2,
      width: input.scrollWidth,
      height: input.scrollHeight,
      backgroundColor: '#ffffff',
    });

    // Resize image to A4 aspect ratio
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    // Custom: shrink content to fit 1 A4 page
    const imgProps = pdf.getImageProperties(imgData);
    const ratio = Math.min(a4Width / imgProps.width, a4Height / imgProps.height);
    const imgWidth = imgProps.width * ratio;
    const imgHeight = imgProps.height * ratio;

    const marginX = (a4Width - imgWidth) / 2;
    const marginY = (a4Height - imgHeight) / 2;

    pdf.addImage(imgData, 'PNG', marginX, marginY, imgWidth, imgHeight);
    pdf.save('My_Resume.pdf');
  } catch (err) {
    console.error('PDF download failed:', err);
    alert('Something went wrong while generating PDF.');
  }
};


  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">🚀 React Resume Builder</h1>

      <HeaderForm data={resumeData} setData={setResumeData} />
      <SummaryForm data={resumeData} setData={setResumeData} />
      <SkillsForm data={resumeData} setData={setResumeData} />
      <ExperienceForm data={resumeData} setData={setResumeData} />
      <ProjectsForm data={resumeData} setData={setResumeData} />
      <AchievementsForm data={resumeData} setData={setResumeData} />
      <EducationForm data={resumeData} setData={setResumeData} />

      <div className="text-center my-4">
        <Button variant="success" onClick={handleDownloadPDF}>
          📄 Download PDF
        </Button>
      </div>

      <div
        ref={resumeRef}
        id="resume-section"
        style={{
          backgroundColor: '#fff',
          padding: '30px',
          color: '#000',
          fontFamily: 'Arial, sans-serif',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <ResumePreview data={resumeData} />
      </div>
    </Container>
  );
}

export default App;
