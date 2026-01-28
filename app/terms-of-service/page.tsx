import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - The Good Contractors List",
  description: "Terms of Service for The Good Contractors List platform, including guarantee program details and user obligations.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to The Good Contractors List website ("<strong>Website</strong>" or "<strong>Platform</strong>"),
            where we connect homeowners with a curated network of independently operated contractors specializing in
            professional home services ("<strong>Contractors</strong>"). The Website is owned and operated by Good
            Contractors, LLC ("<strong>Good Contractors</strong>" or "<strong>Company</strong>" or "<strong>We</strong>"
            or "<strong>Us</strong>" or "<strong>Our</strong>"). By visiting Our Website, you ("<strong>Homeowner</strong>,"
            "<strong>You</strong>," "<strong>User</strong>," or "<strong>Your</strong>") hereby consent to be bound by these
            Terms of Service ("<strong>Terms of Service</strong>" or "<strong>Terms</strong>"), and Our Privacy Policy.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-sm text-gray-700">
              <strong>PLEASE REVIEW THESE TERMS CAREFULLY</strong> AS THEY DEFINE OUR AND YOUR RIGHTS AND OBLIGATIONS.
              IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS, YOU MUST IMMEDIATELY CEASE ACCESSING, BROWSING, OR USING THIS SITE.
              BY CONTINUING TO ACCESS, BROWSE, OR OTHERWISE USE THIS SITE, YOU CONFIRM THAT YOU HAVE READ, UNDERSTAND, AND AGREE
              TO BE BOUND BY ALL TERMS AND CONDITIONS STATED HEREIN.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. PLATFORM USE AND SCOPE OF SERVICES</h2>

          <p className="mb-4">
            <strong>1.1</strong> As part of the Platform, We facilitate connections between Homeowners seeking professional
            home services and Contractors (the "<strong>Platform Services</strong>"). The Platform serves as a trusted tool
            by allowing Homeowners to access a curated list of vetted Contractors based on project category and location.
          </p>

          <p className="mb-4">
            <strong>1.2</strong> We provide the infrastructure and tools for Homeowners to search, evaluate, and directly
            contact the listed Contractors on the Platform, but We do not participate in the execution, negotiation or
            supervision of the Services (defined below) as agreed between the Homeowners and the Contractors.
          </p>

          <p className="mb-6">
            <strong>1.3</strong> Upon registration and hiring a Contractor listed on the Platform, Homeowners may be eligible
            for coverage under one of the Good Contractors Guarantee programs, subject to these Terms of Service.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Guarantee Program</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Maximum Coverage Amount</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">General Eligibility Criteria*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Standard Guarantee</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">$25,000</td>
                  <td className="border border-gray-300 px-4 py-2">
                    The Homeowner must have registered on Our Platform before work begins with a Contractor.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Elite Guarantee</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">$350,000</td>
                  <td className="border border-gray-300 px-4 py-2">
                    The Homeowner must have registered on Our Platform before work begins with the Contractor. The Contractor
                    must be an approved participant in Our Elite Contractor program at the time of engagement, and an Elite
                    Project Acknowledgement Form (EPAF) must be executed.
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-2">*See Section 4, below, for additional important terms related to the Guarantee.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. ROLE OF THE COMPANY</h2>

          <p className="mb-4">
            <strong>2.1</strong> We operate strictly as a neutral intermediary or facilitator connecting Homeowners and
            Contractors via Our Platform. The Company does not exercise day-to-day control over the conduct, performance,
            or decisions of the Contractor or Homeowner.
          </p>

          <p className="mb-4">
            <strong>2.2</strong> We do not design, execute, or supervise the physical work undertaken at the Project site.
            All technical execution, personnel deployment, material procurement, worksite safety, and compliance with
            applicable laws are the exclusive responsibility of the Contractor.
          </p>

          <p className="mb-4">
            <strong>2.3</strong> The Guarantee serves as a limited and conditional post-performance remedy, triggered only
            in the event of an objectively verifiable Default by the Contractor, and only in accordance with these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. ELIGIBILITY AND REGISTRATION</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3.1 Eligibility Requirements for Contractors</h3>

          <p className="mb-4">To ensure reliability, experience and ethical standards, We require all Contractors to meet:</p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Experience:</strong> 3+ years in business with 10+ years industry experience, OR 5+ years in business</li>
            <li><strong>Online Presence:</strong> Current, discoverable website</li>
            <li><strong>BBB Standing:</strong> Generally favorable rating (poor ratings may result in disqualification)</li>
            <li><strong>Reputation:</strong> Favorable public review record</li>
            <li><strong>Insurance:</strong> Active general liability insurance at all times</li>
            <li><strong>Background Checks:</strong> Subject to criminal, financial, and civil record reviews</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">IMPORTANT NOTICE</p>
            <p className="text-sm text-gray-700">
              GOOD CONTRACTORS PERFORMS A SCREENING AT THE TIME THE CONTRACTOR APPLIES FOR MEMBERSHIP AND, AT OUR DISCRETION,
              ANNUALLY. NOTWITHSTANDING, A CONTRACTOR'S INFORMATION MAY CHANGE OR EXPIRE OVER TIME. WE RECOMMEND THAT BEFORE
              WORKING WITH A CONTRACTOR, YOU VERIFY THAT INFORMATION IS STILL ACCURATE AND ACCEPTABLE TO YOU.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3.2 Eligibility Requirements for Homeowners</h3>

          <p className="mb-2">To be eligible for the Guarantee, You must:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Be at least 18 years of age</li>
            <li>Register an account on the Platform</li>
            <li>Be the legal owner of the residence</li>
            <li>Acknowledge and accept these Terms</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. GUARANTEE TERMS</h2>

          <p className="mb-4"><strong>4.1 Definitions:</strong></p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Change Order:</strong> Document agreed between Contractor and Homeowner altering the Statement of Work</li>
            <li><strong>Default:</strong> Any failure by the Contractor to complete work according to agreed specifications, timelines, industry standards, or applicable laws</li>
            <li><strong>Defective Work:</strong> Work, materials, or workmanship failing to meet Statement of Work requirements</li>
            <li><strong>EPAF (Elite Project Acknowledgement Form):</strong> Document acknowledging Elite Guarantee eligibility</li>
            <li><strong>Project:</strong> Specific tasks outlined in Statement of Work and any Change Orders</li>
            <li><strong>Statement of Work:</strong> Document describing tasks, deliverables, timelines, and financial terms</li>
          </ul>

          <p className="mb-4">
            <strong>4.2 Filing a Guarantee Claim:</strong> If you believe the Contractor has committed a Default, you must
            first notify the Contractor and provide reasonable opportunity to remediate. If unsuccessful, contact{" "}
            <a href="mailto:josh@joshcotner.com" className="text-blue-600 hover:text-blue-700">
              josh@joshcotner.com
            </a>{" "}
            within 60 days of project completion.
          </p>

          <p className="mb-4">
            <strong>4.3 Guarantee Coverage:</strong> Upon determination of a Default, We will, at Our sole discretion:
            (i) arrange completion of unfinished work, (ii) repair/replace Defective Work, or (iii) provide financial
            compensation, up to the maximum guarantee amount.
          </p>

          <p className="mb-4">
            <strong>4.4 Coverage Limitations:</strong> The Guarantee applies only to residential projects and covers labor
            and non-defective goods. It does NOT extend to product defects, commercial projects, or third-party contractors.
            Homeowners are responsible for costs exceeding the guarantee amount.
          </p>

          <p className="mb-4">
            <strong>4.5 Maximum Coverage:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Standard Guarantee: $25,000</li>
            <li>Elite Guarantee: $350,000 (requires EPAF and Company approval)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. USER INFORMATION AND COMMUNICATION</h2>

          <p className="mb-4">
            <strong>5.1</strong> All Users must use the Platform lawfully and ethically, complying with applicable laws.
          </p>

          <p className="mb-4">
            <strong>5.2</strong> By providing contact information, You consent to being contacted by Us and Contractors via
            phone, email, text (SMS), or other reasonable means for service-related purposes, including automated/prerecorded
            calls, even if on a "Do Not Call" list.
          </p>

          <p className="mb-4">
            <strong>5.3</strong> You are responsible for ensuring all information provided is truthful, accurate, complete,
            and current. False information may result in account termination.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. LIMITATION OF LIABILITY</h2>

          <div className="bg-gray-100 p-6 my-6 border-2 border-gray-300">
            <p className="font-bold mb-4 uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <p className="mb-4">
              GOOD CONTRACTORS SHALL NOT BE LIABLE FOR ANY INCIDENTAL, SPECIAL, INDIRECT, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL
              DAMAGES, INCLUDING LOST PROFITS, LOSS OF INFORMATION, SERVICE INTERRUPTION, OR COST OF SUBSTITUTE SERVICES ARISING
              FROM THESE TERMS OR USE OF THE PLATFORM.
            </p>
            <p className="mb-4">
              EXCEPT FOR FULFILLMENT OF THE GUARANTEE, GOOD CONTRACTORS' TOTAL LIABILITY SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. DISCLAIMER OF WARRANTY</h2>

          <p className="mb-4">
            The Platform is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. We do not guarantee accuracy,
            completeness, or continuing validity of Contractor information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. DISPUTE RESOLUTION</h2>

          <p className="mb-4">
            <strong>14.1</strong> Disputes must first be negotiated in good faith for 30 days after written notice.
          </p>

          <p className="mb-4">
            <strong>14.2 Virtual Expedited Arbitration:</strong> Unresolved disputes shall be finally resolved by binding
            arbitration through New Era ADR, Inc. (<a href="https://app.neweraadr.com/" className="text-blue-600" target="_blank" rel="noopener noreferrer">https://app.neweraadr.com/</a>)
            in accordance with Virtual Expedited Arbitration procedures. Costs are shared equally.
          </p>

          <p className="mb-4">
            <strong>14.5 No Class Action:</strong> All disputes shall be resolved on an individual basis. No class actions,
            consolidated actions, or representative actions are permitted.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">19. CONTACT</h2>

          <p className="mb-4">
            For inquiries regarding these Terms, please contact us at:{" "}
            <a href="mailto:josh@joshcotner.com" className="text-blue-600 hover:text-blue-700">
              josh@joshcotner.com
            </a>
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Last Updated:</strong> January 2026<br/>
              <strong>Governing Law:</strong> State of Texas, United States of America
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center">
            This is an abbreviated summary. The complete Terms of Service contain additional important provisions.
            By using this platform, you agree to the full Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
