import React, { useState } from 'react';
import '../components/Resumeform.css'

function ResumeForm({ onSave, onExperienceSave, onEducationSave, onCertificationSave, onLanguageAdd }) {
  const [formState, setFormState] = useState({
    fullName: '',
    address: '',
    postal: '',
    email: '',
    contact: '',
    skills: '',
    education: '',
    hobby: '',
    professionalLife: ''
  });

  const [experienceState, setExperienceState] = useState({
    field_of_experience: '',
    starting_date: '',
    ending_date: '',
    company_name: '',
    designation: '',
    description: ''
  });

  const [educationState, setEducationState] = useState({
    degree: '',
    passing_year: '',
    institute: '',
    obtained_marks: '',
    total_marks: ''
  });

  const [certificationState, setCertificationState] = useState({
    certificate_name: '',
    passing_year: '',
    institute: ''
  });

  const [languageState, setLanguageState] = useState({
    languageName: '',
    languageLevel: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleExperienceChange = (e) => {
    const { id, value } = e.target;
    setExperienceState({ ...experienceState, [id]: value });
  };

  const handleEducationChange = (e) => {
    const { id, value } = e.target;
    setEducationState({ ...educationState, [id]: value });
  };

  const handleCertificationChange = (e) => {
    const { id, value } = e.target;
    setCertificationState({ ...certificationState, [id]: value });
  };

  const handleLanguageChange = (e) => {
    const { id, value } = e.target;
    setLanguageState({ ...languageState, [id]: value });
  };

  const saveExperience = () => {
    onExperienceSave(experienceState);
  };

  const saveEducation = () => {
    onEducationSave(educationState);
  };

  const saveCertification = () => {
    onCertificationSave(certificationState);
  };

  const addLanguage = () => {
    onLanguageAdd(languageState);
  };

  const saveForm = () => {
    onSave(formState);
  };

  return (
    <div className="form-container">
      <input id="fullName" type="text" placeholder="Enter Full Name" onChange={handleInputChange} />
      <input id="address" type="text" placeholder="Home Address" onChange={handleInputChange} />
      <input id="postal" type="text" placeholder="Postal Code" onChange={handleInputChange} />
      <input id="email" type="text" placeholder="Email Address" onChange={handleInputChange} />
      <input id="contact" type="text" placeholder="Contact Number" onChange={handleInputChange} />
      <div>
        <label>Experience</label>
        <input id="field_of_experience" type="text" placeholder="Field of Experience" onChange={handleExperienceChange} />
        <input id="starting_date" type="date" placeholder="Starting Date" onChange={handleExperienceChange} />
        <input id="ending_date" type="date" placeholder="Ending Date" onChange={handleExperienceChange} />
        <input id="company_name" type="text" placeholder="Company Name" onChange={handleExperienceChange} />
        <input id="designation" type="text" placeholder="Designation" onChange={handleExperienceChange} />
        <input id="description" type="text" placeholder="Description" onChange={handleExperienceChange} />
        <button onClick={saveExperience}>Save Experience</button>
      </div>
      <input id="skills" type="text" placeholder="Skills" onChange={handleInputChange} />
      <div>
        <label>Education</label>
        <input id="degree" type="text" placeholder="Degree" onChange={handleEducationChange} />
        <input id="passing_year" type="date" placeholder="Passing Year" onChange={handleEducationChange} />
        <input id="institute" type="text" placeholder="Institute Name" onChange={handleEducationChange} />
        <input id="obtained_marks" type="number" placeholder="Obtained Marks" onChange={handleEducationChange} />
        <input id="total_marks" type="number" placeholder="Total Marks" onChange={handleEducationChange} />
        <button onClick={saveEducation}>Save Education</button>
      </div>
      <div>
        <label>Certification</label>
        <input id="certificate_name" type="text" placeholder="Certificate Name" onChange={handleCertificationChange} />
        <input id="passing_year" type="date" placeholder="Year" onChange={handleCertificationChange} />
        <input id="institute" type="text" placeholder="Institute Name" onChange={handleCertificationChange} />
        <button onClick={saveCertification}>Save Certification</button>
      </div>
      <input id="hobby" type="text" placeholder="Hobby" onChange={handleInputChange} />
      <div>
        <label>Language</label>
        <input id="languageName" type="text" placeholder="Language Name" onChange={handleLanguageChange} />
        <select id="languageLevel" onChange={handleLanguageChange}>
          <option value="fluent">Fluent</option>
          <option value="intermediate">Intermediate</option>
          <option value="beginner">Beginner</option>
        </select>
        <button onClick={addLanguage}>Add Language</button>
      </div>
      <input id="professionalLife" type="text" placeholder="Tell About Your Professional Life" onChange={handleInputChange} />
      <button onClick={saveForm}>Submit</button>
    </div>
  );
}

export default ResumeForm;
