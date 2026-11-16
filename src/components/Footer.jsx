import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ShieldCheck, Mail, ArrowUpRight, Heart, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Callout in Footer */}
      <div className="border-b border-slate-800/80 bg-navy-900/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              Morrisville&apos;s Trusted Independent Plumber
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Got a Plumbing Problem? Speak Directly to Syd.
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              No overseas call centers or automated phone trees. Call our direct service line for honest pricing and rapid dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700 hover:border-sky-500 text-white font-bold text-sm hover:bg-slate-800 transition-all"
            >
              <span>Schedule Service</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" isLight={true} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Syd&apos;s Plumbing is a locally owned, independent plumbing service provider based in Morrisville, North Carolina. Built on integrity, craftsmanship, and community trust.
            </p>

            {/* Trust Points */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Fully Licensed, Bonded &amp; Insured in North Carolina</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Independent Local Specialist — You Speak Directly to the Plumber</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>100% Upfront, Transparent Pricing with Zero Hidden Surprises</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-sky-400"></span>
              Plumbing Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">&rsaquo;</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 uppercase tracking-wide inline-flex items-center gap-1"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-sky-400"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  About Syd&apos;s
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Contact &amp; Free Estimate
                </Link>
              </li>
              <li>
                <Link to="/about-contact" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1 rounded font-bold">Doc</span>
                  <span>About &amp; Contact Page</span>
                </Link>
              </li>
              <li>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                  Emergency Dispatch (+1 919-271-0999)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Contact & Hours */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-sky-400"></span>
              Service Profile
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-semibold">Service Line:</div>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sky-400 hover:underline font-bold text-sm">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-semibold">Service Location:</div>
                  <span>{BUSINESS_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-semibold">Hours:</div>
                  <span>{BUSINESS_INFO.hours}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500">
                Serving: Morrisville, Cary, Research Triangle Park (RTP), Apex, and neighboring Triangle communities.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Syd&apos;s Plumbing. All rights reserved. Locally owned &amp; operated in Morrisville, NC.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Residential &amp; Commercial Plumbing</span>
            <span>•</span>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sky-400 hover:underline font-semibold">
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
