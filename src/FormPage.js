import React, { useState } from 'react';
import './FormPage.css'; // The unique CSS file
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function FormPage() {
  const [formData, setFormData] = useState({
    consent1: false,
    consent2: false,
    consent3: false,
    consent4: false,
    consent5: false,
    consent6: false,
    consent7: false,
    consent8: false,
    consent9: false,
    signature: '',
    name: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const generatePDF = () => {
    const input = document.getElementById('form-page');
    
    html2canvas(input, { scale: 2 }).then((canvas) => {  // Increased scale for better quality
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });
      
      const imgWidth = 595.28; // A4 width in points
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('filled_form.pdf');
    });
  };

  return (
    <div className="form-page" id="form-page"> {/* Unique class for scoping */}
      <div className="form-container">
        <h1>Dear Mr. Ravi Yella</h1>
        <p>Email ID – Ravi@gmail.com</p>
        <form onSubmit={handleSubmit}>
          <p>Please tick the boxes to provide your consent to State Bank of India (SBI) for the respective purposes:</p>
          
          <div className="form-group">
            <input 
              type="checkbox" 
              id="consent1" 
              name="consent1" 
              checked={formData.consent1} 
              onChange={handleChange} 
            />
            <label htmlFor="consent1">I consent to process my personal data for providing me with banking services/products that I have opted for.</label>
          </div>
          
          <div className="form-group">
            <input 
              type="checkbox" 
              id="consent2" 
              name="consent2" 
              checked={formData.consent2} 
              onChange={handleChange} 
            />
            <label htmlFor="consent2">I consent to share my personal data with authorized third parties such as printers, credit checking agencies, etc. These third parties are essential for SBI to provide banking services to you.</label>
          </div>
          
          <div className="form-group">
            <input 
              type="checkbox" 
              id="consent3" 
              name="consent3" 
              checked={formData.consent3} 
              onChange={handleChange} 
            />
            <label htmlFor="consent3">I consent to override my National Do Not Call (NDNC) registration and authorize SBI and its representatives to contact me through call, SMS, WhatsApp, email, or other digital communication channels for assistance while availing services.</label>
          </div>
          
          <div className="form-group">
            <input 
              type="checkbox" 
              id="consent4" 
              name="consent4" 
              checked={formData.consent4} 
              onChange={handleChange} 
            />
            <label htmlFor="consent4">I consent to send personalized offers through SMS, WhatsApp, email, and call.</label>
          </div>
          
          <div className="form-group">
            <input 
              type="checkbox" 
              id="consent5" 
              name="consent5" 
              checked={formData.consent5} 
              onChange={handleChange} 
            />
            <label htmlFor="consent5">I consent to process my personal data for improving/developing its products, services, applications, or systems.</label>
          </div>
          
          <div className="form-group">
            <input 
              type="checkbox" 
              id="consent6" 
              name="consent6" 
              checked={formData.consent6} 
              onChange={handleChange} 
            />
            <label htmlFor="consent6">I consent to conduct statistical analysis relating to my usage of SBI website, YONO App, Loyalty Rewardz website.</label>
          </div>
          
          <div className="form-group">
            <input 
              type="checkbox" 
              id="consent7" 
              name="consent7" 
              checked={formData.consent7} 
              onChange={handleChange} 
            />
            <label htmlFor="consent7">I consent to share my personal data with other SBI entities (Joint Ventures) for availing products or services offered by them.</label>
          </div>
          
          <div className="form-group">
            <input 
              type="checkbox" 
              id="consent8" 
              name="consent8" 
              checked={formData.consent8} 
              onChange={handleChange} 
            />
            <label htmlFor="consent8">I am the parent or lawful guardian of the child and I authorize SBI to process the personal data of my child for banking services under Pehla Kadam/Pehli Udaan savings account.</label>
          </div>
          
          <div className="form-group">
            <input 
              type="checkbox" 
              id="consent9" 
              name="consent9" 
              checked={formData.consent9} 
              onChange={handleChange} 
            />
            <label htmlFor="consent9">I declare that the data principal is a person with a disability, and I authorize SBI to process their personal data for the issuance or servicing of insurance policies and payment of claims.</label>
          </div>
          
          <div className="form-group">
            <label>
              I confirm that the abovementioned purposes and the contents of the Privacy Notice were explained to me by SBI in _______ language.
            </label>
          </div>
          
          <div className="form-group">
            <label htmlFor="signature">Signature:</label>
            <input 
              type="text" 
              id="signature" 
              name="signature" 
              value={formData.signature}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
