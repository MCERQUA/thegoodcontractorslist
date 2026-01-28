import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Find Trusted Contractors.<br />
                <span className="text-yellow-400">Guaranteed.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-3xl">
                Connect with vetted, professional home service contractors backed by our
                industry-leading guarantee up to $350,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="/find-contractors"
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition w-full sm:w-auto text-center shadow-lg"
                >
                  Find a Contractor
                </Link>
                <Link
                  href="/how-it-works"
                  className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition border-2 border-white w-full sm:w-auto text-center"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-image.png"
                  alt="Professional contractors working on a modern home"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose The Good Contractors List?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We go beyond simple contractor directories. Every professional in our network
              is thoroughly vetted and backed by our comprehensive guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Thoroughly Vetted</h3>
              <p className="text-gray-600">
                Every contractor undergoes rigorous screening including background checks,
                license verification, insurance validation, and reputation review.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Protected by Guarantee</h3>
              <p className="text-gray-600">
                Standard projects covered up to $25,000. Elite projects protected up to
                $350,000. Your investment is secured.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Professionals</h3>
              <p className="text-gray-600">
                Minimum 3 years in business with 10+ years industry experience, or 5+ years
                in business for contractors with extensive backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with The Good Contractors List is easy and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Register</h3>
              <p className="text-gray-600">
                Create your free account to access our network of vetted contractors.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Search & Connect</h3>
              <p className="text-gray-600">
                Find contractors by service type and location. Contact them directly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hire with Confidence</h3>
              <p className="text-gray-600">
                Work directly with the contractor. Your project is protected by our guarantee.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Protected Always</h3>
              <p className="text-gray-600">
                If issues arise, our guarantee ensures your project is completed right.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/register"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-md"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Industry-Leading Guarantee Protection
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We stand behind every contractor in our network with real financial protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Guarantee */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20">
              <h3 className="text-2xl font-bold mb-2">Standard Guarantee</h3>
              <div className="text-4xl font-bold text-accent-300 mb-4">Up to $25,000</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Register before work begins</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Covers residential projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Labor and materials protection</span>
                </li>
              </ul>
            </div>

            {/* Elite Guarantee */}
            <div className="bg-accent-500 p-8 rounded-lg border-2 border-accent-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent-600 text-white px-4 py-1 text-sm font-bold">
                ELITE
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Elite Guarantee</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">Up to $350,000</div>
              <ul className="space-y-3 text-gray-900">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-900 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Elite contractor network</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-900 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>EPAF documentation required</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-900 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maximum protection for large projects</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/guarantee"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Learn More About Our Guarantee
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Perfect Contractor?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of homeowners who trust The Good Contractors List for their
            home improvement projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-md"
            >
              Register as Homeowner
            </Link>
            <Link
              href="/for-contractors"
              className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition shadow-md"
            >
              Join as Contractor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
