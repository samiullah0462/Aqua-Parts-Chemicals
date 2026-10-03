import React, { useState, useMemo } from 'react';
import { PageTab, Article } from '../types';
import { ARTICLES, COMPANY_INFO } from '../data/mockData';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  CheckCircle2,
  Sparkles,
  Phone,
  Bookmark,
  Share2
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

interface BlogPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenArticle: (article: Article) => void;
  onOpenQuote: (subject?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onOpenArticle,
  onOpenQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = ['All'];
    ARTICLES.forEach((a) => {
      if (!cats.includes(a.category)) {
        cats.push(a.category);
      }
    });
    return cats;
  }, []);

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchCat = selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.author.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = ARTICLES[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section - Clean Solid Navy */}
      <section className="bg-[#092442] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Water Treatment Knowledge Base & Field Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            TECHNICAL <span className="text-[#009fe3]">RESOURCES</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            In-depth engineering insights on RO antiscalant chemistry, membrane clean-in-place (CIP) protocols, dosing pump sizing, and particulate filtration standards written by Karachi water specialists.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Featured Article Spotlight */}
        {featuredArticle && !searchQuery && selectedCategory === 'All' && (
          <div className="mb-12 bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 hover:shadow-xl transition-all group">
            <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
              <img
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow">
                Featured Guide
              </div>
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredArticle.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#092442] mb-3 group-hover:text-cyan-700 transition-colors leading-snug">
                  {featuredArticle.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {featuredArticle.summary}
                </p>

                {/* Parameters Pill Grid */}
                {featuredArticle.parameters && (
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-6 text-center">
                    {featuredArticle.parameters.map((p, i) => (
                      <div key={i}>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">{p.label}</div>
                        <div className="text-xs font-bold text-slate-800 mt-0.5">{p.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                    AQ
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{featuredArticle.author}</div>
                    <div className="text-[10px] text-slate-400">{featuredArticle.authorRole}</div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenArticle(featuredArticle)}
                  className="bg-[#092442] hover:bg-[#0d3b66] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow flex items-center space-x-1.5"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filter Controls & Search */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200/80 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, keywords, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing <strong>{filteredArticles.length}</strong> technical publication(s)
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-[#092442] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/90 overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#092442]/90 backdrop-blur-md text-cyan-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  {article.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2.5">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug mb-2.5">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {article.summary}
                  </p>

                  {/* Technical Parameters */}
                  {article.parameters && (
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4 space-y-1">
                      {article.parameters.map((param, idx) => (
                        <div key={idx} className="flex justify-between items-center text-[11px]">
                          <span className="text-slate-400 font-medium">{param.label}:</span>
                          <span className="font-bold text-slate-800">{param.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    By <span className="font-semibold text-slate-700">{article.author}</span>
                  </div>
                  <button
                    onClick={() => onOpenArticle(article)}
                    className="text-cyan-600 hover:text-cyan-800 font-bold text-xs inline-flex items-center space-x-1 group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Chemist Consultation Banner - Solid Deep Navy */}
        <section className="mt-16 bg-[#092442] text-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs bg-slate-800 border border-slate-700 px-3 py-1 rounded-full inline-block mb-3">
                Expert Technical Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Have an unidentifiable scale or recurring biofouling problem?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Send a high-resolution photo of your scaled membrane surface or autopsied cartridge filter to our senior water chemist for instant advice.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenQuote('Scale Diagnosis Request')}
                className="bg-[#009fe3] hover:bg-[#0088c4] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-xs flex items-center justify-center space-x-2"
              >
                <span>Ask a Chemist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/923333307845?text=${encodeURIComponent('Hello! I have a question regarding membrane scaling and chemical dosing.')}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-xs flex items-center justify-center space-x-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Lab</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
