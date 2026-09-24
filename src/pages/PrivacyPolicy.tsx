import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-brand-ivory min-h-screen section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12">Privacy Policy</h1>
        
        <div className="bg-white p-10 md:p-16 border border-brand-gray/50 shadow-sm space-y-8 text-brand-charcoal/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">1. Information Collection</h2>
            <p>
              We collect information that you voluntarily provide to us when you fill out the contact form on our website. This information may include your name, phone number, email address, and details about your legal matter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">2. Use of Information</h2>
            <p>
              The information collected is used solely to respond to your inquiries and to provide professional legal services. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">3. Data Security</h2>
            <p>
              We implement reasonable security measures to protect the information submitted to us. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">4. Confidentiality</h2>
            <p>
              Information shared through the website's contact form may not be protected by advocate-client privilege until a formal engagement is established. We recommend that you do not send sensitive or confidential information through the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at spparulekar@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
