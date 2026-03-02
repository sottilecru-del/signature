/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Phone, 
  MessageCircle, 
  Check, 
  Star, 
  MapPin, 
  Camera, 
  TrendingUp, 
  Bot, 
  Globe, 
  Zap, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Award,
  Users,
  Clock,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  BarChart3,
  UserCheck,
  Target,
  Cpu,
  Mail,
  Layout,
  Rocket,
  Trophy,
  PieChart,
  Activity,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEOServices from './components/SEOServices';
import GMBRanking from './components/GMBRanking';
import AICRM from './components/AICRM';
import ProductPhotography from './components/ProductPhotography';
import FAQPage from './components/FAQPage';
import ServicesPage from './components/ServicesPage';
import PaidMediaAds from './components/PaidMediaAds';
import GoogleAds from './components/GoogleAds';
import AITools from './components/AITools';
import AmazonListing from './components/AmazonListing';
import ShopifySEO from './components/ShopifySEO';
import EtsySEO from './components/EtsySEO';
import LawFirmMarketing from './components/LawFirmMarketing';
import HealthcareMarketing from './components/HealthcareMarketing';
import CompleteFAQ from './components/CompleteFAQ';
import Packages from './components/Packages';
import ReviewsPage from './components/ReviewsPage';

// --- Components ---

const TopBar = () => (
  <div className="bg-[#1B3A6B] text-white text-xs py-1.5 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-1"><Globe size={14} className="text-orange-400" /> Serving: USA | UK | Australia | Bangladesh</span>
    </div>
    <div className="flex items-center gap-4">
      <a href="#contact" className="hover:underline">Sign In</a>
      <a href="#contact" className="hover:underline">Register</a>
      <a href="https://wa.me/yourphonenumber" target="_blank" className="flex items-center gap-1 hover:underline">
        <MessageCircle size={14} className="text-[#25D366]" />
        WhatsApp Us
      </a>
    </div>
  </div>
);

const Header = () => (
  <header className="bg-white border-b-2 border-neutral-100 py-3 px-4 md:px-8 sticky top-0 z-50 shadow-sm">
    <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center gap-4 md:gap-8">
      <div className="flex-shrink-0">
        <div className="font-condensed text-2xl font-bold text-[#1B3A6B] leading-none">
          Rajput<span className="text-[#FF6B00]">Signature</span>
        </div>
        <div className="text-[10px] text-neutral-400 mt-0.5 tracking-wider uppercase">Digital Marketing Agency</div>
      </div>

      <div className="flex-1 min-w-[300px] hidden lg:flex">
        <div className="flex w-full max-w-2xl border-2 border-[#1B3A6B] rounded-md overflow-hidden">
          <select className="bg-neutral-50 px-3 text-xs font-medium border-r border-[#1B3A6B] outline-none cursor-pointer">
            <option>All Services</option>
            <option>SEO</option>
            <option>Paid Ads</option>
            <option>CRM / AI</option>
            <option>GMB Ranking</option>
            <option>Photography</option>
          </select>
          <input 
            type="text" 
            placeholder="Search for SEO, Paid Ads, CRM, GMB Ranking..." 
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <button className="bg-[#FF6B00] text-white px-6 font-bold hover:bg-[#e05e00] transition-colors">
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <a href="https://wa.me/yourphonenumber" target="_blank" className="hidden sm:flex items-center gap-1 text-[#1B3A6B] font-medium text-sm">
          <Phone size={16} />
          Chat
        </a>
        <a href="#contact" className="bg-[#1B3A6B] text-white px-4 py-2 rounded font-bold text-sm hover:bg-[#152d55] transition-colors whitespace-nowrap">
          Get Free Audit
        </a>
      </div>
    </div>
  </header>
);

const NavBar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const mainNav = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services', hasSubmenu: true },
    { name: 'Packages', id: 'packages' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'FAQ', id: 'faq' }
  ];

  const serviceSubmenu = [
    { name: 'SEO Services', id: 'seo' },
    { name: 'Paid Media Ads', id: 'paid-ads' },
    { name: 'Google Ads', id: 'google-ads' },
    { name: 'AI CRM Solutions', id: 'ai-crm' },
    { name: 'AI Tools Setup', id: 'ai-tools' },
    { name: 'GMB Ranking', id: 'gmb-ranking' },
    { name: 'Product Photography', id: 'photography' },
    { name: 'Amazon Listing', id: 'amazon-listing' },
    { name: 'Shopify SEO', id: 'shopify-seo' },
    { name: 'Etsy SEO', id: 'etsy-seo' },
    { name: 'Law Firm Marketing', id: 'law-firm-marketing' },
    { name: 'Healthcare Marketing', id: 'healthcare-marketing' }
  ];

  return (
    <nav className="bg-[#1B3A6B] px-4 md:px-8 sticky top-[72px] z-40">
      <div className="max-w-screen-2xl mx-auto flex items-center">
        {mainNav.map((item, idx) => (
          <div 
            key={idx} 
            className="relative group"
            onMouseEnter={() => item.hasSubmenu && setIsServicesOpen(true)}
            onMouseLeave={() => item.hasSubmenu && setIsServicesOpen(false)}
          >
            <button 
              onClick={() => setCurrentPage(item.id)}
              className={`px-4 py-3 text-sm font-medium border-r border-white/10 hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer ${currentPage === item.id || (item.hasSubmenu && serviceSubmenu.some(s => s.id === currentPage)) ? 'bg-white/15 text-white' : 'text-white/80'}`}
            >
              {item.name}
              {item.hasSubmenu && <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />}
            </button>

            {item.hasSubmenu && (
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-b-lg overflow-hidden border-t-2 border-orange-500 z-50 py-2"
                  >
                    <div className="grid grid-cols-1">
                      {serviceSubmenu.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            setCurrentPage(sub.id);
                            setIsServicesOpen(false);
                          }}
                          className={`px-4 py-2 text-left text-xs font-bold hover:bg-neutral-50 transition-colors flex items-center justify-between group/item ${currentPage === sub.id ? 'text-orange-500 bg-orange-50' : 'text-[#1B3A6B]'}`}
                        >
                          {sub.name}
                          <ArrowRight size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-orange-500" />
                        </button>
                      ))}
                      <div className="border-t border-neutral-100 mt-2 pt-2">
                        <button
                          onClick={() => {
                            setCurrentPage('services');
                            setIsServicesOpen(false);
                          }}
                          className="px-4 py-2 text-left text-xs font-black text-orange-500 hover:bg-orange-50 w-full flex items-center justify-between"
                        >
                          View All Services
                          <Globe size={12} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', url: '', country: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#1B3A6B] via-[#0f2347] to-[#1a3a6b] py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      
      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-[1fr_350px] gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-condensed text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Digital Marketing Agency for <span className="text-[#FF6B00]">USA, UK & Australia</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            SEO Services • Paid Media Ads • AI CRM Solutions • GMB Ranking • Product Photography
          </p>
          
          <div className="flex w-full max-w-xl bg-white rounded-md overflow-hidden mb-6 shadow-2xl">
            <input 
              type="text" 
              placeholder="Search: SEO, Google Ads, CRM, GMB..." 
              className="flex-1 px-4 py-4 text-neutral-800 outline-none"
            />
            <button className="bg-[#FF6B00] text-white px-8 font-bold hover:bg-[#e05e00] transition-colors">
              Find Service
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {['SEO Audit', 'Google Ads', 'CRM Setup', 'GMB Ranking', 'Meta Ads', 'Product Photos', 'AI Automation', 'Link Building'].map((tag, idx) => (
              <span key={idx} className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-white/20 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="bg-[#FF6B00] py-3 px-6 text-center">
            <h3 className="text-white font-bold text-sm">Get Free Audit — 24hr Reply</h3>
            <p className="text-white/80 text-[10px] uppercase tracking-wider">No obligation. 100% free.</p>
          </div>
          <div className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Your Full Name *" 
                  required 
                  className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none"
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Business Email *" 
                  required 
                  className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none"
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
                <input 
                  type="url" 
                  placeholder="Your Website URL *" 
                  required 
                  className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none"
                  onChange={(e) => setFormState({...formState, url: e.target.value})}
                />
                <select 
                  required 
                  className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white"
                  onChange={(e) => setFormState({...formState, country: e.target.value})}
                >
                  <option value="">Select Country *</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Bangladesh</option>
                  <option>Canada</option>
                </select>
                <select 
                  className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white"
                  onChange={(e) => setFormState({...formState, service: e.target.value})}
                >
                  <option value="">Service Needed</option>
                  <option>SEO Services</option>
                  <option>Paid Media Ads</option>
                  <option>AI CRM Setup</option>
                  <option>GMB Ranking</option>
                  <option>Product Photography</option>
                </select>
                <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors">
                  Send Free Audit Request →
                </button>
                <a href="https://wa.me/yourphonenumber" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 rounded font-bold text-xs hover:bg-[#1fb855] transition-colors">
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                <Check className="mx-auto text-green-500 mb-2" size={32} />
                <h4 className="text-green-800 font-bold text-sm mb-1">Request Sent Successfully!</h4>
                <p className="text-green-700 text-xs">We will analyze your website and reply within 24 hours.</p>
              </div>
            )}
            <div className="mt-4 flex justify-center gap-4 text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1"><ShieldCheck size={12} /> Safe</span>
              <span className="flex items-center gap-1"><Check size={12} /> No Spam</span>
              <span className="flex items-center gap-1"><Clock size={12} /> 24hr Reply</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TrustTicker = () => (
  <div className="bg-[#FFF3E0] border-y border-[#FFD5AA] py-2 px-4 md:px-8 overflow-hidden">
    <div className="max-w-screen-2xl mx-auto flex items-center gap-6">
      <div className="bg-[#FF6B00] text-white text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0 animate-pulse">LIVE</div>
      <div className="flex-1 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[
            '200+ Keywords ranked on Page 1',
            '4.8X Average ROAS for paid media clients',
            '63% average organic traffic growth in 6 months',
            'Top 3 GMB ranking for 90% of local SEO clients',
            '40% lower cost-per-lead with combined SEO + Ads'
          ].map((item, idx) => (
            <span key={idx} className="text-xs text-neutral-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full"></span>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2 flex-shrink-0">
        {['USA', 'UK', 'AUS', 'BD'].map((market, idx) => (
          <span key={idx} className="bg-white border border-neutral-200 text-[10px] px-2 py-0.5 rounded font-medium text-neutral-700 flex items-center gap-1">
            <Globe size={10} className="text-[#1B3A6B]" /> {market}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Categories = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <section className="py-12 px-4 md:px-8 bg-white border-b border-neutral-100">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-end mb-8 border-b-2 border-[#1B3A6B] pb-3">
        <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B]">Browse by Service Category</h2>
        <button onClick={() => setCurrentPage('services')} className="text-[#FF6B00] text-xs font-bold hover:underline">View All Services →</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { icon: <Search size={32} />, title: 'SEO Services', sub: 'International SEO', id: 'seo' },
          { icon: <TrendingUp size={32} />, title: 'Paid Media Ads', sub: 'Google, Meta, LinkedIn', id: 'paid-ads' },
          { icon: <Bot size={32} />, title: 'AI CRM Solutions', sub: 'Lead Automation', id: 'ai-crm' },
          { icon: <MapPin size={32} />, title: 'GMB Ranking', sub: 'Local SEO & Maps', id: 'gmb-ranking' },
          { icon: <Camera size={32} />, title: 'Product Photography', sub: 'E-commerce Ready', id: 'photography' },
          { icon: <Layout size={32} />, title: 'All Services', sub: 'Full Portfolio', id: 'services' }
        ].map((cat, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentPage(cat.id)}
            className="flex flex-col items-center text-center p-6 border border-neutral-100 rounded-lg hover:border-[#1B3A6B] hover:shadow-lg transition-all group cursor-pointer"
          >
            <div className="text-[#1B3A6B] group-hover:text-[#FF6B00] transition-colors mb-4">{cat.icon}</div>
            <h4 className="text-sm font-bold text-neutral-800 mb-1">{cat.title}</h4>
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">{cat.sub}</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon, title, description, tags, price, per, badge, premium, id, setCurrentPage }: any) => (
  <div className="card mb-6 group hover:shadow-xl transition-all">
    <div className="flex flex-col md:grid md:grid-cols-[120px_1fr_200px]">
      <div className="bg-neutral-50 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-neutral-100 text-[#1B3A6B]">
        {icon}
      </div>
      <div className="p-6">
        {badge && (
          <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded mb-2 ${premium ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
            {badge}
          </span>
        )}
        <h3 className="text-lg font-bold text-[#1B3A6B] mb-2">{title}</h3>
        <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag: string, idx: number) => (
            <span key={idx} className="bg-[#f0f4ff] border border-[#d0d9f0] text-[#1B3A6B] text-[10px] font-medium px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        {id && setCurrentPage && (
          <button 
            onClick={() => setCurrentPage(id)}
            className="text-[#FF6B00] text-xs font-bold hover:underline flex items-center gap-1"
          >
            Learn More About This Service <ArrowRight size={14} />
          </button>
        )}
      </div>
      <div className="bg-neutral-50 p-6 flex flex-col items-center justify-center gap-3 border-t md:border-t-0 md:border-l border-neutral-100">
        <div className="text-center">
          <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">Starting from</span>
          <span className="text-2xl font-bold text-[#1B3A6B]">{price}</span>
          <span className="text-[10px] text-neutral-400 block">{per}</span>
        </div>
        <button className="w-full btn-primary text-sm py-2 px-4 shadow-md">Send Enquiry</button>
        <a href="https://wa.me/yourphonenumber" target="_blank" className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white text-xs font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
          <MessageCircle size={14} /> WhatsApp
        </a>
      </div>
    </div>
    <div className="bg-neutral-50/50 border-t border-neutral-100 py-2 px-6 flex flex-wrap gap-4">
      <span className="text-[10px] text-neutral-500 flex items-center gap-1"><Star size={12} className="text-[#FF6B00]" /> <strong>4.9/5</strong> (38 Reviews)</span>
      <span className="text-[10px] text-neutral-500 flex items-center gap-1"><Globe size={12} /> Serving <strong>USA, UK, Australia</strong></span>
      <span className="text-[10px] text-green-600 font-bold flex items-center gap-1"><ShieldCheck size={12} /> Verified Agency</span>
    </div>
  </div>
);

const Sidebar = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <aside className="space-y-6">
      <div className="card border-t-4 border-t-[#1B3A6B]">
        <div className="bg-[#1B3A6B] p-4 text-white">
          <h3 className="font-bold text-sm">Get a Free Digital Marketing Audit</h3>
          <p className="text-[10px] text-white/70">Response guaranteed within 24 hours</p>
        </div>
        <div className="p-5">
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1 block">Your Name *</label>
                <input type="text" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1 block">Business Email *</label>
                <input type="email" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1 block">Website URL *</label>
                <input type="url" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1 block">Service Needed</label>
                <select className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white">
                  <option>SEO Services</option>
                  <option>Paid Media Ads</option>
                  <option>AI CRM Setup</option>
                  <option>GMB Ranking</option>
                </select>
              </div>
              <button type="submit" className="w-full btn-primary text-sm py-3 mt-2 shadow-lg">Send Enquiry Now →</button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
              <Check className="mx-auto text-green-500 mb-2" size={24} />
              <h4 className="text-green-800 font-bold text-sm">Audit Requested!</h4>
              <p className="text-green-700 text-[10px]">We'll be in touch within 24 hours.</p>
            </div>
          )}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-200"></div></div>
            <span className="relative bg-white px-3 text-[10px] text-neutral-400 font-bold">OR</span>
          </div>
          <a href="https://wa.me/yourphonenumber" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded font-bold text-sm hover:bg-[#1fb855] transition-colors shadow-md">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="card">
        <div className="bg-neutral-50 p-3 border-b border-neutral-100 font-bold text-xs text-[#1B3A6B] uppercase tracking-widest">Why Choose Us?</div>
        <div className="p-4">
          <ul className="space-y-3">
            {[
              { text: 'Specialized in USA, UK & Australia markets only', icon: <Globe size={14} /> },
              { text: 'No India-based SEO tactics — only high-value strategies', icon: <ShieldCheck size={14} /> },
              { text: 'Transparent monthly reporting with real metrics', icon: <BarChart3 size={14} /> },
              { text: 'Dedicated account manager for every client', icon: <UserCheck size={14} /> },
              { text: 'Results-first approach — we track revenue', icon: <Target size={14} /> },
              { text: 'AI-powered tools integrated into every service', icon: <Cpu size={14} /> }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2 text-xs text-neutral-600 leading-relaxed">
                <div className="text-[#1B3A6B] flex-shrink-0 mt-0.5">{item.icon}</div>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="bg-neutral-50 p-3 border-b border-neutral-100 font-bold text-xs text-[#1B3A6B] uppercase tracking-widest">Our Track Record</div>
        <div className="p-4 grid grid-cols-2 gap-3">
          {[
            { num: '200+', label: 'Keywords Ranked' },
            { num: '4.8X', label: 'Avg. ROAS' },
            { num: '63%', label: 'Traffic Growth' },
            { num: 'Top 3', label: 'GMB Rankings' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#f0f4ff] p-3 rounded text-center">
              <span className="block text-lg font-bold text-[#1B3A6B]">{stat.num}</span>
              <span className="text-[9px] text-neutral-500 uppercase font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

const PackageCard = ({ title, price, features, featured }: any) => (
  <div className={`card relative flex flex-col ${featured ? 'border-2 border-[#FF6B00] shadow-xl scale-105 z-10' : ''}`}>
    {featured && (
      <div className="absolute top-4 right-0 bg-[#FF6B00] text-white text-[10px] font-bold px-3 py-1 rounded-l-md shadow-md">
        BEST VALUE
      </div>
    )}
    <div className="bg-neutral-50 p-6 text-center border-b border-neutral-100 flex flex-col items-center">
      <div className="text-[#1B3A6B] mb-2">
        {title === 'Starter' && <Rocket size={24} />}
        {title === 'Growth' && <Trophy size={24} />}
        {title === 'Dominator' && <Zap size={24} />}
      </div>
      <h3 className="text-lg font-bold text-[#1B3A6B] mb-1">{title}</h3>
      <div className="text-3xl font-bold text-[#FF6B00]">{price} <span className="text-xs text-neutral-400 font-normal">/ month</span></div>
    </div>
    <div className="p-6 flex-1">
      <ul className="space-y-3 mb-8">
        {features.map((f: any, idx: number) => (
          <li key={idx} className={`flex gap-2 text-xs ${f.na ? 'text-neutral-300 line-through' : 'text-neutral-600'}`}>
            {f.na ? <Zap size={14} className="text-neutral-200" /> : <Check size={14} className="text-green-600" />}
            {f.text}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded font-bold text-sm transition-all ${featured ? 'bg-[#1B3A6B] text-white hover:bg-[#152d55]' : 'border-2 border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white'}`}>
        Get {title} Plan
      </button>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-lg mb-3 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors"
      >
        <span className="text-sm font-bold text-[#1B3A6B]">{question}</span>
        {isOpen ? <ChevronUp size={18} className="text-[#1B3A6B]" /> : <ChevronDown size={18} className="text-[#1B3A6B]" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-sm text-neutral-600 leading-relaxed bg-white border-t border-neutral-200">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#1B3A6B] text-white pt-16">
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <div className="font-condensed text-3xl font-bold">
          Rajput<span className="text-[#FF6B00]">Signature</span>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          A full-service digital marketing agency for businesses targeting USA, UK, Australia, and Bangladesh. We deliver SEO, paid media, AI CRM, GMB ranking, and product photography that grows your revenue.
        </p>
        <div className="flex gap-3">
          {['USA', 'UK', 'AUS', 'BD'].map((f, i) => (
            <span key={i} className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
              <Globe size={10} /> {f}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Facebook size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
          <Twitter size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
          <Linkedin size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
          <Instagram size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div>
        <h4 className="text-[#FFD5AA] font-bold text-xs uppercase tracking-widest mb-6">Services</h4>
        <ul className="space-y-3 text-sm text-white/60">
          <li><a href="#" className="hover:text-white transition-colors">SEO Services</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Google Ads</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Meta Ads</a></li>
          <li><a href="#" className="hover:text-white transition-colors">AI CRM Solutions</a></li>
          <li><a href="#" className="hover:text-white transition-colors">GMB Ranking</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Product Photography</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-[#FFD5AA] font-bold text-xs uppercase tracking-widest mb-6">Markets</h4>
        <ul className="space-y-3 text-sm text-white/60">
          <li><a href="#" className="hover:text-white transition-colors">SEO Agency USA</a></li>
          <li><a href="#" className="hover:text-white transition-colors">SEO Agency UK</a></li>
          <li><a href="#" className="hover:text-white transition-colors">SEO Agency Australia</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Digital Marketing Bangladesh</a></li>
          <li><a href="#" className="hover:text-white transition-colors">International SEO</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-[#FFD5AA] font-bold text-xs uppercase tracking-widest mb-6">Company</h4>
        <ul className="space-y-3 text-sm text-white/60">
          <li><a href="#" className="hover:text-white transition-colors">Free SEO Audit</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Pricing Packages</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
          <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          <li><a href="#" className="hover:text-white transition-colors">WhatsApp Support</a></li>
          <li><a href="https://rajputsignature.co.in" className="hover:text-white transition-colors flex items-center gap-1">
            rajputsignature.co.in <ExternalLink size={12} />
          </a></li>
        </ul>
      </div>
    </div>
    
    <div className="bg-[#0f2347] py-6 px-4 md:px-8 text-center text-xs text-white/40 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 Rajput Signature. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen font-sans">
      <TopBar />
      <Header />
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <TrustTicker />
            
            <main className="max-w-screen-2xl mx-auto py-12 px-4 md:px-8">
              <Categories setCurrentPage={setCurrentPage} />
              
              <div className="grid lg:grid-cols-[1fr_350px] gap-12 mt-12">
                {/* Main Content */}
                <div className="space-y-12">
                  <section id="services">
                    <div className="flex justify-between items-end mb-8 border-b-2 border-[#1B3A6B] pb-3">
                      <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B]">Our Digital Marketing Services</h2>
                      <a href="#contact" className="text-[#FF6B00] text-xs font-bold hover:underline">Get Free Audit →</a>
                    </div>
                    
                    <ServiceCard 
                      icon={<Search size={48} />}
                      title="SEO Services for USA, UK & Australian Markets"
                      description="We build long-term organic visibility using proven on-page, technical, and off-page SEO strategies. No shortcuts. No black-hat tactics. Just sustainable rankings that compound over time and deliver real leads from Google."
                      tags={['Technical SEO', 'On-Page SEO', 'Link Building', 'Content Strategy', 'International SEO']}
                      price="$499"
                      per="per month"
                      badge="Most Popular"
                      premium
                      id="seo"
                      setCurrentPage={setCurrentPage}
                    />

                    <ServiceCard 
                      icon={<TrendingUp size={48} />}
                      title="Paid Media Advertising — Google, Meta & LinkedIn Ads"
                      description="We manage paid ad campaigns that deliver measurable return. Our media buyers focus on reducing cost-per-lead while improving lead quality. Every dollar of your ad budget is tracked, optimized, and accountable."
                      tags={['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting', 'Landing Pages']}
                      price="$599"
                      per="per month"
                      badge="High ROI"
                      id="paid-ads"
                      setCurrentPage={setCurrentPage}
                    />

                    <ServiceCard 
                      icon={<Bot size={48} />}
                      title="AI-Powered CRM Solutions & Lead Automation"
                      description="Stop losing leads to slow follow-up. We build smart CRM systems powered by AI that automatically nurture, segment, and convert your leads without your team lifting a finger. Integrated with your website, ads, and WhatsApp."
                      tags={['GoHighLevel', 'HubSpot', 'Pipedrive', 'Email Automation', 'WhatsApp Bot']}
                      price="$399"
                      per="setup + monthly"
                      badge="AI Powered"
                      id="ai-crm"
                      setCurrentPage={setCurrentPage}
                    />

                    <ServiceCard 
                      icon={<MapPin size={48} />}
                      title="GMB Ranking & Local SEO Optimization"
                      description="Ranking in the Google local 3-pack is one of the most profitable positions in search. We optimize your Google Business Profile from top to bottom and get you into the top 3 map results for your most important keywords."
                      tags={['GBP Optimization', 'Review Strategy', 'Citation Building', 'Local Content', 'Map Pack Ranking']}
                      price="$299"
                      per="per month"
                      badge="Quick Wins"
                      id="gmb-ranking"
                      setCurrentPage={setCurrentPage}
                    />

                    <ServiceCard 
                      icon={<Camera size={48} />}
                      title="Professional Product Photography for E-commerce"
                      description="Your product images are your 24/7 salesperson. We deliver e-commerce ready white background shots, lifestyle images, and 360-degree product photography optimized for Amazon, Shopify, and brand websites."
                      tags={['White Background', 'Lifestyle Shots', '360 Degree', 'Amazon Ready', 'Web Optimized']}
                      price="$199"
                      per="per product set"
                      badge="E-commerce"
                      id="photography"
                      setCurrentPage={setCurrentPage}
                    />
                  </section>

                  <section className="bg-white p-8 rounded-lg border border-neutral-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 border-l-4 border-[#FF6B00] pl-4">
                      <Award className="text-[#1B3A6B]" size={24} />
                      <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B]">About Rajput Signature</h2>
                    </div>
                    <div className="prose prose-sm max-w-none text-neutral-600 space-y-4 leading-relaxed">
                      <p>If your business is targeting customers in the USA, UK, Australia, or Bangladesh, you need a digital marketing partner who understands those markets specifically — not just a generic agency that applies the same playbook to every client. That is exactly what Rajput Signature was built to do.</p>
                      
                      <div className="flex items-center gap-2 text-lg font-bold text-neutral-800 mt-8">
                        <TrendingUp size={20} className="text-[#FF6B00]" />
                        <h3>SEO Services That Rank in Competitive International Markets</h3>
                      </div>
                      <p>International SEO is a different game. When you want to rank for keywords in the USA, you are competing with agencies that have been building domain authority for years. Our approach is surgical. We start with a deep technical audit, fix what is broken, then build a content and backlink strategy designed to beat your specific competitors.</p>
                      <p><strong>We go three levels deep on keyword research</strong> — primary keywords, secondary variations, and long-tail buyer-intent phrases that your competitors are ignoring. These long-tail terms deliver the fastest wins and build the foundation for ranking bigger keywords over time.</p>
                      
                      <div className="flex items-center gap-2 text-lg font-bold text-neutral-800 mt-8">
                        <Bot size={20} className="text-[#FF6B00]" />
                        <h3>AI CRM: Stop Losing Leads You Already Paid For</h3>
                      </div>
                      <p>Most businesses lose a significant portion of their leads simply because they do not follow up fast enough. A lead that does not hear back within minutes of submitting a form is far less likely to convert. Our AI CRM solutions solve this completely — automated responses, personalized follow-up sequences, and AI-powered lead scoring so your team closes more with less effort.</p>
                    </div>
                  </section>
                </div>

                {/* Sidebar */}
                <Sidebar />
              </div>

              {/* Packages Section */}
              <section id="packages" className="mt-20">
                <div className="flex justify-between items-end mb-10 border-b-2 border-[#1B3A6B] pb-3">
                  <h2 className="font-condensed text-3xl font-bold text-[#1B3A6B]">Service Packages & Pricing</h2>
                  <a href="#contact" className="text-[#FF6B00] text-sm font-bold hover:underline">Get Custom Quote →</a>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <PackageCard 
                    title="Starter"
                    price="$499"
                    features={[
                      { text: '10 Keywords SEO Campaign' },
                      { text: 'Technical SEO Audit' },
                      { text: 'On-Page Optimization (5 pages)' },
                      { text: 'GMB Profile Optimization' },
                      { text: 'Monthly Ranking Report' },
                      { text: 'Basic Content Creation' },
                      { text: 'Paid Ads Management', na: true },
                      { text: 'CRM Setup', na: true },
                      { text: 'Link Building Campaign', na: true }
                    ]}
                  />
                  <PackageCard 
                    title="Growth"
                    price="$1,299"
                    featured
                    features={[
                      { text: '25 Keywords SEO Campaign' },
                      { text: 'Full Technical SEO' },
                      { text: 'On-Page Optimization (15 pages)' },
                      { text: 'GMB Ranking + Citation Building' },
                      { text: 'Link Building (8 links/month)' },
                      { text: 'Content Creation (4 posts/month)' },
                      { text: 'Google Ads Management' },
                      { text: 'Basic CRM Setup' },
                      { text: 'Weekly Ranking Reports' }
                    ]}
                  />
                  <PackageCard 
                    title="Dominator"
                    price="$2,499"
                    features={[
                      { text: '50+ Keywords SEO Campaign' },
                      { text: 'Advanced Technical SEO' },
                      { text: 'Full Website Optimization' },
                      { text: 'GMB + Local SEO Domination' },
                      { text: 'Link Building (20+ links/month)' },
                      { text: 'Content Creation (8 posts/month)' },
                      { text: 'Google + Meta + LinkedIn Ads' },
                      { text: 'Full AI CRM Setup + Automation' },
                      { text: 'Daily Monitoring + Support' }
                    ]}
                  />
                </div>
              </section>

              {/* Testimonials */}
              <section id="reviews" className="mt-20">
                <div className="flex justify-between items-end mb-10 border-b-2 border-[#1B3A6B] pb-3">
                  <h2 className="font-condensed text-3xl font-bold text-[#1B3A6B]">Client Reviews & Testimonials</h2>
                  <div className="flex items-center gap-1 text-[#FF6B00] font-bold text-sm">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <span className="ml-2 text-neutral-600">4.9/5 Average</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { 
                      name: 'James Mitchell', 
                      role: 'E-commerce Owner', 
                      loc: 'Texas, USA', 
                      text: 'We went from page 4 to position 2 for our main keyword in the USA within five months. Methodical, transparent, and they actually explained what they were doing at every step. Highly recommended.',
                      initials: 'JM'
                    },
                    { 
                      name: 'Sarah Bennett', 
                      role: 'Marketing Director', 
                      loc: 'London, UK', 
                      text: 'Our cost per lead dropped by 38% in the first two months. They restructured our entire Google Ads account and the quality of leads improved dramatically. We are getting fewer tyre-kickers and more genuine buyers.',
                      initials: 'SB'
                    },
                    { 
                      name: 'Raj Kumar', 
                      role: 'SaaS Founder', 
                      loc: 'Sydney, Australia', 
                      text: 'The CRM automation they built for us is remarkable. Leads that used to go cold are now nurtured automatically and our sales team closes more deals with significantly less manual effort. Genuinely changed how we operate.',
                      initials: 'RK'
                    }
                  ].map((review, idx) => (
                    <div key={idx} className="card p-6 bg-neutral-50/50">
                      <div className="flex gap-1 text-[#FF6B00] mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-sm text-neutral-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#1B3A6B] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {review.initials}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-neutral-800">{review.name}</div>
                          <div className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">{review.role}, {review.loc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mt-20 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-condensed text-3xl font-bold text-[#1B3A6B] mb-2">Frequently Asked Questions</h2>
                  <p className="text-neutral-500 text-sm">Everything you need to know about our services and process</p>
                </div>
                <div className="space-y-4">
                  <FAQItem 
                    question="How long does SEO take to show results for USA or UK markets?"
                    answer="Most clients start seeing measurable keyword movement in 60 to 90 days. Significant organic traffic growth typically happens between months 4 and 6. The timeline depends on your starting domain authority and how competitive your target keywords are in your specific market."
                  />
                  <FAQItem 
                    question="Do you work with clients in USA, UK and Australia only?"
                    answer="Our primary focus is the USA, UK, Australia, and Bangladesh. We do not offer India-focused SEO. All our strategies are specifically tuned for the search behaviors, competition levels, and conversion patterns of these high-value international markets."
                  />
                  <FAQItem 
                    question="What does GMB ranking optimization involve?"
                    answer="GMB ranking refers to how your Google Business Profile appears in the local 3-pack on Google Maps. We optimize your entire profile, build local citations, manage your review strategy, and create location-specific content that signals relevance to Google."
                  />
                  <FAQItem 
                    question="What AI CRM platforms do you work with?"
                    answer="We work with GoHighLevel, HubSpot, Pipedrive, Zoho CRM, and custom solutions. We customize them for your specific business, build automated lead follow-up sequences, set up AI lead scoring, and integrate your website, ads, and WhatsApp into one unified system."
                  />
                </div>
              </section>
            </main>
          </motion.div>
        ) : currentPage === 'services' ? (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ServicesPage setCurrentPage={setCurrentPage} />
          </motion.div>
        ) : currentPage === 'seo' ? (
          <motion.div
            key="seo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <SEOServices />
          </motion.div>
        ) : currentPage === 'gmb-ranking' ? (
          <motion.div
            key="gmb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <GMBRanking />
          </motion.div>
        ) : currentPage === 'ai-crm' ? (
          <motion.div
            key="aicrm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <AICRM />
          </motion.div>
        ) : currentPage === 'photography' ? (
          <motion.div
            key="photography"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProductPhotography />
          </motion.div>
        ) : currentPage === 'paid-ads' ? (
          <motion.div
            key="paid-ads"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <PaidMediaAds />
          </motion.div>
        ) : currentPage === 'google-ads' ? (
          <motion.div
            key="google-ads"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <GoogleAds />
          </motion.div>
        ) : currentPage === 'ai-tools' ? (
          <motion.div
            key="ai-tools"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <AITools />
          </motion.div>
        ) : currentPage === 'amazon-listing' ? (
          <motion.div
            key="amazon-listing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <AmazonListing />
          </motion.div>
        ) : currentPage === 'shopify-seo' ? (
          <motion.div
            key="shopify-seo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ShopifySEO />
          </motion.div>
        ) : currentPage === 'etsy-seo' ? (
          <motion.div
            key="etsy-seo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <EtsySEO />
          </motion.div>
        ) : currentPage === 'law-firm-marketing' ? (
          <motion.div
            key="law-firm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <LawFirmMarketing />
          </motion.div>
        ) : currentPage === 'healthcare-marketing' ? (
          <motion.div
            key="healthcare"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <HealthcareMarketing />
          </motion.div>
        ) : currentPage === 'packages' ? (
          <motion.div
            key="packages"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Packages />
          </motion.div>
        ) : currentPage === 'reviews' ? (
          <motion.div
            key="reviews"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ReviewsPage />
          </motion.div>
        ) : currentPage === 'complete-faq' ? (
          <motion.div
            key="complete-faq"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CompleteFAQ />
          </motion.div>
        ) : currentPage === 'faq' ? (
          <motion.div
            key="faq"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <FAQPage />
          </motion.div>
        ) : (
          <motion.div
            key="other"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-screen-2xl mx-auto py-32 text-center"
          >
            <h2 className="text-3xl font-bold text-[#1B3A6B] mb-4">Page Under Construction</h2>
            <p className="text-neutral-500 mb-8">We are currently building the {currentPage.replace('-', ' ')} page.</p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="btn-primary"
            >
              Back to Home
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/yourphonenumber" 
        target="_blank" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-[100]"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
