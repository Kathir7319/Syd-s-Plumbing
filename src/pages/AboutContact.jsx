import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Award,
  Users
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import PageNavigation from '../components/PageNavigation';

export default function AboutContact({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-10 space-y-16">
      {/* Blueprint Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
          <span>Blueprint Section 3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          About &amp; Contact Syd&apos;s Plumbing
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Local craftsmanship, honest pricing, and direct communication in Morrisville, NC.
        </p>
      </section>

      {/* Part 1: About Syd's Plumbing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-soft space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>Local Community Provider</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            About Syd&apos;s Plumbing
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Syd’s Plumbing is a locally owned, independent plumbing service provider based in Morrisville, North Carolina. Built on a foundation of integrity, high-quality craftsmanship, and community trust, we function as a dedicated service-area business bringing specialized plumbing solutions straight to your doorstep.
            </p>
            <p className="p-5 rounded-2xl bg-sky-50 border-l-4 border-sky-600 text-slate-800 font-medium italic">
              &ldquo;We treat every home and business like our own. When you call Syd&apos;s Plumbing, you are speaking directly to a local specialist committed to getting the job done right the first time.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">100% Independent</div>
                <div className="text-slate-500">No corporate franchises</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Upfront Flat Rates</div>
                <div className="text-slate-500">Zero hidden surcharges</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Morrisville Local</div>
                <div className="text-slate-500">Rapid local response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Get In Touch */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">
              Direct Contact
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Get In Touch
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              Have a plumbing issue or need an estimate? Reach out directly via our public service line. We look forward to helping you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Phone Number (Click-to-Call)
              </div>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-2xl font-black text-white hover:text-amber-400 transition-colors block">
                {BUSINESS_INFO.phone}
              </a>
              <p className="text-xs text-slate-300">
                Click to call directly for instant booking or emergencies.
              </p>
            </div>

            {/* Service Area */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-300">
                Service Area
              </div>
              <div className="text-lg font-bold text-white">
                Morrisville, NC &amp; Surrounding
              </div>
              <p className="text-xs text-slate-300">
                {BUSINESS_INFO.serviceArea}
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Hours of Operation
              </div>
              <div className="text-lg font-bold text-white">
                Call for Availability &amp; Booking
              </div>
              <p className="text-xs text-slate-300">
                24/7 Emergency Dispatch priority for burst pipes &amp; water line failures.
              </p>
            </div>
          </div>

          {/* Quick Message Box */}
          <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              Prefer online booking? Click below to request a fast digital estimate.
            </div>
            <div className="flex gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-all"
              >
                Call {BUSINESS_INFO.phone}
              </a>
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm transition-all"
              >
                Request Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Page Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageNavigation current="/about-contact" />
      </div>
    </div>
  );
}
