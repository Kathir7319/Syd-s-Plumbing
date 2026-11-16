import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  AlertTriangle,
  Flame,
  Waves,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronDown,
  Building,
  Home as HomeIcon
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

export default function Services({ onOpenQuote }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-8 h-8 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-orange-500" />;
      case 'Waves':
        return <Waves className="w-8 h-8 text-sky-500" />;
      case 'Wrench':
      default:
        return <Wrench className="w-8 h-8 text-sky-600" />;
    }
  };

  const faqs = [
    {
      q: "How quickly can Syd's Plumbing arrive for an emergency?",
      a: "Because Syd's Plumbing is an independent local service-area business based right in Morrisville, NC, emergency calls receive immediate priority dispatch. Typical response time is between 30 to 60 minutes depending on your neighborhood."
    },
    {
      q: "Do you provide upfront pricing before starting work?",
      a: "Yes, 100%. One of our founding commitments is transparent pricing. After diagnosing your plumbing issue, we explain the root cause and provide clear, flat-rate pricing before turning a single wrench. No hidden travel surcharges or surprise fees."
    },
    {
      q: "Do you service both traditional tank and tankless water heaters?",
      a: "Absolutely. We service, repair, and install all types of water heating systems—including gas and electric tank units as well as high-efficiency on-demand tankless systems from top manufacturers."
    },
    {
      q: "Do you service commercial properties as well as homes?",
      a: "Yes. In addition to residential plumbing, we provide plumbing solutions for light commercial properties, office suites, retail shops, and restaurants across Morrisville and surrounding regions."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10">
      {/* ============================================================ */}
      {/* HEADER SECTION                                               */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5 text-sky-600" />
          <span>Morrisville, NC Service Catalog</span>
        </div>

        {/* Blueprint Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Our Professional Plumbing Solutions
        </h1>

        {/* Blueprint Subheadline */}
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From routine maintenance to urgent repairs, Syd&apos;s Plumbing offers a comprehensive range of residential and light commercial plumbing services across Morrisville.
        </p>

        {/* Action button */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Plumber: {BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-sky-500 text-slate-800 font-bold text-sm shadow-sm transition-all"
          >
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span>Request Free Estimate</span>
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4 CORE SERVICES DETAILED CARDS                               */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200/80 hover:shadow-elevated transition-all overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-black uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                        {service.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">
                        Service #0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Key Benefits Checklist */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Key Service Highlights:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.keyBenefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm transition-all"
                      >
                        <span>Full Service Guide</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-amber-400 text-slate-800 font-bold text-xs sm:text-sm hover:bg-amber-50 transition-all"
                      >
                        <Phone className="w-4 h-4 text-amber-500 fill-current" />
                        <span>Book Over Phone</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Box & Common Issues */}
                  <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">Symptoms We Fix</div>
                          <div className="text-[11px] text-slate-500">Morrisville Common Inquiries</div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {service.commonIssues.map((issue, iIndex) => (
                        <li key={iIndex} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0"></span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Service Guarantee:</span>
                      <span className="font-bold text-emerald-600">100% Quality Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* RESIDENTIAL & COMMERCIAL SECTION                             */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
              Service Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Residential &amp; Light Commercial Plumbing in Morrisville
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Whether you need quick home fixture repairs or regular commercial plumbing maintenance for your Morrisville retail or business location, Syd brings professional tools and independent accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Residential */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <HomeIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Residential Property Owners</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Single-family homes, townhomes, condos, and rental units. We treat your residence with absolute respect: shoe protectors, clean workspace, and complete safety testing.
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li>• Water heater flush &amp; replacement</li>
                <li>• Kitchen &amp; bathroom remodels &amp; fixtures</li>
                <li>• Main drain clearing &amp; unclogging</li>
                <li>• Emergency slab &amp; pipe leak repairs</li>
              </ul>
            </div>

            {/* Commercial */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Light Commercial Properties</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Morrisville business suites, retail shops, cafes, clinics, and professional offices. Rapid response to prevent business interruption and health code compliance issues.
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li>• Commercial restroom faucet &amp; flush valve repairs</li>
                <li>• Grease trap &amp; high-capacity drainage service</li>
                <li>• Code-compliant water heater systems</li>
                <li>• Backflow prevention &amp; line maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4-STEP REPAIR PROCESS                                        */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Our Standard
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">
            The Syd&apos;s Plumbing 4-Step Process
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            How we deliver consistent, stress-free plumbing results every single visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "Direct Consultation",
              desc: "You call +1 919-271-0999 and speak directly with Syd to describe the issue and arrange arrival."
            },
            {
              num: "02",
              title: "On-Site Diagnosis",
              desc: "We perform an in-depth inspection to discover the root cause, not just a surface symptom."
            },
            {
              num: "03",
              title: "Transparent Quote",
              desc: "You receive a clear, upfront quote before any work starts. No surprises or inflated fees."
            },
            {
              num: "04",
              title: "Master Craftsmanship",
              desc: "Repairs performed with premium components, pressure tested, thoroughly cleaned, and backed by Syd's guarantee."
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative">
              <div className="text-3xl font-black text-sky-200 mb-2">
                {step.num}
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQS SECTION                                                 */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Quick answers to common questions about plumbing services in Morrisville, NC.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-sky-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-sky-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL SERVICE CTA                                            */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-sky-50 border border-sky-100 rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <h3 className="text-2xl font-black text-slate-900">
            Ready to Schedule Your Plumbing Service?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Call Syd directly or request a free quote online. We are ready to assist you anywhere in Morrisville, NC.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Request Free Estimate</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
