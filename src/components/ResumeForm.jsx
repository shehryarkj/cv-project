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
    // Reset experience fields
    setExperienceState({
      field_of_experience: '',
      starting_date: '',
      ending_date: '',
      company_name: '',
      designation: '',
      description: ''
    });
  };

  const saveEducation = () => {
    onEducationSave(educationState);
    // Reset education fields
    setEducationState({
      degree: '',
      passing_year: '',
      institute: '',
      obtained_marks: '',
      total_marks: ''
    });
  };

  const saveCertification = () => {
    onCertificationSave(certificationState);
    // Reset certification fields
    setCertificationState({
      certificate_name: '',
      passing_year: '',
      institute: ''
    });
  };

  const addLanguage = () => {
    onLanguageAdd(languageState);
    // Reset language fields
    setLanguageState({
      languageName: '',
      languageLevel: ''
    });
  };

  const saveSkills = () => {
    // Do something with the skills (save, etc.)
    console.log('Skills saved:', formState.skills);
    
    // Reset the skills field
    setFormState({ ...formState, skills: '' });
  };

  const saveForm = () => {
    onSave(formState);
    // Reset form fields including skills
    setFormState({
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
  };

  return (
    <>
      <div className="header">Make Resume</div>
      <div className="form-container">
        <input id="fullName" type="text" placeholder="Enter Full Name" value={formState.fullName} onChange={handleInputChange} />
        <input id="address" type="text" placeholder="Home Address" value={formState.address} onChange={handleInputChange} />
        <input id="postal" type="text" placeholder="Postal Code" value={formState.postal} onChange={handleInputChange} />
        <input id="email" type="text" placeholder="Email Address" value={formState.email} onChange={handleInputChange} />
        <input id="contact" type="text" placeholder="Contact Number" value={formState.contact} onChange={handleInputChange} />
        
        <div>
          <label>Experience</label>
          <input id="field_of_experience" type="text" placeholder="Field of Experience" value={experienceState.field_of_experience} onChange={handleExperienceChange} />
          <input id="starting_date" type="date" placeholder="Starting Date" value={experienceState.starting_date} onChange={handleExperienceChange} />
          <input id="ending_date" type="date" placeholder="Ending Date" value={experienceState.ending_date} onChange={handleExperienceChange} />
          <input id="company_name" type="text" placeholder="Company Name" value={experienceState.company_name} onChange={handleExperienceChange} />
          <input id="designation" type="text" placeholder="Designation" value={experienceState.designation} onChange={handleExperienceChange} />
          <input id="description" type="text" placeholder="Description" value={experienceState.description} onChange={handleExperienceChange} />
          <button onClick={saveExperience}>Save Experience</button>
        </div>
        
        <div>
          <label>Skills</label>
          <input id="skills" type="text" placeholder="Skills" value={formState.skills} onChange={handleInputChange} />
          <button onClick={saveSkills}>Save Skills</button>
        </div>

        <div>
          <label>Education</label>
          <input id="degree" type="text" placeholder="Degree" value={educationState.degree} onChange={handleEducationChange} />
          <input id="passing_year" type="date" placeholder="Passing Year" value={educationState.passing_year} onChange={handleEducationChange} />
          <input id="institute" type="text" placeholder="Institute Name" value={educationState.institute} onChange={handleEducationChange} />
          <input id="obtained_marks" type="number" placeholder="Obtained Marks" value={educationState.obtained_marks} onChange={handleEducationChange} />
          <input id="total_marks" type="number" placeholder="Total Marks" value={educationState.total_marks} onChange={handleEducationChange} />
          <button onClick={saveEducation}>Save Education</button>
        </div>

        <div>
          <label>Certification</label>
          <input id="certificate_name" type="text" placeholder="Certificate Name" value={certificationState.certificate_name} onChange={handleCertificationChange} />
          <input id="passing_year" type="date" placeholder="Year" value={certificationState.passing_year} onChange={handleCertificationChange} />
          <input id="institute" type="text" placeholder="Institute Name" value={certificationState.institute} onChange={handleCertificationChange} />
          <button onClick={saveCertification}>Save Certification</button>
        </div>

        <input id="hobby" type="text" placeholder="Hobby" value={formState.hobby} onChange={handleInputChange} />

        <div>
          <label>Language</label>
          <input id="languageName" type="text" placeholder="Language Name" value={languageState.languageName} onChange={handleLanguageChange} />
          <select id="languageLevel" value={languageState.languageLevel} onChange={handleLanguageChange}>
            <option value="fluent">Fluent</option>
            <option value="intermediate">Intermediate</option>
            <option value="beginner">Beginner</option>
          </select>
          <button onClick={addLanguage}>Add Language</button>
        </div>

        <input id="professionalLife" type="text" placeholder="Tell About Your Professional Life" value={formState.professionalLife} onChange={handleInputChange} />
        <button onClick={saveForm}>Submit</button>
      </div>
    </>
  );
}

export default ResumeForm;
