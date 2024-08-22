import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import CVTemplate from './components/ResumePreview';
import CVTemplate2 from './components/cv2';

function App() {
  const [formData, setFormData] = useState(null);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [template, setTemplate] = useState('template1');

  const handleFormSave = (data) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  const handleExperienceSave = (exp) => {
    setExperience([...experience, exp]);
  };

  const handleEducationSave = (edu) => {
    setEducation([...education, edu]);
  };

  const handleCertificationSave = (cert) => {
    setCertifications([...certifications, cert]);
  };

  const handleLanguageAdd = (lang) => {
    setLanguages([...languages, lang]);
  };

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="app-container">
      {!isSubmitted ? (
        <ResumeForm
          onSave={handleFormSave}
          onExperienceSave={handleExperienceSave}
          onEducationSave={handleEducationSave}
          onCertificationSave={handleCertificationSave}
          onLanguageAdd={handleLanguageAdd}
        />
      ) : (
        <>
          <div>
            <label>Select Template: </label>
            <select value={template} onChange={handleTemplateChange}>
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
            </select>
          </div>

          {template === 'template1' ? (
            <CVTemplate
              formData={formData}
              experience={experience}
              education={education}
              certifications={certifications}
              languages={languages}
              onEdit={handleEdit}
            />
          ) : (
            <CVTemplate2
              formData={formData}
              experience={experience}
              education={education}
              certifications={certifications}
              languages={languages}
              onEdit={handleEdit}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
