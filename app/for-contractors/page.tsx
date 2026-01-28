import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Contractors - Join Our Network | The Good Contractors List",
  description: "Join our elite network of vetted contractors. Connect with quality leads and protect your reputation with our guarantee program.",
};

export default function ForContractors() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Elite Contractor Network
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect with serious homeowners who value professionalism.
            Grow your business with quality leads backed by our guarantee program.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-400 transition"
          >
            Apply to Join
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join The Good Contractors List?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Leads</h3>
              <p className="text-gray-600">
                Connect with homeowners who have registered and are serious about their projects.
                No tire-kickers or price shoppers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reputation Protection</h3>
              <p className="text-gray-600">
                Our guarantee program protects both homeowners and your professional reputation,
                building trust and referrals.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Elite Opportunities</h3>
              <p className="text-gray-600">
                Qualify for our Elite Contractor program to access larger projects with up to
                $350,000 in guarantee coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Eligibility Requirements
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Experience</h3>
                <p className="text-gray-600">
                  Either (a) 3+ years in business with 10+ years of industry experience, OR
                  (b) 5+ years in business operation
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Online Presence</h3>
                <p className="text-gray-600">
                  Maintain a current, professional website that is easily discoverable by homeowners
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Insurance Coverage</h3>
                <p className="text-gray-600">
                  Active general liability insurance must be maintained at all times. Any lapse
                  may result in immediate suspension.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reputation & Reviews</h3>
                <p className="text-gray-600">
                  Maintain generally favorable standing on public review websites and with the BBB.
                  Patterns of legitimate complaints may result in removal.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Background Screening</h3>
                <p className="text-gray-600">
                  All contractors and personnel are subject to criminal, financial, and civil
                  background checks
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Conduct</h3>
                <p className="text-gray-600">
                  Commitment to honest, transparent business practices and professional dispute
                  resolution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Application Process
          </h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold" style={{backgroundColor: '#2563eb', color: '#ffffff'}}>
                  1
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Application</h3>
                <p className="text-gray-600">
                  Contact us to request a contractor application. Provide your business information,
                  licenses, insurance, and professional references.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold" style={{backgroundColor: '#2563eb', color: '#ffffff'}}>
                  2
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verification Process</h3>
                <p className="text-gray-600">
                  We'll verify your licenses, insurance, reputation, and conduct background checks.
                  This typically takes 7-14 business days.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold" style={{backgroundColor: '#2563eb', color: '#ffffff'}}>
                  3
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Profile Setup</h3>
                <p className="text-gray-600">
                  Once approved, we'll work with you to create your contractor profile on our
                  platform, including service areas and specialties.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-500 text-gray-900 rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Receiving Leads</h3>
                <p className="text-gray-600">
                  Your profile goes live and registered homeowners can find and contact you
                  directly for their projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Apply today and start connecting with quality homeowners who value professional service.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-400 transition"
          >
            Contact Us to Apply
          </Link>
        </div>
      </section>
    </div>
  );
}
