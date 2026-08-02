import React, { useState } from 'react';

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', handle: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const emailSubject = encodeURIComponent(`New Custom Nail Inquiry from ${formData.name}`);
    const emailBody = encodeURIComponent(`Name: ${formData.name}\nInstagram Handle: ${formData.handle}\n\nInquiry Details:\n${formData.message}`);
    
    // Construct dispatch URLs
    const mailtoLink = `mailto:kulkarnishloka07@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    const instagramChatText = encodeURIComponent(`Hi Studio 14! My name is ${formData.name} (${formData.handle}). Inquiry: ${formData.message}`);
    const instagramLink = `https://ig.me/m/s1udi0_14?text=${instagramChatText}`;

    // Open dispatch channels automatically in background tabs/clients
    setTimeout(() => {
      window.open(mailtoLink, '_blank');
      window.open(instagramLink, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: '100px 5%', backgroundColor: '#FAF8F5', color: '#2B1B24', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <span style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.8rem', color: '#C88EA7', fontWeight: 'bold' }}>
          Custom Orders & Support
        </span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', margin: '15px 0 30px 0' }}>
          SEND AN INQUIRY
        </h2>

        {submitted ? (
          <div style={{
            padding: '50px',
            background: '#FFF0F5',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
            animation: 'fadeIn 0.6s ease'
          }}>
            <div style={{ fontSize: '3rem', margin: '0 auto 15px auto', width: 'fit-content' }}>✨🎀</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#2B1B24', margin: '0 0 10px 0' }}>
              Inquiry Sent Successfully!
            </h3>
            <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.6' }}>
              Your request has been automatically converted and dispatched to our <b>Email</b> and <b><a href="https://www.instagram.com/s1udi0_14/" target="_blank" rel="noopener noreferrer" style={{color: '#C88EA7', textDecoration: 'none'}}>Instagram Chat</a></b>. We will get back to you shortly!
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              style={{
                marginTop: '25px',
                padding: '10px 24px',
                borderRadius: '30px',
                border: 'none',
                background: '#2B1B24',
                color: '#FFF',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '8px' }}>Your Name</label>
              <input 
                type="text" 
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #E0D0D5', background: '#FFF', fontSize: '1rem' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '8px' }}>Instagram Handle</label>
              <input 
                type="text" 
                required
                placeholder="@yourhandle"
                value={formData.handle}
                onChange={(e) => setFormData({...formData, handle: e.target.value})}
                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #E0D0D5', background: '#FFF', fontSize: '1rem' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '8px' }}>Nail Sizing / Custom Request Details</label>
              <textarea 
                rows="4" 
                required
                placeholder="Describe your desired set, nail lengths, shape, or custom sizing..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #E0D0D5', background: '#FFF', fontSize: '1rem', resize: 'vertical' }}
              />
            </div>
            <button 
              type="submit"
              style={{
                marginTop: '10px',
                padding: '16px',
                borderRadius: '30px',
                border: 'none',
                background: '#2B1B24',
                color: '#FFF',
                fontWeight: '700',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
            >
              DISPATCH INQUIRY 🚀
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
