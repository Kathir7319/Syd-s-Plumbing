import React, { useState } from 'react';
import { X, Phone, CheckCircle, Send, Clock, Shield, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Emergency Plumbing Repairs',
    urgency: 'Emergency (Need immediate help)',
    propertyType: 'Residential',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white p-6 relative">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold mb-2 border border-sky-500/30">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Fast Local Quote • Morrisville, NC</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black">
            Request a Free Plumbing Estimate
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Fill in your details or call Syd directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 font-bold underline">{BUSINESS_INFO.phone}</a>.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Estimate Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name || 'neighbor'}</strong>! Syd will review your project details and contact you at <strong>{formData.phone || 'your phone number'}</strong> promptly.
              </p>

              {/* Direct Call Recommendation */}
              <div className="mt-6 p-4 rounded-2xl bg-sky-50 border border-sky-100 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Need Immediate Assistance?</div>
                    <div className="text-xs text-slate-600">Don&apos;t wait on email for emergencies. Call directly:</div>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sky-600 hover:text-sky-700 font-black text-sm">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Miller"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
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
                    placeholder="(919) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition-all"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General Inspection / Other">General Inspection / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Urgency Level
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition-all"
                  >
                    <option value="Emergency (Need immediate help)">🚨 Emergency (Immediate help)</option>
                    <option value="Today (Same-day service)">⚡ Today (Same-day service)</option>
                    <option value="Within a few days">📅 Within a few days</option>
                    <option value="Flexible / Planning ahead">💬 Flexible / Planning ahead</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Property Type
                  </label>
                  <div className="flex gap-2">
                    {['Residential', 'Commercial'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, propertyType: type })}
                        className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                          formData.propertyType === type
                            ? 'bg-sky-50 border-sky-500 text-sky-700'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Briefly Describe the Issue
                </label>
                <textarea
                  rows="3"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="e.g. Water leaking under the kitchen sink, or water heater is not producing hot water..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-sm shadow-md hover:shadow-sky-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free Quote</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>

              <div className="text-center text-[11px] text-slate-400 pt-1">
                🔒 Privacy guaranteed. Clear upfront communication. No hidden fees.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
