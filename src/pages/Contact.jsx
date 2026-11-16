import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Calendar,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';
import PageNavigation from '../components/PageNavigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Emergency Plumbing Repairs',
    urgency: 'Emergency (Need immediate help)',
    neighborhood: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-10 space-y-16">
      {/* ============================================================ */}
      {/* HEADER SECTION                                               */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
          <Phone className="w-3.5 h-3.5 text-sky-600" />
          <span>Morrisville, NC Plumbing Support</span>
        </div>

        {/* Blueprint Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Get In Touch with Syd&apos;s Plumbing
        </h1>

        {/* Blueprint Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Have a plumbing issue or need an estimate? Reach out directly via our public service line. We look forward to helping you!
        </p>
      </section>

      {/* ============================================================ */}
      {/* MAIN CONTACT LAYOUT                                          */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                  <Phone className="w-6 h-6 fill-current" />
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider font-extrabold text-amber-400">
                    Primary Service Line (Click-to-Call)
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black mt-1">
                    {BUSINESS_INFO.phone}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Direct phone access to Syd. Speak with a local plumbing specialist immediately—no automated phone operators.
                </p>

                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg transition-all hover:scale-[1.02]"
                  >
                    <Phone className="w-5 h-5 fill-current" />
                    <span>Call Now: {BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Service Profile Details from Blueprint */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Business Profile Details
              </h3>

              {/* Service Area */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Service Area</div>
                  <div className="text-sm text-slate-700 font-semibold">{BUSINESS_INFO.location}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Serving Morrisville, NC (27560) and surrounding local Triangle communities.
                  </div>
                </div>
              </div>

              {/* Hours of Operation */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Hours of Operation</div>
                  <div className="text-sm text-slate-700 font-semibold">{BUSINESS_INFO.hours}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Fast booking dispatch for urgent plumbing issues.
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Clients Served</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {BUSINESS_INFO.targetAudience}
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Alert Box */}
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-5 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-800">
                <strong className="font-bold text-amber-900 block mb-0.5">Active Water Leak or Burst Pipe?</strong>
                Do not wait for form responses. Please call our direct line at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold underline text-slate-950">{BUSINESS_INFO.phone}</a> for immediate emergency routing and shut-off guidance.
              </div>
            </div>
          </div>

          {/* Right Column: Online Booking & Estimate Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft">
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  Online Booking &amp; Quotes
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  Request a Free Estimate
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Tell us about your plumbing problem or project. Syd will get back to you promptly with an upfront consultation.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your request has been delivered directly to Syd. We will contact you at <strong>{formData.phone}</strong> as soon as possible.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Miller"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(919) 271-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Morrisville Neighborhood / Address
                      </label>
                      <input
                        type="text"
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        placeholder="e.g. Town Hall Commons, Kitts Creek"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white transition-all"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="General Inspection / Other">General Inspection / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Urgency
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white transition-all"
                      >
                        <option value="Emergency (Need immediate help)">🚨 Emergency (Immediate help)</option>
                        <option value="Today (Same-day service)">⚡ Today (Same-day service)</option>
                        <option value="Within a few days">📅 Within a few days</option>
                        <option value="Flexible / Planning ahead">💬 Flexible / Planning ahead</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Problem Details / Notes
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe the issue (e.g. water leaking under the sink, noisy water heater, slow toilet drain)..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-black text-base shadow-md hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Free Estimate Request</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-xs text-slate-400 pt-1">
                    🔒 We respect your privacy. No spam. Transparent pricing on every job.
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Multi-Page Navigation Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageNavigation current="/contact" />
      </section>
    </div>
  );
}
