import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Wrench, Sparkles, MapPin } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
      isActive
        ? 'text-sky-600 bg-sky-50 shadow-sm border border-sky-200/80'
        : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100/80 border border-transparent'
    }`;

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200' : 'bg-white border-b border-slate-200 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* 1. Left: Brand Logo */}
          <div className="flex items-center flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* 2. Middle: Desktop Navigation Links (Clean Inline, Vertically Centered) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Page 1: Home */}
            <NavLink to="/" end className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-sky-500 animate-pulse' : 'bg-slate-300'}`}></span>
                  <span>Home</span>
                </>
              )}
            </NavLink>

            {/* Page 2: Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'text-sky-600 bg-sky-50 shadow-sm border border-sky-200/80'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100/80 border border-transparent'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-sky-500 animate-pulse' : 'bg-slate-300'}`}></span>
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />
                  </>
                )}
              </NavLink>

              {/* Flyout Sub-menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 flex items-center justify-between">
                      <span>Plumbing Solutions</span>
                      <span className="text-sky-600 font-extrabold text-[10px]">4 Dedicated Pages</span>
                    </div>
                    <div className="mt-1 space-y-1">
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sky-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                            <Wrench className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-sky-600">
                              {service.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {service.shortDescription}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100">
                      <Link
                        to="/services"
                        className="block text-center text-xs font-bold text-sky-600 hover:text-sky-700 py-1.5 rounded-lg hover:bg-sky-50 transition-colors"
                      >
                        Explore All Solutions &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Page 3: About */}
            <NavLink to="/about" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-sky-500 animate-pulse' : 'bg-slate-300'}`}></span>
                  <span>About Syd&apos;s</span>
                </>
              )}
            </NavLink>

            {/* Page 4: Contact */}
            <NavLink to="/contact" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-sky-500 animate-pulse' : 'bg-slate-300'}`}></span>
                  <span>Contact &amp; Booking</span>
                </>
              )}
            </NavLink>

            {/* Page 5: Blueprint Document View */}
            <NavLink to="/about-contact" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-black mr-0.5">DOC</span>
                  <span>About &amp; Contact</span>
                </>
              )}
            </NavLink>
          </nav>

          {/* 3. Right: Desktop CTA Buttons (Vertically Aligned) */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Quick Estimate Button */}
            <button
              onClick={onOpenQuote}
              type="button"
              className="h-11 inline-flex items-center gap-1.5 px-4 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Get Estimate</span>
            </button>

            {/* Click-to-Call Primary Action */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="h-11 inline-flex items-center gap-2.5 px-4 sm:px-5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white shadow-md hover:shadow-sky-500/25 transition-all hover:scale-[1.02] whitespace-nowrap"
            >
              <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[10px] text-sky-200 uppercase tracking-wider font-semibold">Direct Call</div>
                <div className="font-extrabold text-sm leading-none">{BUSINESS_INFO.phone}</div>
              </div>
            </a>
          </div>

          {/* Mobile hamburger & call button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-bold shadow-sm"
              aria-label="Call Syd's Plumbing directly"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
              Multi-Page Navigation
            </div>

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-sky-50 text-sky-600 border border-sky-200' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <span>Page 1: Home</span>
              <span className="text-xs text-slate-400">Overview</span>
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-sky-50 text-sky-600 border border-sky-200' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <span>Page 2: Services</span>
              <span className="text-xs text-slate-400">All Solutions</span>
            </NavLink>

            {/* Sub-services list in mobile menu */}
            <div className="pl-6 space-y-1 py-2 bg-slate-50 rounded-xl">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pt-1">
                4 Dedicated Service Sub-Pages:
              </div>
              {SERVICES_DATA.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{s.title}</span>
                </Link>
              ))}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-sky-50 text-sky-600 border border-sky-200' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <span>Page 3: About Syd&apos;s</span>
              <span className="text-xs text-slate-400">Local Story</span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-sky-50 text-sky-600 border border-sky-200' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <span>Page 4: Contact &amp; Booking</span>
              <span className="text-xs text-slate-400">Estimate &amp; Call</span>
            </NavLink>

            <NavLink
              to="/about-contact"
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-sky-50 text-sky-600 border border-sky-200' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <span>Page 5: About &amp; Contact (Doc View)</span>
              <span className="text-xs text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded font-black">Blueprint</span>
            </NavLink>

            {/* Mobile Actions Container */}
            <div className="pt-4 mt-2 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 text-white font-bold text-base shadow-lg shadow-sky-600/20"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50"
              >
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>Request Free Quote</span>
              </button>
            </div>

            {/* Local Badge */}
            <div className="pt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              <span>Serving Morrisville, NC &amp; Surrounding Areas</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
