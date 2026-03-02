import React, { useState } from 'react';
import { 
  MapPin, 
  Check, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  BarChart3, 
  Target, 
  MousePointerClick, 
  Star, 
  Info, 
  Layout, 
  Trophy, 
  Phone,
  Camera,
  Users,
  Search,
  Globe,
  FileText,
  Link as LinkIcon,
  ShoppingCart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-lg mb-3 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors"
      >
        <span className="text-sm font-bold text-[#1B3A6B]">{question}</span>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          <Zap size={18} className="text-[#1B3A6B]" />
        </div>
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

export default function GMBRanking() {
  const [submitted, setSubmitted] = useState(false);
  const [sidebarSubmitted, setSidebarSubmitted] = useState(false);
  const [mainFormSubmitted, setMainFormSubmitted] = useState(false);

  return (
    <div className="bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200 py-2 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-[10px] md:text-xs text-neutral-400 flex items-center gap-2">
          <a href="#" className="text-[#1B3A6B] hover:underline">Home</a>
          <span>›</span>
          <a href="#" className="text-[#1B3A6B] hover:underline">Services</a>
          <span>›</span>
          <span className="font-medium text-neutral-600">GMB Ranking Services</span>
        </div>
      </div>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#1B3A6B] via-[#0f2347] to-[#1a3a6b] py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-[1fr_350px] gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
              Dominate Local Search in USA, UK & Australia
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Rank #1 on Google Maps — <span className="text-orange-400">In Any Market</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              We optimize and rank your Google Business Profile to generate real leads from local search in USA, UK, Australia, Canada, and Bangladesh. Proven strategies. Measurable rankings. Guaranteed progress.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['GMB Optimization', 'Review Management', 'Local Citations', 'Geo-Grid Tracking', 'Local Link Building', 'Photo Strategy'].map((pill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/80 text-[10px] px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '90 Days', label: 'Avg Time to 3-Pack' },
                { num: '300%', label: 'Avg Profile View Increase' },
                { num: '200+', label: 'Businesses Ranked' },
                { num: '50+', label: 'Citation Directories' }
              ].map((stat, i) => (
                <div key={i}>
                  <span className="block text-2xl font-bold text-orange-400 font-condensed">{stat.num}</span>
                  <span className="text-[10px] text-white/60 uppercase tracking-wider">{stat.label}</span>
                </div>
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
              <h3 className="text-white font-bold text-sm">Get Your Free GMB Audit</h3>
              <p className="text-white/80 text-[10px] uppercase tracking-wider">Delivered within 48 hours — no obligation</p>
            </div>
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="text" placeholder="Business Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="url" placeholder="GMB Profile URL (if existing)" className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Target Country *</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>Bangladesh</option>
                    <option>Other</option>
                  </select>
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Industry *</option>
                    <option>Professional Services</option>
                    <option>Healthcare</option>
                    <option>Legal</option>
                    <option>Home Services</option>
                    <option>Retail</option>
                    <option>Restaurant</option>
                    <option>Other</option>
                  </select>
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors flex items-center justify-center gap-2">
                    <MapPin size={16} /> Get My Free GMB Audit
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={32} />
                  <h4 className="text-green-800 font-bold text-sm mb-1">Done!</h4>
                  <p className="text-green-700 text-xs">We will send your free GMB audit within 48 hours.</p>
                </div>
              )}
              <div className="mt-4 flex justify-center gap-4 text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> Safe</span>
                <span className="flex items-center gap-1"><Check size={12} /> Free</span>
                <span className="flex items-center gap-1"><Clock size={12} /> 48hr Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ranking Snapshot */}
      <div className="bg-orange-50 border-b border-orange-100 py-12 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-2 uppercase tracking-tight">Ranking Results Snapshot</h2>
            <p className="text-sm text-neutral-500">Before → After (90 Days) Performance Growth</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { label: 'Profile Views', val: '+312%', icon: <TrendingUp size={20} /> },
              { label: 'Direction Requests', val: '+189%', icon: <MapPin size={20} /> },
              { label: 'Phone Call Clicks', val: '+241%', icon: <Phone size={20} /> },
              { label: 'Website Visits', val: '+167%', icon: <Globe size={20} /> },
              { label: 'Avg Position', val: '#8 → #1', icon: <Trophy size={20} /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-orange-200 shadow-sm text-center">
                <div className="text-orange-500 mb-2 flex justify-center">{item.icon}</div>
                <div className="text-xl font-bold text-[#1B3A6B] font-condensed">{item.val}</div>
                <div className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-screen-2xl mx-auto py-12 px-4 md:px-8 grid lg:grid-cols-[1fr_350px] gap-12">
        <div className="space-y-12">
          {/* Services Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Zap size={14} />
              Our Services
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Everything You Need to Dominate Local Search
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Layout size={24} />, 
                  title: 'GMB Profile Optimization', 
                  desc: 'Complete profile setup and optimization — NAP consistency, primary and secondary category selection, keyword-rich business description, business attributes, and service area configuration done right.' 
                },
                { 
                  icon: <Star size={24} />, 
                  title: 'Review Generation & Management', 
                  desc: 'Proven, ethical systems to generate 5-star reviews consistently. We provide review response frameworks, reputation monitoring alerts, and a strategy for handling negative reviews professionally.' 
                },
                { 
                  icon: <Camera size={24} />, 
                  title: 'Photo & Content Strategy', 
                  desc: 'Regular photo uploads, Google Posts calendar, Q&A management, and product/service updates that boost engagement signals — all of which Google\'s local algorithm rewards heavily.' 
                },
                { 
                  icon: <FileText size={24} />, 
                  title: 'Local Citation Building', 
                  desc: 'Build authoritative, consistent local citations across 50+ key directories. We also audit and fix existing inconsistent NAP data that\'s silently hurting your rankings right now.' 
                },
                { 
                  icon: <LinkIcon size={24} />, 
                  title: 'Local Link Building', 
                  desc: 'Acquire high-quality backlinks from relevant, authoritative local websites in your target market. Local link authority is one of the most underused GMB ranking levers.' 
                },
                { 
                  icon: <BarChart3 size={24} />, 
                  title: 'Geo-Grid Rank Tracking & Reporting', 
                  desc: 'Weekly geo-grid rank tracking, keyword position monitoring across your service area, and clear monthly reports showing your exact ranking progress and the next steps in the strategy.' 
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-neutral-50 border border-neutral-100 rounded-lg border-t-4 border-t-[#1B3A6B] hover:border-t-orange-500 transition-all shadow-sm">
                  <div className="text-[#1B3A6B] mb-4">{item.icon}</div>
                  <h4 className="font-bold text-sm text-[#1B3A6B] mb-2">{item.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MousePointerClick size={14} />
              Our Process
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              How We Get You Ranking #1
            </h2>
            
            <div className="space-y-6">
              {[
                { 
                  step: '01', 
                  title: 'Free GMB Audit', 
                  desc: 'We analyze your current profile, competitor positions across the target market, review gaps, keyword opportunities, and technical issues — all at no cost.' 
                },
                { 
                  step: '02', 
                  title: 'Profile Deep Optimization', 
                  desc: 'A complete overhaul of your Google Business Profile: keyword-rich content, correct category mapping, service area setup, photo optimization, and attribute configuration.' 
                },
                { 
                  step: '03', 
                  title: 'Authority Building', 
                  desc: 'Ongoing citation cleanup, review generation campaigns, Google Posts publishing, and local link acquisition to build the authority signals Google\'s algorithm responds to.' 
                },
                { 
                  step: '04', 
                  title: 'Rank, Track & Maintain', 
                  desc: 'Once you hit the 3-pack, we maintain and expand. Weekly rank tracking keeps you fully informed of every position movement, and we adjust strategy proactively.' 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-neutral-50 border border-neutral-100 rounded-lg hover:border-[#1B3A6B] transition-colors group">
                  <div className="w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 font-condensed">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B3A6B] mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who This Is For Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Users size={14} />
              Target Audience
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Who This Service Is Built For
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Local service businesses targeting USA, UK, or Australia',
                'Clinics, law firms, agencies, tradespeople, and contractors',
                'Businesses currently invisible or buried in Google Maps',
                'Companies losing leads to competitors ranking above them',
                'Multi-location businesses needing consistent rankings across all branches'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-neutral-50 rounded border border-neutral-100">
                  <Check className="text-green-600 flex-shrink-0" size={18} />
                  <span className="text-sm text-neutral-600">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing-gmb" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <ShoppingCart size={14} />
              Pricing
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Transparent Pricing — No Hidden Fees, No Long Contracts
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  title: 'Starter', 
                  price: '$299', 
                  sub: 'per month',
                  features: ['GMB profile optimization', '10 local citations/mo', 'Weekly Google Posts', 'Review response management', 'Monthly geo-grid report', 'Email support', '30 days support'] 
                },
                { 
                  title: 'Growth', 
                  price: '$499', 
                  sub: 'per month',
                  featured: true, 
                  features: ['Everything in Starter', '25 local citations/mo', 'Daily Google Posts', 'Q&A management', 'Local link building (1/mo)', 'Review generation system', 'Priority email & chat support'] 
                },
                { 
                  title: 'Scale', 
                  price: '$899', 
                  sub: 'per month',
                  features: ['Everything in Growth', '50 local citations/mo', 'Competitor tracking', 'Multi-location support', 'Local link building (3/mo)', 'Dedicated account manager', 'Monthly strategy call'] 
                }
              ].map((pkg, i) => (
                <div key={i} className={`border-2 rounded-lg overflow-hidden flex flex-col ${pkg.featured ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-neutral-100'}`}>
                  {pkg.featured && <div className="bg-orange-500 text-white text-[10px] font-bold text-center py-1 uppercase tracking-widest">Most Popular</div>}
                  <div className="bg-neutral-50 p-6 text-center border-b border-neutral-100">
                    <h3 className="font-condensed text-lg font-bold text-[#1B3A6B] mb-1">{pkg.title}</h3>
                    <div className="text-2xl font-bold text-orange-500">{pkg.price}</div>
                    <div className="text-sm font-bold text-[#1B3A6B]">{pkg.sub}</div>
                  </div>
                  <div className="p-5 flex-1 bg-white">
                    <ul className="space-y-2 mb-8">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex gap-2 text-[11px] text-neutral-600">
                          <Check size={14} className="text-green-600 flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-2.5 rounded font-bold text-xs transition-all ${pkg.featured ? 'bg-[#1B3A6B] text-white hover:bg-[#152d55]' : 'border-2 border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white'}`}>
                      Get {pkg.title} Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lead Capture Form */}
          <section id="gmb-audit-form" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-[#1B3A6B] shadow-lg">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Zap size={14} />
              Get Started
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-2">Get Your Free GMB Audit</h2>
            <p className="text-sm text-neutral-600 mb-8 leading-relaxed">We'll show you exactly what's stopping you from ranking #1 — completely free.</p>

            <div className="grid md:grid-cols-2 gap-12">
              {!mainFormSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setMainFormSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <input type="text" placeholder="Business Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <input type="url" placeholder="Google Business Profile URL (if existing)" className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Target Country *</option>
                    <option>USA</option><option>UK</option><option>Australia</option><option>Canada</option><option>Bangladesh</option><option>Other</option>
                  </select>
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Industry *</option>
                    <option>Professional Services</option><option>Healthcare</option><option>Legal</option><option>Home Services</option><option>Retail</option><option>Restaurant</option><option>Other</option>
                  </select>
                  <textarea placeholder="Main Challenge..." className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white min-height-[80px]"></textarea>
                  <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded font-bold text-sm hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center gap-2">
                    <MapPin size={16} /> Get My Free GMB Audit
                  </button>
                  <p className="text-[10px] text-neutral-400 text-center mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck size={10} /> 100% confidential. No spam.
                  </p>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-8 text-center flex flex-col items-center justify-center">
                  <Check className="text-green-500 mb-4" size={48} />
                  <h4 className="text-green-800 font-bold text-lg mb-2">Audit Request Sent!</h4>
                  <p className="text-green-700 text-sm">We will analyze your profile and reply within 48 hours.</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="bg-[#f0f4ff] border border-[#d0daf0] rounded-lg p-6">
                  <h4 className="font-bold text-sm text-[#1B3A6B] mb-4">What You Get in Your Free Audit</h4>
                  <ul className="space-y-3">
                    {[
                      'Full profile health check',
                      'Competitor gap analysis',
                      'Keyword opportunity report',
                      'Clear ranking roadmap',
                      '100% free, no obligation'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-xs text-neutral-600 leading-relaxed">
                        <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#1B3A6B] to-[#0f2347] p-6 rounded-lg text-center text-white">
                  <h4 className="font-bold text-sm mb-2">Prefer to talk directly?</h4>
                  <p className="text-[10px] text-white/70 mb-4">Send a message on WhatsApp and get a response within a few hours</p>
                  <a href="https://wa.me/yourphonenumber" target="_blank" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded font-bold text-xs hover:bg-[#1fb855] transition-colors">
                    <MessageCircle size={16} /> Message on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq-gmb" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MessageCircle size={14} />
              FAQ
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Frequently Asked Questions About GMB Ranking
            </h2>
            <div className="space-y-4">
              <FAQItem 
                question="How long does it take to rank in the Google 3-Pack?"
                answer="Most clients see meaningful movement within 30–60 days, with top-3 rankings typically achieved by 90 days. Timeline depends on competition level and the current strength of your profile."
              />
              <FAQItem 
                question="Can you rank my GMB in multiple cities or countries?"
                answer="Yes. We specialize in multi-location and multi-market GMB strategies for USA, UK, Australia, Canada, and other high-value international markets. Service area optimization is central to our approach."
              />
              <FAQItem 
                question="What if I don't have a Google Business Profile yet?"
                answer="No problem. We handle full profile creation, verification, and optimization from scratch. Setup is included in all our plans."
              />
              <FAQItem 
                question="Is GMB ranking a one-time thing or ongoing?"
                answer="Ongoing. Google's local algorithm updates regularly and your competitors are always optimizing. Monthly maintenance keeps you at the top once you get there."
              />
              <FAQItem 
                question="Do I need a physical address to rank on Google Maps?"
                answer="Not always. Service-area businesses can rank without displaying a physical address. We'll advise on the best configuration for your business type during your free audit."
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="sidebar space-y-6">
          {/* Sticky Sidebar Form */}
          <div className="card border-t-4 border-t-[#1B3A6B] sticky top-24">
            <div className="bg-[#1B3A6B] p-4 text-white">
              <h3 className="font-bold text-sm">Get Free GMB Audit</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">Custom report in 48 hours</p>
            </div>
            <div className="p-5">
              {!sidebarSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSidebarSubmitted(true); }} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Name</label>
                    <input type="text" placeholder="Your full name" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Email</label>
                    <input type="email" placeholder="Business email" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Website</label>
                    <input type="url" placeholder="https://yourbusiness.com" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <button type="submit" className="w-full bg-[#FF6B00] text-white py-3 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg">
                    Send Free Audit →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={24} />
                  <h4 className="text-green-800 font-bold text-sm">Received!</h4>
                  <p className="text-green-700 text-[10px]">We reply within 24 hours.</p>
                </div>
              )}
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-200"></div></div>
                <span className="relative bg-white px-3 text-[10px] text-neutral-400 font-bold">OR</span>
              </div>
              <a href="https://wa.me/yourphonenumber" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded font-bold text-sm hover:bg-[#1fb855] transition-colors shadow-md">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="card p-5">
            <h4 className="font-bold text-[#1B3A6B] text-xs uppercase tracking-widest mb-4">On This Page</h4>
            <ul className="space-y-2">
              {[
                { label: 'Ranking Snapshot', id: '#ranking-snapshot' },
                { label: 'Our Services', id: '#services' },
                { label: 'Our Process', id: '#process' },
                { label: 'Who This Is For', id: '#who-is-for' },
                { label: 'FAQ', id: '#faq-gmb' },
                { label: 'Free GMB Audit', id: '#gmb-audit-form' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.id} className="text-xs text-neutral-600 hover:text-[#FF6B00] flex items-center gap-2 transition-colors">
                    <span className="text-orange-500">→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Services */}
          <div className="card p-5">
            <h4 className="font-bold text-[#1B3A6B] text-xs uppercase tracking-widest mb-4">Related Services</h4>
            <ul className="space-y-2">
              {['SEO Services', 'Paid Media Advertising', 'AI CRM Solutions', 'Product Photography', 'AI Marketing Tools'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-xs text-neutral-600 hover:text-[#FF6B00] flex items-center gap-2 transition-colors">
                    <span className="text-orange-500">→</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
