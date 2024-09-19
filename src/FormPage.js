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
    signature: '',
    name: '',
    date: ''
  });

  const [isHindi, setIsHindi] = useState(false); // State to toggle language

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

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  return (
    <div className="form-page" id="form-page">
      <div className="form-container">
        {/* Hindi button inside the form, top-right corner */}
        <button className="translate-button" onClick={toggleLanguage}>
          {isHindi ? 'Translate to English' : 'Translate to हिन्दी'}
        </button>

        {isHindi ? (
          <div>
            <h1>प्रिय श्रीमती प्रगती भार्गवा</h1>
            <p>ईमेल आईडी – pragati@gmail.com</p>
            <form onSubmit={handleSubmit}>
              <p>कृपया संबंधित उद्देश्यों के लिए भारतीय स्टेट बैंक (एसबीआई) को अपनी सहमति प्रदान करने के लिए बॉक्स पर टिक करें: कृपया संबंधित उद्देश्यों के लिए भारतीय स्टेट बैंक (एसबीआई) को अपनी सहमति प्रदान करने के लिए बॉक्स पर टिक करें:</p>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent1"
                  name="consent1"
                  checked={formData.consent1}
                  onChange={handleChange}
                />
                <label htmlFor="consent1">बैंकिंग सेवाओं/उत्पादों के लिए मेरे व्यक्तिगत डेटा को संसाधित करें</label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent2"
                  name="consent2"
                  checked={formData.consent2}
                  onChange={handleChange}
                />
                <label htmlFor="consent2">मेरा व्यक्तिगत डेटा अधिकृत तृतीय पक्षों जैसे प्रिंटर (चेक बुक और एटीएम कार्ड, स्वागत किट आदि के लिए), क्रेडिट जांच एजेंसियों (ऋण पात्रता निर्धारित करने के लिए) आदि के साथ साझा करें। ये तृतीय पक्ष आपको बैंकिंग सेवाएं प्रदान करने के लिए एसबीआई के लिए आवश्यक हैं।</label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent3"
                  name="consent3"
                  checked={formData.consent3}
                  onChange={handleChange}
                />
                <label htmlFor="consent3">सेवा का लाभ उठाते समय सहायता के लिए कॉल, एसएमएस (लघु संदेश सेवा), व्हाट्सएप, इलेक्ट्रॉनिक मेल (ई-मेल) या अन्य डिजिटल संचार चैनलों के माध्यम से मुझसे संपर्क करें।
                </label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent4"
                  name="consent4"
                  checked={formData.consent4}
                  onChange={handleChange}
                />
                <label htmlFor="consent4">मेरे नेशनल डू नॉट कॉल (एनडीएनसी) पंजीकरण को ओवरराइड करने और एसबीआई और उसके प्रतिनिधियों को अधिकृत करने और एसएमएस, व्हाट्सएप, ईमेल और कॉल के माध्यम से वैयक्तिकृत ऑफर भेजने के लिए।
                </label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent5"
                  name="consent5"
                  checked={formData.consent5}
                  onChange={handleChange}
                />
                <label htmlFor="consent5">अपने उत्पादों, सेवाओं, अनुप्रयोगों या प्रणालियों को बेहतर बनाने/विकसित करने के लिए मेरे व्यक्तिगत डेटा को संसाधित करना।
                </label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent6"
                  name="consent6"
                  checked={formData.consent6}
                  onChange={handleChange}
                />
                <label htmlFor="consent6">एसबीआई वेबसाइट, योनो ऐप, लॉयल्टी रिवार्ड्ज़ वेबसाइट के मेरे उपयोग से संबंधित सांख्यिकीय विश्लेषण करने के लिए।
                </label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent7"
                  name="consent7"
                  checked={formData.consent7}
                  onChange={handleChange}
                />
                <label htmlFor="consent7">अन्य एसबीआई संस्थाओं (संयुक्त उद्यमों) द्वारा पेश किए गए उत्पादों या सेवाओं का लाभ उठाने के लिए उनके साथ अपना व्यक्तिगत डेटा साझा करना। </label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent8"
                  name="consent8"
                  checked={formData.consent8}
                  onChange={handleChange}
                />
                <label htmlFor="consent8">मैं इसके द्वारा घोषणा करता हूं कि डेटा प्रिंसिपल एक विकलांग व्यक्ति है, और मैं डेटा प्रिंसिपल का वैध अभिभावक हूं और मैं बैंकिंग सेवाओं का लाभ उठाने के उद्देश्य से विकलांग व्यक्ति के व्यक्तिगत डेटा को संसाधित करने के लिए [एसबीआई] को अधिकृत करता हूं।
                </label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent90"
                  name="consent8"
                  checked={formData.consent8}
                  onChange={handleChange}
                />
                <label htmlFor="consent8"> मैं पुष्टि करता हूं कि उपर्युक्त उद्देश्य और गोपनीयता नोटिस की सामग्री मुझे एसबीआई द्वारा _______ भाषा में समझाई गई थी. मैंने गोपनीयता सूचना की सामग्री को पढ़ और समझ लिया है और मैं उपरोक्त उद्देश्यों के लिए अपने व्यक्तिगत डेटा को संसाधित करने के लिए एसबीआई को अपनी सहमति देता हूं।
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="signature">हस्ताक्ि:</label>
                <input
                  type="text"
                  id="signature"
                  name="signature"
                  value={formData.signature}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">नाम:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">तािीख:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">सुरक्षित</button>
            </form>
          </div>
        ) : (
          <div>
            <h1>Dear Mrs. Pragati Bhargava</h1>
            <p>Email ID – pragati@gmail.com</p>
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
                <label htmlFor="consent1">I consent to process my personal data for banking services/products that I have opted for.</label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent2"
                  name="consent2"
                  checked={formData.consent2}
                  onChange={handleChange}
                />
                <label htmlFor="consent2">I consent to share my personal data with authorized third parties such as printers (for cheque books, ATM cards), credit checking agencies for determining loan eligibility, and others essential for SBI to provide banking services.</label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent3"
                  name="consent3"
                  checked={formData.consent3}
                  onChange={handleChange}
                />
                <label htmlFor="consent3">I consent to be contacted via call, SMS, WhatsApp, Email, or other digital channels for assistance while availing of service.</label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent4"
                  name="consent4"
                  checked={formData.consent4}
                  onChange={handleChange}
                />
                <label htmlFor="consent4">I consent to override my National Do Not Call (NDNC) registration and receive personalized offers via SMS, WhatsApp, Email, and call from SBI and its representatives.</label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent5"
                  name="consent5"
                  checked={formData.consent5}
                  onChange={handleChange}
                />
                <label htmlFor="consent5">I consent to process my personal data for improving or developing products, services, applications, or systems.</label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent6"
                  name="consent6"
                  checked={formData.consent6}
                  onChange={handleChange}
                />
                <label htmlFor="consent6">I consent to conduct statistical analysis related to my usage of SBI website, YONO App, Loyalty Rewardz website, etc.</label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent7"
                  name="consent7"
                  checked={formData.consent7}
                  onChange={handleChange}
                />
                <label htmlFor="consent7">I consent to share my personal data with other SBI entities (Joint Ventures) to avail products or services offered by them.</label>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  id="consent8"
                  name="consent8"
                  checked={formData.consent8}
                  onChange={handleChange}
                />
                <label htmlFor="consent8">I declare that I am the lawful guardian of a person with disability and authorize SBI to process their personal data for availing banking services.</label>
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
        )}
      </div>
    </div>
  );
}

export default FormPage;
