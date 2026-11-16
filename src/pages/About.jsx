import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ShieldCheck,
  HeartHandshake,
  Wrench,
  Clock,
  Sparkles,
  MapPin,
  CheckCircle2,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';
import Logo from '../components/Logo';
import { BUSINESS_INFO } from '../data/servicesData';

export default function About({ onOpenQuote }) {
  return (
    <div className="py-10 space-y-16 sm:space-y-24">
      {/* ============================================================ */}
      {/* ABOUT HERO                                                   */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Independent &bull; Morrisville, NC</span>
            </div>

            {/* Blueprint Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              About Syd&apos;s Plumbing
            </h1>

            {/* Blueprint Content */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Syd’s Plumbing is a locally owned, independent plumbing service provider based in Morrisville, North Carolina. Built on a foundation of integrity, high-quality craftsmanship, and community trust, we function as a dedicated service-area business bringing specialized plumbing solutions straight to your doorstep.
            </p>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-slate-200 text-sm sm:text-base italic leading-relaxed">
              &ldquo;We treat every home and business like our own. When you call Syd&apos;s Plumbing, you are speaking directly to a local specialist committed to getting the job done right the first time.&rdquo;
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-lg transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Syd Directly: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Request Free Estimate</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4 FOUNDATIONAL PILLARS                                       */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Our Foundation
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">
            Built on Core Principles
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Plumbing requires precision and trust. Here is how we conduct business every day across Morrisville.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 hover:shadow-elevated transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Integrity First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never recommend unnecessary replacements or add surprise fees. Honest diagnostics and upfront flat pricing on every job.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 hover:shadow-elevated transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">High Craftsmanship</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Piping and fixtures installed with professional-grade materials, exacting alignment, and pressure-tested leak integrity.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 hover:shadow-elevated transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Community Trust</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proudly independent and deeply rooted in Morrisville. Our business thrives on long-term relationships and word-of-mouth reputation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 hover:shadow-elevated transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Prompt Service</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We show up on schedule and treat your living space with care—shoe covers, floor runners, and leaving your home spotless.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE INDEPENDENT ADVANTAGE VS BIG CORPORATIONS                 */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
              The Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Why Morrisville Homeowners Prefer An Independent Specialist
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Here is how Syd&apos;s Plumbing stacks up against national private-equity franchise chains:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Syd's Plumbing */}
            <div className="bg-white rounded-2xl p-6 border-2 border-sky-500 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full">
                  Syd&apos;s Plumbing (Local)
                </span>
                <span className="text-emerald-600 font-bold text-xs">✓ Recommended</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Plumber Contact:</strong> You speak directly with Syd on the phone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Sales Pressure:</strong> No commissioned upsells or high-pressure pitches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Upfront Flat Rates:</strong> Clear quote provided before any tools touch your pipes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Local Accountability:</strong> A true neighbor invested in the Morrisville community.</span>
                </li>
              </ul>
            </div>

            {/* Corporate Franchises */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-500 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Big National Chains
                </span>
                <span className="text-amber-600 font-semibold text-xs">⚠️ High Overhead</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">&times;</span>
                  <span>Automated call centers and dispatchers with no plumbing training.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">&times;</span>
                  <span>Commission-based technicians incentivized to sell costly replacements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">&times;</span>
                  <span>Expensive corporate franchise royalties inflated into customer bills.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">&times;</span>
                  <span>Rotating technicians with zero personal accountability for future issues.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICE AREA HIGHLIGHT                                       */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Service-Area Business: Morrisville &amp; Beyond
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As a dedicated service-area business, we operate directly from well-stocked service vehicles to bring specialized plumbing tools and high-grade replacement parts right to your door.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-700">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>Morrisville, NC (Core)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>Cary, NC</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>Research Triangle Park</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>Apex, NC Borders</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>West Raleigh Areas</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>Durham Borderlines</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-slate-900 text-white rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-sky-400">
                Need Fast Plumbing Support?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you live near Town Hall Commons, Kitts Creek, Breckenridge, or along Davis Drive, Syd is just a phone call away.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
