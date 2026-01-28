import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Good Contractors List
            </h3>
            <p className="text-gray-400 mb-4">
              Connecting homeowners with trusted, vetted contractors. Protected by our
              industry-leading guarantee program up to $350,000.
            </p>
            <div className="text-gray-400 text-sm">
              <p>Good Contractors, LLC</p>
              <p>Email: <a href="mailto:careteam@goodlistmail.com" className="text-primary-400 hover:text-primary-300">careteam@goodlistmail.com</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/find-contractors" className="text-gray-400 hover:text-white transition">
                  Find Contractors
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/guarantee" className="text-gray-400 hover:text-white transition">
                  Our Guarantee
                </Link>
              </li>
              <li>
                <Link href="/for-contractors" className="text-gray-400 hover:text-white transition">
                  For Contractors
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Good Contractors, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
