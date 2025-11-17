// src/pages/Terms.tsx
import Navigation from "@/components/Navigation";

const Terms = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Terms &amp; Conditions</h1>

        <p className="text-muted-foreground mb-6">
          <strong>Operated by:</strong> VinirmanTech Private Limited
        </p>
        <p className="text-muted-foreground mb-8">
          <strong>Last Updated:</strong> {today}
        </p>

        <div className="prose prose-lg max-w-none text-foreground">
          <hr className="my-6 border-border" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground">
              These Terms &amp; Conditions ("Terms") govern your access to and use of the NirmanNext
              platform available at <a href="https://www.nirmannext.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.nirmannext.com/</a> (the
              "Platform"). By using the Platform you agree to these Terms. If you do not agree,
              please do not use the Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. About NirmanNext</h2>
            <p className="text-muted-foreground">
              NirmanNext is a B2B procurement platform operated by <strong>VinirmanTech Private Limited</strong>.
              We facilitate procurement of construction chemicals and related products including our private
              label brands (RockGrip and PlasterKing), depot-based fulfilment, RFQs (Request for Quote),
              and professional partner programmes.
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="text-foreground font-semibold mb-1">VinirmanTech Private Limited</p>
              <p className="text-muted-foreground mb-1">2nd Floor, Cyber Heights, Vibhuti Khand,</p>
              <p className="text-muted-foreground mb-1">Gomti Nagar, Lucknow – 226010, Uttar Pradesh, India</p>
              <p className="text-muted-foreground"><strong>Email:</strong> <a href="mailto:admin@nirmannext.com" className="text-primary hover:underline">admin@nirmannext.com</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Eligibility</h2>
            <p className="text-muted-foreground">
              The Platform is intended for B2B users such as contractors, architects, builders, tilers,
              engineers, and businesses. By using the Platform you represent that you are at least 18 years
              old and are legally capable of entering into binding contracts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Services &amp; Product Information</h2>
            <p className="text-muted-foreground">
              We provide product listings, specifications, certification details, depot-based availability,
              RFQ submission, and order coordination. We strive to keep product information accurate and
              up to date; however minor variations in packaging, colour, or technical specifications may occur
              from time to time due to manufacturing or supplier changes.
            </p>
            <p className="text-muted-foreground mt-4">
              All product certifications and claims (e.g. IS standards or internal QA tests) are provided
              as available from manufacturers or our quality checks. For critical engineering use, customers
              should request technical datasheets and perform site trials where appropriate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Placing Orders</h2>
            <p className="text-muted-foreground">
              Orders and purchases are initiated via RFQ, website enquiry, WhatsApp or direct conversation
              with our sales team. An order is confirmed only after we send an order confirmation via WhatsApp,
              email or SMS and the payment (if applicable) is processed as specified.
            </p>
            <p className="text-muted-foreground mt-4">
              We reserve the right to refuse, cancel or modify orders due to stock unavailability, logistic
              constraints, pricing errors, or for reasons of compliance or safety.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Pricing &amp; Quotes</h2>
            <p className="text-muted-foreground">
              Prices shown on the Platform (if any) are indicative and may change. Final pricing is confirmed
              via RFQ or order confirmation. Bulk pricing and special commercial terms will be shared on a case-by-case basis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Payment Terms</h2>
            <p className="text-muted-foreground">
              Accepted payment modes include UPI, bank transfer and cash (where applicable). Credit/debit card
              payments may be supported in selected workflows. All payments must be made to VinirmanTech Private Limited
              unless explicitly stated otherwise.
            </p>
            <p className="text-muted-foreground mt-4">
              Payment terms (advance, COD, credit) may be specified in the RFQ or commercial agreement with us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Delivery &amp; Fulfilment</h2>
            <p className="text-muted-foreground">
              Delivery timelines are estimates and depend on depot stock, location, logistics, and external factors.
              We leverage decentralised depots to speed delivery in operational cities. Risk in goods transfers as per
              the delivery terms communicated at order confirmation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Returns, Replacements &amp; Claims</h2>
            <p className="text-muted-foreground">
              If you receive damaged or incorrect products, notify us immediately. Returns or replacements are processed
              after verification by our QA/logistics team. Claims should generally be raised within 24 hours of delivery,
              except where otherwise agreed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. NirmanBandhu / Professional Program</h2>
            <p className="text-muted-foreground">
              Professionals who join our referral/partner programme (NirmanBandhu) must agree to programme-specific rules
              (onboarding, commissions, payment timelines). Misuse or fraudulent activity may lead to suspension or termination
              from the programme.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. User Conduct</h2>
            <p className="text-muted-foreground">
              You agree not to use the Platform for unlawful purposes, to submit false information, to spam, or to attempt
              unauthorized access to any part of the service. We may suspend accounts that breach these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on the Platform, including logos, product names, images, text and designs, are the property of
              VinirmanTech Private Limited or our licensors. You may not reproduce or reuse content without prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the extent permitted by applicable law, VinirmanTech Private Limited's liability for any claim arising out
              of or in connection with the Platform is limited to the amount paid by you for the specific order giving rise to
              the claim. We are not liable for indirect, incidental, or consequential losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold harmless VinirmanTech Private Limited and its affiliates, officers and employees
              from any loss, liability, claim, demand, or expense (including legal fees) arising out of your use of the Platform,
              breach of these Terms, or violation of applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Privacy</h2>
            <p className="text-muted-foreground">
              Our Privacy Policy explains how we collect and use personal data. By using the Platform you consent to the
              collection and use of your data as described in the Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">16. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms occasionally. If we materially change rights or obligations, we will notify you
              by posting an updated "Last Updated" date on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">17. Governing Law &amp; Dispute Resolution</h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the
              courts in Lucknow, Uttar Pradesh, India, to the extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">18. Contact</h2>
            <p className="text-muted-foreground mb-4">
              For support, questions or to raise claims, contact:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground font-semibold mb-1">VinirmanTech Private Limited</p>
              <p className="text-muted-foreground mb-1">2nd Floor, Cyber Heights, Vibhuti Khand,</p>
              <p className="text-muted-foreground mb-1">Gomti Nagar, Lucknow – 226010, Uttar Pradesh, India</p>
              <p className="text-muted-foreground mb-1"><strong>Email:</strong> <a href="mailto:admin@nirmannext.com" className="text-primary hover:underline">admin@nirmannext.com</a></p>
              <p className="text-muted-foreground"><strong>Phone:</strong> <a href="tel:+918960981283" className="text-primary hover:underline">+91 8960981283</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
