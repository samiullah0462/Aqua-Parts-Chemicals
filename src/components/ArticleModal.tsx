import React from 'react';
import { X, Calendar, Clock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onConsultChemist: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onConsultChemist,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="bg-[#092442] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              Technical Resource Guide
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-300 font-mono">{article.category}</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Article Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092442] tracking-tight leading-snug">
              {article.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#0d5ca8]" />
                <strong>{article.author}</strong> ({article.authorRole})
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Hero Article Image */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 max-h-72">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Summary Callout */}
          <div className="p-4 bg-blue-50 border-l-4 border-[#0d5ca8] rounded-r-xl text-slate-700 text-sm leading-relaxed">
            <strong>Executive Summary:</strong> {article.summary}
          </div>

          {/* Parameters Strip if available */}
          {article.parameters && article.parameters.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs">
              {article.parameters.map((p, idx) => (
                <div key={idx}>
                  <span className="block text-slate-500 font-semibold uppercase text-[10px]">
                    {p.label}
                  </span>
                  <span className="block font-bold text-[#092442] text-sm mt-0.5 font-mono">
                    {p.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Paragraphs */}
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            {article.content ? (
              article.content.map((para, idx) => <p key={idx}>{para}</p>)
            ) : (
              <p>{article.summary}</p>
            )}
          </div>

          {/* Key Takeaways */}
          {article.keyTakeaways && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-[#092442] uppercase tracking-wider block">
                Key Engineering Takeaways:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#22a048] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Box */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Need technical support or custom chemical formulation for your facility?
            </div>
            <button
              onClick={() => {
                onClose();
                onConsultChemist();
              }}
              className="px-5 py-2.5 bg-[#0d5ca8] hover:bg-[#092442] text-white rounded-lg text-xs font-bold transition flex items-center gap-2 shadow"
            >
              <span>Consult Chemical Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
