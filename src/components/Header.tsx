'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-100 transition">
            Uppdrag Direkt
          </Link>
          
          {/* Hamburger menu for mobile */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  href="/" 
                  className={`hover:text-blue-100 transition ${
                    pathname === '/' ? 'font-semibold border-b-2 border-white pb-1' : ''
                  }`}
                >
                  Hem
                </Link>
              </li>
              <li>
                <Link 
                  href="/uppdrag" 
                  className={`hover:text-blue-100 transition ${
                    pathname.startsWith('/uppdrag') ? 'font-semibold border-b-2 border-white pb-1' : ''
                  }`}
                >
                  Uppdrag
                </Link>
              </li>
              <li>
                <Link 
                  href="/frilansare" 
                  className={`hover:text-blue-100 transition ${
                    pathname.startsWith('/frilansare') ? 'font-semibold border-b-2 border-white pb-1' : ''
                  }`}
                >
                  Frilansare
                </Link>
              </li>
              <li>
                <Link 
                  href="/om-oss" 
                  className={`hover:text-blue-100 transition ${
                    pathname === '/om-oss' ? 'font-semibold border-b-2 border-white pb-1' : ''
                  }`}
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link 
                  href="/kontakt" 
                  className={`hover:text-blue-100 transition ${
                    pathname === '/kontakt' ? 'font-semibold border-b-2 border-white pb-1' : ''
                  }`}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/login" 
              className="hover:text-blue-100 transition"
            >
              Logga in
            </Link>
            <Link 
              href="/register" 
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition"
            >
              Registrera
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-blue-500">
            <nav className="mb-4">
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className={`block hover:text-blue-100 transition ${
                      pathname === '/' ? 'font-semibold' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hem
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/uppdrag" 
                    className={`block hover:text-blue-100 transition ${
                      pathname.startsWith('/uppdrag') ? 'font-semibold' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Uppdrag
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/frilansare" 
                    className={`block hover:text-blue-100 transition ${
                      pathname.startsWith('/frilansare') ? 'font-semibold' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Frilansare
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/om-oss" 
                    className={`block hover:text-blue-100 transition ${
                      pathname === '/om-oss' ? 'font-semibold' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/kontakt" 
                    className={`block hover:text-blue-100 transition ${
                      pathname === '/kontakt' ? 'font-semibold' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex space-x-3 pb-3">
              <Link 
                href="/login" 
                className="hover:text-blue-100 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Logga in
              </Link>
              <Link 
                href="/register" 
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Registrera
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}