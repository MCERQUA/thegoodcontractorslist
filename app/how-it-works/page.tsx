import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - The Good Contractors List",
  description: "Learn how The Good Contractors List connects homeowners with vetted contractors and protects your projects with our comprehensive guarantee program.",
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A simple, transparent process to connect you with trusted contractors
            and protect your investment.
          </p>
        </div>
      </section>

      {/* For Homeowners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Homeowners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Finding and hiring a contractor has never been easier or safer.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Register Your Account</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">
                  Create your free account on The Good Contractors List platform. This must be
                  done before hiring any contractor to ensure you're eligible for our guarantee
                  program.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Must be 18 years or older</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Must be the legal owner of the property</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Registration is completely free</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-primary-50 p-8 rounded-lg">
                  <svg className="w-full h-48 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Search for Contractors</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">
                  Browse our curated network of vetted contractors by service category
                  (electrician, plumber, general contractor, etc.) and your zip code.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Every contractor is thoroughly screened</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Licensed, insured, and experienced professionals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>View contractor profiles and contact information</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-accent-50 p-8 rounded-lg">
                  <svg className="w-full h-48 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Connect & Hire</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">
                  Contact contractors directly using the information provided on our platform.
                  Discuss your project, get quotes, and hire the contractor that fits your needs.
                </p>
                <div className="bg-blue-50 border-l-4 border-primary-600 p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> You must have a written Statement of Work that
                    details the scope, timeline, and financial terms. For Elite projects
                    ($350,000 guarantee), an Elite Project Acknowledgement Form (EPAF) must
                    also be signed and approved by us.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-primary-50 p-8 rounded-lg">
                  <svg className="w-full h-48 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Protected by Our Guarantee</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">
                  Your project is automatically covered by our guarantee program. If the
                  contractor defaults or delivers defective work, we'll step in to make it right.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standard Guarantee: Up to $25,000</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Elite Guarantee: Up to $350,000</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>60-day claim period after project completion</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-accent-50 p-8 rounded-lg">
                  <svg className="w-full h-48 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Contractors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Contractors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our elite network of trusted home service professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rigorous Vetting</h3>
              <p className="text-gray-600">
                We verify your experience, licenses, insurance, reputation, and conduct
                background checks to ensure quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Leads</h3>
              <p className="text-gray-600">
                Connect with serious homeowners who value professionalism and are ready
                to hire qualified contractors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Protection</h3>
              <p className="text-gray-600">
                Our guarantee program protects both homeowners and your reputation,
                fostering trust and repeat business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 3+ years in business with 10+ years experience, OR</li>
                <li>• 5+ years in business</li>
                <li>• Active general liability insurance</li>
                <li>• Professional online presence</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Screening Process</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Background checks</li>
                <li>• License verification</li>
                <li>• Insurance validation</li>
                <li>• Reputation review</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Elite Program</h3>
              <p className="text-gray-600">
                Qualify for our Elite Contractor program to access larger projects with
                up to $350,000 in guarantee coverage.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/for-contractors"
              className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
            >
              Apply as a Contractor
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join The Good Contractors List today and experience the difference of working
            with verified, protected professionals.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}
