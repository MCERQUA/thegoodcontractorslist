"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-700">
              The Good Contractors List
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/find-contractors" className="text-gray-700 hover:text-primary-600 transition">
              Find Contractors
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-primary-600 transition">
              How It Works
            </Link>
            <Link href="/guarantee" className="text-gray-700 hover:text-primary-600 transition">
              Guarantee
            </Link>
            <Link href="/for-contractors" className="text-gray-700 hover:text-primary-600 transition">
              For Contractors
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition">
              Contact
            </Link>
            <Link
              href="/register"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/find-contractors" className="text-gray-700 hover:text-primary-600 py-2">
                Find Contractors
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-primary-600 py-2">
                How It Works
              </Link>
              <Link href="/guarantee" className="text-gray-700 hover:text-primary-600 py-2">
                Guarantee
              </Link>
              <Link href="/for-contractors" className="text-gray-700 hover:text-primary-600 py-2">
                For Contractors
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 py-2">
                Contact
              </Link>
              <Link href="/register" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
