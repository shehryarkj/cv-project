import React from 'react';
import "../components/Resumepreview.css"



function ResumePreview({ formData, experience, education, certifications, languages }) {
  return (
    <div className="cv-template">
      <header className="cv-header">
        <h1>{formData.fullName}</h1>
        <div className="contact-info">
          <p>{formData.email}</p>
          <p>{formData.contact}</p>
          <p>{formData.address}</p>
        </div>
      </header>

      <section className="profile-section">
        <h2>Professional Profile</h2>
        <p>{formData.professionalLife}</p>
      </section>

      <section className="experience-section">
        <h2>Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.designation} at {exp.company_name}</h3>
            <span className="date">{exp.starting_date} - {exp.ending_date}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="education-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <span className="date">{edu.passing_year}</span>
            <p>{edu.institute}</p>
            <p>Marks: {edu.obtained_marks}/{edu.total_marks}</p>
          </div>
        ))}
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <p>{formData.skills}</p>
      </section>

      <section className="certifications-section">
        <h2>Certifications</h2>
        {certifications.map((crt, index) => (
          <div key={index} className="certification-item">
            <h3>{crt.certificate_name}</h3>
            <span className="date">{crt.passing_year}</span>
            <p>{crt.institute}</p>
          </div>
        ))}
      </section>

      <section className="languages-section">
        <h2>Languages</h2>
        {languages.map((lang, index) => (
          <div key={index} className="language-item">
            <h3>{lang.languageName}</h3>
            <p>Level: {lang.languageLevel}</p>
          </div>
        ))}
      </section>

      <section className="hobbies-section">
        <h2>Hobbies</h2>
        <p>{formData.hobby}</p>
      </section>
      
      <footer className="cv-footer">
        <p>Available for work</p>
      </footer>
    </div>
  );
}

export default ResumePreview;


