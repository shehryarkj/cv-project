import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import CVTemplate from './CVTemplate';

function App() {
  const [formData, setFormData] = useState(null);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        <CVTemplate
          formData={formData}
          experience={experience}
          education={education}
          certifications={certifications}
          languages={languages}
        />
      )}
    </div>
  );
}

export default App;
