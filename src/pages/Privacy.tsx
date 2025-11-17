import Navigation from "@/components/Navigation";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy for NirmanNext</h1>
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-muted-foreground mb-2">
            <strong>Operated by:</strong> VinirmanTech Private Limited
          </p>
          <p className="text-muted-foreground mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <hr className="my-8 border-border" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              This Privacy Policy explains how <strong>VinirmanTech Private Limited</strong> ("NirmanNext", "we", "our", "us") collects, uses, discloses, stores and protects your personal data when you access or use the NirmanNext platform located at <a href="https://www.nirmannext.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.nirmannext.com/</a> ("Platform").
            </p>
            <p className="text-muted-foreground mb-4">
              We are committed to protecting your personal data in line with applicable Indian laws, including the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>.
            </p>
            <p className="text-muted-foreground mb-4">
              By using our Platform or submitting any personal data, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Who We Are</h2>
            <p className="text-muted-foreground mb-4">
              NirmanNext is a B2B construction-chemical procurement platform operated by:
            </p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-foreground font-semibold mb-2">VinirmanTech Private Limited</p>
              <p className="text-muted-foreground mb-1">2nd Floor, Cyber Heights, Vibhuti Khand,</p>
              <p className="text-muted-foreground mb-1">Gomti Nagar, Lucknow – 226010, Uttar Pradesh, India</p>
            </div>
            <p className="text-muted-foreground mb-4">
              We provide product catalog browsing, depot-based availability, RFQs (Request for Quotes), WhatsApp ordering, professional partner programs, and other construction-chemical procurement services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Personal Data We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect the following categories of personal data:</p>
            
            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">a) Identity & Business Information</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Name</li>
              <li>Business name, GSTIN / PAN / CIN (if applicable)</li>
              <li>Professional designation (architect, contractor, engineer, builder, etc.)</li>
              <li>Photographs (optional)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">b) Contact Information</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business address</li>
              <li>Billing or project site addresses</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">c) Technical Data</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>IP address</li>
              <li>Browser/device information</li>
              <li>Cookies & analytics data</li>
              <li>Login activity (if applicable)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">d) Profile Data</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Preferences</li>
              <li>Feedback & survey responses</li>
              <li>Professional profile details (for professional program)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">e) Procurement & RFQ Data</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>RFQ submissions</li>
              <li>Product interests</li>
              <li>Depot selections</li>
              <li>Project details</li>
              <li>Delivery preferences</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">f) Marketing Preferences</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Email/SMS/WhatsApp opt-ins</li>
              <li>Communication history</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. How We Collect Data</h2>
            <p className="text-muted-foreground mb-4">We collect data through:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>RFQ forms, contact forms, and professional signup forms</li>
              <li>Direct communication (email, WhatsApp, phone)</li>
              <li>Browsing our website (cookies, analytics)</li>
              <li>Participation in surveys, feedback forms or promotions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Why We Use Your Personal Data</h2>
            <p className="text-muted-foreground mb-4">We use your personal data to:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Provide product information, quotations and services</li>
              <li>Manage and fulfil RFQs and depot-level delivery</li>
              <li>Create and manage your professional account</li>
              <li>Respond to enquiries and support requests</li>
              <li>Improve the Platform and user experience</li>
              <li>Send updates, offers or product information (with your consent)</li>
              <li>Conduct analytics, audits, and compliance checks</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. WhatsApp & Communication via Messaging Platforms</h2>
            <p className="text-muted-foreground mb-4">
              For quick ordering, customer support, and RFQ follow-ups, NirmanNext uses <strong>WhatsApp Business</strong>.
            </p>
            <p className="text-muted-foreground mb-4">
              When you contact us or click "Order via WhatsApp", you consent to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>WhatsApp processing your phone number</li>
              <li>Our team contacting you via WhatsApp for order-related communication</li>
              <li>Sharing minimal required data with depots to fulfil your request</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              We do <strong>not</strong> use WhatsApp communication for unrelated marketing unless you explicitly opt-in.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Sharing of Your Personal Data</h2>
            <p className="text-muted-foreground mb-4">
              We do <strong>not</strong> sell your personal data.
            </p>
            <p className="text-muted-foreground mb-4">We may share data only with:</p>
            
            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">a) Internal Teams & Depots</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>For RFQ processing</li>
              <li>For stock availability</li>
              <li>For delivery coordination</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">b) Service Providers</h3>
            <p className="text-muted-foreground mb-4">
              (e.g., analytics, cloud hosting) under strict confidentiality agreements.
            </p>

            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">c) Legal Authorities</h3>
            <p className="text-muted-foreground mb-4">
              Only if required by law (court order, investigation, compliance).
            </p>

            <h3 className="text-xl font-medium mb-3 text-foreground mt-6">d) Business Transfer Scenario</h3>
            <p className="text-muted-foreground mb-4">
              In case of merger, acquisition, or restructuring, with prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Cookies & Tracking Technologies</h2>
            <p className="text-muted-foreground mb-4">We use cookies to:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Improve user experience</li>
              <li>Understand browsing patterns</li>
              <li>Enhance speed and security</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              You may disable cookies via browser settings, but some features may not work properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Data Security</h2>
            <p className="text-muted-foreground mb-4">We employ appropriate technical and organisational security measures including:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Encrypted storage</li>
              <li>Secure servers</li>
              <li>Access controls</li>
              <li>Regular backups</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              However, no method of transmission is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Data Retention</h2>
            <p className="text-muted-foreground mb-4">We retain your data only as long as necessary for:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>The purpose for which it was collected</li>
              <li>Legal/operational requirements</li>
              <li>RFQ, order and business relationship history</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              When no longer needed, data is securely deleted or anonymised.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Your Rights Under Indian Law</h2>
            <p className="text-muted-foreground mb-4">You have the following rights:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Right to access</li>
              <li>Right to correction</li>
              <li>Right to deletion (where applicable)</li>
              <li>Right to withdraw consent</li>
              <li>Right to data portability</li>
              <li>Right to know how your data is used</li>
              <li>Right to file a complaint with the Data Protection Board of India</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To exercise your rights, contact us using the details below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Third-Party Links</h2>
            <p className="text-muted-foreground mb-4">
              Our Platform may contain links to third-party websites. NirmanNext is not responsible for their privacy practices or content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Updates to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Policy periodically. The updated version will be posted with a revised "Last Updated" date at the top.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For any privacy-related questions, complaints or requests, contact:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground font-semibold mb-2">VinirmanTech Private Limited</p>
              <p className="text-muted-foreground mb-1">2nd Floor, Cyber Heights, Vibhuti Khand,</p>
              <p className="text-muted-foreground mb-1">Gomti Nagar, Lucknow, UP 226010</p>
              <p className="text-muted-foreground mb-1">
                <strong>Email:</strong> <a href="mailto:admin@nirmannext.com" className="text-primary hover:underline">admin@nirmannext.com</a>
              </p>
              <p className="text-muted-foreground">
                <strong>Phone:</strong> <a href="tel:+918960981283" className="text-primary hover:underline">+91 8960981283</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

