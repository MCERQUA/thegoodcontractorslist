import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guarantee Program - The Good Contractors List",
  description: "Learn about our industry-leading guarantee program protecting homeowners with coverage up to $350,000 on home improvement projects.",
};

export default function Guarantee() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Guarantee Program
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Industry-leading protection for your home improvement projects.
            We stand behind every contractor in our network.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Guarantee?</h2>
          <p className="text-lg text-gray-600 mb-6">
            The Good Contractors List Guarantee is a limited and conditional post-performance remedy
            that protects homeowners when they work with contractors from our vetted network. If a
            contractor defaults on their obligations or delivers defective work, we will step in to
            make it right.
          </p>
          <p className="text-lg text-gray-600">
            Our guarantee serves as real financial protection, providing peace of mind that your
            investment is secured and your project will be completed to professional standards.
          </p>
        </div>
      </section>

      {/* Guarantee Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Two Levels of Protection
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Standard Guarantee */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Standard Guarantee</h3>
                <div className="text-4xl font-bold">Up to $25,000</div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-4">Eligibility Requirements:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Must register on our platform before work begins</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hire a contractor from our vetted network</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Have a written Statement of Work with the contractor</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Covers residential projects only</span>
                  </li>
                </ul>
                <h4 className="font-bold text-lg mb-4">What's Covered:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Labor and non-defective materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Completion of unfinished work</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Repair or replacement of defective work</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Elite Guarantee */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-accent-500 relative">
              <div className="absolute top-0 right-0 bg-accent-500 text-white px-6 py-2 font-bold z-10">
                ELITE
              </div>
              <div className="bg-accent-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Elite Guarantee</h3>
                <div className="text-4xl font-bold">Up to $350,000</div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-4">Eligibility Requirements:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All Standard Guarantee requirements, PLUS:</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contractor must be an Elite Contractor at time of engagement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Elite Project Acknowledgement Form (EPAF) must be executed</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Statement of Work must be approved by Good Contractors</span>
                  </li>
                </ul>
                <h4 className="font-bold text-lg mb-4">Enhanced Protection:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maximum protection for large projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Top-tier contractor network</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Additional oversight and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to File a Claim */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How to File a Claim</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Try to Resolve Directly</h3>
              <p className="text-gray-600">
                First, notify the contractor of any issues and provide them with a reasonable
                opportunity to fix the deficiencies. Document all communications.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Contact Us</h3>
              <p className="text-gray-600">
                If the contractor is unwilling or unable to address the issues within a reasonable
                timeframe, email us at{" "}
                <a href="mailto:careteam@goodlistmail.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                  careteam@goodlistmail.com
                </a>{" "}
                within 60 days of the documented project completion date.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Complete Notice of Default</h3>
              <p className="text-gray-600">
                We'll provide you with an official Notice of Default form. Complete it with all
                necessary documentation including photos, correspondence, inspection reports, and
                any other supporting evidence.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Our Assessment</h3>
              <p className="text-gray-600">
                We'll assess the claim to determine if a default occurred. You'll need to provide
                full access to the project site for inspection and verification.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Resolution</h3>
              <p className="text-gray-600">
                If a default is confirmed, we'll arrange for completion of unfinished work,
                repair/replacement of defective work, or provide financial compensation, at our
                sole discretion, up to the applicable guarantee limit.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <p className="text-gray-700">
              <strong>Important:</strong> Claims must be filed within 60 days of project completion.
              You must cooperate fully with our investigation and resolution process. The guarantee
              is void if you hire third parties to make repairs before we assess the claim.
            </p>
          </div>
        </div>
      </section>

      {/* What's Not Covered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Important Exclusions</h2>
          <p className="text-center text-gray-600 mb-8">
            The following are NOT covered under our guarantee program:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-gray-700">Commercial projects</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-gray-700">Product defects (non-workmanship)</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-gray-700">Third-party contractors not on our platform</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-gray-700">Normal wear and tear</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-gray-700">Force majeure events</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-gray-700">Homeowner-caused delays or interference</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-gray-700">Work performed outside the platform</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-gray-700">Unauthorized modifications by third parties</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Protected Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Register today and connect with contractors backed by our comprehensive guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Register as Homeowner
            </Link>
            <Link
              href="/terms-of-service"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition border-2 border-white"
            >
              Read Full Terms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
