import React, { useState } from 'react';
import { 
  TrendingUp, 
  Check, 
  Zap, 
  ShieldCheck,
  Clock,
  MessageCircle,
  BarChart3,
  Target,
  MousePointerClick,
  Search,
  Globe,
  Layout,
  Info,
  ShoppingCart,
  Star,
  PlayCircle,
  Users,
  Layers
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

export default function PaidMediaAds() {
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
          <span className="font-medium text-neutral-600">Paid Media Ads</span>
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
              Trusted by 120+ Businesses Worldwide
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Paid Ads That Drive <span className="text-orange-400">Real Revenue</span> — Not Just Clicks
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              We run high-ROI paid advertising campaigns for businesses in USA, UK, Australia, Canada, and Bangladesh. Google Ads, Meta, LinkedIn, YouTube — built to convert, scaled to grow.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['Google Search Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube Ads', 'Google Shopping', 'PMax Campaigns', 'Retargeting', 'ROI Tracking'].map((pill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/80 text-[10px] px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '4.8×', label: 'Avg ROAS Delivered' },
                { num: '$2M+', label: 'Ad Spend Managed' },
                { num: '120+', label: 'Global Clients' },
                { num: '-38%', label: 'Avg CPL Reduction' }
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
              <h3 className="text-white font-bold text-sm">Get Your Free Ads Audit</h3>
              <p className="text-white/80 text-[10px] uppercase tracking-wider">ROI Analysis in 48 hours</p>
            </div>
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="url" placeholder="Your Website URL *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Target Market *</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>Bangladesh</option>
                  </select>
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors">
                    Request Free Ads Audit →
                  </button>
                  <a href="https://wa.me/yourphonenumber" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 rounded font-bold text-xs hover:bg-[#1fb855] transition-colors">
                    <MessageCircle size={16} />
                    WhatsApp Chat
                  </a>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={32} />
                  <h4 className="text-green-800 font-bold text-sm mb-1">Request Received!</h4>
                  <p className="text-green-700 text-xs">We'll analyze your current campaigns and reach out.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto py-12 px-4 md:px-8 grid lg:grid-cols-[1fr_350px] gap-12">
        <div className="space-y-12">
          {/* Services Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Layers size={14} />
              Full-Funnel Services
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Full-Funnel Paid Media Services
            </h2>
            <p className="text-sm text-neutral-600 mb-8">Every campaign is built around one goal — predictable, profitable growth for your business.</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Search size={24} />, 
                  title: 'Google Search Ads', 
                  desc: 'Capture high-intent buyers the moment they search. Keyword strategy, match type architecture, Quality Score optimization, ad copy testing, and conversion tracking — so every click has a job to do.' 
                },
                { 
                  icon: <Users size={24} />, 
                  title: 'Meta Ads (Facebook & Instagram)', 
                  desc: 'Audience-first campaigns that build awareness and drive conversions. Creative testing, retargeting sequences, and continuous ROAS optimization — not just reach.' 
                },
                { 
                  icon: <PlayCircle size={24} />, 
                  title: 'YouTube & Video Ads', 
                  desc: 'Story-driven video campaigns that stop the scroll and drive action. Skippable, non-skippable, bumper, and discovery ad formats managed with full creative direction.' 
                },
                { 
                  icon: <Target size={24} />, 
                  title: 'LinkedIn Ads', 
                  desc: 'B2B lead generation targeting decision-makers by job title, company size, and industry. Perfect for high-ticket services where quality beats volume.' 
                },
                { 
                  icon: <ShoppingCart size={24} />, 
                  title: 'Google Shopping & PMax', 
                  desc: 'Feed optimization, PMax campaign structure, smart bidding, and Shopping ad management to maximize revenue for every product in your catalog.' 
                },
                { 
                  icon: <Zap size={24} />, 
                  title: 'Retargeting & Remarketing', 
                  desc: 'Re-engage visitors who did not convert the first time. Multi-platform retargeting sequences that bring warm prospects back at a fraction of cold acquisition cost.' 
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
              From Audit to Profitable Campaign
            </h2>
            
            <div className="space-y-6">
              {[
                { step: '01', title: 'Free Account Audit', desc: 'We analyze your existing campaigns, competitive landscape, and market opportunity. No charge, no commitment — just clarity on where you stand.' },
                { step: '02', title: 'Strategy & Setup', desc: 'Custom campaign architecture, audience targeting, creative briefs, and full conversion tracking implementation before a single dollar is spent.' },
                { step: '03', title: 'Launch & Optimize', desc: 'Go live, gather data fast, A/B test creatives, bids, and audiences. Optimization is continuous — not monthly.' },
                { step: '04', title: 'Report & Scale', desc: 'Weekly transparent reports. What\'s working gets more budget. What isn\'t gets fixed or cut immediately.' }
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

          {/* Pricing Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <ShoppingCart size={14} />
              Pricing
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Transparent Pricing. No Surprises.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              {[
                { 
                  title: 'Starter', 
                  price: '$499', 
                  features: ['1 Platform (Google or Meta)', 'Up to $3,000 ad spend', 'Monthly reporting', '2 ad creatives/month', 'Email support'] 
                },
                { 
                  title: 'Growth ★', 
                  price: '$999', 
                  featured: true,
                  features: ['2 Platforms (Google + Meta)', 'Up to $10,000 ad spend', 'Weekly reporting + dashboard', '6 ad creatives/month', 'Dedicated account manager', 'A/B testing included'] 
                },
                { 
                  title: 'Scale', 
                  price: '$1,999', 
                  features: ['All Platforms', 'Unlimited ad spend', 'Daily reporting + live dashboard', 'Unlimited creatives', 'Priority support 24/5', 'Quarterly strategy sessions'] 
                }
              ].map((pkg, i) => (
                <div key={i} className={`border-2 rounded-lg overflow-hidden flex flex-col ${pkg.featured ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-neutral-100'}`}>
                  <div className="bg-neutral-50 p-6 text-center border-b border-neutral-100">
                    <h3 className="font-condensed text-lg font-bold text-[#1B3A6B] mb-1">{pkg.title}</h3>
                    <div className="text-2xl font-bold text-orange-500">From {pkg.price} <span className="text-xs text-neutral-400 font-normal">/ month</span></div>
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
                      Choose {pkg.title.replace(' ★', '')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-neutral-400 text-center italic">Management fee is separate from ad spend, which goes directly to the platforms. You always own your accounts.</p>
          </section>

          {/* FAQ Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MessageCircle size={14} />
              FAQ
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <FAQItem 
                question="Do you work with businesses outside India?"
                answer="Absolutely. We focus exclusively on USA, UK, Australia, Canada, Bangladesh, and other high-value international markets. Our team operates across time zones for seamless communication."
              />
              <FAQItem 
                question="How quickly can I expect results from paid ads?"
                answer="Most clients see initial data within 7–14 days. Meaningful lead flow typically starts around weeks 3–4. Significant ROAS improvement is generally visible by month 2–3."
              />
              <FAQItem 
                question="Is the ad spend included in your management fee?"
                answer="No. Your management fee is separate from ad spend, which goes directly to Google, Meta, etc. Full transparency — you always own your accounts."
              />
              <FAQItem 
                question="Do I need to sign a long-term contract?"
                answer="No long-term contracts. We operate month-to-month. We earn your continued business through results, not paperwork."
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="card border-t-4 border-t-[#1B3A6B] sticky top-24">
            <div className="bg-[#1B3A6B] p-4 text-white">
              <h3 className="font-bold text-sm">Get Free Ads Audit</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">ROI Analysis in 48 hours</p>
            </div>
            <div className="p-5">
              {!sidebarSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSidebarSubmitted(true); }} className="space-y-3">
                  <input type="text" placeholder="Full Name" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="email" placeholder="Business Email" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="url" placeholder="Website URL" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <button type="submit" className="w-full bg-[#FF6B00] text-white py-3 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg">
                    Send Free Audit →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={24} />
                  <h4 className="text-green-800 font-bold text-sm">Received!</h4>
                  <p className="text-green-700 text-[10px]">We'll be in touch soon.</p>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
