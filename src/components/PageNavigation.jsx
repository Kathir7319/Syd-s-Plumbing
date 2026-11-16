import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layers, FileText } from 'lucide-react';

const PAGES = [
  { path: '/', label: '1. Home', title: 'Main Overview & Emergency Dispatch' },
  { path: '/services', label: '2. Services', title: 'Full Plumbing Solutions' },
  { path: '/about', label: '3. About', title: 'Syd\'s Story & Local Roots' },
  { path: '/contact', label: '4. Contact', title: 'Free Estimates & Booking' },
  { path: '/about-contact', label: '5. About & Contact', title: 'Blueprint Section 3 View' }
];

export default function PageNavigation({ current }) {
  const currentIndex = PAGES.findIndex(p => p.path === current);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex >= 0 && currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 my-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-slate-900">
              Multi-Page Website Navigation
            </div>
            <div className="text-[11px] text-slate-500">
              Browse through all 5 dedicated sections and individual sub-pages
            </div>
          </div>
        </div>

        {/* Page Switcher Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {PAGES.map((page) => {
            const isActive = page.path === current;
            return (
              <Link
                key={page.path}
                to={page.path}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {page.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Prev / Next Pagination Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevPage ? (
          <Link
            to={prevPage.path}
            className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-all group"
          >
            <div className="w-9 h-9 rounded-xl bg-white text-slate-700 group-hover:text-sky-600 flex items-center justify-center flex-shrink-0 shadow-sm">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Previous Page</div>
              <div className="text-sm font-black text-slate-900 group-hover:text-sky-700">{prevPage.label}</div>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block"></div>
        )}

        {nextPage ? (
          <Link
            to={nextPage.path}
            className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-all group sm:col-start-2 text-right"
          >
            <div className="text-right flex-grow">
              <div className="text-[10px] uppercase font-bold text-slate-400">Next Page</div>
              <div className="text-sm font-black text-slate-900 group-hover:text-sky-700">{nextPage.label}</div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-white text-slate-700 group-hover:text-sky-600 flex items-center justify-center flex-shrink-0 shadow-sm ml-3">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
