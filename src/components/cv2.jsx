import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import "../components/cv2.css";
// Define styles for the PDF
const pdfStyles = StyleSheet.create({
  page: {
    padding:40,
    fontSize:5,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
    width: '210mm', // A4 width in mm
    height: '297mm', // A4 height in mm
  },
  section: {
    marginBottom: 15,
  },
  header: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 12,
    marginBottom: 5,
  },
  text: {
    marginBottom: 4,
  },
});

// Create a PDF document based on the resume data
const CVDocument = ({ formData, experience, education, certifications, languages }) => (
  <Document>
    <Page size="A4" style={pdfStyles.page}>
      <View style={pdfStyles.header}>
        <Text>{formData.fullName}</Text>
        <Text>{formData.email}</Text>
        <Text>{formData.contact}</Text>
        <Text>{formData.address}</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subHeader}>About</Text>
        <Text style={pdfStyles.text}>{formData.professionalLife}</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subHeader}>Education</Text>
        {education.map((edu, index) => (
          <View key={index}>
            <Text style={pdfStyles.text}>{edu.degree} - {edu.institute}</Text>
            <Text style={pdfStyles.text}>{edu.passing_year} | Marks: {edu.obtained_marks}/{edu.total_marks}</Text>
          </View>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subHeader}>Work Experience</Text>
        {experience.map((exp, index) => (
          <View key={index}>
            <Text style={pdfStyles.text}>{exp.designation} at {exp.company_name}</Text>
            <Text style={pdfStyles.text}>{exp.starting_date} - {exp.ending_date}</Text>
            <Text style={pdfStyles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subHeader}>Skills</Text>
        <Text style={pdfStyles.text}>{formData.skills}</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subHeader}>Certifications</Text>
        {certifications.map((crt, index) => (
          <View key={index}>
            <Text style={pdfStyles.text}>{crt.certificate_name} - {crt.institute} ({crt.passing_year})</Text>
          </View>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subHeader}>Languages</Text>
        {languages.map((lang, index) => (
          <View key={index}>
            <Text style={pdfStyles.text}>{lang.languageName} - {lang.languageLevel}</Text>
          </View>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.subHeader}>Hobbies</Text>
        <Text style={pdfStyles.text}>{formData.hobby}</Text>
      </View>
    </Page>
  </Document>
);

function CVTemplate2({ formData, experience, education, certifications, languages, onEdit }) {
  return (
    <>
      <div className="cv2-template">
        <h1>{formData.fullName}</h1>
         
        <div className='cd1'>
          <div className='cd1-d1'>
            <header className="cv2-header">
              <div className="contact2-info">
                <p>{formData.email}</p>
                <p>{formData.contact}</p>
                <p>{formData.address}</p>
              </div>
            </header>
          </div>
          <div>
            <section className="profile-section">
              <h2>About</h2>
              <p>{formData.professionalLife}</p>
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

            {/* Add Edit Button */}
            <div className="edit-button-container">
              <button onClick={onEdit}>Edit Information</button>
            </div>

            {/* Add PDF Download Link */}
            <div className="download-button-container">
              <PDFDownloadLink
                document={<CVDocument formData={formData} experience={experience} education={education} certifications={certifications} languages={languages} />}
                fileName={`${formData.fullName}_CV.pdf`}
              >
                {({ loading }) => (loading ? 'Generating PDF...' : 'Download CV as PDF')}
              </PDFDownloadLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CVTemplate2;
