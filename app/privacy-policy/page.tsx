import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - The Good Contractors List",
  description: "Privacy Policy for The Good Contractors List platform detailing how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            <strong>Last Updated:</strong> January 2026
          </p>

          <p className="text-gray-700 mb-6">
            Good Contractors, LLC ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>")
            operates The Good Contractors List website (the "<strong>Platform</strong>"). This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our Platform.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> Please read this Privacy Policy carefully. By using the Platform,
              you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Personal Information</h3>
          <p className="mb-4">When you register on our Platform, we collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Property address</li>
            <li>ZIP code</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
          <p className="mb-4">When you visit our Platform, we may automatically collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>

          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Facilitate connections between homeowners and contractors</li>
            <li>Administer the guarantee program</li>
            <li>Send service-related communications</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Improve and optimize the Platform</li>
            <li>Comply with legal obligations</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>

          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Contractors:</strong> When you contact a contractor through our Platform, we share
              your contact information to facilitate communication
            </li>
            <li>
              <strong>Service Providers:</strong> Third-party companies that help us operate the Platform
              (e.g., hosting, analytics, email services)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, subpoena, or court order
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
            </li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> We do not sell your personal information to third parties for marketing purposes.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Communications and Consent</h2>

          <p className="mb-4">
            By providing your contact information, you expressly consent to being contacted by us and by
            contractors via phone (including automated/prerecorded calls), email, text (SMS), or other
            reasonable means for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Service-related purposes</li>
            <li>Confirming appointments and project updates</li>
            <li>Guarantee administration</li>
            <li>Marketing communications (you may opt out at any time)</li>
          </ul>

          <p className="mb-6">
            This consent applies even if you are on a federal, state, or other "Do Not Call" list.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>

          <p className="mb-6">
            We use cookies and similar tracking technologies to enhance your experience on our Platform,
            analyze usage patterns, and deliver personalized content. You can control cookie preferences
            through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>

          <p className="mb-6">
            We implement reasonable administrative, technical, and physical security measures to protect
            your personal information. However, no method of transmission over the Internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>

          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal obligations)</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent for data processing (where applicable)</li>
          </ul>

          <p className="mb-6">
            To exercise these rights, please contact us at{" "}
            <a href="mailto:josh@joshcotner.com" className="text-blue-600 hover:text-blue-700">
              josh@joshcotner.com
            </a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>

          <p className="mb-6">
            Our Platform is not intended for individuals under 18 years of age. We do not knowingly
            collect personal information from children. If you are a parent or guardian and believe
            your child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>

          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify you of material changes
            by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your
            continued use of the Platform after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>

          <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="mb-2"><strong>Good Contractors, LLC</strong></p>
            <p className="mb-2">
              Email:{" "}
              <a href="mailto:josh@joshcotner.com" className="text-blue-600 hover:text-blue-700">
                josh@joshcotner.com
              </a>
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Governing Law:</strong> This Privacy Policy is governed by the laws of the
              State of Texas, United States of America.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
