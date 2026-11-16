import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Phone,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Waves,
  Wrench,
  ShieldCheck,
  Clock,
  Sparkles,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/servicesData';
import PageNavigation from '../components/PageNavigation';

export default function ServiceDetail({ onOpenQuote }) {
  const { slug } = useParams();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

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

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug);

  return (
    <div className="py-10 space-y-16">
      {/* Top Breadcrumb & Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
          <Link to="/" className="hover:text-sky-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/services" className="hover:text-sky-600">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">{service.title}</span>
        </div>

        {/* Hero Section of Service */}
        <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30">
              {service.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-lg transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Get Free Estimate</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Left Content: 8 Columns */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-4">
              <h2 className="text-2xl font-black text-slate-900">
                Service Overview &amp; What to Expect
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-xl font-black text-slate-900">
                Why Morrisville Property Owners Choose Syd For This Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The 4-Step Walkthrough */}
            {service.steps && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
                <h3 className="text-xl font-black text-slate-900">
                  Step-by-Step Execution Plan
                </h3>
                <div className="space-y-4">
                  {service.steps.map((st, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-xl bg-sky-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-sm font-black text-slate-900">{st.title}</div>
                        <div className="text-xs text-slate-600 mt-1">{st.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Symptoms Checklist */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-xl font-black text-slate-900">
                Frequent Signs You Need This Service
              </h3>
              <p className="text-xs text-slate-500">
                If you are noticing any of the following symptoms in your Morrisville home or business, contact Syd&apos;s Plumbing immediately to avoid worsening damage:
              </p>
              <div className="space-y-2 pt-2">
                {service.commonIssues.map((issue, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-slate-800 text-xs sm:text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: 4 Columns */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Call Box */}
            <div className="bg-gradient-to-br from-navy-950 to-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">Fast Local Dispatch</div>
                  <div className="text-base font-bold text-white">Call Syd Directly</div>
                </div>
              </div>

              <p className="text-xs text-slate-300">
                You speak directly to Syd. Transparent upfront quote, fast arrival, and high-quality craftsmanship.
              </p>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Request Online Estimate</span>
              </button>
            </div>

            {/* Service Area Badge */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-3">
              <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Local Service Area</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Morrisville &amp; Surrounding Communities
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We service all neighborhoods in Morrisville, NC (27560) as well as adjacent areas in Cary, RTP, and Apex.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
                <span>Licensed NC Plumber</span>
              </div>
            </div>

            {/* Other Services list */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Other Plumbing Services
              </h4>
              <div className="space-y-2">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/services/${other.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 text-slate-700 hover:text-sky-600 transition-colors text-xs font-bold group"
                  >
                    <span>{other.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Multi-Page Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageNavigation current="/services" />
      </div>
    </div>
  );
}
