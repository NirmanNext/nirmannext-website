// src/pages/Faq.tsx
import Navigation from "@/components/Navigation";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h1>

        <p className="text-muted-foreground mb-8">
          Answers to the most common queries about NirmanNext, our products, delivery, pricing,
          partnerships, and professional programs.
        </p>

        <div className="prose prose-lg max-w-none text-foreground">
          <Accordion type="single" collapsible className="w-full">

            {/* 1 */}
            <AccordionItem value="what-is-nirmannext">
              <AccordionTrigger className="text-left">
                1. What is NirmanNext?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                NirmanNext is a B2B construction-chemical procurement platform operated by
                <strong> VinirmanTech Private Limited</strong>. We supply premium building
                materials including <strong>RockGrip</strong> tile adhesives and
                <strong> PlasterKing</strong> Ready Mix Plaster & P-Sand. Our decentralized
                city depots enable faster delivery for construction professionals.
              </AccordionContent>
            </AccordionItem>

            {/* 2 */}
            <AccordionItem value="who-can-buy">
              <AccordionTrigger className="text-left">
                2. Who can buy from NirmanNext?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                NirmanNext serves construction professionals and businesses, including:
                <ul className="list-disc pl-5 mt-2">
                  <li>Contractors</li>
                  <li>Architects</li>
                  <li>Civil Engineers</li>
                  <li>Tilers and Applicators</li>
                  <li>Builders & Developers</li>
                  <li>Infra Companies</li>
                  <li>Dealers/Retailers</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* 3 - delivery (merged) */}
            <AccordionItem value="delivery-speed">
              <AccordionTrigger className="text-left">
                3. What are your delivery timelines?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer fast delivery using our decentralized depot network:
                <ul className="list-disc pl-5 mt-2">
                  <li><strong>Same-day delivery</strong> in metros and operational cities (where stock permits).</li>
                  <li><strong>2–3 days</strong> delivery in other cities across India (depending on logistics and stock).</li>
                </ul>
                Delivery timing is confirmed at order acceptance and communicated over WhatsApp or email.
              </AccordionContent>
            </AccordionItem>

            {/* 4 - bulk pricing */}
            <AccordionItem value="bulk-pricing">
              <AccordionTrigger className="text-left">
                4. Do you offer bulk pricing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes — we provide competitive bulk pricing and volume discounts for contractors, builders and large projects.
                For bulk enquiries, use the <strong>Request RFQ</strong> button on any product card or contact our sales team
                with your project details and location. Bulk pricing depends on order volume, depot location and delivery terms.
              </AccordionContent>
            </AccordionItem>

            {/* 5 - retail partner */}
            <AccordionItem value="retail-partner">
              <AccordionTrigger className="text-left">
                5. How can I become a retail partner?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                To become a retail partner or listed dealer:
                <ul className="list-disc pl-5 mt-2">
                  <li>Fill out our partnership form on the website (Join / Partner section), or</li>
                  <li>Call our partnership team using the contact details in the footer.</li>
                </ul>
                There is <strong>no minimum investment</strong> for initial onboarding — specific commercial terms (credit, minimum order quantity) will be discussed during onboarding.
              </AccordionContent>
            </AccordionItem>

            {/* 6 - certifications */}
            <AccordionItem value="quality-certifications">
              <AccordionTrigger className="text-left">
                6. What quality certifications do you have?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our private-label products are quality-tested and hold relevant certifications:
                <ul className="list-disc pl-5 mt-2">
                  <li><strong>RockGrip</strong> tile adhesives are tested to IS 15477 standards (Type listed per SKU).</li>
                  <li><strong>PlasterKing</strong> products are lab-tested for silt content, grading and moisture control (RMP: 0% silt).</li>
                </ul>
                For technical or compliance needs, request product datasheets and test reports via the product page or by contacting our technical team.
              </AccordionContent>
            </AccordionItem>

            {/* 7 - technical support */}
            <AccordionItem value="technical-support">
              <AccordionTrigger className="text-left">
                7. Do you provide technical support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Our technical experts provide:
                <ul className="list-disc pl-5 mt-2">
                  <li>Product selection guidance for specific applications</li>
                  <li>Mixing ratios and application methods</li>
                  <li>On-site troubleshooting advice (via call/WhatsApp)</li>
                  <li>Datasheets and lab test interpretation</li>
                </ul>
                Contact support from the product page or via the WhatsApp button for quick assistance.
              </AccordionContent>
            </AccordionItem>

            {/* 8 - payment */}
            <AccordionItem value="payment-methods">
              <AccordionTrigger className="text-left">
                8. What payment options are available?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept major payment methods:
                <ul className="list-disc pl-5 mt-2">
                  <li>UPI</li>
                  <li>Bank Transfer (NEFT/RTGS)</li>
                  <li>Cards (where supported)</li>
                  <li>Cash (select locations)</li>
                </ul>
                Additionally, we offer <strong>45-day credit terms</strong> for approved partners and large-volume customers — credit approval is subject to commercial review.
              </AccordionContent>
            </AccordionItem>

            {/* 9 - product brands */}
            <AccordionItem value="rockgrip-plasterking">
              <AccordionTrigger className="text-left">
                9. Are RockGrip and PlasterKing your own brands?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Both are private-label brands by <strong>VinirmanTech Pvt. Ltd.</strong>
                <p className="mt-2">
                  <strong>RockGrip</strong> includes tile adhesives (TA01 / TA02 / TA03) and block adhesives.  
                  <strong>PlasterKing</strong> includes Ready Mix Plaster (RMP) and P-Sand — engineered for consistent quality on-site.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* 10 - how to order */}
            <AccordionItem value="how-to-order">
              <AccordionTrigger className="text-left">
                10. How can I place an order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can place orders via:
                <ul className="list-disc pl-5 mt-2">
                  <li>Website — Request RFQ from the product card</li>
                  <li>WhatsApp — quick ordering and confirmations</li>
                  <li>Phone — speak to our sales team</li>
                </ul>
                For large projects we recommend requesting an RFQ so we can provide accurate bulk pricing and delivery timelines.
              </AccordionContent>
            </AccordionItem>

            {/* 11 - gst invoice */}
            <AccordionItem value="gst-invoice">
              <AccordionTrigger className="text-left">
                11. Will I get a GST invoice?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes — every order shipped by NirmanNext is issued a proper GST invoice in the name of the purchasing party (VinirmanTech Private Limited).
              </AccordionContent>
            </AccordionItem>

            {/* 12 - earn with us */}
            <AccordionItem value="earn-with-us">
              <AccordionTrigger className="text-left">
                12. What is the “Earn with Us / NirmanBandhu” program?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Architects, contractors, and other professionals can join NirmanBandhu to earn commissions
                or margins by referring clients or sourcing materials through NirmanNext.  
                Sign up via the “Earn with Us” form — onboarding details and commission structure are shared during registration.
              </AccordionContent>
            </AccordionItem>

            {/* 13 - returns */}
            <AccordionItem value="returns-policy">
              <AccordionTrigger className="text-left">
                13. What is your return or replacement policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept returns or replacements for:
                <ul className="list-disc pl-5 mt-2">
                  <li>Damaged or torn packaging</li>
                  <li>Incorrect product delivered</li>
                  <li>Manufacturing defects or verified quality issues</li>
                </ul>
                Please raise claims within <strong>24 hours</strong> of delivery. Our QA team will verify and coordinate replacement or credit.
              </AccordionContent>
            </AccordionItem>

            {/* 14 - operations expansion */}
            <AccordionItem value="operational-cities">
              <AccordionTrigger className="text-left">
                14. Which cities do you serve and how can I request a new city?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We currently operate in several cities in Uttar Pradesh and nearby regions (listed on the website).  
                If your city is not listed, please use the partnership/join form or contact support to request expansion — we prioritise cities with demand and partner interest.
              </AccordionContent>
            </AccordionItem>

            {/* 15 - contact support */}
            <AccordionItem value="contact-support">
              <AccordionTrigger className="text-left">
                15. How do I contact support or my account manager?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Use the WhatsApp button on the product page, email <strong>admin@nirmannext.com</strong>, or call the number listed in the footer.  
                If you are an onboarded partner, your account manager's contact is shared during onboarding.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
