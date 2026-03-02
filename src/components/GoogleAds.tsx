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
  Layers,
  ArrowRight
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

export default function GoogleAds() {
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
          <span className="font-medium text-neutral-600">Google Ads Management</span>
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
              Certified Google Ads Specialists
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Google Ads That <span className="text-orange-400">Actually Make You Money</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              Expert Google Ads management for businesses in USA, UK, Australia. Search, Display, Shopping, Performance Max — ROI-tracked campaigns that convert clicks into customers.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['Search Ads', 'Shopping Ads', 'PMax', 'Display Network', 'YouTube Ads', 'Remarketing', 'Conversion Tracking', 'ROI Focused'].map((pill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/80 text-[10px] px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '5.2×', label: 'Average ROAS' },
                { num: '9.1/10', label: 'Quality Score Avg.' },
                { num: '-63%', label: 'Cost Per Lead Reduction' },
                { num: '89%', label: 'Impression Share' }
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
              <p className="text-white/80 text-[10px] uppercase tracking-wider">Analysis in 48 hours</p>
            </div>
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <input type="text" placeholder="Full Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="url" placeholder="Your Website URL *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors">
                    Request Free Audit →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={32} />
                  <h4 className="text-green-800 font-bold text-sm mb-1">Request Sent!</h4>
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
              Managed by Specialists
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Every Type of Google Ads, Managed by Specialists
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Search size={24} />, 
                  title: 'Google Search Ads — Highest Intent', 
                  desc: 'Capture buyers at the exact moment they\'re searching. Keyword research, match type architecture, negative keyword strategy, ad copy testing, and Quality Score optimization. Best for lead generation and service businesses.' 
                },
                { 
                  icon: <ShoppingCart size={24} />, 
                  title: 'Google Shopping & Performance Max — E-Commerce', 
                  desc: 'Feed optimization, PMax campaign structure, smart bidding strategies, and Shopping ad management to maximize revenue for every product you sell. Best for e-commerce brands.' 
                },
                { 
                  icon: <Globe size={24} />, 
                  title: 'Display Network — Brand Awareness', 
                  desc: 'Visually engaging banner campaigns across 2M+ websites. Targeting by affinity, in-market intent, and custom audience segments — then retargeting to close the loop.' 
                },
                { 
                  icon: <PlayCircle size={24} />, 
                  title: 'YouTube Ads — Video', 
                  desc: 'Skippable, non-skippable, bumper, and discovery ad formats managed with a clear video strategy — including script direction and creative brief support.' 
                },
                { 
                  icon: <Zap size={24} />, 
                  title: 'Performance Max — Smart Full-Funnel', 
                  desc: 'Single AI-powered campaign covering Search, Display, YouTube, Gmail, Maps, and Shopping simultaneously. We build the asset groups, audience signals, and conversion inputs to make PMax actually work.' 
                },
                { 
                  icon: <Users size={24} />, 
                  title: 'Remarketing — Re-Engagement', 
                  desc: 'Bring back lost visitors, cart abandoners, and past customers with RLSA campaigns, dynamic remarketing, and customer match lists. Highest ROI campaign type — most overlooked.' 
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

          {/* Client Results Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <BarChart3 size={14} />
              Client Results
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              What Clients Achieve With Us
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1B3A6B] text-white">
                    <th className="p-4 text-left font-bold">Business Type</th>
                    <th className="p-4 text-left font-bold">Before CPL</th>
                    <th className="p-4 text-left font-bold">After CPL</th>
                    <th className="p-4 text-left font-bold">ROAS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { type: 'US Personal Injury Law Firm', before: '$340', after: '$89', roas: '6.8×' },
                    { type: 'UK Fashion E-Commerce', before: '£4.20 CPA', after: '£1.80 CPA', roas: '7.2×' },
                    { type: 'AU Home Services (Plumbing)', before: 'A$280', after: 'A$64', roas: '4.9×' },
                    { type: 'SaaS Company B2B', before: '$210', after: '$58', roas: '5.1×' },
                    { type: 'Canadian Real Estate Agency', before: '$195', after: '$42', roas: '8.3×' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50 transition-colors">
                      <td className="p-4 font-bold text-[#1B3A6B]">{row.type}</td>
                      <td className="p-4 text-neutral-400">{row.before}</td>
                      <td className="p-4 font-medium">{row.after}</td>
                      <td className="p-4 text-green-600 font-bold">{row.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <ShoppingCart size={14} />
              Pricing
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Google Ads Management Pricing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              {[
                { 
                  title: 'Starter', 
                  price: '$499', 
                  features: ['1 Campaign type', 'Up to $3,000 ad spend', 'Monthly reporting', 'Keyword research included', 'Conversion tracking setup'] 
                },
                { 
                  title: 'Growth ★', 
                  price: '$999', 
                  featured: true,
                  features: ['Up to 3 campaign types', 'Up to $10,000 ad spend', 'Weekly reporting + dashboard', 'Full A/B testing', 'Quality Score optimization', 'Dedicated account manager'] 
                },
                { 
                  title: 'Scale', 
                  price: '$1,999', 
                  features: ['All campaign types', 'Unlimited ad spend', 'Daily reporting', 'Full competitive intelligence', 'Priority support 24/5', 'Weekly strategy calls'] 
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
                question="How much should I spend on Google Ads in USA or UK?"
                answer="Businesses targeting USA or UK markets typically need a minimum of $500–$1,000/month in ad spend to gather enough data. For competitive industries like legal or home services, $2,000–$5,000/month is a more realistic starting point."
              />
              <FAQItem 
                question="What is Quality Score and why does it matter?"
                answer="Quality Score is Google's 1–10 rating of how relevant your ads, keywords, and landing pages are. A score of 10 can reduce CPC by up to 50% compared to a score of 3. Improving Quality Score is one of the highest-ROI optimizations available."
              />
              <FAQItem 
                question="What is the difference between Performance Max and Search Ads?"
                answer="Search Ads target people actively searching for your keywords. Performance Max uses AI to reach people across all Google channels simultaneously. We recommend running both together for most businesses."
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="card border-t-4 border-t-[#1B3A6B] sticky top-24">
            <div className="bg-[#1B3A6B] p-4 text-white">
              <h3 className="font-bold text-sm">Get Free Ads Audit</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">Analysis in 48 hours</p>
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
