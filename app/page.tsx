import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section - DRAMATIC NEW DESIGN */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)'
      }}>
        {/* Diagonal overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -rotate-12 -left-1/4 top-0 w-full h-full bg-gradient-to-r from-orange-500 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                ⚡ PROTECTED BY $350K GUARANTEE
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                <span className="text-white">Trusted</span><br />
                <span className="text-orange-500">Contractors.</span><br />
                <span className="text-white">Guaranteed.</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Connect with elite, vetted contractors. Every project backed by industry-leading protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/find-contractors"
                  className="group bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-orange-600 transition transform hover:scale-105 shadow-2xl text-center"
                >
                  Find Your Contractor →
                </Link>
                <Link
                  href="/guarantee"
                  className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition border-2 border-white/30 text-center"
                >
                  Our Guarantee
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent z-10"></div>
                <Image
                  src="/images/hero-image.png"
                  alt="Professional contractors working on a modern home"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-5xl font-black text-orange-500 mb-2">$350K</div>
                <div className="text-gray-600 font-bold">Max Protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - BOLD ASYMMETRIC DESIGN */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Large text background */}
        <div className="absolute top-20 left-0 text-9xl font-black text-gray-50 opacity-50 select-none">
          WHY US?
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-bold mb-6">
              THE DIFFERENCE
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight max-w-3xl">
              Not Your Average <span className="text-orange-500">Contractor Directory</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1 - Large */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-3xl text-white transform hover:scale-105 transition duration-300 shadow-2xl">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-black mb-4">Rigorously Vetted</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Background checks, license verification, insurance validation, and reputation review. No shortcuts.
              </p>
            </div>

            {/* Feature 2 & 3 - Stacked */}
            <div className="space-y-12">
              <div className="bg-orange-500 p-10 rounded-3xl text-white transform hover:scale-105 transition duration-300 shadow-2xl">
                <div className="text-6xl font-black mb-4">$350K</div>
                <h3 className="text-2xl font-black mb-3">Maximum Protection</h3>
                <p className="text-lg opacity-90">
                  Industry-leading guarantee coverage. Your investment is safe.
                </p>
              </div>

              <div className="bg-slate-100 p-10 rounded-3xl transform hover:scale-105 transition duration-300 shadow-xl">
                <div className="text-5xl font-black text-slate-900 mb-4">10+</div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Years Experience</h3>
                <p className="text-lg text-slate-600">
                  Only the most experienced professionals make the cut.
                </p>
              </div>
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
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{backgroundColor: '#2563eb', color: '#ffffff'}}>
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Register</h3>
              <p className="text-gray-600">
                Create your free account to access our network of vetted contractors.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{backgroundColor: '#2563eb', color: '#ffffff'}}>
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Search & Connect</h3>
              <p className="text-gray-600">
                Find contractors by service type and location. Contact them directly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{backgroundColor: '#2563eb', color: '#ffffff'}}>
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hire with Confidence</h3>
              <p className="text-gray-600">
                Work directly with the contractor. Your project is protected by our guarantee.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{backgroundColor: '#2563eb', color: '#ffffff'}}>
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

      {/* Guarantee Section - BOLD SPLIT DESIGN */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - Standard */}
          <div className="bg-slate-900 text-white p-16 lg:p-24 flex flex-col justify-center min-h-[600px]">
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 w-fit">
              STANDARD
            </div>
            <div className="text-7xl font-black mb-6">$25K</div>
            <h3 className="text-3xl font-bold mb-6">Standard Guarantee</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-lg">
                <span className="text-green-400 mr-3 text-2xl">✓</span>
                Register before work begins
              </li>
              <li className="flex items-center text-lg">
                <span className="text-green-400 mr-3 text-2xl">✓</span>
                Covers residential projects
              </li>
              <li className="flex items-center text-lg">
                <span className="text-green-400 mr-3 text-2xl">✓</span>
                Labor & materials protected
              </li>
            </ul>
          </div>

          {/* Right - Elite */}
          <div className="bg-orange-500 text-white p-16 lg:p-24 flex flex-col justify-center min-h-[600px] relative">
            <div className="absolute top-8 right-8 bg-white text-orange-500 px-6 py-3 rounded-full text-sm font-black">
              ⚡ ELITE
            </div>
            <div className="text-8xl font-black mb-6">$350K</div>
            <h3 className="text-4xl font-black mb-6">Maximum Protection</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-xl font-bold">
                <span className="text-white mr-3 text-2xl">●</span>
                Elite contractor network
              </li>
              <li className="flex items-center text-xl font-bold">
                <span className="text-white mr-3 text-2xl">●</span>
                Enhanced documentation
              </li>
              <li className="flex items-center text-xl font-bold">
                <span className="text-white mr-3 text-2xl">●</span>
                Large project coverage
              </li>
            </ul>
            <Link
              href="/guarantee"
              className="inline-block bg-white text-orange-500 px-10 py-5 rounded-xl font-black text-xl hover:bg-slate-900 hover:text-white transition transform hover:scale-105 shadow-2xl text-center w-fit"
            >
              View Full Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Contractor Network Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Elite Network of Professionals
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our contractors aren't just skilled—they're the best in the business. Each professional
                in our network has been carefully vetted to ensure they meet our rigorous standards
                for experience, quality, and customer service.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-gray-700 font-medium">Years Experience</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-700 font-medium">Licensed & Insured</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team.png"
                  alt="Professional contractor team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
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
